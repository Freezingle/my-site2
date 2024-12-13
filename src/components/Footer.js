import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import GithubIcon from '@mui/icons-material/GitHub'

function Footer() {
  return (
    <div className= "footer">
        <div className="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <GithubIcon/>

        </div>
        <p>&copy; 2024 ppvpredict.com </p>

      
    </div>
  )
}

export default Footer
