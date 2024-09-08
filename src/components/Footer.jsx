import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";



function Footer() {
  return (
    <div className='bg-slate-900 pt-14'>
        <div className='px-4 md:px-8 lg:px-10 xl:px-24 2xl:px-52 bg-slate-700'>
            <div className='py-10 md:py-20  grid md:grid-cols-2 lg:grid-cols-4  text-white gap-10 md:gap-10 lg:gap-0'>
                <div className=''>
                    <div className='flex items-center '>
                        <img src="/src/assets/logos/nft.png" alt="logo" className='h-13 w-12'/>
                        <h1 className='text-white font-bold text-3xl'>NFT</h1>
                    </div>

                    <p className='py-5 text-slate-300 font-bold'>Lorem ipsum dolor sit amet <br /> consectetur  adipisicing  <br /> elit. Illum ipsa at eos amet</p>

                    <div>
                        <ul className='flex gap-4 text-2xl '>
                            <li ><FaFacebookSquare className='hover:text-indigo-600' /></li>
                            <li><ImYoutube className=' hover:text-indigo-600'/></li>
                            <li><FaTwitterSquare className=' hover:text-indigo-600'/></li>
                            <li><FaLinkedin className=' hover:text-indigo-600'/></li>
                        </ul>
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-3xl font-bold  pb-5 cursor-pointer hover:text-white'>Company</h1>
                    <h2 className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'>About Company</h2>
                    <h2 className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'> Company services</h2>
                    <h2 className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'>Job opportunities</h2>
                    <h2 className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'>Contact us</h2>
                </div>

                <div className=''>
                    <h1 className='text-3xl font-bold  pb-5 cursor-pointer hover:text-white'>Customer</h1>
                    <h2 className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'>Client support</h2>
                    <h2 className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'> Latest news</h2>
                    <h2 className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'>Company Details</h2>
                    <h2 className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'>Who we are</h2>
                </div>
                <div className=' px-2 '>
                    <h1 className='text-3xl font-bold  pb-5 cursor-pointer hover:text-white'>Subscribe Now</h1>
                    <p className='font-bold text-slate-300 p-2 cursor-pointer hover:text-white'>Enter your email address for receiving valuable newsletters.</p>
                    <div className='flex border-indigo-600 items-center bg-white hover:border-indigo-600 hover:border-2 rounded-md p-1'>
                        <input type="text" name="" id="" placeholder='Enter your Email Address ' className='w-full outline-none pl-2 rounded-md text-black'/>
                        <span className='p-2 bg-indigo-700 rounded-md'>
                            <FaLocationArrow className='text-3xl '/>
                        </span>
                    </div>
                </div>

            </div>
            <div className='border-t py-5 text-center text-white'>
                <h1 className=' md:text-xl font-bold'>
                    © Copyright 2025 - NFT, All rights reserved.
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Footer