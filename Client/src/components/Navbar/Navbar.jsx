import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { images } from '../../constants';
import "./Navbar.scss";
import {useLocation} from 'react-router-dom';

let user = false;
const Navbar = () => {
    let loc = useLocation().state;
    console.log(loc);
  return (
    <div>
        {/* <h1>Hello, world!</h1>  */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom m-0 p-0" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={images.logo} height = "50px" width = "50px" alt="V"/>
                    Blog
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active mx-3 fs-5 border-2 border-bottom border-primary" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-3 fs-5" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle mx-3 fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Topics
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Blockchain</a></li>
                        <li><a className="dropdown-item" href="#">Artificial Intelligence</a></li>
                        <li><a className="dropdown-item" href="#">Web Development</a></li>
                        <li><a className="dropdown-item" href="#">Machine Learning</a></li>
                        <li><a className="dropdown-item" href="#">Android Development</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Other</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-3 fs-5" to="/blogs">Blogs</Link>
                    </li>
                    </ul>
                    { loc=="LOGIN_SUCCESS"?<Link to="/settings" state={loc} className="link mx-5"><div className="d-flex justify-content-sm-between">
                    <i className="bi bi-person-square mx-4" style={{fontSize:"20px",fontFamily:'Roboto',fontStyle:'normal'}}>Username</i>
                    </div></Link>:   
                    <form className="d-flex " style = {{width:300}}>
                    
                        <Link className="btn btn-primary btn-lg me-1" to="/signin" role="button">{user?"Sign out":"Sign in"}</Link>
                        <Link className="btn btn-light btn-lg me-1" to="/signup" role="button" >{!user && "Sign up"}</Link>
                    </form>}
                </div>
            </div>
        </nav>
        <Outlet />
    </div>
  )
}

export default Navbar