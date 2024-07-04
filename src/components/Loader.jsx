import React from 'react'
import loader from '/leaders.gif'
const Loader = () => {
  return (
    <div className='h-full w-full flex justify-center items-center bg-black'>
        <img className='h-[60%]' src={loader} alt="" />
    </div>
  )
}

export default Loader