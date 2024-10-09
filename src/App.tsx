import React from 'react';
import TasksInput from './features/tasks/TasksInput';
import TasksList from './features/tasks/TasksList';
import TasksFilterButtons from './features/tasks/TasksFilterButtons';
import './App.css'; // Si tienes un archivo de estilo para App

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <TasksInput />
      <TasksFilterButtons />
      <TasksList />
    </div>
  );
};

export default App;