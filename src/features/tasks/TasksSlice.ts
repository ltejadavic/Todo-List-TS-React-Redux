// TasksSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../model/ListItem';

interface TasksState {
  tasks: Task[];
  filter: 'All' | 'Active' | 'Completed';
}

const initialState: TasksState = {
  tasks: [],
  filter: 'All',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    setFilter: (state, action: PayloadAction<'All' | 'Active' | 'Completed'>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;