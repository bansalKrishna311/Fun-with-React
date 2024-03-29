import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([

//   {
//     path :'/',
//     element : <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact />
//       },
//     ]

//   }
// ])


// const router = () => {
//   return createBrowserRouter([
//     createRoutesFromElements(
//       <Route path='/' element={<Layout/>}>
//         <Route path='' element={<Home/>}/>
//         <Route path='about' element={<About/>}/>
//         <Route path='contact' element={<Contact/>}/>
//       </Route>
//     )
//   ]);
// };
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route loader={githubInfoLoader} path='Github' element={<Github/>}/>
    
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)

