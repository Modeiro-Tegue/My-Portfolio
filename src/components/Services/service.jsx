import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>My Services</h2>
     <div className="container__services">

      <article className='service'>
        <div className="service__head">
          <h3>Software Development</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Modeling of your system, there by providing you a complete overview of how it actually works</p>
          </li>
           
          <li>
            <BiCheck className='service__list-icon' />
            <p>UI/UX Designing providing you a Graphical User Interface for your system</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Implementation of your System (Programming) </p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Software Testing and Debugging of codes</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Deployment of the System</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Creating Installation packages</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Maintenance</p>
          </li>

        </ul>
      </article>
      {/*=================================END OF SOFTWARE DEVELOPMENT===============================*/}

      <article className='service'>
        <div className="service__head">
          <h3>Networking and DataCom</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Basic VLAN configurations on a LAN Networking</p>
          </li>
           
          <li>
            <BiCheck className='service__list-icon' />
            <p>Implementation of STP protocols</p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Ip subnetting </p>
          </li>

          <li>
            <BiCheck className='service__list-icon' />
            <p>Implementation of Basic WLAN</p>
          </li>

        </ul>
      </article>
      {/*==========================================END OF NETWORKING AND DataCom==================================*/}

     </div>

    </section>
  )
}

export default service