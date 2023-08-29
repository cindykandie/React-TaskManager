import React from 'react'
import TaskItem from './TaskItem'

function TaskList() {
  return (
    <div>
        <h2>Here are your Tasks</h2>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
    </div>
  )
}

export default TaskList