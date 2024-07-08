import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import HorizontalCards from "../components/partials/HorizontalCards"

const Moviedetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams(); //data routes se aa rha hai isliye use params me ayega
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie); //movie ko show krne ke liye movie ko save krna padega jiske liye movie ko redux se lana padega
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      //isse movie remove ho jayegi component se
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[145vh] w-screen px-[10%]"
    >
      {/* part 1 navigation */}
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] mr-3  ri-arrow-left-line"
        ></Link>{" "}
        {/* ek component se doosre component pr jane ke liye link and to change route wi use a href tag */}
        <a href="info.detail.homepage">
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}/`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>
          <i className="">imdb</i>
        </a>
      </nav>

      {/* part 2 paster and details */}
      <div className="flex w-full">
        <img
            className="h-[52vh] mt-4 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt=""
        />
        <div className="content ml-[5%] text-white">

          <h1 className="text-4xl font-black ">
            {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
            <small className="text-xl font-bold ">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex mt-2  items-center gap-x-5 text-zinc-100">
            <span className=' bg-yellow-600 h-[5vh] p-5 rounded-full w-[5vh] flex items-center  justify-center font-semibold '>
              {(info.detail.vote_average*10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-xl leading-6">User Score</h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g)=> g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div> 

          <h1 className="text-xl font-semibold italic mb-3">{info.detail.tagline}</h1>

          <h1 className="text-xl">{info.detail.tagline}</h1>
          <p className="-mt-1">{info.detail.overview}</p>

          <h1 className="text-xl mb-2 mt-2">Movie Translated</h1>
          <p className="-mt-3 mb-2">{info.translations.join(" ")}</p>

          <Link className="p-2 rounded-lg bg-[#6566cd]" to={`${pathname}/trailer`}>
            <i className="text-xl ri-play-fill mr-3"></i>
            Play Trailer
          </Link>

        </div>
      </div>

      {/* part 3 available and platforms*/}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
          {info.watchproviders && info.watchproviders.flatrate && (
              <div className="flex gap-5 font-semibold text-zinc-100">
                <h1>Available on Platforms</h1>
                {info.watchproviders.flatrate.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh]  rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
              </div>
            )}

            {info.watchproviders && info.watchproviders.rent && (
              <div className="flex gap-5 font-semibold text-zinc-100">
                <h1>Available on rent</h1>
                {info.watchproviders.rent.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
              </div>
            )}
              

              {info.watchproviders && info.watchproviders.buy && (
              <div className="flex gap-5 font-semibold text-zinc-100">
                <h1>Available on Buy</h1>
                {info.watchproviders.buy.map((w) => (
                <img
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] rounded-md object-cover"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
              </div>
            )}
      </div>

      {/* part 4 recommendations and similarities */}
      <hr className="mt-5 h-[1px] bg-slate-300" />
      <div className="mt-4 flex flex-col gap-5">

      <h1 className="text-2xl text-white font-semibold">Recommendation and Similar</h1>
      <HorizontalCards
          data={info.recommendations.length>0 ? 
                info.recommendations: info.similar} 
      />
       
      </div>
      
    </div>
  ) : (
    <Loader />
  );
};

export default Moviedetails;
