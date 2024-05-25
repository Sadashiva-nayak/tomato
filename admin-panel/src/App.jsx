import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "https://tomato-3qr4.onrender.com";

  return (
    <div className=''>
      <ToastContainer/>
      <Navbar/>
      <hr className='h-[2px] bg-[#a9a9a9] border-none'/>
      <div className="flex">
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add url={url}/>}/>
        <Route path='/list' element={<List url={url}/>}/>
        <Route path='/orders' element={<Orders url={url}/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
