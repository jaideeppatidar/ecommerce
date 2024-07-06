// import React from 'react';
// import './AboutPage.css';

// const AboutPage = () => {
//   return (
//     <div className='aboutContainer'>
//       {/* <div className='aboutImageBox'>
//         <img src='/assets/images/sliderImages/slider1.avif' alt='About' />
//       </div> */}
//       <div className='aboutbox' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '45px', }}>
//         <div className='box1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
//           <img style={{ width: '700px', height: '500px' }} src='/assets/images/sliderImages/slider2.jpg' />
//         </div>
//         <div className='box2' style={{ padding: '45px' }}>
//           <h1>About Page </h1>
//           <p style={{ paddingTop: '50px' }}>This backpack is the ideal companion for anyone on the go, offering a perfect blend of functionality, durability, and style. Made from high-quality, water-resistant materials, it is designed to protect your belongings from the elements, making it suitable for both urban and outdoor adventures.
//             The backpack features a spacious main compartment with a padded laptop sleeve, accommodating laptops up to 15 inches. The main compartment also includes additional pockets for organization, allowing you to neatly store your books, documents, and other essentials.
//             On the exterior, the backpack has multiple zippered pockets, providing easy access to smaller items such as your phone, keys, and wallet. There are also side pockets designed to hold water bottles or umbrellas, ensuring you stay hydrated and prepared for any weather.
//             The ergonomic design of this backpack includes padded shoulder straps and a breathable back panel, providing comfort and support even during extended wear. The adjustable straps allow for a customized fit, distributing the weight evenly across your shoulders and back.
//             One of the standout features of this backpack is its versatility. It is suitable for a wide range of activities, from daily commuting and school to travel and hiking. The sleek and modern design ensures that it looks great in any setting, while the durable construction ensures it can withstand the rigors of daily use.
//             The backpack also includes reflective accents for increased visibility and safety during low-light conditions. The sturdy zippers and reinforced stitching enhance its durability, ensuring that it remains a reliable and stylish accessory for years to come.
//             Overall,</p>
//         </div>
//       </div>
//       <div className='aboutbox' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '45px', }}>
//         <div className='box1'  style={{ padding: '45px' }}  >
//         <h1>About Page </h1>
//           <p style={{ paddingTop: '50px' }}>This backpack is the ideal companion for anyone on the go, offering a perfect blend of functionality, durability, and style. Made from high-quality, water-resistant materials, it is designed to protect your belongings from the elements, making it suitable for both urban and outdoor adventures.
//             The backpack features a spacious main compartment with a padded laptop sleeve, accommodating laptops up to 15 inches. The main compartment also includes additional pockets for organization, allowing you to neatly store your books, documents, and other essentials.
//             On the exterior, the backpack has multiple zippered pockets, providing easy access to smaller items such as your phone, keys, and wallet. There are also side pockets designed to hold water bottles or umbrellas, ensuring you stay hydrated and prepared for any weather.
//             The ergonomic design of this backpack includes padded shoulder straps and a breathable back panel, providing comfort and support even during extended wear. The adjustable straps allow for a customized fit, distributing the weight evenly across your shoulders and back.
//             One of the standout features of this backpack is its versatility. It is suitable for a wide range of activities, from daily commuting and school to travel and hiking. The sleek and modern design ensures that it looks great in any setting, while the durable construction ensures it can withstand the rigors of daily use.
//             The backpack also includes reflective accents for increased visibility and safety during low-light conditions. The sturdy zippers and reinforced stitching enhance its durability, ensuring that it remains a reliable and stylish accessory for years to come.
//             Overall,</p>
//         </div>
//         <div className='box2'style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <img style={{ width: '700px', height: '500px' }} src='/assets/images/sliderImages/slider2.jpg' />

         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
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

