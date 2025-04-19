import React from 'react'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'

const page = () => {
  return (
    <div className='relative top-20 pt-4'>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page