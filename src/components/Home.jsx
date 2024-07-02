import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from '../utils/axios'
import Header from "./partials/Header"
import HorizontalCards from './partials/HorizontalCards'

const Home = () => {
    document.title = "VideoApp | HomePage"
    const [wallpaper, setwallpaper ] = useState(null)
    const GetHeaderWallpaper = async() => {
      try {
          const {data} = await axios.get(`/trending/all/day`)
          let randomData = data.results[(Math.random() * data.results.length).toFixed()]   //yha ek random and fixed no ayega which is less than 19
          setwallpaper(randomData)
      } catch (error) {
          console.log("Error: ",error)
      }
  }
  

  useEffect(()=> {
      !wallpaper && GetHeaderWallpaper()  //agr wallpaper mai kuch nhi hai tabhi call karna
  },[])
  return wallpaper ? (
    <>
        <Sidenav />
        <div className='h-full w-[80%] '>
            <Topnav />
            <Header data={wallpaper} />
            <HorizontalCards />
            
        </div>
    </>
  ): (
    <h1>Loading</h1>
  )
}

export default Home