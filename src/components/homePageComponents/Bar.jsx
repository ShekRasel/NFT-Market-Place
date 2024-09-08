import React from 'react'

function Bar({name1,name2,topArtist , PopularCollection, btntext, btn1, btn}) {
  return (
    <div>
        <div className='sm:flex justify-between border-r-0 border-l-0 border-t-0 border pb-6 mt-16'>
        <h1 className='text-3xl py-4 sm:py-0 font-semibold'>{name1} {name2} {topArtist}{PopularCollection}</h1>
        <span className='flex gap-4'>
          <button className='bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-lg rounded-md'>{btntext}{btn1}{btn}</button>
        </span>
      </div>
    </div>
  )
}

export default Bar