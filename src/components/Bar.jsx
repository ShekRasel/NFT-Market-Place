import React from 'react'

function Bar({exploreText,walletText,supportText,exproleItemText,createItem}) {
  return (
    <div>
        <p className='p-5 border bg-slate-700 rounded-md font-bold text-lg'>
            <span className='hover:text-indigo-700 cursor-pointer'>Home </span>/ {exploreText}{walletText}{supportText}{exproleItemText}{createItem}
        </p>
    </div>
  )
}

export default Bar