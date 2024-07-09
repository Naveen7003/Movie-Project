import React from 'react';
import { Link } from 'react-router-dom';
import noimage from "../../../public/default-avatar-profile-icon-social-600nw-1677509740.webp"

const HorizontalCards = ({ data }) => {
  return (
    <div className='w-full px-6'>
      
      <div className='w-full overflow-y-hidden flex '>
        {data.length>0 ? data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='min-w-[15%] mr-5 '>
            <img
              className='w-[90%] h-[42%] object-cover '
              src={d.backdrop_path || d.profile_path ?  `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`:noimage}
              alt=""
            />
            <div className='text-white h-[48%] overflow-y-auto'>
              <h1 className="text-[2.5vh]  w-[78%] font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className='text-[2vh]'>
                {d.overview.slice(0, 40)}.....
                <span className="text-blue-400">more</span>
              </p>
            </div>
          </Link>
        )): <h1 className='text-3xl mt-5 text-white font-black text-center'>Nothing to Show</h1>}
      </div>
    </div>
  );
};

export default HorizontalCards;
