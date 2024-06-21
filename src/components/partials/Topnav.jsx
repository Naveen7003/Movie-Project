import React from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
  return (
    <div className='w-full h-[10vh] relative flex justify-center items-center'>
        <i class="text-zinc-400 text-xl ri-search-line"></i>
        <input 
            className='w-[50%] text-zinc-200 mx-10  text-xl outline-none border-none bg-transparent '
            type="text"
            placeholder="Search Anything"
         />
        <i class="text-zinc-400 text-2xl ri-close-fill"></i>
        <div className='absolute w-[50%] h-[50vh] bg-zinc-200 top-[90%] overflow-auto'>
            <Link className=' hover:text-black hover:bg-zinc-300 w-[100%] p-7 flex text-zinc-600 font-semibold border-zinc-100 justify-start items-center border-b-2 '>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link>
            <Link className=' hover:text-black hover:bg-zinc-300 w-[100%] p-7 flex text-zinc-600 font-semibold border-zinc-100 justify-start items-center border-b-2 '>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link>
            <Link className=' hover:text-black hover:bg-zinc-300 w-[100%] p-7 flex text-zinc-600 font-semibold border-zinc-100 justify-start items-center border-b-2 '>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link>
            <Link className=' hover:text-black hover:bg-zinc-300 w-[100%] p-7 flex text-zinc-600 font-semibold border-zinc-100 justify-start items-center border-b-2 '>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link>
            <Link className=' hover:text-black hover:bg-zinc-300 w-[100%] p-7 flex text-zinc-600 font-semibold border-zinc-100 justify-start items-center border-b-2 '>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link>
        </div>

    </div>
  )
}

export default Topnav