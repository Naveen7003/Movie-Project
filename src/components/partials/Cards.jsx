import React from 'react'
import { Link } from 'react-router-dom'
import noimage from "../../../public/default-avatar-profile-icon-social-600nw-1677509740.webp"

const Cards = ({data, title}) => {
  return (
    <div className='flex flex-wrap w-full p-20 bg-[#0d0d0d]'>
        {data.map((card,i) => (
            <Link to={`/${card.media_type || title}/details/${card.id}`} className="w-[25vh]  relative mr-[4%] mb-[2%]" key={i}>
                <img
                    className='h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover'
                    src={ card.poster_path ||card.backdrop_path || card.profile_path ?
                        `https://image.tmdb.org/t/p/original/${ card.poster_path ||card.backdrop_path || card.profile_path}`: noimage} alt=""
                />
                <h1 className='text-zinc-300 text-xl mt-3 font-semibold'>
                    {card.name || card.title || card.original_name || card.original_title}
                </h1> 
                {card.vote_average && (
                <div className='text-white bg-yellow-600 h-[5vh] absolute rounded-full w-[5vh] flex items-center bottom-[25%] right-[-10%] justify-center font-semibold '>
                    {(card.vote_average*10).toFixed()} <sup>%</sup>
               </div> 
                )} 
                
            </Link>
        ))}
    </div>
  )
}

export default Cards
