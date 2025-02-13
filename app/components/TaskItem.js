import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.taskTextContainer}>
        <Text style={[styles.taskText, task.done && styles.taskDone]}>{task.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#ff99cc',
    backgroundColor: '#f9d9e3',
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 20,
    color: '#ff6fc3',
  },
  taskDone: {
    textDecorationLine: 'line-through',
    color: '#b3b3b3',
  },
  deleteButton: {
    backgroundColor: '#ff6fc3',
    padding: 10,
    borderRadius: 25,
    marginLeft: 12,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default TaskItem;
