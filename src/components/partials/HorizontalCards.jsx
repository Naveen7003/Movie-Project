import React from 'react';
import { Link } from 'react-router-dom';

const HorizontalCards = ({ data }) => {
  return (
    <div className='w-full px-6'>
      
      <div className='w-full overflow-y-hidden flex '>
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] mr-5 '>
            <img
              className='w-[90%] h-[40%] object-cover'
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`}
              alt=""
            />
            <div className='text-white h-[40%] '>
              <h1 className="text-[2.5vh]  w-[78%] font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className='text-[2vh]'>
                {d.overview.slice(0, 40)}.....
                <span className="text-blue-400">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
