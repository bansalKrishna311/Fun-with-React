import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState(false)
 const passwordGenerator = useCallback(()=> {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str +="0123456789"
  if(characterAllowed) str+="!@#$%^&*()_+-={}[]:';<>?,./~`"
  


 }, [length, numberAllowed, characterAllowed, setPassword])
  

  

  return (
    <>
   <h1 className="text-4xl">Password Generator</h1>
    </>
  )
}

export default App
