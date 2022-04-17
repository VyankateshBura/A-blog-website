import React from 'react'
import "./Signin.scss"
import { images } from '../../../constants';

const Signin = () => {
  return (
    <div className='text-center bg-light pt-4' style={{height:600}} >
        <main className="form-signin d-flex justify-content-center align-item-center mt-4 ">
            <form className="mt-5 pt-5">
            <img className="mb-4" src={images.logo} alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div className="form-floating ">
                <input type="email" className="form-control input-lg box"  style = {{width:300,height:70}}  id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating" >
                <input type="password" className="form-control box" style = {{width:300,height:70}}  id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
        
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" id = "sub" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2021–2022</p>
            </form>
        </main>
    </div>
  )
}

export default Signin