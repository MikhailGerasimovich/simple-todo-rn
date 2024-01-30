import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  todoListContainer: {
    flex: 10,
    width: '90%',
    marginBottom: '10%',
  },
  todoList: {
    flex: 1,
    padding: 5,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.buttonBorder,
  },
  button: {
    flex: 2,
    width: '80%',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: '25%',
  },
  modalView: {
    borderRadius: 8,
    backgroundColor: colors.background,
    width: '80%',
    height: '42%',
  },
  modalTodoTitle: {
    height: 50,
    marginHorizontal: 13,
    marginTop: 15,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.text,
    fontSize: 30,
  },
  modalTodoDescription: {
    height: 200,
    marginHorizontal: 13,
    marginTop: 15,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.text,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  modalButton: {
    width: 140,
  },
});
