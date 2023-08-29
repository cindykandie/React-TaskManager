import Image from 'next/image'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'

export default function Home() {
  return (
   <div> 
    <TaskList />
   </div>
  )
}
