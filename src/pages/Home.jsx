import React from 'react'
import MyCarousel from '../components/homePageComponents/MyCarousel'
import AuctionCard from './../components/homePageComponents/AuctionCard';
import TodaysPic from '../components/homePageComponents/TodaysPic';
import Features from '../components/homePageComponents/Features';
import PopularCollection from '../components/homePageComponents/PopularCollection';

function Home() {
  return (
    <div className=' bg-gray-900 text-white h-auto pt-44 px-4 md:px-10 xl:px-24 2xl:px-80'>
        <div className='lg:flex justify-between  '>
            <div className=' '>
                <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold'>
                    <p className=''>Tailwind Template for</p>
                    <p className='py-2'>NFT MarketPlace and</p>
                    <p className=''>Web3 Platform</p>
                </h1>
                <div className='text-md  md:text-xl lg:text-base xl:text-xl md:py-5 py-2 lg:py-2 text-slate-300'>
                    <p>Template for NFT, Token, and Web3 marketplace projects,</p> <p> based on Tailwind CSS. Comes with all the essential UI </p> <p>components and pages you need to build an NFT</p> <p> marketplace or all sorts of Web3 platforms.
                    </p>
                </div>
                <div className='flex gap-8 py-5'>
                    <button className='flex items-center gap-3 py-3 px-8  rounded-md font-bold text-xl text-white bg-indigo-600 hover:bg-indigo-700'>
                    Explore Now
                    </button>
                    <button className='flex items-center gap-3 py-3 px-4 border-2 rounded-md        font-bold text-xl text-white hover:bg-indigo-700 hover:border-indigo-700'>
                    Upload Your Art
                    </button>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src="/src/assets/images/hero-image.svg" alt=""  className= 'w-9/12 lg:w-11/12'/>
            </div>
        </div>
        <MyCarousel/>
        <AuctionCard/>
        <TodaysPic/>
        <Features/>
        <PopularCollection/>
    </div>
  )
}

export default Home