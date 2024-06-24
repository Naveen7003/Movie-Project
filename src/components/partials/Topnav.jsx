import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"

const Topnav = () => {
    const [query, setquery] = useState("")
    const GetSearches = async() => {
      try {
          const d = await axios.get(`/search/multi?query=${query}`)
          console.log(d)
      } catch (error) {
          console.log("Error: ",error)
      }
  }

  useEffect(()=> {
      GetSearches()
  },[])
    
  return (
    <div className='w-full h-[10vh] relative flex justify-start ml-[15%] items-center'>
        <i className="text-zinc-400 text-xl ri-search-line"></i>
        <input 
            className='w-[50%] text-zinc-200 mx-10  text-[18px] outline-none border-none bg-transparent '
            onChange={(e) => setquery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search Anything"
         />
         {query.length > 0 && (
            <i onClick={()=> setquery("")} class="text-zinc-400 text-2xl ri-close-fill"></i>
         )}
        <div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded'>
            {/* <Link className=' hover:text-black hover:bg-zinc-300 w-[100%] p-7 flex text-zinc-600 font-semibold border-zinc-100 justify-start items-center border-b-2 '>
                <img src="" alt="" />
                <span>Hello Everyone</span>
            </Link> */}
           
        </div>

    </div>
  )
}

export default Topnav