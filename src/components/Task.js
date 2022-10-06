import {FaTimes} from 'react-icons/fa'

const Task = ({ task , OnDelete }) => {
  return (
    <div className="w-full flex justify-center">
        <div className='bg-gray-200 my-2 w-full max-w-[300px] md:max-w-lg sm:max-w-sm p-2 cursor-pointer'>
            <h1 className='flex items-center justify-between'>{task.text} <FaTimes onClick={OnDelete}/> </h1>
            <h1>{task.day}</h1>
        </div>
    </div>
  )
}
export default Task
