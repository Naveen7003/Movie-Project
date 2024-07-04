import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    
  return (
   
    <div className='h-screen w-[20%] border-r-2 border-zinc-300 p-3'>
        <h1 className='text-2xl text-white font-bold'>
        <i className="ri-tv-fill mr-2 text-[#6556CD]"></i>
            <span>SCSDB </span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-2'>
            <h1 className='text-white font-semibold text-xl mt-8 mb-5'>
                New Feeds
            </h1>
            <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i className="ri-fire-fill mr-2"></i>Trending
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i className="ri-bard-fill mr-2"></i>Popular
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i className="ri-tv-2-fill mr-2"></i>Tv Shows
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i className="ri-slideshow-2-fill mr-2"></i> OTT Shows
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i className="ri-movie-fill mr-2"></i>Movies
            </Link>

        </nav>
        <hr className='border-none h-[1px] bg-zinc-400' />
        <nav className='flex flex-col text-zinc-400 text-xl gap-1'>
            <h1 className='text-white font-semibold text-xl mt-6 mb-5'>
                Website Information
            </h1>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i className="ri-information-fill mr-2"></i>About
            </Link>
            <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'>
                <i className="ri-phone-fill mr-2"></i>Contact Us
            </Link>           

        </nav>
    </div>
   
  )
}

export default Sidenav