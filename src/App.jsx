/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header/header'
import nav from './components/nav/nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Service from './components/Services/services'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
       <Header />
       <nav />
       <About />
       <Experience />
       <Service />
       <Portfolio />
       <Testimonials/>
       <Contact />
       <Footer />
    </>
  )
}

export default App