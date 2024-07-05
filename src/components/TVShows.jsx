import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cards from './partials/Cards'
import Loader from "./Loader"

const TVShows = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState('airing_today')
    const [tvshow, settvshow] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "VideoApp | TV Shows"

    const GetTvshow = async() => {                    //fetched tvshow items for cards
        try {
            const {data} = await axios.get(`/tv/${category}?page=${page}`)
            if(data.results.length > 0){
                settvshow((prevState) => [...prevState, ...data.results])   // Append new data to existing state
            setpage(page +1)
        }else{  
            sethasMore(false) 
        }
        } catch (error) {
            console.log("Error: ",error)
        }
    } 

    const refreshHandler = async() => {
        if(tvshow.length === 0){
            GetTvshow()
        }else{
            setpage(1)
            settvshow([])
            GetTvshow()
        }
    }

    
    useEffect(()=> {
        // settrending([]); // clear the previous data
        // Gettrending()
        refreshHandler()     // set new data
    },[category])

  return tvshow.length > 0 ? (
    <div className='w-screen h-screen bg-[#0d0d0d] '>
        <div className='w-full py-3 px-8  flex items-center'>
            <h1 className='text-3xl font-semibold text-zinc-400'>
                <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] mr-3  ri-arrow-left-line'></i>{""}
                tvshow<small className='text-sm'>({category})</small>
            </h1>
            <Topnav />
            <Dropdown title="Category" options={["on_the_air","top_rated", "popular","airing_today"]} func={(e) => setcategory(e.target.value)} />
           
        </div>
        <InfiniteScroll
            dataLength={tvshow.length}      // These properties are important for InfiniteScroll to work
            next={GetTvshow}
            hasMore={hasMore}
            loader={<Loader />}>
            <Cards data={tvshow} title="TV" />
        </InfiniteScroll>
    </div>
): (
    <Loader />
)

}

export default TVShows