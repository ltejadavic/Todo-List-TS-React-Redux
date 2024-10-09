import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './TasksSlice';

const TasksFilterButtons: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter-buttons">
      <button onClick={() => dispatch(setFilter('All'))}>All</button>
      <button onClick={() => dispatch(setFilter('Active'))}>Active</button>
      <button onClick={() => dispatch(setFilter('Completed'))}>Completed</button>
    </div>
  );
};

export default TasksFilterButtons;