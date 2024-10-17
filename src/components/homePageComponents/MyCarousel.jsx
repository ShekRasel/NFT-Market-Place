import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function MyCarousel() {
  const carouselRef = useRef(); // create a ref for the carousel

  const artistCard = [
    {
      name: '@David Miller',
      view: '9.75 ETH',
      photo: 'images/image1.jpg',
    },
    {
      name: '@Elon Mask',
      view: '7.5 ETH',
      photo: 'images/image2.jpg',
    },
    {
      name: '@Hiliya_Farah',
      view: '9.75 ETH',
      photo: 'images/image3.jpg',
    },
    {
      name: '@Willium_Dev',
      view: '9.75 ETH',
      photo: 'images/image4.jpg',
    },
    {
      name: '@David Miller',
      view: '9.75 ETH',
      photo: 'images/image4.jpg',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      slidesToSlide: 1,
    },

    desktop1: {
      breakpoint: { max: 1439, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 2, 
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className='h-auto mt-16'>
      <div className='flex justify-between border-r-0 border-l-0 border-t-0 border pb-6'>
        <h1 className='text-xl md:text-3xl font-semibold'>Top Artists</h1>
        <div className='flex gap-4'>
          <span
            className='p-3 px-4 rounded-md items-center hover:bg-indigo-600 bg-slate-500 cursor-pointer'
            onClick={() => carouselRef.current.previous()} // move to previous slide
          >
            <FaLongArrowAltLeft />
          </span>
          <span
            className='p-3 px-4 rounded-md items-center hover:bg-indigo-600 bg-slate-500 cursor-pointer'
            onClick={() => carouselRef.current.next()} // move to next slide
          >
            <FaLongArrowAltRight />
          </span>
        </div>
      </div>

      <div className='gap-4 mt-12'>
        <Carousel
          ref={carouselRef} // assign the ref to Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={true}
          itemClass="px-2"
        >
          {artistCard.map((card, index) => (
            <div key={index} className='flex p-6 py-8 rounded-xl border-2 gap-6 items-center text-lg hover:border-pink-500 bg-slate-700'>
              <img src={card.photo} alt="" className='w-1/3 rounded-md' />
              <div>
                <h1>{card.name}</h1>
                <h1 className='text-green-600'>{card.view}</h1>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;
