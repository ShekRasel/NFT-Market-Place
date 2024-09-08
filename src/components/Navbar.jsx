import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RiWallet3Fill,RiArrowDownSFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";


function Navbar() {
    const [bgColor, setBgColor] = useState(false);
    const [showInput , setShowInput] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    const changeBgColor = ()=>{
        if(window.scrollY >50){
            setBgColor(true);
        }else{
            setBgColor(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll',changeBgColor);
        return ()=>{
        window.removeEventListener('scroll',changeBgColor);
        }
    },[]);


  return (
    <div className={`flex justify-between sm:flex sm:justify-between px-0  md:px-10 xl:px-24 2xl:px-80 bg-transparent top-0 fixed left-0   right-0 items-center py-1  auto z-50 ${bgColor?'bg-indigo-700 bg-opacity-15 backdrop-blur-sm':'bg-transparent'}`}>

        <div className='flex items-center mt-5'>
            <img src="/src/assets/logos/nft.png" alt="logo" className='h-13 w-12'/>
            <h1 className='text-white font-bold text-3xl'>NFT</h1>
        </div>

        <div className='hidden lg:block'>
            <ul className=' gap-2 lg:gap-6 xl:gap-10 text-gray-300 font-bold  items-center flex'>
                <li className='hover:text-white'>
                    Home
                </li>
                <li className='hover:text-white'>
                    Explore
                </li>
                <li className='hover:text-white'>
                   Community
                </li>
                <li className='hover:text-white py-5'
                    onMouseEnter={()=>{setShowLinks(true)}}
                    onMouseLeave={()=>{setShowLinks(false)}}
                >
                    <span className='flex'
                    >
                        Pages
                        <RiArrowDownSFill className='h-7 w-6'/> 
                    </span>
                    {showLinks && 
                        <div className='bg-slate-700 pr-32 pl-4 pt-4 pb-4 absolute mt-5  rounded-md'>
                            <ul className='text-sm text-slate-300'>
                                <li className='py-3 hover:text-white'>Explore Items</li>
                                <li className='py-3 hover:text-white'>Item Details</li>
                                <li className='py-3 hover:text-white'>Create Item</li>
                                <li className='py-3 hover:text-white'>Connect Item</li>
                                <li className='py-3 hover:text-white'>Support</li>
                                <li className='py-3 hover:text-white'>Sign In Page</li>
                                <li className='py-3 hover:text-white'>Sign Up Page</li>
                            </ul>
                        </div>}
                </li>
                <li className='hover:text-white'>
                    Support
                </li>
            </ul>
        </div>

        <div className='flex items-center gap-6 '>
            <div className='py-4 relative'
                onMouseEnter={()=>setShowInput(true)}
                onMouseLeave={()=>setShowInput(false)}>
                <IoSearchOutline className='w-8 h-6 text-white  hover:text-indigo-700 hidden md:flex'/>
                {showInput && 
                    <div className='flex items-center  bg-slate-600 rounded-md   absolute right-0.5 mt-4'>
                        <input type="text" className='text-white outline-none bg-slate-600 p-4 rounded-md ' placeholder='search here...'/>
                        <IoSearchOutline className='w-8 h-6 text-white'/>
                    </div>
                    }
            </div>
           
                <button className='hidden   md:flex items-center sm:gap-2 md:gap-3 py-3 px-2 sm:px-3 border-2 rounded-md font-bold sm:text-sm md:text-lg text-white hover:bg-indigo-700 hover:border-indigo-700'>
                    <RiWallet3Fill />
                    Wallet Connect
                </button>

                <FaBars className='text-white text-3xl  lg:hidden mr-3'/>
        </div>
    </div>
  )
}

export default Navbar