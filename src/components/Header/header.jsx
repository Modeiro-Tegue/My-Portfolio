import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA'
import ME from '../../assets/Profile.png'
import HeaderSocial from './HeaderSocial.jsx'

const header = () => {
  return (
   <header>
    <div className="container header__container">

      <h5>Hello I'm</h5>
      <h1>MODEIRO TEGUE</h1>
      <h5 className='text-light'>Computer Engineering Undergraduate Student at UB</h5>
      <CTA />
      <HeaderSocial />

      <div className='me'>
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div> 
   </header>
  )
}

export default header