import {prisma} from "@/libs/prisma";
import TaskCard from "@/components/taskCard";

async function LoadTask() {
  const tasks = await prisma.task.findMany()
  return tasks
 
}
async function HomePage() {
  const task = await LoadTask()
 
  return (
    <section className="container mx-auto">
          <div className="grid grid-cols-3 gap-3">
        {task.map(task => (
          <TaskCard task={task} key={task.id}/>
        ))}
    </div>
    </section>
    
  )
}

export default HomePage