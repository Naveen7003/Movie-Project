import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from "./partials/Topnav"
import Dropdown from "./partials/Dropdown"
import axios from '../utils/axios'
import Cards from './partials/Cards'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component'

const Trending = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState('all')
    const [trending, settrending] = useState([])
    const [duration, setduration] = useState("day")
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "VideoApp | TrendingPage | " +category.toUpperCase()

    const Gettrending = async() => {                    //fetched trending items for cards
        try {
            const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`)
            if(data.results.length > 0){
                settrending((prevState) => [...prevState, ...data.results])   // Append new data to existing state
            setpage(page +1)
        }else{  
            sethasMore(false) 
        }
        } catch (error) {
            console.log("Error: ",error)
        }
    } 

    const refreshHandler = async() => {
        if(trending.length === 0){
            Gettrending()
        }else{
            setpage(1)
            settrending([])
            Gettrending()
        }
    }

    
    useEffect(()=> {
        // settrending([]); // clear the previous data
        // Gettrending()
        refreshHandler()     // set new data
    },[category, duration])

    return trending.length > 0 ? (
        <div className='w-screen h-screen bg-[#0d0d0d] '>
            <div className='w-full py-3 px-8  flex items-center'>
                <h1 className='text-3xl font-semibold text-zinc-400'>
                    <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] mr-3  ri-arrow-left-line'></i>{""}
                    Trending
                </h1>
                <Topnav />
                <Dropdown title="Category" options={["tv","movie","all"]} func={(e) => setcategory(e.target.value)} />
                <div className='w-[2%]'></div>
                <Dropdown title="Duration" options={["week","day"]} func={(e) => setduration(e.target.value)}/>
            </div>
            <InfiniteScroll
                dataLength={trending.length}      // These properties are important for InfiniteScroll to work
                next={Gettrending}
                hasMore={hasMore}
                loader={<Loader />}>
                <Cards data={trending} title={category} />
            </InfiniteScroll>
        </div>
    ): (
        <Loader />
    )
}

export default Trending
