'use client'
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import TaskDetails from './TaskDetails';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div>
      <h2>Here are your Tasks</h2>
      <div>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onClick={() => handleTaskClick(task)}
          />
        ))}
      </div>

      <AddTask addTask={addTask} />
      {selectedTask && <TaskDetails task={selectedTask} />}
    </div>
  );
}

export default TaskList;

