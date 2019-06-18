import React from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';

import { styles } from './App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.timerText}>00:05</Text>
      <TouchableOpacity onPress={() => null} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}
