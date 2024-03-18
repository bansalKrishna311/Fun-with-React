import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function App() {
  const [todos, setTodo] = useState([])
  const addTodo = (todo)=>{
    setTodo((prev) =>[{id:Date.now(), ...todo}, ...prev])

  }
  const updateTodo = (id,todo)=>{
    setTodo((prev)=> prev.map((prevTodo) =>(prevTodo.id === id ? todo: prevTodo)))
  }

  return (
    <TodoProvider value={{todos, addTodo,updateTodo,deleteTodo,toggleComplete} }>
<div className="bg-[#172842] min-h-screen py-8">
  <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-5 text-white">
    <h1 className="text-2xl font-bold text-center mb-8 mt-2"> Manange Your Todos</h1>
      <div className="mb-4">
        {/* {Todoform component} */}
        
      </div>
      <div className="flex flex-wrap gap-y-3">
        {/* loop and add todo item */}
      </div>

  </div>
</div>
    </TodoProvider>
  )
}

export default App
