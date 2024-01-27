import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    if(counter<20){
    console.log("Clicked ", counter);
    setCounter(counter + 1);}
  };
  const removeValue = () => {
    if(counter>0){
    console.log("Clicked ", counter);
    setCounter(counter - 1);}
  };
  return (
    <>
      <h1> Chai aur react</h1>
      <h3>counter Value : {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
