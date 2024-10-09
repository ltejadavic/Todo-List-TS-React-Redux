// store.ts
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/TasksSlice'; // Tu reducer de tareas

export const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Configura tu reducer aquí
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;