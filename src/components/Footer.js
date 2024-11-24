import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="socials"> 
            <FacebookIcon/> <InstagramIcon/> <TwitterIcon/><LinkedInIcon/>
            </div>
        <p> &copy; 2024 draebo.com</p>
    </div>
  )
}

export default Footer
