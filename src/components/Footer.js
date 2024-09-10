import React from "react";
import "../fontawesome/css/all.min.css";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    // <footer
    //   style={{
    //     backgroundColor: "black",
    //     color: "white",
    //     // textAlign: "center",
    //     width: "100%",
    //     position: 'sticky-bottom',
    //     bottom:'0',
    //   }}
    // >
    //   <div className="container-fluid">
    //     <div className="row mx-5">
    //       <div className="col-4 text-info mt-2">
    //         <h4>Optimist Enterprise</h4>
    //         <p>&copy;YMB 2024</p>
    //       </div>
    //       <div className="col-4 mt-4">
    //         <NavLink className='text-info fs-5 m-2'><BsGithub /></NavLink>
    //         <NavLink className='text-info fs-5 m-2'><BsGoogle /></NavLink>
    //         <NavLink className='text-info fs-5 m-2'><BsGooglePlay /></NavLink>
    //         <NavLink className='text-info fs-5 m-2'><BsApple /></NavLink>
    //         <NavLink className='text-info fs-5 m-2'><BsYoutube /></NavLink>
    //         <NavLink className='text-info fs-5 m-2'><BsAmazon /></NavLink>
    //         <NavLink className='text-info fs-5 m-2'><BsSpotify /></NavLink>
    //         <NavLink className='text-info fs-5 m-2'><BsMicrosoft /></NavLink>
    //       </div>
    //       <div className="col-4 mt-3">
    //         <div className="navbar-brand text-info lol">
    //           <NavLink style={{textDecoration:'none'}} className='text-info'><FaFacebook /> Optimist@facebook.com</NavLink>
    //           <NavLink style={{textDecoration:'none'}} className='text-info'><BsInstagram className="ms-4" /> Optimist@instagram.com <br /></NavLink>
    //           <NavLink style={{textDecoration:'none'}} className='text-info'><BsTwitterX /> Optimist@twitter.com</NavLink>
    //           <NavLink style={{textDecoration:'none'}} className='text-info'><MdEmail className="ms-5" /> Optimist@gmail.com</NavLink>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </footer>
    <footer class="footer ">
      <div class="container">
        <div class="row text-center">

          <div class="col-md-4">
            <h5>Optimist</h5>
            <p>Thanks for your partronage.</p>
          </div>
          <div class="col-md-4">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              {/* <li><a href="#">Contact</a></li> */}
            </ul>
          </div>

          <div class="col-md-4">
            <h5>Follow Us</h5>
            <div class="social-icons">
              <a href="www.facebook.com"><FaFacebook /></a>
              <a href="www.twitter.com"><BsTwitterX /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><BsLinkedin /></a>
            </div>
          </div>
        </div>
        <hr class="bg-light" />
        <div class="row">
          <div class="col text-center">
            <p class="mb-0">&copy; 2024 Optimist. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
