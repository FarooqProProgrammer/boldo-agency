import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import ProductHero from '@/components/ProductHero'
import ProductFeatures from '@/components/ProductFeatures'
import ProductServices from '@/components/ProductServices'
import Newsletter from '@/components/Newsletter'

const Products = () => {
  return (
    <>
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
