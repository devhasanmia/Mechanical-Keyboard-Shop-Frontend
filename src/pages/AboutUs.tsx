// AboutUs.tsx

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:text-center">
          <p className="text-base leading-6 font-semibold tracking-wide text-indigo-600 uppercase">
            About Us
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Welcome to Mechanical Keyboard Shop
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
           Where our passion lies in bringing you the finest mechanical keyboards for enthusiasts across the globe. Our commitment is to offer unparalleled quality, exceptional customer service, and a diverse array of keyboards that meet every individual's unique preferences and needs.
          </p>
        </div>
    
      </div>
    </div>
  );
};

export default AboutUs;
