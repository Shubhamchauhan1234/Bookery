import { useState } from 'react'
import './App.css'

import Authors from './component/Authors'
import Top from './component/Top'

import {BrowserRouter,Route,Routes} from "react-router-dom"

import Home from './pages/Home'
import { Footer } from './pages/Footer'
import Genres from './component/Genres'
import Books from './pages/Books'
import { Login } from './pages/Login'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
import Signout from './pages/Signout'





function App() {
  const [cart, setcart] = useState([])
const AddtoCart=(data)=>{
setcart([...cart,data])
console.log(data);
}
const deleteAmount = (index) => {
  const updatedTasks = [...cart];
  updatedTasks.splice(index, 1);
  setcart(updatedTasks);
}

  return (
    <>
    <BrowserRouter>
    <Top count={cart.length} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Authors' element={<Authors/> } />
          <Route path='/Genres' element={<Genres />} />
       
          
          <Route path='/Books' element={<Books AddtoCart={AddtoCart} />} />
          
          <Route path='/Login' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/Cart' element={<Cart cart={cart} deleteAmount={deleteAmount}/>} />
          <Route path='/Signout' element={<Signout />} />
         
        </Routes>

       
  <Footer/>
      </BrowserRouter>
 
    </>
  )
}

export default App
