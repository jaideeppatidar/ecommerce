
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageSlider.css';

const ImageSlider = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      interval={2000}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/sliderImages/slider1.avif`} alt="Image 1" />
        <div className="slide-content">
          <h2>Welcome to Our Store</h2>
          <p>Find the best products at unbeatable prices.</p>
          <button onClick={() => alert('Get Started!')}>Get Started</button>
        </div>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/sliderImages/slider2.jpg`} alt="Image 2" />
        <div className="slide-content">
          <h2>Quality You Can Trust</h2>
          <p>Shop with confidence and enjoy top-notch quality.</p>
          <button onClick={() => alert('Get Started!')}>Get Started</button>
        </div>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/sliderImages/slider3.jpg`} alt="Image 3" />
        <div className="slide-content">
          <h2>Latest Trends</h2>
          <p>Stay ahead with the latest trends in fashion and tech.</p>
          <button onClick={() => alert('Get Started!')}>Get Started</button>
        </div>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/sliderImages/slider4.jpg`} alt="Image 4" />
        <div className="slide-content">
          <h2>Unbeatable Prices</h2>
          <p>Get the best deals and save big on your purchases.</p>
          <button onClick={() => alert('Get Started!')}>Get Started</button>
        </div>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/sliderImages/slider5.jpg`} alt="Image 5" />
        <div className="slide-content">
          <h2>Customer Satisfaction</h2>
          <p>Experience top-notch service and support with every order.</p>
          <button onClick={() => alert('Get Started!')}>Get Started</button>
        </div>
      </div>
    </Carousel>
  );
};

export default ImageSlider;
