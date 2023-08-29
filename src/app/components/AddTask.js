'use client'
import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (title && description && dueDate) {
      const newTask = {
        title: title,
        description: description,
        dueDate: dueDate,
        status: 'incomplete' // Default status
      };
      addTask(newTask);
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <div className='flex flex-col gap-3'>
        <h2 className='capitalize font-bold text-xl underline mt-5'>Add A New Task</h2>
      <input
        className='border p-1 border-blue-700'
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className='border p-1 border-blue-700'
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className='border p-1 border-blue-700'
        type="date"
        placeholder="Select Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input className='border p-1 border-green-700 bg-lime-300 font-semibold' type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default AddTask;
