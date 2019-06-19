import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { StatusBar, Picker } from 'react-native';
import {
  Container,
  Button,
  Text,
  TimerText,
  PickerContainer,
  PickerWheel,
  PickerItem,
  PickerLabel
} from './App.styles';

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
    <Container>
      <StatusBar barStyle="light-content" />
      {isRunning ? (
        <TimerText>{formattedTime}</TimerText>
      ) : (
        <PickerContainer>
          <PickerWheel
            itemStyle={PickerItem}
            selectedValue={selectedMinutes}
            onValueChange={itemValue => setSelectedMinutes(itemValue)}
          >
            {AVAILABLE_MINUTES.map(value => (
              <Picker.Item key={`${value}-min`} label={value} value={value} />
            ))}
          </PickerWheel>
          <PickerLabel>minutes</PickerLabel>
          <PickerWheel
            itemStyle={PickerItem}
            selectedValue={selectedSeconds}
            onValueChange={itemValue => setSelectedSeconds(itemValue)}
          >
            {AVAILABLE_SECONDS.map(value => (
              <Picker.Item key={`${value}-sec`} label={value} value={value} />
            ))}
          </PickerWheel>
          <PickerLabel>seconds</PickerLabel>
        </PickerContainer>
      )}

      <Button running={isRunning} onPress={isRunning ? stop : start}>
        <Text running={isRunning}>{isRunning ? 'Stop' : 'Start'}</Text>
      </Button>
    </Container>
  );
};

export default App;
