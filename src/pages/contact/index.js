import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Boldo Agency</title>
      </Head>



      <Header />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </>
  )
}

export default Contact
