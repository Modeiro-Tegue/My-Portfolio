import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
     <a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin /></a>
     <a href="https://github.com" target='_blank' rel="noreferrer"><FaGithubSquare /></a>
     <a href="https://instagram.com" target='_blank' rel="noreferrer"><FaInstagramSquare /></a>
     <a href="https://twitter.com" target='_blank' rel="noreferrer"><FaTwitter /></a>
     <a href="https://facebook.com" target='_blank' rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocial