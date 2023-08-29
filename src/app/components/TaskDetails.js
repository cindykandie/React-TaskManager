import React from 'react';

function TaskDetails({ task }) {
  return (
    <main>
        <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {task.status}</p>
        </div>
      

      <div className='flex gap-2 my-2'>
      <button className='bg-blue-400 p-1 rounded font-bold text-white'>In Progress</button>
      <button className='bg-green-400 p-1 rounded font-bold text-white'>Completed</button>
      </div>
    </main>
  );
}

export default TaskDetails;
