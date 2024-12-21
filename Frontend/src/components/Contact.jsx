import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {
  return (
    <>
      <Navbar /> <br /><br /><br /><br /><br /> <br /><br />
      <div className="max-w-screen-2xl container mx-auto flex flex-col items-center mt-50 my-16">
        <h1 className="text-4xl font-bold text-center">
          Contact Us{' '}
          <span className="text-pink-500">We'd love to hear from you!</span>
        </h1>
        <p className="text-xl text-center my-4">
          If you have any questions or would like to get in touch, feel free to reach out!
        </p>
        
        <div className="text-center space-y-4">
          <p className="text-lg">
            <strong>Email:</strong> princevishwakarma2024@gmail.com
          </p>
          <p className="text-lg">
            <strong>Mobile:</strong> 8896102787
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
