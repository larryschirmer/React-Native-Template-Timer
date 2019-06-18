import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Picker } from 'react-native';

import { styles } from './App.styles';

const getRemaining = time => {
  const min = Math.floor(time / 60);
  const sec = time - min * 60;

  return {
    min: `${min}`.padStart(2, '0'),
    sec: `${sec}`.padStart(2, '0')
  };
};

const AVAILABLE_SECONDS = [...new Array(60).fill(0).map((_val, i) => `${i}`)];
const AVAILABLE_MINUTES = [...new Array(10).fill(0).map((_val, i) => `${i}`)];

const App = () => {
  const interval = useRef(null);
  const [seconds, setSeconds] = useState(9);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedSeconds, setSelectedSeconds] = useState('5');
  const [selectedMinutes, setSelectedMinutes] = useState('0');
  const { min, sec } = useMemo(() => getRemaining(seconds), [seconds]);
  const selectedTimeInSeconds = +selectedMinutes * 60 + +selectedSeconds;
  const formattedTime = `${min}:${sec}`;

  const start = useCallback(() => {
    setSeconds(selectedTimeInSeconds);

    interval.current = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    setIsRunning(true);
  }, [selectedTimeInSeconds]);

  const stop = useCallback(() => {
    clearInterval(interval.current);
    interval.currnet = null;
    setSeconds(9);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (seconds <= 0) {
      stop();
    }
  }, [seconds, stop]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {isRunning ? (
        <Text style={styles.timerText}>{formattedTime}</Text>
      ) : (
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={selectedMinutes}
            onValueChange={itemValue => setSelectedMinutes(itemValue)}
          >
            {AVAILABLE_MINUTES.map(value => (
              <Picker.Item key={`${value}-min`} label={value} value={value} />
            ))}
          </Picker>
          <Text style={styles.pickerItem}>minutes</Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={selectedSeconds}
            onValueChange={itemValue => setSelectedSeconds(itemValue)}
          >
            {AVAILABLE_SECONDS.map(value => (
              <Picker.Item key={`${value}-sec`} label={value} value={value} />
            ))}
          </Picker>
          <Text style={styles.pickerItem}>seconds</Text>
        </View>
      )}

      <TouchableOpacity
        onPress={isRunning ? stop : start}
        style={isRunning ? { ...styles.button, ...styles.buttonStop } : styles.button}
      >
        <Text
          style={isRunning ? { ...styles.buttonText, ...styles.buttonTextStop } : styles.buttonText}
        >
          {isRunning ? 'Stop' : 'Start'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
