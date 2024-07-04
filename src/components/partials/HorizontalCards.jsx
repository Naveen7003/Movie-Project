import React from 'react'
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
                        <span className="text-blue-400">more</span>
                    </p>{" "}
                    </div>
                   
                </div>
            ))}
        </div>

  )
}

export default HorizontalCards