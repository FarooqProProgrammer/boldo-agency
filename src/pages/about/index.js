import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import AboutStory from '@/components/AboutStory'
import AboutTeam from '@/components/AboutTeam'
import AboutValues from '@/components/AboutValues'
import Newsletter from '@/components/Newsletter'

const About = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <Newsletter />
      <Footer />
    </>
  )
}

export default About
