import Image from 'next/image'
import TaskItem from './components/TaskItem'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import TaskDetails from './components/TaskDetails'
import Footer from './components/Footer'

export default function Home() {
  return (
   <div className='mx-1'> 
    <TaskList />
    <Footer />
   </div>
  )
}
