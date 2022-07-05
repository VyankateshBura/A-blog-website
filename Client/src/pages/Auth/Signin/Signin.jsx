import React, { useContext ,useState} from 'react'
import "./Signin.scss"
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom';
import { images } from '../../../constants';
import {Context } from '../../../context/Context'

const Signin = () => {
    let navigate = useNavigate();
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    // const {user,dispatch,isFetching} = useContext(Context);
    const handlesubmit = async(e)=>{
        e.preventDefault();
        let formdata = new FormData();
        console.log(email);
        console.log(password);
        // dispatch({type:"LOGIN_START"});
        try {
            const res = await axios.post('http://localhost:5500/api/v1/login',{
                Email:email,
                password:password
            })
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("user",res.data.user.user)
            console.log(res.data)
            if(res.data){
                navigate('/',{state:"LOGIN_SUCCESS"});
            }
            // dispatch({type:"LOGIN_SUCCESS",payload:res.data});

        } catch (error) {
            console.log(error)
            // dispatch({type:"LOGIN_FAILURE"});
        }
    }

    // console.log(user);

  return (
    <div className='text-center bg-light pt-4' style={{height:600}} >
        <main className="form-signin d-flex justify-content-center align-item-center mt-4 ">
            <form className="mt-5 pt-5" onSubmit={handlesubmit}>
            <img className="mb-4" src={images.logo} alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div className="form-floating ">
                <input type="email" className="form-control input-lg box" onChange={(e)=>setEmail(e.target.value)} style = {{width:300,height:70}}  id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput" >Email address</label>
            </div>
            <div className="form-floating" >
                <input type="password" className="form-control box" style = {{width:300,height:70}} onChange={(e)=>setPassword(e.target.value)} id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword" >Password</label>
            </div>
        
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" id = "sub" type="submit">
                Sign in                
            </button>
            <p className="mt-5 mb-3 text-muted">© 2021–2022</p>
            </form>
        </main>
    </div>
  )
}

export default Signin