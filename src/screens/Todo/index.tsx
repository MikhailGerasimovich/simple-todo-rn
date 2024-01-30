import React, { useState } from 'react';

import { View, FlatList, Modal, Alert, TextInput, Text } from 'react-native';

import { colors } from '../../constants';
import { TodoType } from '../../components/TodoItem/types';
import { TodoItem } from '../../components/TodoItem';
import { styles } from './style';
import Button from '../../components/Button';

const testTodo: TodoType[] = [
  {
    title: 'todo 1',
    description: 'todo 1',
    isDone: false,
  },
  {
    title: 'todo 2',
    description: 'todo 2',
    isDone: false,
  },
  {
    title: 'todo 3',
    description: 'todo 3',
    isDone: false,
  },
  {
    title: 'todo 4',
    description: 'todo 4',
    isDone: false,
  },
  {
    title: 'todo 5',
    description: 'todo 5',
    isDone: false,
  },
];

export default function Todo(): React.JSX.Element {
  const [todo, setTodo] = useState<TodoType>({
    title: '',
    description: '',
    isDone: false,
  });
  const [todos, setTodos] = useState<TodoType[]>(testTodo);
  const [modalVisible, setModalVisible] = useState(false);

  const [showTodoInfo, setShowTodoInfo] = useState(false);

  function handleCreateTodo() {
    setModalVisible(true);
  }

  function handleCancelModal() {
    setModalVisible(false);
    setTodo({ title: '', description: '', isDone: false });
  }

  function handleCreateModal() {
    setTodos(prev => [todo, ...prev]);
    setTodo({ title: '', description: '', isDone: false });
    setModalVisible(false);
  }

  function handleTodoPress(
    title: string,
    description: string,
    isDone: boolean,
  ) {
    setTodo({ title, description, isDone });
    setShowTodoInfo(true);
  }

  function handleCloseShowTodo() {
    setTodo({ title: '', description: '', isDone: false });
    setShowTodoInfo(false);
  }

  function handleTodoLongPress(title: string, description: string) {
    Alert.alert(`Action: ${title} deleted`);
    setTodos(prev => prev.filter(todo => todo.title !== title));
  }

  return (
    <View
      style={[
        styles.container,
        (modalVisible || showTodoInfo) && { opacity: 0.65 },
      ]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalTodoTitle}
              maxLength={13}
              placeholder="Title..."
              value={todo.title}
              onChangeText={text => setTodo(prev => ({ ...prev, title: text }))}
              placeholderTextColor={colors.text}
            />
            <TextInput
              style={styles.modalTodoDescription}
              multiline={true}
              placeholder="Description..."
              value={todo.description}
              onChangeText={text =>
                setTodo(prev => ({ ...prev, description: text }))
              }
              placeholderTextColor={colors.text}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button onPress={handleCreateModal}>Create</Button>
              </View>
              <View style={styles.modalButton}>
                <Button onPress={handleCancelModal}>Cancel</Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {showTodoInfo && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showTodoInfo}
          onRequestClose={() => {
            setShowTodoInfo(false);
            setTodo({ title: '', description: '', isDone: false });
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTodoTitle}>{todo.title}</Text>
              <Text style={styles.modalTodoDescription}>
                {todo.description}
              </Text>
              <View style={[styles.buttonContainer, { alignSelf: 'center' }]}>
                <View style={styles.modalButton}>
                  <Button onPress={handleCloseShowTodo}>Close</Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      )}

      <View style={styles.todoListContainer}>
        <FlatList
          style={styles.todoList}
          ItemSeparatorComponent={() => <View style={{ height: 5 }}></View>}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              title={item.title}
              description={item.description}
              isDone={item.isDone}
              onPress={handleTodoPress}
              onLongPress={handleTodoLongPress}
              onPressCheckBox={() => {}}
            />
          )}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={handleCreateTodo}>Create ToDo</Button>
      </View>
    </View>
  );
}
