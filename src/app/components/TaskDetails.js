'use client'
import React, { useState } from 'react';

function TaskDetails({ task, tasks, setTasks, onHide, setTaskDetailsVisible }) {
  const [editableTask, setEditableTask] = useState({ ...task });
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(task.status);
  const [changesSaved, setChangesSaved] = useState(false);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setEditableTask({ ...editableTask, status: newStatus });
    setChangesSaved(false);
  };


  const handleSave = () => {
    // Find the index of the task being edited
    const taskIndex = tasks.findIndex((t) => t.title === task.title);

    // Update the title of the task in the list
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = { ...editableTask };

    // Update the tasks state with the modified list
    setTasks(updatedTasks);
    setChangesSaved(true);
    setEditing(false);
    
    setTimeout(() => {
        setChangesSaved(false);
        onHide(); // Hide the TaskDetails component (modal)
      }, 7000000);

      setTaskDetailsVisible(false); 
  

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
  return (
    <main className='bg-blue-100 bg-opacity-95 py-9 p-3 rounded absolute min-w-[200px] max-w-[500px] top-[10px] h-[500px] w-full marker: flex flex-col align-center justify-start items-center '>
        <h2 className='underline font-bold mb-3 text-xl'>Task Details</h2>
      <div className='border bg-slate-300 p-1 rounded w-full'>
        {editing ? (
          <>
            <input
            className='bg-inherit border-lime-600 border w-full'
              type="text"
              value={editableTask.title}
              onChange={(e) =>
                setEditableTask({ ...editableTask, title: e.target.value })
              }
            />
            <input
            className='bg-inherit border-lime-600 border w-full'
              type="text"
              value={editableTask.description}
              onChange={(e) =>
                setEditableTask({ ...editableTask, description: e.target.value })
              }
            />
            <input
            className='bg-inherit border-lime-600 border w-full'
              type="date"
              value={editableTask.dueDate}
              onChange={(e) =>
                setEditableTask({ ...editableTask, dueDate: e.target.value })
              }
            />
          </>
        ) : (
          <>
            <h2 className=''>Title: {editableTask.title}</h2>
            <p className=''>Description: {editableTask.description}</p>
            <p>Due Date: {editableTask.dueDate}</p>
            <p>Status: {status}</p>
          </>
        )}
      </div>

      <div className='flex gap-2 my-4 flex-wrap items-center justify-center'>
        {editing ? (
          <>
            
          </>
        ) : (
          <>
          <button
              className='bg-blue-400 p-1 rounded font-bold text-white'
              onClick={() => handleStatusChange('in progress')}
            >
              InProgress
            </button>
            <button
              className='bg-green-400 p-1 rounded font-bold text-white'
              onClick={() => handleStatusChange('completed')}
            >
              Completed
            </button>
            <button
              className='bg-blue-400 p-1 rounded font-bold text-white px-5'
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
           
          </>
        )}
        
          <button className='bg-yellow-400 p-1 rounded font-bold text-white' onClick={handleSave}>
            Save
          </button>
        
      </div>

      {changesSaved && <p>Changes saved!</p>}
    </main>
  );
}

export default TaskDetails;


