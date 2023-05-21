import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() === '') {
      return;
    }

    const newTodo = {
      id: Math.random().toString(),
      text: todoText,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoText('');
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditModal = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    if (editTodo) {
      setEditTodoId(id);
      setEditTodoText(editTodo.text);
      setEditModalVisible(true);
    }
  };

  const handleEditTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editTodoId ? { ...todo, text: editTodoText } : todo
      )
    );

    setEditTodoId(null);
    setEditModalVisible(false);
    setEditTodoText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo"
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
        />
        <Button title="Add Todo" onPress={handleAddTodo} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <Text style={styles.todoText}>{item.text}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Edit"
                onPress={() => handleEditModal(item.id)}
              />
              <Button
                title="Delete"
                onPress={() => handleDeleteTodo(item.id)}
              />
            </View>
          </View>
        )}
      />

      {/* Edit Todo Modal */}
      {editModalVisible && (
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modalInput}
            value={editTodoText}
            onChangeText={(text) => setEditTodoText(text)}
          />
          <Button title="Save" onPress={handleEditTodo} />
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 8,
    paddingHorizontal: 8,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  todoText: {
    flex: 1,
    marginRight: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});
