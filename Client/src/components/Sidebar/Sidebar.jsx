import React,{useState,useEffect} from 'react'
import axios from 'axios';
import images from "../../constants"
import "./Sidebar.scss"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [Cats, setCats] = useState([]);
    useEffect(() => {
      const getCats = async()=>{
          const res = await axios.get('http://localhost:5500/api/v1/Categories/All');
          console.log(res);
          setCats(res.data.msg);
      }
      getCats();
    }, [])
    
  return (
    <div className='Sidebar pt-5'>
        <div className="sidebaritem">
            <span className='sidebartitle'>ABOUT ME</span>
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo ex et quam necessitatibus nihil voluptates totam, unde numquam amet perspiciatis. Numquam eaque rerum laborum officia dolores soluta distinctio placeat.4</p>
        </div>
        <div className='sidebaritem'>
            <span className='sidebartitle'>CATEGORIES</span>
            <ul className="sidebarList">
                {Cats.map((c,index)=>(
                    <Link key = {index} to={`/?cat=${c.name}`}className="link">
                        <li  className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className='sidebaritem'>
            <span className='sidebartitle'>FOLLOW US</span>
            <div className='sidebarsocial'>
                <i className="sidebarIcon bi bi-facebook"></i>
                <i className="sidebarIcon bi bi-twitter"></i>
                <i className="sidebarIcon bi bi-instagram"></i>
                <i className="sidebarIcon bi bi-linkedin"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar