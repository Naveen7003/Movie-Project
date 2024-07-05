
import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cards from './partials/Cards'
import Loader from "./Loader"

const Movie = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState('now_playing')
    const [movie, setmovie] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "VideoApp | Movies"

    const GetMovie = async() => {                    //fetched movie items for cards
        try {
            const {data} = await axios.get(`/movie/${category}?page=${page}`)
            if(data.results.length > 0){
                setmovie((prevState) => [...prevState, ...data.results])   // Append new data to existing state
            setpage(page +1)
        }else{  
            sethasMore(false) 
        }
        } catch (error) {
            console.log("Error: ",error)
        }
    } 

    const refreshHandler = async() => {
        if(movie.length === 0){
            GetMovie()
        }else{
            setpage(1)
            setmovie([])
            GetMovie()
        }
    }

    
    useEffect(()=> {
        // settrending([]); // clear the previous data
        // Gettrending()
        refreshHandler()     // set new data
    },[category])


  return movie.length > 0 ? (
    <div className='w-screen h-screen bg-[#0d0d0d] '>
        <div className='w-full py-3 px-8  flex items-center'>
            <h1 className='text-3xl font-semibold text-zinc-400'>
                <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] mr-3  ri-arrow-left-line'></i>{""}
                Movie<small className='text-sm'>({category})</small>
            </h1>
            <Topnav />
            <Dropdown title="Category" options={["popular","top_rated", "upcoming","now_playing"]} func={(e) => setcategory(e.target.value)} />
           
        </div>
        <InfiniteScroll
            dataLength={movie.length}      // These properties are important for InfiniteScroll to work
            next={GetMovie}
            hasMore={hasMore}
            loader={<Loader />}>
            <Cards data={movie} title={category} />
        </InfiniteScroll>
    </div>
): (
    <Loader />
)


}

export default Movie