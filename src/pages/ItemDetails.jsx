import React from 'react'
import Bar from '../components/Bar'
import { FaHeart } from "react-icons/fa";


function ItemDetails() {
  return (
    <div className=' pt-44 px-4 md:px-10 xl:px-24 2xl:px-80 text-white'>
        <Bar exproleItemText = 'Explore Item'/>
        <div className=' lg:flex mt-20 gap-14  justify-between'>
            <div className=' bg-slate-600 rounded-lg lg:w-1/2 lg:h-2/3 justify-center flex  lg:p-24  top-0'>
                <img src="/src/assets/images/item.png" alt="" className=''/>
            </div>

            <div className='lg:w-1/2 '>
                <div className='flex flex-col md:flex-row justify-between gap-4 mt-10 lg:mt-0'>
                    <h1 className='text-2xl lg:text-3xl font-bold xl:text-4xl'>3d locker illustration</h1>
                    <span className='bg-white  text-black px-3 py-2 flex justify-center items-center gap-2 rounded-md'>
                        <FaHeart className='text-red-600'/>
                        <span>4.6k</span>
                    </span>
                </div>

                <div className='flex flex-col md:flex-row gap-6 mt-10 '>
                    <div className='flex gap-2 md:border-r-4 pr-6'>
                        <img src="/src/assets/images/image2.jpg"  className='w-12 rounded-md' alt="" />
                        <div>
                            <h1 className='font-bold'>@Devid_Mill...</h1>
                            <h1 className='font-bold text-slate-400'>Owned by</h1>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <img src="/src/assets/images/image2.jpg" className='w-12 rounded-md' alt="" />
                        <div>
                            <h1 className='font-bold'>@Devid_Mill...</h1>
                            <h1 className='font-bold text-slate-400'>Owned by</h1>
                        </div>
                    </div>
                </div>

                <p className='font-bold text-slate-400 mt-10'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus veniam suscipit perspiciatis sunt? Voluptatibus quam iusto voluptatem sapiente ullam incidunt quas culpa officia nemo, laboriosam minima tenetur debitis?
                </p>

                <div className='border rounded-lg  md:flex bg-slate-600 mt-5 justify-evenly px-4'>

                    <div className=' md:border-r py-6 flex flex-col gap-2 pr-10 lg:pr-2 xl:pr-10'>
                        <h1 className='text-md font-bold'><span className='text-slate-400'>Artist :</span> <span>Devid Methio</span></h1>
                        <h1 className='text-md font-bold'><span className='text-slate-400'>Size :</span> <span>4000x4000</span></h1>
                        <h1 className='text-md font-bold'><span className='text-slate-400'>Created On :</span> <span>04 April,2024</span></h1>
                    </div>

                    <div className='py-6 '>

                        <h1 className='text-md font-bold'><span className='text-slate-400'>Current Bid :</span> <span>4.89 ETH</span></h1>
                        <h1 className='text-xl font-bold text-center py-2 mt-4 bg-slate-700 rounded-md'>05:14:23:45</h1>

                    </div>
                    
                </div>
                
                <div className='border rounded-lg mt-4 py-4 px-2'>
                    <div className='pt-2'>
                        <span className='px-3 py-2 text-lg font-bold mr-2 bg-slate-500 rounded-md'>History</span><span className='px-3 py-2 text-lg font-bold mr-2 bg-slate-500 rounded-md'>Bids</span><span className='px-3 py-2 text-lg font-bold mr-2 bg-slate-500 rounded-md'>Details</span>
                    </div>
                    <div className='border-t mt-8 px-2 pt-2'>
                        <div className='flex justify-between'>
                            <div>
                                <div className='flex gap-2  pr-6'>
                                <img src="/src/assets/images/image2.jpg"  className='w-10 rounded-md' alt="" />
                                <div>
                                    <h1 className='font-bold'>@Devid_Mill...</h1>
                                    <h1 className='font-bold text-slate-400'>Owned by</h1>
                                </div>
                                </div>
                            </div>
                            <div className='font-bold'>
                                <h1 className='text-right'>4.75 ETH</h1>
                                <h1>= $12.245</h1>
                            </div>
                        </div>
                        <div className='flex justify-between pt-5'>
                            <div>
                                <div className='flex gap-2  pr-6'>
                                <img src="/src/assets/images/image2.jpg"  className='w-10 rounded-md' alt="" />
                                <div>
                                    <h1 className='font-bold'>@Devid_Mill...</h1>
                                    <h1 className='font-bold text-slate-400'>Owned by</h1>
                                </div>
                                </div>
                            </div>
                            <div className='font-bold'>
                                <h1 className='text-right'>4.75 ETH</h1>
                                <h1>= $12.245</h1>
                            </div>
                        </div>
                        <div className='flex pt-5 justify-between'>
                            <div>
                                <div className='flex gap-2  pr-6'>
                                <img src="/src/assets/images/image2.jpg"  className='w-10 rounded-md' alt="" />
                                <div>
                                    <h1 className='font-bold'>@Devid_Mill...</h1>
                                    <h1 className='font-bold text-slate-400'>Owned by</h1>
                                </div>
                                </div>
                            </div>
                            <div className='font-bold'>
                                <h1 className='text-right'>4.75 ETH</h1>
                                <h1>= $12.245</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='bg-indigo-600 w-full mt-8 py-3 text-xl font-bold rounded-md'>Place Bid</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetails