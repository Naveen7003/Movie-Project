import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data, title}) => {
  return (
    <div className='flex flex-wrap w-full p-20 bg-[#0d0d0d]'>
        {data.map((c,i) => (
            <Link className="w-[25vh]  relative mr-[4%] mb-[2%]" key={i}>
                <img
                    className='h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover'
                    src={`https://image.tmdb.org/t/p/original/${ c.poster_path ||c.backdrop_path || c.profile_path}`} alt=""
                />
                <h1 className='text-zinc-300 text-xl mt-3 font-semibold'>
                    {c.name || c.title || c.original_name || c.original_title}
                </h1> 
                {c.vote_average && (
                    <div className='text-white bg-yellow-600 h-[5vh] absolute rounded-full w-[5vh] flex items-center bottom-[25%] right-[-10%] justify-center font-semibold '>
                    {(c.vote_average*10).toFixed()} <sup>%</sup>
               </div> 
                )} 
                
            </Link>
        ))}
    </div>
  )
}

export default Cards