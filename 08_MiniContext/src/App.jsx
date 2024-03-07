
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
   <>
   <UserContextProvider>
   <h1>Lorem ipsum dolor sit amet.</h1>
   <Login />
   <Profile />
   </UserContextProvider>
   </>
  )
}

export default App
