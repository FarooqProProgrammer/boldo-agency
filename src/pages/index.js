import Header from '@/components/header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
   <>

    <Head>
      <title>Home Page | Boldo Agency</title>
    </Head>

    <Header />
    <Hero />
    <Services />
    <About />
    <FAQ />
    <Blog />
    <Newsletter />
    <Footer />
   </>
  )
}

export default Home