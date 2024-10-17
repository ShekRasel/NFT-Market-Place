import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { RiWallet3Fill,RiArrowDownSFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';



function Navbar() {
    const [bgColor, setBgColor] = useState(false);
    const [showInput , setShowInput] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    const [showLinks2, setShowLinks2] = useState(false);
    const [showBarLinks, setShowBarLinks] = useState(true);

    const changeBgColor = ()=>{
        if(window.scrollY > 50){
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


    const changeBar = ()=>{
        setShowBarLinks(true);
    }
    const changeBar2 = ()=>{
        setShowBarLinks(false);
    }

    const showLinksSecondeTime = ()=>{
        setShowLinks2(!showLinks2);
    }

  return (
    <div className={`flex justify-between sm:flex sm:justify-between px-0  md:px-10 xl:px-24 2xl:px-80 top-0 fixed left-0   right-0 items-center py-1  auto z-50 transition-all ease-out duration-500 ${ bgColor ? 'bg-indigo-900 bg-opacity-40 backdrop-blur-sm' : 'bg-transparent'}`}>

        <Link to={'home'}>
            <div className='flex items-center mt-5'>
                <img src="logos/nft.png" alt="logo" className='h-13 w-10 md:w-12'/>
                <h1 className='text-white font-bold text-xl md:text-3xl'>NFT</h1>
            </div>
        </Link>

        {/* desktop view start*/}
        <div className='hidden lg:block'>
            <ul className=' gap-2 lg:gap-6 xl:gap-10 text-gray-300 font-bold  items-center flex'>
                <li className='hover:text-white'>
                    <NavLink to={'home'} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}>
                        Home
                    </NavLink>
                </li>
                <li className='hover:text-white'>
                    <NavLink to={'explore-items'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}>
                        Explore
                    </NavLink>
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
                               <NavLink to={'explore-items'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')} onClick={()=>{setShowLinks(false)}}>
                                    <li className='py-3 hover:text-white'>Explore Items</li>
                               </NavLink>
                                <NavLink to={'items-details'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')} onClick={()=>{setShowLinks(false)}}>
                                    <li className='py-3 hover:text-white'>Item Details</li>
                                </NavLink>
                                <NavLink to={'item-create'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')} onClick={()=>{setShowLinks(false)}}>
                                    <li className='py-3 hover:text-white'>Create Item</li>
                                </NavLink>
                                
                                <NavLink to={'support'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')} onClick={()=>{setShowLinks(false)}}>
                                    <li className='py-3 hover:text-white'>Support</li>
                                </NavLink>
                                <NavLink to={'signin'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')} onClick={()=>{setShowLinks(false)}}>
                                    <li className='py-3 hover:text-white'>Sign In Page</li>
                                </NavLink>
                                <NavLink to={'signup'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')} onClick={()=>{setShowLinks(false)}}>
                                    <li className='py-3 hover:text-white'>Sign Up Page</li>
                                </NavLink>
                            </ul>
                        </div>}
                </li>
               <NavLink to={'support'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}>
                <li className='hover:text-white'>
                        Support
                    </li>
               </NavLink>
            </ul>
        </div>
        {/* desktop view end*/}
        
        {/* moblie view start*/}
        <div className='flex items-center'>
            <div className='py-4 relative  px-6'
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
                <NavLink to={'wallet'}  className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-300')}>
                    <button className='hidden   md:flex items-center sm:gap-2 md:gap-3 py-3 px-2 sm:px-3 border-2 rounded-md font-bold sm:text-sm md:text-lg text-white hover:bg-indigo-700 hover:border-indigo-700'>
                        <RiWallet3Fill />
                        Wallet Connect
                    </button>
                </NavLink>
                <div className={` lg:hidden px-4 py-1 mr-1 rounded-md ${showBarLinks?'':' lg:hidden border-2 border-indigo-700'}`}>
                    {showBarLinks ?  <FaBars className='text-white text-2xl md:text-3xl  lg:hidden ' onClick={changeBar2} />:
                        <div className='lg:hidden'>
                           <RxCross1 className='text-white text-2xl md:text-3xl lg:hidden ' onClick={changeBar} />
                            <div>
                                <div className='bg-slate-700  absolute mt-5 pr-4  pl-4 py-2 mr-6 right-0 rounded-md'>
                                    <ul className='text-sm text-slate-300 font-semibold'>
                                        <li className='py-3 hover:text-white'>
                                            <Link to={'home'} onClick={changeBar}>Home</Link>
                                        </li>
                                        <li className='py-3 hover:text-white'>
                                            <Link to={'explore-items'} onClick={changeBar}>Exprole</Link>
                                        </li>
                                        <li className='py-3 hover:text-white'>Community</li>
                                        <li className='py-3 hover:text-white'>
                                            <span className='flex  items-center gap-24 ' onClick={showLinksSecondeTime}>
                                                Pages
                                                <RiArrowDownSFill className='h-7 w-6'/> 
                                            </span>
                                            {showLinks2 && 
                                                <div className='bg-slate-600 rounded-md pl-4 mt-2'>
                                                    <ul className='text-sm text-slate-300 '>
                                                        
                                                        <Link to={'items-details'} onClick={changeBar}>
                                                            <li className='py-3 hover:text-white'>Item Details</li>
                                                        </Link>
                                                        <Link to={'item-create'} onClick={changeBar}>
                                                            <li className='py-3 hover:text-white'>Create Item</li>
                                                        </Link>
                                                        <Link to={'wallet'} onClick={changeBar}>
                                                            <li className='py-3 px-2 hover:text-white hover:bg-slate-500 rounded-md'>Connect Wallet</li>
                                                        </Link>
                                            
                                                        
                                                        <Link to={'signin'} onClick={changeBar}>
                                                            <li className='py-3 hover:text-white'>Sign In Page</li>
                                                        </Link>
                                                        <Link to={'signup'} onClick={changeBar}>
                                                            <li className='py-3 hover:text-white'>Sign Up Page</li>
                                                        </Link>
                                                    </ul>
                                                </div>}
                                        </li>
                                        <Link to={'support'} onClick={changeBar}>
                                            <li className='py-3 hover:text-white'>Support</li>
                                        </Link>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                
        </div>
        {/* mobile view end*/}
    </div>
  )
}

export default Navbar