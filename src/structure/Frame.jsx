import React from 'react'
import Header from '../components/Header'
import HomePage from '../pages/HomePage'
import Home from '../pages/Home2'
import Footer from '../components/Footer'
import FooterWidget from '../components/FooterWidget'

export default function Frame() {
  return (
    <div>
        {/* <Header />   */}
        <HomePage />
        {/* <Home /> */}
        <FooterWidget />
        <Footer />
    </div>
  )
}
