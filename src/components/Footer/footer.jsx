/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'


const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ST PATRICK</a>
      <ul className='permalinks'>
         <li><a href='#'>HOME</a></li>
         <li><a href='#about'>ABOUT</a></li>
         <li><a href='#experience'>EXPERIENCE</a></li>
         <li><a href='#services'>SERVICES</a></li>
         <li><a href='#portfolio'>PORTFOLIO</a></li>
         <li><a href='#testimonials'>TESTIMONIALS</a></li>
         <li><a href='#contact'>CONTACT</a></li>

      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'> <FaFacebook /> </a>
        <a href='https://instagram.com'> <BsInstagram /> </a>
        <a href='https://twitter.com'> <FaTwitterSquare /></a>
        <a href='https://github.com'> <BsGithub /></a>
        <a href='https://linkedin.com'> <FaLinkedin/> </a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; ST PATRICK. All rights reserved.</small>
      </div>
      </footer>
  )
}

export default footer