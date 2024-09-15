import React from 'react'
import { FaHeart } from "react-icons/fa";
import Bar from './Bar';


function AuctionCard() {
    const cards = [
        {view:'4.5k',bgImage:'/src/assets/images/image-01.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#541',photo:'/src/assets/images/image2.jpg',name:'@Devid_Milli...',designation:'creator',hits:'4.45 ETH', time:'05 : 11 : 4 : 445' },
        {view:'4.5k',bgImage:'/src/assets/images/image-21.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#52',photo:'/src/assets/images/image4.jpg',name:'@Devid_Milli...',designation:'creator',hits:'9.55 ETH', time:'05 : 111 : 05 : 59' },
        {view:'4.5k',bgImage:'/src/assets/images/image-22.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#551',photo:'/src/assets/images/image1.jpg',name:'@Devid_Milli...',designation:'creator',hits:'2.5 ETH', time:'05 : 15 : 02 : 25' },
        {view:'4.5k',bgImage:'/src/assets/images/image-23.svg',bgImagecolor:'bg-indigo-600',text:'22-Bit Digital#1251',photo:'/src/assets/images/image3.jpg',name:'@Devid_Milli...',designation:'creator',hits:'2.454 ETH', time:'05 : 15 : 05 : 45' }

    ];
  return (
    <div>
      <Bar name1={'Live Auction'} btn='View All'/>

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
                <h1 className='text-xl font-semibold text-center bg-slate-600 rounded-md py-2'>{card.time}</h1>
                </div>
        ))}
      </div>

    </div>
  )
}

export default AuctionCard