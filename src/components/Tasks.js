import Task from "./Task"

export const Tasks = ({ tasks, DeleteTask }) => {
  return (
    <div>
    {tasks.map((task)=>(
        <Task key={task.id} task={task} onDelete={DeleteTask}/>
    ))}
    </div>
  )
}
