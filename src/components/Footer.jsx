import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{height:'300px',marginTop:'100px'}} className="mt-5 w-full h-[300px] bg-purple-600 text-white p-4">
      <div className="flex justify-between p-4">
        {/* intro */}
        <div style={{width:'400px'}} className="intro">
          <h5 className="text-xl font-bold">
            <i className="fa-solid fa-truck-fast me-2"></i>E-cart
          </h5>
          <p >
            Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
          </p>
          <p >Code licensed MIT, docs CC BY 3.0.</p>
          <p >Currently v5.3.3.</p>
        </div>

        {/* links */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">Links</h5>
          <Link to={'/'}  style={{textDecoration:'none',color:'white'}} >Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
        </div>

        {/* guide */}
        <div className="flex flex-col">
          <h5 className="text-lg">Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target="_blank">React</a>
          <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none',color:'white'}} target="_blank">React Bootstrap</a>
          <a href="https://reactrouter.com/" style={{textDecoration:'none',color:'white'}} target="_blank">React Router</a>
        </div>

        {/* contact */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">Contact Us</h5>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your Email !!"
              className=" p-1 rounded"
            />
            <button className="btn btn-info ms-2">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons flex justify-between mt-3">
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/sreeragi-a-s-2689aa256/"style={{textDecoration:'none',color:'white'}} target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/login/" style={{textDecoration:'none',color:'white'}} target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="http://localhost:5173/" style={{textDecoration:'none',color:'white'}} target="_blank">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a href="https://www.instagram.com/?hl=en" style={{textDecoration:'none',color:'white'}} target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/" style={{textDecoration:'none',color:'white'}} target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-3 text-white">Copyright &copy; May 2024 batch Ecart .build with React</p>
    </div>
  );
};

export default Footer;
