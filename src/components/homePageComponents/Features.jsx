import React from 'react'
import { CiWallet } from "react-icons/ci";
import { FcPicture } from "react-icons/fc";
import { FaTag } from "react-icons/fa6";
import { FcFeedback } from "react-icons/fc";

function Features() {
    const features = [
        {
            logo : <CiWallet className='h-12 w-12  text-blue-700'/>,
            color:'bg-slate-300',
            heading: 'Set Up Your Wallet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <FcFeedback className='h-12 w-12 '/>,
            color:'bg-green-400',
            heading: 'Set Up Your Wallet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <FcPicture className='h-12 w-12 '/>,
            color:'bg-blue-400',
            heading: 'Set Up Your Wallet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo :<FaTag className='h-12 w-12 '/>,
            color:'bg-yellow-400',
            heading: 'Set Up Your Wallet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
    ]
  return (
    <div className='mt-20'>
        <h1 className=' text-center text-4xl font-bold py-8 '>Core Features</h1>
        <p className='text-center text-xl pb-10 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui excepturi consequatur sequi ad voluptatibus?</p>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 '>
            {features.map((feature, index)=>(
                <div className='bg-slate-600 rounded-xl p-7 hover:bg-white hover:text-black ' key={index}>
                    <div className={`border max-w-fit p-3 rounded-full ${feature.color}`}>
                        {feature.logo}
                    </div>
                    <h1 className='py-4 text-xl font-bold'>{feature.heading}</h1>
                    <p className='text-slate-400'>{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features