import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 7,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    borderRadius: 8,
    borderWidth: 1,
    paddingTop: 20,
    padding: 10,
  },
  topicContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
  pointContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 7,
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  topicText: {
    fontSize: 18,
    color: colors.text,
    marginLeft: 15,
  },
});
