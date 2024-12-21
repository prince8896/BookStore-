import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <Navbar /> <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="max-w-screen-2xl container mx-auto flex flex-col items-center mt-200 my-10">
        <h1 className="text-4xl font-bold text-center">
          About Us: Our Mission to Help You{' '}
          <span className="text-pink-500">Learn and Grow</span>
        </h1>
        <p className="text-xl text-center my-4">
          We believe that knowledge is the key to success, and our mission is to provide you with the resources and tools you need to excel. Our platform offers a range of courses and tutorials designed to help you master new skills and advance your career.
        </p>
        <p className="text-xl text-center my-4">
          Whether you're a beginner or an expert, we aim to create a supportive environment where you can learn at your own pace and achieve your goals.
        </p>
      </div>
      <Footer />
    </>
  );
}
