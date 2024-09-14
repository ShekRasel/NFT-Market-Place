import React, { useState } from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { ImTwitter } from "react-icons/im";
import { Link } from 'react-router-dom';


function SignInSignUp({doSignUp,doSignIn,signin,signup,singUpSubtext,singUpSubtext2,userNameField,signInbtn,signUpbtn,singInSubtext3,singUpSubtext3}) {
  return (
    <div className='flex  md:px-0 flex-col justify-center items-center mt-24'>
        <div className=' pt-12 rounded-md bg-slate-600   md:w-3/5 lg:w-3/6 2xl:w-3/12 '>
            <div className='text-white rounded-lg  flex flex-col  items-center px-2 md:px-12'>
                <h1 className='text-3xl font-bold'>{signin}{signup}</h1>
                <p className='font-bold text-slate-400 text-sm text-center mt-2'>{singUpSubtext}</p>
                <span className='flex gap-4 mt-5'>
                    <GrFacebookOption className='text-blue-600  bg-slate-500 text-4xl p-2 rounded-md hover:bg-white'/>
                    <FcGoogle className='bg-slate-500 text-4xl p-2 rounded-md hover:bg-white'/>
                    <ImTwitter className='bg-slate-500 text-4xl p-2 rounded-md text-blue-600 hover:bg-white'/>
                </span>

                <div className='mt-5 font-bold text-slate-400 flex md:gap-2 text-sm '>
                    <span className=' hidden md:block'>-----------</span>
                    <h2 className='text-'>{singUpSubtext2}</h2>
                    <span className='hidden md:block'>-----------</span>
                </div>

                <div className='mt-5 w-full font-bold text-lg'>
                    <form action="">
                        <h1 className='p-1'>Email</h1>
                        <input type="text" placeholder='Enter your email' className='w-full  p-3 rounded-md bg-slate-500 outline-none text-base mb-2'/>
                        {!userNameField && <><h1 className='p-1'>Username</h1>
                            <input type="text" placeholder='Enter your name' className='w-full pl-3 p-3 rounded-md bg-slate-500 outline-none text-base mb-2'/></>
                        }
                        
                        <h1 className='p-1'>Password</h1>
                        <input type="text" placeholder='Enter your password' className='w-full pl-3 p-3 rounded-md bg-slate-500 outline-none text-base'/>

                        {userNameField && <div className='sm:flex justify-between font-bold text-slate-400 pt-2'>
                            <div className='flex gap-2'> 
                                <input type="checkbox" />
                                <h1>Keep me signed in</h1>
                            </div>
                            <h1 className='hover:text-white'>Forgot Password?</h1>
                        </div>}

                    <button className='bg-indigo-600 w-full rounded-md p-3 mt-8'>{signInbtn}{signUpbtn}</button>
                    </form>
                </div>
            </div>

            <div className='text-white border-m mt-16 border-t '>
                <p className='text-center py-8 font-bold text-slate-400'>{singInSubtext3}{singUpSubtext3}
                <Link>
                <div className='hover:text-indigo-600 text-white'>
                        <h1>{doSignUp}{doSignIn}</h1>
                </div>
                </Link> </p>
            </div>
        </div>
    </div>
    
  )
}

export default SignInSignUp