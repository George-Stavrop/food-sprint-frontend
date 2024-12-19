import React from 'react';

import foodImage from './assets/right_img.png';
import Carousel from './Carousel';
import RestaurantCard from '../Restaurant/RestaurantCard';


const restaraunt = [1, 1, 1, 1, 1, 1]
export const Home = () => {
  return (
    <div className='pb-10'>
      <section className="home-container flex flex-col md:flex-row justify-between items-center min-h-screen p-10 ">

        <div className="left-side w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ff6347]" style={{ fontFamily: 'phraseFont' }}>
            Το φαγητό στην πόρτα σου,
            <p className="md:text-3xl font-semibold text-[#ff6347] mt-4 md:mt-6 md:text-center" style={{ fontFamily: 'sans-serif', fontSize: '3rem' }}>
              σε χρόνο ρεκόρ!!!
            </p>
          </h1>
        </div>


        {/* right image */}
        <div className="right-side w-full md:w-1/2 flex justify-center items-center">
          <img
            src={foodImage}
            alt="Food"
            className="w-3/4 md:w-1/2 h-auto object-cover rounded-lg"
          />
        </div>

      </section>

      <section className=' lg:py-10 lg:px-20'>
        <Carousel />
      </section>

      <section className='mt-[5rem] px-5 lg:px-20'>
        <h1 className='text-2xl font-semibold text-gray-200 py-3'>
          Απο τα καλύτερα καταστήματα του Βόλου
        </h1>
        <div className='mt-8 flex flex-wrap items-center justify-around gap-10'>
          {
            restaraunt.map((item) => <RestaurantCard />)
          }
        </div>
      </section>


    </div>
  );
};


export default Home;