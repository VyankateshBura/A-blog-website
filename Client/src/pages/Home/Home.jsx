import React,{useEffect,useState} from 'react'
import {images} from '../../constants'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.scss"
import Posts from '../../components/Posts/Posts';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading] = useState(true)
  const {search} = useLocation();

  const fetchposts = async()=>{
    const {data} = await axios.get("http://localhost:5500/api/v1/post/getAllpost/"+search);
    setPosts(data);      
  }
  useEffect(() => {
    AOS.init();
    fetchposts();
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [search])
  

  return (
    loading?<Loading></Loading>:
    <div>
      <div className="container my-5" >
      <div className="row homepage">
        <div className="col-6 heading"data-aos="zoom-in"data-aos-duration="1500">
          <div className="card mt-5 border-0 " >
            <div className="card-body">
              <h1 className="card-title mt-5" >Welcome to V Blog.<br/>Know Anything!</h1><br/>               
              <h5 className="card-text" >“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”<br/> <br/></h5>
              <a href="#" className="btn btn-primary btn-lg ">Start Reading</a>
              <a href="#" className="btn btn-light btn-lg ">Documentation</a>
            </div>
          </div>
        </div>
        <div className="col-6 image" data-aos="zoom-in"data-aos-duration="1500">
          <div className="card mt-5 border-0 " >
            <img src={images.homepage} className="img-fluid " alt="..."/>
          </div>
        </div>
      </div>
    </div>

    {/* THe Recent blogs page   */}
    <section className='mx-5 Blog'>
    <div className = "section-title">
        <h2  style={{width:"fit-content"}}>Recent Blogs</h2>
        <hr></hr>
        </div>
        <div className="mx-5 py-2 bg-light" id="custom-cards"data-aos="zoom-in-right"data-aos-duration="1500">
          
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              {posts.map((p,index)=>(
                console.log(index),
                <Posts image = {images.image2} id = {p._id} key = {index} title={p.title} date = {new Date(p.createdAt).toDateString()}/>
              ))}            
          </div>
        </div>
      </section>


      {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact my-1">
      <div className="container ">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
          <hr></hr>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-about">
              <h3>V Blog</h3>
              <p>Do you queries to discuss with us.Feel free to contact us and share the comments. We will be happy to answer your question.</p>
              <div className="social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div className="info">
              <div>
              <i className="bi bi-geo-alt-fill"></i>
                <p>Block No. 3 Sarthak Apartment<br/>Kharegaon Kalwa,Thane Maharastra 400605</p>
              </div>

              <div>
              <i className="bi bi-envelope-fill"></i>
                <p>vyankatesh@gmail.com</p>
              </div>

              <div>
              <i className="bi bi-telephone-inbound-fill"></i>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>
          </div>

          <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}


  </div>
  )
}

export default Home