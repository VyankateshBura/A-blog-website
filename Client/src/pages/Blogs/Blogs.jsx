import React,{Component, useState,useEffect} from 'react'
import "./Blogs.scss"
import {images} from "../../constants/index"
import Loading from '../../components/Loading/Loading'
const Blogs = () => {
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  
  return (
    loading?<Loading></Loading>:
    <div className='container' style={{marginTop:"30vh",marginLeft:"20vw"}}>
        <div className="form-floating mx-auto">
                <input type="search" className="form-control rounded-pill input-lg box" onChange={(e)=>setEmail(e.target.value)} style = {{width:"80%",height:"10vh"}}  id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput" >Search blogs</label>
            </div>
    </div>
  )
}

export default Blogs