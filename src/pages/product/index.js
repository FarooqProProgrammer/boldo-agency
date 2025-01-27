import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import ProductHero from '@/components/ProductHero'
import ProductFeatures from '@/components/ProductFeatures'
import ProductServices from '@/components/ProductServices'
import Newsletter from '@/components/Newsletter'
import Head from 'next/head'

const Products = () => {
  return (
    <>
      <Head>
        <title>Product | Boldo Agency</title>
      </Head>



      <Header />
      <ProductHero />
      <ProductFeatures />
      <ProductServices />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Products
