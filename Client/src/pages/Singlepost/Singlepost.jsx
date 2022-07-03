import React,{useEffect,useState} from 'react'
import "./Singlepost.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import {images} from "../../constants"
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';

const Singlepost = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})

    useEffect(() => {

        const getPost = async()=>{
            const res = await axios.get("http://localhost:5500/api/v1/post/getpost/"+path);
            setPost(res.data);
        }
        getPost();
    }, [path])
    

  return (
    <div className='Singlepost pt-5'>
        <div className="singlepost">
            <div className='singlepostWrapper'>
                <img className = 'singlepostimg' src={images.image3}/>
                <h1 className='singleposttitle'>{post.title}
                    <div className="singlepostedit">
                        <i className="singlepostIcon bi bi-pen-fill"></i>
                        <i className="singlepostIcon bi bi-trash-fill"></i>
                    </div>
                </h1>
                <div className="singlepostinfo">
                    
                    <span className='author'>Author:&nbsp;
                    <Link to={`/?user=${post.Username}`} className="link"><b>{post.Username}</b></Link></span>
                    
                    <span className='Date'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='singlePostDesc'>
                    {post.description}
                </p>
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Singlepost