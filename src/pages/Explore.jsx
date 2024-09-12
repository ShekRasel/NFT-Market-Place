import React, { useEffect, useState } from 'react'
import TodaysPic from '../components/homePageComponents/TodaysPic'
import {RiArrowDownSFill } from "react-icons/ri";
import Bar from '../components/Bar';


function Explore() {

    const isBlocked = true;
    const [showArtWork, setShowArtWork] = useState(false);
    const [sortBy, setSortBy] = useState(false);


    const artwork = ()=>{
        setShowArtWork(!showArtWork);
        setSortBy(false);
    }

    const sortList = ()=>{
        setSortBy(!sortBy);
        setShowArtWork(false);
    }

    const changeSortArtWork = (event)=>{

        if(window.scrollY> 1){
            setSortBy(false);
            setShowArtWork(false);
        }
        
        if(event.target instanceof Element && !event.target.closest('.dropdown')){
            setSortBy(false);
            setShowArtWork(false);
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',changeSortArtWork);
        window.addEventListener('click',changeSortArtWork);

        return(()=>{
            window.removeEventListener('scroll',changeSortArtWork)
            window.removeEventListener('click',changeSortArtWork);
        })
    },[]);

    


  return (
    <div className=' pt-44 px-4 md:px-10 xl:px-24 2xl:px-80 text-white flex flex-col gap-24'>
        <Bar exploreText = 'Explore items'/>

        <div className=' lg:flex justify-center lg:justify-between p-4 border rounded-md lg:gap-0 text-sm lg:text-base'>
            <div className='flex  lg:justify-evenly  font-semibold gap-3'>
                <span className='p-3 hover:bg-indigo-700 rounded-md bg-slate-700'>All</span>
                <span className='p-3 hover:bg-indigo-700 rounded-md bg-slate-700'>Digital Art</span>
                <span className='p-3 hover:bg-indigo-700 rounded-md bg-slate-700'>Music</span>
                <span className='p-3 hover:bg-indigo-700 rounded-md bg-slate-700'>3D Illustration</span>
            </div>
            <div className='flex lg:justify-evenly  font-semibold gap-3 mt-10 lg:mt-0 cursor-pointer'>
                <div className='dropdown'>
                    <span className='p-3 hover:bg-indigo-700 rounded-md bg-slate-700 flex gap-2' onClick={artwork}>
                        All Artworks <RiArrowDownSFill className='h-7 w-6'/> 
                    </span>
                    {showArtWork && <div className='bg-slate-600 rounded-md  absolute '>
                        <h1 className='px-8 py-2 hover:bg-blue-600 rounded-md'>All Artwork</h1>
                        <h1 className='px-8 py-2 hover:bg-blue-600 rounded-md'>Digital</h1>
                        <h1 className='px-8 py-2 hover:bg-blue-600 rounded-md'>Illustration</h1>
                    </div>}
                </div>
                
                <div className='dropdown'>
                    <span className='p-3 hover:bg-indigo-700 rounded-md bg-slate-700 flex gap-2' onClick={sortList}>
                        Sort By <RiArrowDownSFill className='h-7 w-6'/>
                    </span>
                    {sortBy && <div className='bg-slate-600 rounded-md  absolute '>
                        <h1 className={`px-5 py-2 hover:bg-blue-600 rounded-md`}
                        >Sort By</h1>
                        <h1 className='px-5 py-2 hover:bg-blue-600 rounded-md'>Top Rate</h1>
                        <h1 className='px-5 py-2 hover:bg-blue-600 rounded-md'>Mid Rate</h1>
                        <h1 className='px-5 py-2 hover:bg-blue-600 rounded-md'>High Rate</h1>
                    </div>}
                </div>
            </div>
        </div>

        <TodaysPic isBlocked ={isBlocked}/>
    </div>
  )
}

export default Explore