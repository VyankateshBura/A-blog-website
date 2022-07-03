import React,{useState,useEffect} from 'react'
import "./Signup.scss"
import axios from 'axios';

const Signup = () => {
  const [Name, setName] = useState("")
  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Error, setError] = useState(false)

  const handleSubmit = async(e)=>{
    try {
      e.preventDefault();
      setError(false);
      const res = await axios.post("http://localhost:5500/api/v1/register",{
          
        name:Name,
        Username:Username,
        Email:Email,
        password:Password

      })
      res.data&&window.location.replace("/signin");
    } catch (error) {
      setError(error)
      
    }
    
  }


  return (
    <div className='text-center bg-light pt-4'>
      <main className="form-signin d-flex justify-content-center align-item-center mt-4 pt-4">
        <form className="Signupform pt-4" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Create Account </h1>
      
          <div className="form-floating ">
            <input type="name" onChange={e=>setName(e.target.value)} className="form-control input-lg my-1 name box"  style = {{width:300,height:70}}  placeholder="Vyankatesh Sanjay Bura"/>
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating ">
            <input type="email" onChange={e=>setEmail(e.target.value)} className="form-control input-lg my-1 email box"  style = {{width:300,height:70}}  placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          <div className="form-floating ">
            <input type="name" onChange={e=>setUsername(e.target.value)} className="form-control input-lg my-1 uname box"  style = {{width:300,height:70 }} placeholder="Omkar"/>
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating" >
            <input type="password" onChange={e=>setPassword(e.target.value)} className="form-control my-1 password box" style = {{width:300,height:70}} id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
      
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button  className="w-100 btn btn-lg btn-primary" id = "sub" type="submit" method = "post">Sign up</button>
          {Error && <span style={{color:"red"}}>Something went wrong!</span>}
          <p className="mt-3 text-muted">© 2021–2022</p>
        </form>
      </main>
    </div>
  )
}

export default Signup
