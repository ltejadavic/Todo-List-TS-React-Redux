import React from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../../model/ListItem';
import { removeTask, toggleTask } from './TasksSlice';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {/* Aplica una clase CSS 'completed' si la tarea está completada */}
      <span className={task.completed ? 'completed-task' : ''}>{task.title}</span>
      <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
    </li>
  );
};

export default TaskItem;