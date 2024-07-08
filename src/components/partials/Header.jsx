import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {

  const backgroundImageUrl =
    data.backdrop_path || data.profile_path //yha pr check hoga ki image ayi hai to thik nhi to blank rahega
      ? `https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        }`
      : "";

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[50vh] flex flex-col items-start justify-end p-6"
    >
      <h1 className="text-[5vh] font-semibold text-zinc-300">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-1/2 text-white ">
        {data.overview.slice(0, 150)}.....
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>
      {/*.slice se jo overview hoga wo sirf 200 letters ka hi hoga */}
      <p className="text-white">
        <i className="text-blue-600 text-xl ri-megaphone-fill"></i>
        {data.release_date || "No Information"}
        <i className="text-blue-600 ml-2 text-xl ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556CD] font-semibold text-white mt-1 p-2">Watch Trailer</Link>
    </div>
  );
};

export default Header;
