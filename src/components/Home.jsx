import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Header from "./partials/Header"
import HorizontalCards from './partials/HorizontalCards'

const Home = () => {
  document.title = "VideoApp | HomePage"
  const [wallpaper, setwallpaper ] = useState(null)
  const [trending, settrending] = useState(null)

    const GetHeaderWallpaper = async() => {             //fetched trending all day items for header
      try {
          const {data} = await axios.get(`/trending/all/day`)
          let randomData = data.results[(Math.random() * data.results.length).toFixed()]   //yha ek random and fixed no ayega which is less than 19
          setwallpaper(randomData)
      } catch (error) {
          console.log("Error: ",error)
      }
  }

    const Gettrending = async() => {                      //fetched trending items for cards
    try {
        const {data} = await axios.get(`/trending/all/day`)
        settrending(data.results)
    } catch (error) {
        console.log("Error: ",error)
    }
  } 

  useEffect(()=> {
      !wallpaper && GetHeaderWallpaper()  //agr wallpaper mai kuch nhi hai tabhi call karna
      !trending && Gettrending()          //agr trending mai kuch nhi hai tabhi call karna
  },[])


  return wallpaper && trending ? (         //agr api se trending and wallpaper dono aa rhe hai tabhi show kro warna loading show kro
    <>
        <Sidenav />
        <div className='h-full w-[80%] overflow-auto overflow-x-hidden'>
            <Topnav />
            <Header data={wallpaper} />
            <HorizontalCards data={trending} />
            
        </div>
    </>
  ): (
    <h1>Loading</h1>
  )
}

export default Home
