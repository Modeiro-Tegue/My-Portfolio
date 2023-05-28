/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './About.css'
import ME from '../../assets/picture1.jpg'
import{BsAward} from 'react-icons/bs'
import{GiBurningPassion} from 'react-icons/gi'
import{SiBookstack} from 'react-icons/si'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

       <div className='container about__container'>

        <div className='about__me'>
              <div className='about__me-image'>
                <img src={ME} alt='About Image' />
              </div>
        </div>

        <div className='about__content'>
           <div className='about__cards'>
              <article className='about__card'>
                  <h5>Education Level</h5>
                  <BsAward className='about__icon' /> 
                  <small>High School Year 2</small>
             </article>
                  
                <article className='about__card'>
                  <h5>Passion</h5>
                  <GiBurningPassion className='about__icon' /> 
                  <small>A passionate of Web development as a whole, with CyberSecurity</small>
                </article>

                <article className='about__card'>
                  <h5>E-learning And Skills</h5>
                  <SiBookstack className='about__icon' /> 
                  <small>Enrolled in a Cybersecurity program on Cisco</small>
                  <small>Good in Java Programming and still hopes to perform more</small>
                </article>

               </div>

                  <p>My main Objective is to become an operational fullstack developer capable of implementing all the security aspects of what he builds or even more
                    and make my self a position in the digital world 
                  </p>

                <a href='#contact' className='btn btn-primary'>Let's Discuss</a>

        </div>

       </div>

    </section>
  )
}

export default About