
import About from '@/components/about'
import Contact from '@/components/Contact'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div className='bg-slate-50'>
     <HeroSection/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default page