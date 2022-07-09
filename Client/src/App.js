import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route,Link,useLocation} from "react-router-dom";
import {Home,About,Signin,Signup,Singlepostview,Singlepostedit,Write,Settings,Blogs} from './pages'
import Footer from './components/Footer/Footer'

let user = false;

const App = () => {

  return (
    <div>      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/blogs' element = {<Blogs/>}/>
          <Route exact path='/signin' element = {user?<Home/>:<Signin/>}/>
          <Route exact path='/signup' element = {user?<Home/>:<Signup/>}/>
          <Route exact path='/post/:id' element = {<Singlepostview/>}/>
          <Route exact path='/post/:id/edit' element = {<Singlepostedit/>}/>
          <Route exact path='/write' element = {<Write/>}/>
          <Route exact path='/settings' element = {<Settings/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App