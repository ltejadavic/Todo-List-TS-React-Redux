import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './TasksSlice';

const TasksInput: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask(taskTitle));
      setTaskTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TasksInput;