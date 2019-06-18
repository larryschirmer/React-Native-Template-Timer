import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const halfScreenWidth = screen.width / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: halfScreenWidth,
    height: halfScreenWidth,
    borderWidth: 10,
    borderColor: '#89aaff',
    borderRadius: halfScreenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonStop: {
    borderColor: '#ff851b'
  },
  buttonText: {
    fontSize: 45,
    color: '#89aaff'
  },
  buttonTextStop: {
    color: '#ff851b'
  },
  timerText: {
    color: '#fff',
    fontSize: 90
  },
  picker: {
    width: 50
  },
  pickerItem: {
    color: '#fff',
    fontSize: 20
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
