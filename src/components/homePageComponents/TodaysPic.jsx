import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import Bar from './Bar';


function TodaysPic({isBlocked}) {

  const cards = [
    {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'1.45 ETH', time:'05 : 15 : 05 : 45' },
    {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'1.45 ETH', time:'05 : 15 : 05 : 45' },
    {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'1.45 ETH', time:'05 : 15 : 05 : 45' },
    {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'1.45 ETH', time:'05 : 15 : 05 : 45' },
    {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'1.45 ETH', time:'05 : 15 : 05 : 45' },
    {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'1.45 ETH', time:'05 : 15 : 05 : 45' },
    {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'1.45 ETH', time:'05 : 15 : 05 : 45' },
    {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'1.45 ETH', time:'05 : 15 : 05 : 45' }


];



return (
  <div >

    { !isBlocked && <Bar name2={`Today's Pic`} btn1='View All'/>}
    

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14'>
      {cards.map((card,index)=>(
          <div className=' rounded-lg bg-slate-800 p-5' key={index}>
              
              <div className='flex justify-center relative z-0'>
                  <img src={card.bgImage} className='w-80' alt="" />
                  <button className='bg-white px-2 rounded mt-4 mr-4 absolute text-black text-sm right-1 flex items-center gap-1'>
                    <FaHeart className='text-red-500'/>
                    {card.view}
                  </button>
              </div>
              <h1 className='text-xl pt-3 font-semibold'>{card.text}</h1>
              <div className='grid grid-cols-2 text-sm py-4'>
                  <div className='flex gap-2 '>
                      
                          <img src={card.photo} alt="" className=' w-1/4 rounded-md'/>
                      
                      <div className='flex flex-col font-semibold'>
                          <h1 className='text-sm'>{card.name}</h1>
                          <span className='text-slate-400 '>{card.designation}</span>
                      </div>
                  </div>
                  <div className='flex flex-col text-right font-semibold'>
                      <span>{card.hits}</span>
                      <span className='text-slate-400'>Current Bit</span>
                  </div>
              </div>

              <div className='flex  justify-between border-t pt-8 mt-2'>
                <button className='bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-md'>
                  Place Bid
                </button>
                <h1 className='flex items-center gap-2 hover:text-indigo-700'>
                <TfiReload />
                View History
                </h1>
              </div>
              
            </div>
      ))}
    </div>

    <div className='w-auto  flex justify-center mt-12'>
      <button className='flex items-center gap-3 py-3 px-4 border-2 rounded-md justify-center font-bold text-xl text-white hover:bg-indigo-700 hover:border-indigo-700'>
                        Load More...
      </button>
    </div>

  </div>
)
}

export default TodaysPic