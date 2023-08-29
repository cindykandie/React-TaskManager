'use client'
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import TaskDetails from './TaskDetails';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskDetailsVisible, setTaskDetailsVisible] = useState(false);

    // Load tasks from local storage on component mount
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      }, []);
    
      // Save tasks to local storage whenever tasks change
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setTaskDetailsVisible(true); // Show the TaskDetails component (modal)
  };

  const onHideTaskDetails = () => {
    setTaskDetailsVisible(false);
  };

  return (
    <div className='w-[300px] m-auto my-6 flex flex-col gap-4'>
      <h2 className='capitalize font-bold text-2xl underline'>your Tasks</h2>
      <ol className='border p-4'>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onTouch={() => handleTaskClick(task)}
            onDelete={() => deleteTask(task)}
          />
        ))}
      </ol>

      <AddTask addTask={addTask} />
      {taskDetailsVisible && // Inside your TaskList component
    <TaskDetails
    task={selectedTask}
    tasks={tasks}
    setTasks={setTasks}
    onHide={onHideTaskDetails}
    setTaskDetailsVisible={setTaskDetailsVisible}
    
  />
}
    </div>
  );
}

export default TaskList;

