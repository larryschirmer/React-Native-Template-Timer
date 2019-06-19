import { Dimensions, TouchableOpacity, View, Text, Picker } from 'react-native';
import styled from 'styled-components';

const screen = Dimensions.get('window');
const halfScreenWidth = screen.width / 2;

export const Container = styled(View)`
  background-color: #07121b;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  width: ${halfScreenWidth};
  height: ${halfScreenWidth};
  margin-top: 30px;
  border: 10px solid ${({ running }: { running: boolean }) => (running ? '#ff851b' : '#89aaff')};
  border-radius: ${halfScreenWidth};
  justify-content: center;
  align-items: center;
`;

export const RegularText = styled(Text)`
  font-size: 45px;
  color: ${({ running }: { running: boolean }) => (running ? '#ff851b' : '#89aaff')};
`;

export const TimerText = styled(Text)`
  color: #fff;
  font-size: 90px;
`;

export const PickerContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const PickerWheel = styled(Picker)`
  width: 50px;
`;

export const PickerItem = {
  color: '#fff',
  fontSize: 20
};

export const PickerLabel = styled(Text)`
  color: #fff;
  font-size: 20px;
`;
