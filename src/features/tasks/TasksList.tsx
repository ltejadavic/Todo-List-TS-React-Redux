import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import TaskItem from './TaskItem';

const TasksList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.tasks.filter);

  // Aplicar el filtro
  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') {
      return true; // Mostrar todas las tareas
    } else if (filter === 'Active') {
      return !task.completed; // Mostrar solo tareas activas (no completadas)
    } else if (filter === 'Completed') {
      return task.completed; // Mostrar solo tareas completadas
    }
    return false; // No debería suceder, pero por seguridad añadimos esta línea
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;