import React from 'react'
import CT from '../../assets/AL.pdf'

const CTA = () => {
  return (
    <div className='cta'>
     <a href={CT} download className='btn'>DownLoad A/L Certificate</a>
     <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA