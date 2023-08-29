import React from 'react';

function TaskItem({ task, onClick }) {
  return (
    <div onClick={onClick}>
      <h2>{task.title}</h2>
    </div>
  );
}

export default TaskItem;

