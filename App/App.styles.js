import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const halfScreenWidth = screen.width / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: halfScreenWidth,
    height: halfScreenWidth,
    borderWidth: 10,
    borderColor: '#89aaff',
    borderRadius: halfScreenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 45,
    color: '#89aaff',
  },
  timerText: {
    color: '#fff',
    fontSize: 90,
  },
});
