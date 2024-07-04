import React from 'react'
<<<<<<< HEAD
const HorizontalCards = ({data}) => {
  return (
        <div className='w-[100%] h-[33vh] mb-5  overflow-y-hidden flex  '>
            {data.map((d,i)=> (
                <div key={i} className='min-w-[15%] p-2  mr-5 '>
                    <img className='w-full h-[43%] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} alt="" />
                    <div className='text-white max-h-[45%] '>
                    <h1 className="text-[2.3vh] mt-1 w-[71%] font-semibold ">
                        {d.name || d.title || d.original_name || d.original_title}
                    </h1>
                    <p className="text-[2vh]">
                        {d.overview.slice(0, 35)}.....
=======

const HorizontalCards = ({data}) => {
  return (
    <div className='w-full  p-5'>
        <div className='mb-5'>
            <h1 className='text-3xl font-semibold text-zinc-400'>
                Trending
            </h1>
        </div>
        <div className='w-[100%]  overflow-y-hidden flex'>
            {data.map((d,i)=> (
                <div key={i} className='min-w-[15%] p-2 mr-5 mb-4'>
                    <img className='w-full h-[55%] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} alt="" />
                    <div className='text-white h-[45%] '>
                    <h1 className="text-[9vh] mt-3 w-[70%] font-semibold font-xl">
                        {d.name || d.title || d.original_name || d.original_title}
                    </h1>
                    <p className="">
                        {d.overview.slice(0, 70)}.....
>>>>>>> 41fea3f3d764f3ab013b3f9ac40d6a64f09f8e6d
                        <span className="text-blue-400">more</span>
                    </p>{" "}
                    </div>
                   
                </div>
            ))}
        </div>
<<<<<<< HEAD

=======
    </div>
>>>>>>> 41fea3f3d764f3ab013b3f9ac40d6a64f09f8e6d
  )
}

export default HorizontalCards
