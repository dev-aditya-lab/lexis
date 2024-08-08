// src/components/Hero.jsx
import React from 'react';
import Btn from '../Btn';

const Hero = () => {
  return (
    <section className="lg:px-20 relative flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 text-center lg:text-left flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 relative z-40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Build your digital solutions with expert help
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Share your challenge with our team, who will work with you to deliver a revolutionary digital product.
          </p>
          <Btn text="Get Started" />
        </div>
        <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://ik.imagekit.io/itsaadi/lexis.solutions/image_4.png?updatedAt=1722916439430"
            alt="Main Visual"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <img
        src="https://ik.imagekit.io/itsaadi/lexis.solutions/f9a0cf5a-ed7e-427d-aa8b-efc74f867c0c.svg?updatedAt=1722916426486"
        alt="Top Right Decoration"
        className="absolute top-0 right-0  transform translate-x-1/2"
      />
      <img
        src="https://ik.imagekit.io/itsaadi/lexis.solutions/6aacea51-fcb9-4bd7-b9c0-1825fb3f7fb6.svg?updatedAt=1722916421100"
        alt="Left Decoration"
        className="absolute hidden lg:block left-0 bottom-0 "
      />
    </section>
  );
};

export default Hero;
