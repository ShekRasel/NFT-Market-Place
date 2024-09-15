import React, { useState } from 'react'
import Bar from '../components/Bar'
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];
function CreateItem() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className='text-white h-auto pt-44 px-4 md:px-10 xl:px-24 2xl:px-80'>
        <Bar createItem='Item creation'/>
        <div className='md:p-10 rounded-md bg-slate-800 lg:flex gap-10 mt-16 text-white  justify-between'>
            {/* left side */}
            <div className=' lg:w-2/5 md:px-2 lg:px-0'>
                <div className=''>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
                </div>

                <div className='bg-slate-400 flex justify-between font-bold p-2 md:p-4 rounded-md mt-4'>
                    <h2>banner-design.png</h2>
                    <h2>X</h2>
                </div>
                <div className='bg-slate-400 flex justify-between font-bold p-2 md:p-4 rounded-md mt-4'>
                    <h2>banner-design.png</h2>
                    <h2>X</h2>
                </div>
            </div>
            {/* right side */}
            <div className='lg:w-3/5 px-2 mt-4 lg:mt-0 rounded-md'>
                <div className='font-bold'>
                    <h1>Title</h1>
                    <input type="text" placeholder='Enter item title' className='p-3 w-full rounded-md outline-none bg-slate-600'/>
                </div>
                <div className='font-bold mt-6'>
                    <h1>Description (optional)</h1>
                    <input type="textarea" placeholder='Type item description ' className='p-3 pb-12 w-full rounded-md outline-none bg-slate-600'/>
                </div>
                <div className='font-bold mt-6'>
                    <h1>Price</h1>
                    <input type="text" placeholder='10 ETH' className='p-3 w-full rounded-md outline-none bg-slate-600'/>
                </div>
                <div className='flex gap-5   mt-6 font-bold'>
                    <div className=' w-full'>
                        <h1>Royalties</h1>
                        <input type="text" className='p-3 w-full rounded-md bg-slate-600' placeholder='5%'/>
                    </div>
                    <div className=' w-full'>
                        <h1>Size</h1>
                        <input type="text" className='p-3 w-full rounded-md bg-slate-600' placeholder="e.g.'size"/>
                    </div>
                </div>
                <h1 className='text-2xl font-bold mt-6'>Time Auctions (optiona)</h1>
                <div className='flex flex-col md:flex-row gap-5   mt-6 font-bold'>
                    <div className=' w-full'>
                        <h1>Starting date</h1>
                        <input type="date" className='p-3 w-full rounded-md bg-slate-600' placeholder='5%'/>
                    </div>
                    <div className=' w-full'>
                        <h1>Expiration date</h1>
                        <input type="time" className='p-3 w-full rounded-md bg-slate-600' placeholder="e.g.'size"/>
                    </div>
                </div>

                <button className='bg-indigo-600 p-3 text-xl hover:bg-indigo-700 rounded-md w-full mt-8'>Create Item</button>
            </div>
        </div>
    </div>
  )
}

export default CreateItem