import FreeTrail from '@/components/pricing-component/freetrail'
import Plan from '@/components/pricing-component/plan'
import Price from '@/components/pricing-component/price'
import PriceFaqs from '@/components/pricing-component/price-faqs'
import Footer from '@/components/shop-components/footer'
import Header from '@/components/shop-components/header'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
        <Header />
        <Price />
        <Plan />
        <PriceFaqs />
        <FreeTrail />
        <Footer />
    </div>
  )
}

export default PricingPage