import React, { useContext ,useRef} from 'react'
import "./Signin.scss"
import {Link} from 'react-router-dom';
import { images } from '../../../constants';
import {Context } from '../../../context/Context'

const Signin = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const {user,dispatch,isFetching} = useContext(Context);
    const handlesubmit = async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try {
            const res = axios.post('http://localhost:5500/api/v1/login',{
                Email:userRef.current.value,
                password:passwordRef.current.value
            });
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});

        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"});
        }
    }

    console.log(user);

  return (
    <div className='text-center bg-light pt-4' style={{height:600}} >
        <main className="form-signin d-flex justify-content-center align-item-center mt-4 ">
            <form className="mt-5 pt-5" onSubmit={handlesubmit}>
            <img className="mb-4" src={images.logo} alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        
            <div className="form-floating ">
                <input type="email" className="form-control input-lg box"  style = {{width:300,height:70}}  id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput" ref={userRef}>Email address</label>
            </div>
            <div className="form-floating" >
                <input type="password" className="form-control box" style = {{width:300,height:70}}  id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword" ref={passwordRef}>Password</label>
            </div>
        
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"/> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" id = "sub" type="submit">
               <Link className = "link" to="signin"> Sign in</Link>                
            </button>
            <p className="mt-5 mb-3 text-muted">© 2021–2022</p>
            </form>
        </main>
    </div>
  )
}

export default Signin