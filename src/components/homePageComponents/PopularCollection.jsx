import React from 'react'
import Bar from './Bar'
import { FaHeart } from "react-icons/fa";

function PopularCollection() {

    const PopularCollections = [{
        header:'Creative 3d illustration',
        photo : 'images/image1.jpg',
        name : '@Lathium_Lui...',
        react : '1.6K'
    },
    {
        header:'Creative 3d illustration',
        photo : 'images/image3.jpg',
        name : '@Lathium_Lui...',
        react : '1.6K'
    }];
  return (
    <div>
       <div className='mb-10'>
        <Bar PopularCollection = 'Popular Collection' btntext = 'Explore More'/>
       </div>
        
       <div className='grid lg:grid-cols-2 gap-8 '>
        {
            PopularCollections.map((PopularCollection, index)=>(
                <div className=' p-8 bg-slate-800  rounded-lg object-cover' key={index}>

                    {
                        index === 0 ? (
                        <div className='flex gap-10'>
                            <div>
                                <img src="images/camerea.svg" className='w-96'/>
                            </div>

                            <div className='grid grid-row-2'>
                                <img src="images/calender.svg" alt="" className='w-full'/>
                                <img src="images/hammer.svg" alt="" className='w-full'/>
                            </div>
                        </div>

                    ):(
                        <div className='flex  w-full gap-10 '>
                            <div>
                                <img src="/src/assets/images/fire.svg" alt="" className='' />
                            </div>
                            <div className='grid grid-rows-2 gap-3'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <img src="images/blade.svg" alt="" className='w-full'/>
                                    <img src="images/tap.svg" alt="" className='w-full'/>
                                </div>
                                <div>
                                    <img src="images/watch.svg" alt="" className='w-96' />
                                </div>
                            </div>
                        </div>
                    )
                    }
                    

                    <div className='w-full  gap-4'>
                        <div className='flex justify-between py-4 items-center'>
                            <h1 className='md:text-2xl font-bold'>
                                {PopularCollection.header}
                            </h1>
                            <div className='bg-slate-200 justify-center flex text-black gap-2 rounded-md p-1'>
                                <button className=''>
                                        <FaHeart className='text-red-500'/> 
                                </button>
                                <span>
                                        {PopularCollection.react}
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={PopularCollection.photo}  className='w-14 rounded-md'/>
                            <div className=''>
                                <h1 className='font-bold'>{PopularCollection.name}</h1>
                                <h2 className='text-slate-400 font-bold'>Creator</h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default PopularCollection