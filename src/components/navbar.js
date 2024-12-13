import React, {useState} from 'react'
import Logo from '../assets/wwelogo.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link}  from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks]= useState(false)
    const toggleNavbar = ()=> {
    setOpenLinks(!openLinks)

    }
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks? "open": "close"}>
           <Link to="/"><img src={Logo}/></Link> 
            <div className="hiddenLinks">
            <Link to="/">Home </Link>
            <Link to="/ppv">Pay-per-views</Link>
            <Link to="/news">News</Link>
            <Link to="/about">About</Link>
           
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home </Link>
            <Link to="/ppv">Pay-per-views</Link>
            <Link to="/news">News</Link>
            <Link to="/about">About</Link>
            <button onClick= {toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
      
    </div>
  )
}

export default Navbar;
