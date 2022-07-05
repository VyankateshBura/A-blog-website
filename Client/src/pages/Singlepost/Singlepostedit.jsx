import React,{useState,useEffect} from 'react'
import "./Singlepostedit.scss";
import {images} from "../../constants"
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Singlepostedit = () => {
    const [file, setfile] = useState(null)
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
        <div className='Write mt-5 pt-5'>
        <img className='writeImg'src={file?URL.createObjectURL(file):images.image4}/>
        <form className = "Writeform"action="">
            <div className='Writeformgroup'>
                <label htmlFor="fileinput">
                <i className="writeIcon bi bi-file-earmark-plus-fill"></i>
                </label>
                <input type="file" onChange={(e)=>setfile(e.target.files[0])} id="fileinput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeformgroup">
                <textarea placeholder='Start writing here ......' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="submit">Publish</button>
        </form>
    </div>

  )
}

export default Singlepostedit