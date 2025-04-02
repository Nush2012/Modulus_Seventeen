import React from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../slices/todoSlice';
import TaskItem from '../components/TaskItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define navigation types properly
type RootStackParamList = {
  TaskList: undefined;
  AddTask: undefined;
};

type TaskListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TaskList'>;
type TaskListScreenRouteProp = RouteProp<RootStackParamList, 'TaskList'>;

interface Props {
  navigation: TaskListScreenNavigationProp;
  route: TaskListScreenRouteProp;
}

const TaskListScreen: React.FC<Props> = ({ navigation }) => {
  const tasks = useSelector((state: { todos: any[] }) => state.todos);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => dispatch(toggleTask(item.id))}
            onDelete={() => dispatch(deleteTask(item.id))}
          />
        )}
      />
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default TaskListScreen;
