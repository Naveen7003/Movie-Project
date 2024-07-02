import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"
import { Link } from 'react-router-dom'
import noimage from "../../../public/default-avatar-profile-icon-social-600nw-1677509740.webp"
const Topnav = () => {
    const [query, setquery] = useState("")
    const [searches, setsearches] = useState(null)
    const GetSearches = async() => {
      try {
          const {data} = await axios.get(`/search/multi?query=${query}`)
          setsearches(data.results)
      } catch (error) {
          console.log("Error: ",error)
      }
  }

  useEffect(()=> {
      GetSearches()
  },[query])
    
  return (
    <div className='w-full h-[10vh] relative flex justify-start  items-center'>
        <i className="text-zinc-400 text-xl ml-[15%] ri-search-line"></i>
        <input 
            className='w-[50%] text-zinc-200 mx-10  text-[18px] outline-none border-none bg-transparent '
            onChange={(e) => setquery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search Anything"
         />
         {query.length > 0 && (
            <i onClick={()=> setquery("")} className="text-zinc-400 text-2xl ri-close-fill"></i>
         )}
        <div className='absolute w-[50%] max-h-[50vh] ml-[18%] bg-zinc-200 top-[90%] overflow-auto rounded'>
            {searches && searches.map((s,i) =>(
                 <Link key={i} className=' hover:text-black hover:bg-zinc-300 w-[100%] p-5 flex text-zinc-600 font-semibold border-zinc-100 justify-start items-center border-b-2 '>
                 <img className='h-[8vh] w-[8vh] object-cover mr-8 rounded-md shadow-lg' loading='lazy' src={s.backdrop_path || s.backdrop_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: noimage} alt="" />      {/*image ka link directly nhi mila isliye uska base url ke sath data mei jo half link hai use apply kar diya */}
                <span>{s.title || s.original_title || s.original_name}</span>
            </Link> 
            ))}
            
           
        </div>

    </div>
  )
}

export default Topnav