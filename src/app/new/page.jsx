"use client"
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

function NewPage({ params }) {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setDescription(data.description)
      });
      }
    }, []);

  const HandleSubmit = async(e) => {
    e.preventDefault()

    if (params.id) {
      const res = await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();

      console.log(data)
    }
    else {
    const res = await fetch('/api/task', {
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
      const data = await res.json()
    }
     router.refresh()
     router.push('/')
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-[30%] rounded-md" action="" 
      onSubmit={HandleSubmit}
      >

        <label htmlFor="title" className="font-bold mb-2">Titulo</label>
        <input id="title" type="text" placeholder="Titulo" className="rounded-md border text-black border-gray-400 p-2 mb-4 w-full border-none"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />

        <label htmlFor="description" className="font-bold mb-2">Descripcion</label>
        <textarea id="description" placeholder="Describe tu tarea" className="rounded-md border text-black border-gray-400 p-2 mb-4 w-full resize-none"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        />

      <div className="flex justify-between">
      <button 
          type="submit" 
          className="pr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">Crear</button>

        {params.id &&  (
          <button 
            type="button" 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all "
            onClick={async () => {
              const res = await fetch(`/api/task/${params.id}`, {
                  method: "DELETE",
              })
              const data = res.json()
              console.log(data)
              router.refresh()
              router.push('/')
            }}
            >eliminar</button>
        )}
      </div>
      </form>
    </div>

  )
}

export default NewPage



// const res = await fetch('/api/task', {
//   method: 'POST',
//   body: JSON.stringify({title, description}),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })