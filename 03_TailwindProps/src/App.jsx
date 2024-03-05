import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App(props) {
  console.log(props.userName)
  // const [count, setCount] = useState(0);
    let myObj = {
      userName :'krishna',
      age:21
    }
    let btnText =  "click me"

  return (
    <>
      <h1 className="bg-green-400 text-blue-950 px-10 rounded-xl">hello</h1>

      <Card userName = "chaiAurCode" btnText = "Visit Me" />
      <Card userName = "Krishna"  btnText = "mujhe leke jaao jaldi "  />
      <Card   userName = "Bansal"  />

    </>
  );
}

export default App;
