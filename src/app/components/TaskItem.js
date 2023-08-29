import React from 'react';

function TaskItem({ task, onTouch, onDelete }) {
  return (
    <li className='list-decimal mx-4 my-2 flex justify-between' >
      <h2 onClick={onTouch}>{task.title}</h2>
      <button className='bg-red-400 p-1 rounded text-white font-bold' onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;

