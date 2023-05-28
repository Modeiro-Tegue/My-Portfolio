/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header/header'
import nav from './components/nav/nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Service from './components/Services/service'
import Portfolio from './components/Portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonial'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
const App = () => {
  return (
    <>
       <Header />
       <nav />
       <About />
       <Experience />
       <Service />
       <Portfolio />
       <Testimonials />
       <Contact />
       <Footer />
    </>
  )
}

export default App