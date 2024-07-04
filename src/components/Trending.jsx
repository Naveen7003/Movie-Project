import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from "./partials/Topnav"
import Dropdown from "./partials/Dropdown"
import axios from '../utils/axios'

const Trending = () => {
    document.title = "VideoApp | TrendingPage"
    const navigate = useNavigate()
    const [category, setcategory] = useState('all')
    const [trending, settrending] = useState(null)
    const [duration, setduration] = useState("day")

    const Gettrending = async() => {                    //fetched trending items for cards
        try {
            const {data} = await axios.get(`/trending/${category}/${duration}`)
            settrending(data.results)
        } catch (error) {
            console.log("Error: ",error)
        }
      } 
    
      useEffect(()=> {                                    
        Gettrending()               
      },[category,duration])

  return (
    <div className='w-screen h-screen p-[3%]'>
        <div className='w-full flex items-center'>
            <h1 className='text-3xl font-semibold text-zinc-400'>
                <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] mr-3  ri-arrow-left-line'></i>{""}
                Trending
            </h1>
            <Topnav />
            <Dropdown title="Category" options={["tv","movie","all"]} />
            <div className='w-[2%]'></div>
            <Dropdown title="Duration" options={["week","day"]} />

        </div>
    </div>
  )
}

export default Trending