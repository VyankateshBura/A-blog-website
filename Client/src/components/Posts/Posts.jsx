import React from 'react'
import { Link } from 'react-router-dom'
import "./Posts.scss"


const Posts = (props) => {
  
  return (
    <div className='border-radius-pill'>
        <div className="col " data-aos="flip-left"data-aos-duration="1500">
              <div className="card card-cover h-90 text-black  border-radius-pill shadow-lg Card3" >
                <img src={props.image} alt="Blog image"/>
                <div className="d-flex flex-column h-60 p-2 pb-1 text-black text-shadow-1">
                  <Link to={`/post/${props.id}`} className="link">
                      <h2 className="mx-2 my-2  text-title" style={{fontSize:"25px",fontWeight:'bold',height:'10vh'}}>{props.title}</h2>
                  </Link>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <i className="bi bi-hand-thumbs-up-fill like" style={{fontSize: 30, marginTop: 0}}></i>
                      <i className="bi bi-hand-thumbs-down-fill like" style={{fontSize: 30}}></i>
                    </li>
                    <li className="d-flex align-items-center me-3 dat">
                      <strong>{props.date}</strong>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots-fill bi-xs msg" style={{fontSize: 25,height: 40,width: 40}}></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Posts