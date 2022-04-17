import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Home,About,Signin,Signup} from './pages'


const App = () => {
  return (
    <div>      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/signin' element = {<Signin/>}/>
          <Route exact path='/signup' element = {<Signup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App