import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "../components/Loader";
import HorizontalCards from "../components/partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const Persondetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); //data routes se aa rha hai isliye use params me ayega
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie")
  const { info } = useSelector((state) => state.person); //person ko show krne ke liye person ko save krna padega jiske liye person ko redux se lana padega
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      //isse person remove ho jayegi component se
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] w-screen h-[220vh] bg-[#000000]">
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] mr-3  ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="flex w-full">
        {/* part 2 left poster */}
        <div className="w-[20%]">
          <img
            className="h-[40vh]  mt-4 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-5 mb-2 w-[76%] h-[2px] bg-zinc-500" />
          {/* Social media links */}
          <div className="text-2xl text-white flex gap-x-5">  
            <a
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}/`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              href={`https://www.twitter.com/${info.externalid.twitter_id}/`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
            
          </div>

          {/* Personal info */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-2">Personal Info</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-2">Known For</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-2">
            Gender
          </h1>
          <h1 className="text-zinc-400">{info.detail.gender === 2 ? "Male" : "Female"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-2">
            Birthday
          </h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-2">
            Deathday
          </h1>
          <h1 className="text-zinc-400">{info.detail.deathday ? info.detail.deathday : "Alive"}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-2">
            Place Of Birth
          </h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-2">
            Also Known as
          </h1>
          <h1 className="text-zinc-400">{info.detail.also_known_as.join(",")}</h1>


          






        </div>

        {/* part 3 right details and info */}
        <div className="w-[80%] ml-[5%]">

          <h1 className="text-6xl text-zinc-400  my-5 font-black">{info.detail.name}</h1>

          <h1 className="text-xl text-zinc-400 font-semibold ">
            Biography
          </h1>
          <p className="mt-3 text-zinc-400">{info.detail.biography}</p>

          <h1 className="text-xl text-zinc-400 mb-2 font-semibold mt-3">
            Known for
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex mt-5 justify-between">
              <h1 className="text-xl text-zinc-400 font-semibold ">
                Acting
              </h1>

              <Dropdown title={"Category"} options={['tv', 'movie']} func={(e) => setcategory(e.target.value)} />
          </div>

          <div className="w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-sm border-zinc-700 p-3 shadow-[rgba(255,255,255,.3)]">
            {info[category+ "Credits"].cast.map((c,i)=> (
              <li className="hover:text-white text-zinc-400 duration-300 cursor-pointer">
                <Link to={`/${category}/details/${c.id}`} className="flex  flex-col ">
                  <span className="ml-3 -mt-6">
                  { c.name ||
                    c.title ||
                    c.original_name ||
                    c.original_title}
                  </span>
                  <span className="block ml-3 mb-2">
                    {c.character && `character name: ${c.character}` }</span>
                </Link>
            </li>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Persondetails;
