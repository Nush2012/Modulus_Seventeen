import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    completed: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.item}>
      <Text style={task.completed ? styles.completed : styles.title}>{task.title}</Text>
      <Button title={task.completed ? 'Undo' : 'Complete'} onPress={onToggle} />
      <Button title="Delete" color="red" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  completed: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TaskItem;
