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
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500"> 
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
      value={password} 
      className='outline-none w-full py-1 px-3 '
      placeholder = 'Password'
      readonly
      />
    </div>
</div>
    </>
  )
}

export default App
