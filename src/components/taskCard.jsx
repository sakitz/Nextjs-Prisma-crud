"use client"
import { useRouter } from "next/navigation";

function TaskCard({ task }) {

    const router = useRouter()

    return (
        <div className="bg-slate-800 p-3 hover:bg-slate-700 transition-all hover:cursor-pointer rounded-lg" onClick={() => {
            router.push('/tasks/edit/' + task.id)
        }}>  
            <h3><span className="font-semibold">Tarea: </span> {task.title}</h3>

            <p><span className="font-semibold">Descripcion: </span>  {task.description}</p>

            <p>{new Date(task.createdAT).toLocaleDateString()}</p>

        </div>
        )
}

export default TaskCard