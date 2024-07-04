import React from 'react';

const HorizontalCards = ({ data }) => {
  return (
    <div className='w-full p-5'>
      <div className='mb-5'>
        <h1 className='text-3xl font-semibold text-zinc-400'>
          Trending
        </h1>
      </div>
      <div className='w-full overflow-y-hidden flex'>
        {data.map((d, i) => (
          <div key={i} className='min-w-[15%] p-2 mr-5 mb-4'>
            <img
              className='w-full h-[55%] object-cover'
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`}
              alt=""
            />
            <div className='text-white h-[45%]'>
              <h1 className="text-[9vh] mt-3 w-[70%] font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p>
                {d.overview.slice(0, 70)}.....
                <span className="text-blue-400">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
