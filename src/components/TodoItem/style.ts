import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#1a1817',
  },
  touchable: {
    width: '100%',
    height: 60,
    borderRadius: 8,
  },
  titleContainer: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  title: {
    fontSize: 25,
    color: '#fff',
  },
  checkBoxContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
