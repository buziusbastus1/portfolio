import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
const footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="agator">egator</a>
        <ul className='permalinks'>
        <li><a href="#">home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">experience</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">portfolio</a></li>
        <li><a href="#">testimonials</a></li>
        <li><a href="#">contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="http://facebook.com"> <FaFacebookF/></a>
        <a href="http://instagram.com"><FaInstagram/></a>
        <a href="http://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; egator tutorials all rights reserved</small>
      </div>
    </footer>
  )
}

export default footer