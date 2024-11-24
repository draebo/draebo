import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../assets/homepagegraphic.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h1>Form 5 Technical Drawing</h1>
      <p>YOUR CANVAS FOR STRUCTURAL BRILLIANCE</p>
      <Link to="/Lessons"> 
      <button> ACCESS HERE </button>
      </Link>
        </div>
       </div>
  );
}

export default Home;
