import React from 'react'
import "./Write.scss";
import {images} from "../../constants"


const Write = () => {
  return (
    <div className='Write mt-5 pt-5'>
        <img className='writeImg'src={images.image4}/>
        <form className = "Writeform"action="">
            <div className='Writeformgroup'>
                <label htmlFor="fileinput">
                <i className="writeIcon bi bi-file-earmark-plus-fill"></i>
                </label>
                <input type="file"  id="fileinput" style={{display:"none"}}/>
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

export default Write