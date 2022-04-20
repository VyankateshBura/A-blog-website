import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import {Home,About,Signin,Signup,Singlepost,Write,Settings} from './pages'
let user = false;

const App = () => {
  return (
    <div>      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/signin' element = {user?<Home/>:<Signin/>}/>
          <Route exact path='/signup' element = {user?<Home/>:<Signup/>}/>
          <Route exact path='/singlepost' element = {<Singlepost/>}/>
          <Route exact path='/write' element = {user?<Write/>:<Signup/>}/>
          <Route exact path='/settings' element = {user?<Settings/>:<Signup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App