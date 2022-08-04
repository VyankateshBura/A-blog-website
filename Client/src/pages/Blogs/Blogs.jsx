import React,{Component, useState,useEffect} from 'react'
import "./Blogs.scss"
import {images} from "../../constants/index"
import Posts from '../../components/Posts/Posts'
import axios from 'axios'
import Loading from '../../components/Loading/Loading'
const Blogs = () => {
  const [loading,setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [search, setSearch] = useState('');
  const fetchposts = async()=>{
    const {data} = await axios.get("/api/v1/post/getAllpost/"+search);
    
    setPosts([...data]);      
  }
  useEffect(() => {
    fetchposts();
    console.log(posts);
  }, [search])
  
  return (

    <div>
      <div className='bgcover d-flex justify-content-evenly align-items-center flex-column' style={{marginTop:"10vh",height:"53vh"}}>
        <h2 className='heading'>Blogs</h2>
          <div className="form-floating mx-auto ">
                  <input type="search" className="form-control rounded-pill input-lg box" onChange={(e)=>setSearch(e.target.value)} style = {{width:"60vw",height:"10vh"}}  id="floatingInput" placeholder="name@example.com"/>
                  <label htmlFor="floatingInput" >Search blogs by name</label>
              </div>
            
      </div>
      <div className='blogs  mx-5 py-2 bg-light' id="custom-cards"data-aos="zoom-in-right"data-aos-duration="1500">
          
              
              <div className="row row-cols-1 row-cols-lg-3 justify-content-evenly align-items-stretch g-4 py-5">
                  {posts && posts.map((p,index)=>(
                    console.log(index),
                    <Posts image = {images.image2} id = {p._id} key = {index} title={p.title} date = {new Date(p.createdAt).toDateString()}/>
                  ))}            
              </div>
            
          </div>
    </div>
  )
}

export default Blogs