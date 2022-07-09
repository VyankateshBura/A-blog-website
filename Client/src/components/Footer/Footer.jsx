import React from 'react'
import {Link} from 'react-router-dom'
import "./Footer.scss"
const Footer = () => {
  return (
    <div >
      {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright">
            &copy; Copyright <strong>V Blog</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">Bootstrap 5</a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <Link className='scrollto' to ="/">Home</Link>
            <Link className='scrollto' to ="/about">About</Link>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
    
  </footer>
  <a href="#" className="back-to-top bg-primary d-flex align-items-center justify-content-center"><i className="bi bi-box-arrow-up"></i></a>
  {/* <!-- End Footer --> */}

  

    </div>
  )
}

export default Footer