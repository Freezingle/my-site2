import React from 'react';
import BannerImage from "../assets/landing.jpg"
 import "../styles/Home.css"
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home"  style= {{backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
            <h2>Saturday Night's Main Event</h2>
            <Link to="/ppv"><button>Match card</button></Link>
            


        </div>
       
    </div>
  )
}

export default Home
