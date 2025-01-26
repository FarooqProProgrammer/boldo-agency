import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import ServicesFeatures from '@/components/ServicesFeatures'
import ServicesPricing from '@/components/ServicesPricing'
import Newsletter from '@/components/Newsletter'

const Services = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServicesFeatures />
      <ServicesPricing />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Services
