import React from 'react'

const Moviedetails = () => {
  return (
   <div className='w-full py-3 px-8  flex items-center'>
            <h1 className='text-3xl font-semibold text-zinc-400'>
                <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] mr-3  ri-arrow-left-line'></i>{""}
                People
            </h1>
            <Topnav />
           
        </div>
  )
}

export default Moviedetails
