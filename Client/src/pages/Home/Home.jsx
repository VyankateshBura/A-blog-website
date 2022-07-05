import React,{useEffect,useState} from 'react'
import {images} from '../../constants'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss"
import Posts from '../../components/Posts/Posts';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading] = useState(true)
  const {search} = useLocation();

  const fetchposts = async()=>{
    const {data} = await axios.get("http://localhost:5500/api/v1/post/getAllpost/"+search);
    setPosts(data);      
  }
  useEffect(() => {
    AOS.init();
    fetchposts();
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [search])
  

  return (
    loading?<Loading></Loading>:
    <div>
      <div className="container my-5" >
      <div className="row homepage">
        <div className="col-6 heading"data-aos="zoom-in"data-aos-duration="1500">
          <div className="card mt-5 border-0 " >
            <div className="card-body">
              <h1 className="card-title mt-5" >Welcome to V Blog.<br/>Know Anything!</h1><br/>               
              <h5 className="card-text" >“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”<br/> <br/></h5>
              <a href="#" className="btn btn-primary btn-lg ">Start Reading</a>
              <a href="#" className="btn btn-light btn-lg ">Documentation</a>
            </div>
          </div>
        </div>
        <div className="col-6 image" data-aos="zoom-in"data-aos-duration="1500">
          <div className="card mt-5 border-0 " >
            <img src={images.homepage} className="img-fluid " alt="..."/>
          </div>
        </div>
      </div>
    </div>

    {/* THe Recent blogs page   */}
    <section className='mx-5 Blog'>
        <div className="mx-5 px-5 py-2 bg-light" id="custom-cards"data-aos="zoom-in-right"data-aos-duration="1500">
          <h2 className="pb-2 border-bottom">Recent Blogs</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              {posts.map((p,index)=>(
                console.log(index),
                <Posts image = {images.image2} id = {p._id} key = {index} title={p.title} date = {new Date(p.createdAt).toDateString()}/>
              ))}            
          </div>
        </div>
      </section>
  </div>
  )
}

export default Home