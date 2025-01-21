import React from 'react'
import Services from '../../components/Services/Services'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import About from '../../components/About/About'
import Meet from '../../components/Meet/Meet'

function Home() {
  return (
    <div>
      <Hero/>
      <Category/>
      <About/>
      <Meet/>
      <Services/>
      Home
    </div>
  )
}

export default Home
