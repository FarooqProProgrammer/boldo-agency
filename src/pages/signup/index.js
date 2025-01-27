import React from 'react'
import Header from '@/components/header'
import SignupForm from '@/components/SignupForm'
import Head from 'next/head'

const Signup = () => {
  return (
    <>
       <Head>
      <title>Signup | Boldo Agency</title>
    </Head>


      <Header />
      <SignupForm />
    </>
  )
}

export default Signup
