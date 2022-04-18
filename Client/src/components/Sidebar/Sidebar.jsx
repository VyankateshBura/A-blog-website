import React from 'react'
import images from "../../constants"
import "./Sidebar.scss"

const Sidebar = () => {
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
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style </li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
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