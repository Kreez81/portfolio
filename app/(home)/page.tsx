import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function page() {
  return (
    <div className="min-h-screen bg-black ">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] relative">


        <div className="max-w-7xl mx-auto p-8">
          <Navbar />
          <Main />
        </div>
        <div className=" h-10 xl:h-32 bg-gradient-to-t from-[#09090B] absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-8 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
