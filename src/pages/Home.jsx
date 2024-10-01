import React from 'react'
import MyCarousel from '../components/homePageComponents/MyCarousel'
import AuctionCard from './../components/homePageComponents/AuctionCard';
import TodaysPic from '../components/homePageComponents/TodaysPic';
import Features from '../components/homePageComponents/Features';
import PopularCollection from '../components/homePageComponents/PopularCollection';

function Home() {
  return (
    <div className=' text-white pt-24 md:pt-44 px-4 md:px-10 xl:px-24 2xl:px-80'>
        <div className='lg:flex justify-between  '>
            <div className=' '>
                <div className='text-2xl md:text-5xl lg:text-4xl font-bold'>
                    <h1 className=''>Tailwind Template for</h1>
                    <h1 className='py-2'>NFT MarketPlace and</h1>
                    <h1 className=''>Web3 Platform</h1>
                </div>
                <div className='text-sm font-semibold  md:text-xl lg:text-base xl:text-xl md:py-5 py-2 lg:py-2 text-slate-300 '>
                    <p>Template for NFT, Token, and Web3 marketplace projects,</p> 
                    <p> based on Tailwind CSS. Comes with all the essential UI </p> 
                    <p>components and pages you need to build an NFT</p> 
                    <p> marketplace or all sorts of Web3 platforms.</p>
                </div>
                <div className='flex gap-8 py-5'>
                    <button className='flex items-center gap-3 py-3 px-2 md:px-8  rounded-md font-bold text-xl text-white bg-indigo-600 hover:bg-indigo-700'>
                    Explore Now
                    </button>
                    <button className='flex items-center gap-3 py-3 px-2 md:px-4 border-2 rounded-md        font-bold text-xl text-white hover:bg-indigo-700 hover:border-indigo-700'>
                    Upload Your Art
                    </button>
                </div>
            </div>
            <div className='flex justify-center'>
                <img src="images/hero-image.svg" alt=""  className= 'w-9/12 lg:w-11/12'/>
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