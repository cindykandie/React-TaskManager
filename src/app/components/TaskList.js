'use client'
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import TaskDetails from './TaskDetails';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskDetailsVisible, setTaskDetailsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

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
      useEffect(() => {
        const filtered = tasks.filter(task =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredTasks(filtered);
      }, [tasks, searchQuery]);

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
    setTaskDetailsVisible(true);
  };

  const onHideTaskDetails = () => {
    setTaskDetailsVisible(false);
  };

  return (
    <div className='w-[300px] m-auto my-6 flex flex-col gap-4'>
      <h2 className='capitalize font-bold text-2xl underline'>Your Tasks</h2>
      <input
      className='border rounded-sm border-blue-800 p-1'
        type='text'
        placeholder='Search tasks'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
  <ol className='border p-4'>
        {filteredTasks.map((task, index) => (
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

