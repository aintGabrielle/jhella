import { useState } from "react"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import Task from "./components/Task"
import { Tasks } from "./components/Tasks"


const App = () => {
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: "Food Shopping",
        day: 'Feb 25th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: "Study Programming",
        day: 'Feb 25th at 2:30pm',
        reminder: true
    },
    {
        id: 3,
        text: "Eat Dinner",
        day: 'Feb 25th at 2:30pm',
        reminder: true
    },
    {
        id: 4,
        text: "Do Dishes",
        day: 'Feb 25th at 2:30pm',
        reminder: true
    },
])
  const DeleteTask = (id) => {
    console.log('Deleted', id);
  }

  return(
    <>
    <div className="flex w-full h-screen md:justify-center md:items-center bg-sky-200 ">
      <div className="w-full h-screen md:max-w-xl shadow-2xl bg-white md:h-[600px] flex flex-col justify-between md:rounded-md overflow-auto">
        <div>
          <Navbar/>
          <div className="text-center">
          <span >Your Tasks!!!</span>
          </div>
          <div>
            <Tasks tasks={tasks} onDelete={DeleteTask}/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App