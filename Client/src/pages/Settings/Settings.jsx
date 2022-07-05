import React,{useState} from "react";
import "./Settings.scss";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { images } from "../../constants";

const Settings = () => {
  let loc = useLocation();
  console.log(loc);
  const [userdata,setUserdata] = useState({name:"",Email:"",Username:"",password:""});
  const handleChange = (e)=>{
    const {name,value} = e.target;
    // console.log(e.target.value)
    setUserdata(prevState=>({...prevState,[name]:value}))
  }
  const UpdateProfile = async(e)=>{
 
    e.preventDefault();
    const res = await axios.post("",{
      headers:{
        token:localStorage.getItem('token')
      }
      ,
      body:{
        ...userdata
      }
    })
    console.log(userdata);
  }
  return (
    <div className="Settings mt-4 pt-4">
      <div className="SettingsWrapper">
        <div className="SettingsTitle">
          <span className="SettingsUpdateTitle">Update your Account</span>
          <span className="SettingsDeleteTitle">Delete your Account?</span>
        </div>
        <form className="SettingsForm" onSubmit={UpdateProfile}>
          <label htmlFor="">Profile Picture</label>
          <div className="SettingsPP">
            <img src={images.profile} />
            <label htmlFor="fileInput">
              <i className="SettingsPPIcon bi bi-person-plus-fill"></i>
            </label>
            <input type="file" id="fileInput" name = "File" style={{ display: "none" }} onChange={handleChange}/>
          </div>
          <div className="form-floating ">
            <input
              type="name"
              onChange={handleChange}
              name="name"
              className="form-control input-lg my-1 name box"
              style={{ width: 300, height: 70 }}
              placeholder="Vyankatesh Sanjay Bura"
              
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating ">
            <input
              type="email"
              name="Email"
              onChange={handleChange}
              className="form-control input-lg my-1 email box"
              style={{ width: 300, height: 70 }}
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          <div className="form-floating ">
            <input
              type="name"
              name="Username"
              onChange={handleChange}
              className="form-control input-lg my-1 uname box"
              style={{ width: 300, height: 70 }}
              placeholder="Omkar"
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control my-1 password box"
              style={{ width: 300, height: 70 }}
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button  className="w-50 btn btn-lg btn-primary Submit"  type="submit" method = "post">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
