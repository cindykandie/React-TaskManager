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
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        placeholder="Select Date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default AddTask;
