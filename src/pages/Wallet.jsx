import React from 'react'
import Bar from '../components/Bar';

function Wallet() {
    const features = [
        {
            logo : <img src="images/image-31.svg" alt="" />,
            color:'bg-slate-300',
            heading: 'Meta Mask',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <img src="images/image-32.svg" alt="" />,
            color:'bg-green-400',
            heading: 'Bitski',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <img src="images/image-33.svg" alt="" />,
            color:'bg-blue-400',
            heading: 'Fortmatic',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <img src="images/image-34.svg" alt="" />,
            color:'bg-yellow-400',
            heading: 'Wallet Connect',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <img src="images/image-35.svg" alt="" />,
            color:'bg-slate-300',
            heading: 'Coinbase Wallet',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <img src="images/image-36.svg" alt="" />,
            color:'bg-green-400',
            heading: 'Authereum',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <img src="images/image-37.svg" alt="" />,
            color:'bg-blue-400',
            heading: 'Kaikas',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            logo : <img src="images/image-38.svg" alt="" />,
            color:'bg-indigo-600',
            heading: 'Torus',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
    ]
  return (
    <div className=' pt-44 px-4 md:px-10 xl:px-24 2xl:px-80 text-white flex flex-col gap-24'>
        <Bar walletText='Wallet Connect'/>
        <div className=''>
            <h1 className=' text-center text-4xl lg:text-5xl font-bold py-8 '>Connet Your Wallet</h1>
            <p className='text-center text-xl pb-10 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui excepturi consequatur sequi ad voluptatibus?</p>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 '>
                {features.map((feature, index)=>(
                    <div className='bg-slate-600 rounded-xl p-7 hover:bg-white hover:text-black ' key={index}>
                        <div className={`border max-w-fit p-3 rounded-full ${feature.color}`}>
                            {feature.logo}
                        </div>
                        <h1 className='py-4 text-xl font-bold'>{feature.heading}</h1>
                        <p className='text-slate-400 font-semibold'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Wallet