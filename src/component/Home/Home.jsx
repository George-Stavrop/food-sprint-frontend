import React from 'react';

// Sample image
import foodImage from './assets/right_img.png'; // Update path to the image you want to use

export const Home = () => {
  return (
    <div className="home-container flex flex-col md:flex-row justify-between items-center min-h-screen p-10 ">
      
     {/* Left Side: Text */}
<div className="left-side w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-8">
  {/* Top text: Το φαγητό στην πόρτα σου */}
  <h1 className="text-4xl md:text-5xl font-extrabold text-[#ff6347]" style={{ fontFamily: 'phraseFont' }}>
    Το φαγητό στην πόρτα σου,
  </h1>

  {/* Bottom text: σε χρόνο ρεκόρ!!! */}
  <p className="md:text-3xl font-semibold text-[#ff6347] mt-4 md:mt-6 md:text-center" style={{ fontFamily: 'sans-serif', fontSize: '3rem' }}>
    σε χρόνο ρεκόρ!!!
  </p>
</div>


      {/* Right Side: Image */}
      <div className="right-side w-full md:w-1/2 flex justify-center items-center">
        <img 
          src={foodImage} 
          alt="Food" 
          className="w-3/4 md:w-1/2 h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
