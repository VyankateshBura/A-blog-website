import React from 'react'
import "./Signup.scss"


const Signup = () => {
  return (
    <div className='text-center bg-light pt-4'>
      <main className="form-signin d-flex justify-content-center align-item-center mt-4 pt-4">
        <form className="Signupform pt-4">
          <h1 className="h3 mb-3 fw-normal">Create Account </h1>
      
          <div className="form-floating ">
            <input type="name" className="form-control input-lg my-1 name box"  style = {{width:300,height:70}}  placeholder="Vyankatesh Sanjay Bura"/>
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating ">
            <input type="email" className="form-control input-lg my-1 email box"  style = {{width:300,height:70}}  placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          <div className="form-floating ">
            <input type="name" className="form-control input-lg my-1 uname box"  style = {{width:300,height:70 }} placeholder="Omkar"/>
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating" >
            <input type="password" className="form-control my-1 password box" style = {{width:300,height:70}} id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
      
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button  className="w-100 btn btn-lg btn-primary" id = "sub" type="submit" method = "post">Sign up</button>
          <p className="mt-5 mb-3 text-muted">© 2021–2022</p>
        </form>
      </main>
    </div>
  )
}

export default Signup