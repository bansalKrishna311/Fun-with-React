import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter =5;
  const addValue = () =>{
    console.log("Clicked ", counter);
    counter = counter + 1;

  } 

  return (
    <>
      <h1> Chai aur react</h1>
      <h3>counter Value : {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br /><br />
      {/* <button onClick={}>Remove value</button> */}
    </>
  )
}

export default App
