
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
   <>
   <UserContextProvider></UserContextProvider>
   <h1>Lorem ipsum dolor sit amet.</h1>
   </>
  )
}

export default App
