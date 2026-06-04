import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componant/Layout/Layout'
import Home from './componant/Home/Home'
import About from './componant/About/About'
import Appointment from './componant/Appointment/Appointment'
import Service from './componant/Service/Service'
import Team from './componant/Team/Team'
import Popularqus from './componant/Popularqus/Popularqus'
import Contact from './componant/contact/Contact'
function App() {

const router = createBrowserRouter([
  {path:"/" ,element:<Layout/> , children:[
    {path:"/" , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"appointment" , element:<Appointment/>},
    {path:"services" , element:<Service/>},
    {path:"team" , element:<Team/>},
    {path:"popular-qus" , element:<Popularqus/>},
    {path:"contact" , element:<Contact/>},

  ]}

])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
