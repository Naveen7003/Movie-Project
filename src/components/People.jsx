import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav'
import Dropdown from './partials/Dropdown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cards from './partials/Cards'
import Loader from "./Loader"


const People = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useState('popular')
    const [person, setperson] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "VideoApp | People"

    const GetPerson = async() => {                    //fetched person items for cards
        try {
            const {data} = await axios.get(`/person/${category}?page=${page}`)
            if(data.results.length > 0){
                setperson((prevState) => [...prevState, ...data.results])   // Append new data to existing state
            setpage(page +1)
        }else{  
            sethasMore(false) 
        }
        } catch (error) {
            console.log("Error: ",error)
        }
    } 

    const refreshHandler = async() => {
        if(person.length === 0){
            GetPerson()
        }else{
            setpage(1)
            setperson([])
            GetPerson()
        }
    }

    
    useEffect(()=> {
        // settrending([]); // clear the previous data
        // Gettrending()
        refreshHandler()     // set new data
    },[category])

  return person.length > 0 ? (
    <div className='w-screen h-screen bg-[#0d0d0d] '>
        <div className='w-full py-3 px-8  flex items-center'>
            <h1 className='text-3xl font-semibold text-zinc-400'>
                <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] mr-3  ri-arrow-left-line'></i>{""}
                People
            </h1>
            <Topnav />
           
        </div>
        <InfiniteScroll
            dataLength={person.length}      // These properties are important for InfiniteScroll to work
            next={GetPerson}
            hasMore={hasMore}
            loader={<Loader />}>
            <Cards data={person} title={category} />
        </InfiniteScroll>
    </div>
): (
    <Loader />
)
}

export default People