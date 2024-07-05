import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cards from './partials/Cards'
import Loader from "./Loader"

const Popular = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState('movie')
    const [popular, setpopular] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "VideoApp | Pupular | "  +  category.toUpperCase()

    const GetPopular = async() => {                    //fetched popular items for cards
        try {
            const {data} = await axios.get(`/${category}/popular?page=${page}`)
            if(data.results.length > 0){
                setpopular((prevState) => [...prevState, ...data.results])   // Append new data to existing state
            setpage(page +1)
        }else{  
            sethasMore(false) 
        }
        } catch (error) {
            console.log("Error: ",error)
        }
    } 

    const refreshHandler = async() => {
        if(popular.length === 0){
            GetPopular()
        }else{
            setpage(1)
            setpopular([])
            GetPopular()
        }
    }

    
    useEffect(()=> {
        // settrending([]); // clear the previous data
        // Gettrending()
        refreshHandler()     // set new data
    },[category])


  return popular.length > 0 ? (
    <div className='w-screen h-screen bg-[#0d0d0d] '>
        <div className='w-full py-3 px-8  flex items-center'>
            <h1 className='text-3xl font-semibold text-zinc-400'>
                <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] mr-3  ri-arrow-left-line'></i>{""}
                Popular
            </h1>
            <Topnav />
            <Dropdown title="Category" options={["tv","movie"]} func={(e) => setcategory(e.target.value)} />
            <div className='w-[2%]'></div>
        </div>
        <InfiniteScroll
            dataLength={popular.length}      // These properties are important for InfiniteScroll to work
            next={GetPopular}
            hasMore={hasMore}
            loader={<Loader />}>
            <Cards data={popular} title={category} />
        </InfiniteScroll>
    </div>
): (
    <Loader />
)

}

export default Popular