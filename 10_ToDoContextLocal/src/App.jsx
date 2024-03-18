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
    <>
   <h1 className="text-3xl font-bold underline">
    Hello World!!

   </h1>

    </>
  )
}

export default App
