import React from 'react'
import ImageSlider from '../common/slider'
import ProductListingPage from './ProductListingPage'
import AboutPage from './AboutPage'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <div>
          <ImageSlider/>
          <AboutPage/>
          <ProductListingPage/>
          {/* <Footer/> */}
        
    </div>
  )
}

export default HomePage