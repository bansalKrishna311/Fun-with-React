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

    for(let i = 1;  i<=Array,length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)

    }
    setPassword(pass)

 }, [length, numberAllowed, characterAllowed, setPassword])
  

  

  return (
    <>
<div className="w-full max-w-md"></div>
    </>
  )
}

export default App
