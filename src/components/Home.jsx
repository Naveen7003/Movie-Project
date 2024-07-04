import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Header from "./partials/Header"
import HorizontalCards from './partials/HorizontalCards'
import Dropdown from './partials/Dropdown'
import Loader from './Loader'

const Home = () => {
  document.title = "VideoApp | HomePage"
  const [wallpaper, setwallpaper ] = useState(null)
  const [trending, settrending] = useState(null)
  const [category, setcategory] = useState("all")

  const GetHeaderWallpaper = async() => {             //fetched trending all day items for header
      try {
          const {data} = await axios.get(`/trending/all/day`)
          let randomData = data.results[(Math.random() * data.results.length).toFixed()]   //yha ek random and fixed no ayega which is less than 19
          setwallpaper(randomData)
      } catch (error) {
          console.log("Error: ",error)
      }
  }

  const Gettrending = async() => {                    //fetched trending items for cards
    try {
        const {data} = await axios.get(`/trending/${category}/day`)
        settrending(data.results)
    } catch (error) {
        console.log("Error: ",error)
    }
  } 

  useEffect(()=> {                                    //jab jab category change hogi trending change hoga
    Gettrending()
    !wallpaper && GetHeaderWallpaper()                //agr wallpaper mai kuch nhi hai tabhi call karna
  },[category])


  return wallpaper && trending ? (                    //agr api se trending and wallpaper dono aa rhe hai tabhi show kro warna loading show kro
    <>
        <Sidenav />
        <div className='h-full w-[80%] overflow-auto overflow-x-hidden'>
            <Topnav />
            <Header data={wallpaper} />

            <div className='p-3 flex justify-between'>
              <h1 className='text-3xl mt-2 font-semibold text-zinc-400'>
                Trending
              </h1>
              <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=> setcategory(e.target.value)} />

            </div>

            <HorizontalCards data={trending} />
            
        </div>
    </>
  ): (
    <Loader />
  )
}

export default Home