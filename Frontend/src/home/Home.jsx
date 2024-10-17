import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Opportunity from '../components/Opportunity'
import About from '../components/About'

export default function Home() {
  return (
    <>
    <div className='dark:bg-slate-900 '>
      <Navbar/>
      <Banner/>
      <Opportunity/>
      <About/>
      <Footer/>
    </div>
    </>
  )
}
