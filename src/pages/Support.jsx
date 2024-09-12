import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Support() {
  return (
    <div className=' pt-44 px-4 md:px-10 xl:px-24 2xl:px-80 text-white flex flex-col gap-24'>
        <p className='p-5 border bg-slate-700 rounded-md font-bold text-lg'>
            <span className='hover:text-indigo-700 cursor-pointer'>Home </span>/ Connect Wallet
        </p>

        <div className='lg:flex rounded-lg  border'>
            <div className='bg-indigo-600 w-full lg:w-1/3 flex flex-col pl-4 md:px-10 gap-36 py-16'>
                <div>
                    <h1 className=' text-2xl md:text-4xl lg:text-3xl xl:text-5xl font-bold lg:text-right'>Contact Info</h1>
                    <p className='font-bold text-lg lg:text-right py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                </div>

                <div className='text-xl font-bold'>
                    <h1 className='lg:text-right'>info@yourmail.com</h1>
                    <h1 className='lg:text-right py-1'>+248585859</h1>
                    <h1 className='lg:text-right py-1'>Open from Mo.Till Fri</h1>
                    <h1 className='lg:text-right'>09.00 - 17.00</h1>
                    <div className='mt-16'>
                        <p className='lg:text-right text-lg font-bold py-2'>Follow us on</p>
                        <div className='flex gap-4 text-2xl hover:text-slate-200 font-bold lg:justify-end'>
                            <FaFacebookSquare/>
                            <ImYoutube/>
                            <FaTwitterSquare/>
                            <FaLinkedin/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-slate-600 pl-4 md:pl-10 lg:pl-16 py-16 w-full  lg:w-3/4'>
                    <h1 className='text-2xl md:text-4xl lg:text-3xl xl:text-5xl font-bold'>Get in touch</h1>
                    <p className='text-lg font-bold py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Suscipit, laboriosam!</p>

                    <div className='py-10 pr-4'>
                        <form action="">
                            <div className='md:flex gap-3'>
                                <div className='font-bold md:w-1/2'>
                                    <h1 className='py-2'>Your Name</h1>
                                    <input type="text" className='w-full py-2 outline-none border px-3 rounded-md bg-slate-700 text-slate-300 font-bold' placeholder='Enter Your name'/>
                                </div>
                                <div className='font-bold md:w-1/2'>
                                    <h1 className='py-2'>Your Email</h1>
                                    <input type="text" className='w-full py-2 outline-none border px-3 rounded-md bg-slate-700 text-slate-300 font-bold' placeholder='Enter Your email'/>
                                </div>
                            </div>
                            <h1 className='mt-4 pb-3 font-bold'>Your Message</h1>
                            <input type="text" className='w-full pb-36 outline-none border rounded-md p-3 text-md text-slate-300 font-bold bg-slate-600' placeholder='Type your message'/>
                        </form>
                    </div>

                    <button className='px-10  py-3 bg-indigo-600 hover:bg-indigo-700 font-bold rounded-md '>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default Support