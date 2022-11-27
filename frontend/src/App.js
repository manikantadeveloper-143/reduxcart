
import React from 'react'
import './App.css'
 import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <div className='App'>

      <BrowserRouter>
      <ToastContainer/>
         <Navbar/> 
            <Routes>
               {/* <Route path='/cart/:id' element={<Cart/>} /> */}
               <Route path='/cart' element={<Cart/>} />
               <Route path='/' element={<Home/>} />
               <Route path='/Pagenotfound' element={<PageNotFound/>} />
              <Route path='*' element={<Navigate to='/pagenotfound' replace/>}/>
            </Routes>
 

      </BrowserRouter>
      
    </div>
  )
}

export default App

