import React from 'react'
import Header from '@/components/header'
import LoginForm from '@/components/LoginForm'
import Head from 'next/head'

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Boldo Agency</title>
      </Head>

      <LoginForm />
    </>
  )
}

export default Login
