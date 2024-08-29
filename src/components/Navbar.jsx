import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RiWallet3Fill,RiArrowDownSFill } from "react-icons/ri";


function Navbar() {
    const [bgColor, setBgColor] = useState(false);
    const [showInput , setShowInput] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    const changeBgColor = ()=>{
        if(window.scrollY >=50){
            setBgColor(true);
        }else{
            setBgColor(false);
        };
    };

    const searchInputShow = ()=>{
        setSearchInput(true);
        console.log('hellow')

    }

    useEffect(()=>{
        window.addEventListener('scroll',changeBgColor);
        return ()=>{
            window.removeEventListener('scroll',changeBgColor);
        }
    },[]);


  return (
    <div className={`flex justify-evenly bg-transparent top-0  px-8 fixed left-0 right-0 items-center p-1 auto  ${bgColor?'bg-[#55556e]':'bg-transparent'}`}>
        <div className='flex items-center mt-5'>
            <img src="/src/assets/logos/nft.png" alt="logo" className='h-13 w-12'/>
            <h1 className='text-white font-bold text-3xl'>NFT</h1>
        </div>
        <div>
            <ul className='flex gap-12 text-gray-300 font-bold  items-center'>
                <li className='hover:text-white'>
                    Home
                </li>
                <li className='hover:text-white'>
                    Explore
                </li>
                <li className='hover:text-white'>
                   Community
                </li>
                <li className='hover:text-white py-5  w-24'
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
            <div className='py-4'
                onMouseEnter={()=>setShowInput(true)}
                onMouseLeave={()=>setShowInput(false)}>
                <IoSearchOutline className='w-8 h-6 text-white  hover:text-indigo-700 '/>
                {showInput? 
                    <div className='flex items-center  bg-slate-600 rounded-md   absolute right-1/4 mt-4'>
                        <input type="text" className='text-white outline-none bg-slate-600 p-4 rounded-md' placeholder='search here...'/>
                        <IoSearchOutline className='w-8 h-6 text-white'/>
                    </div>
                    :''}
            </div>
        <button className='flex items-center gap-3 py-3 px-4 border-2 rounded-md font-bold text-xl text-white hover:bg-indigo-700 hover:border-indigo-700'>
            <RiWallet3Fill />
            Wallet Connect
        </button>
        </div>
    </div>
  )
}

export default Navbar