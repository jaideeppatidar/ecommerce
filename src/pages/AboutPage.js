
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='aboutContainer'>
          <div className='aboutContainerbox'>

      <div className='aboutbox'>
        <div className='box1'>
          <h1>About Page</h1>
          <p>
            This backpack is the ideal companion for anyone on the go, offering a perfect blend of functionality,
            durability, and style. Made from high-quality, water-resistant materials, it is designed to protect your
            belongings from the elements, making it suitable for both urban and outdoor adventures.
          </p>
        </div>
        <div className='box2'>
          <img src='/assets/images/aboutImage1.avif' alt='Backpack' />
        </div>
      </div>
      <div className='aboutbox'>
        <div className='box1'>
          <img src='/assets/images/aboutImage2.avif' alt='Backpack' />
        </div>
        <div className='box2'>
          <h1>About Page</h1>
          <p>
            This backpack is the ideal companion for anyone on the go, offering a perfect blend of functionality,
            durability, and style. Made from high-quality, water-resistant materials, it is designed to protect your
            belongings from the elements, making it suitable for both urban and outdoor adventures.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;

