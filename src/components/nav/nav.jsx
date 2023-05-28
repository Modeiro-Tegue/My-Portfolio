/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FcAbout} from 'react-icons/fc'
import {SiExpertsexchange} from 'react-icons/si'
import {GrServices} from 'react-icons/gr'
import {FcContacts} from 'react-icons/fc'
import {IoIosContact} from 'react-icons/io'
import {TfiThumbUp} from 'react-icons/tfi'
import { useState } from 'react'

const nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
    <nav>

    <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
    <a href='#about' onClick={()=>setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><FcAbout /></a>
    <a href='#experience' onClick={()=>setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><SiExpertsexchange /></a>
    <a href='#service' onClick={()=>setActiveNav('#service')}  className={activeNav === '#service' ? 'active' : ''}><GrServices /></a>
    <a href='#contact' onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><FcContacts /></a>
    <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><IoIosContact /></a>
    <a href='#testimonial' onClick={()=>setActiveNav('#testimonial')}  className={activeNav === '#testimonial' ? 'active' : ''}><TfiThumbUp /></a>

    </nav>
  )
}

export default nav