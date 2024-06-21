import React from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'

const Home = () => {
    document.title = "VideoApp | HomePage"
  return (
    <>
        <Sidenav />
        <div className='h-screen w-[80%] '>
            <Topnav />
        </div>
    </>
  )
}

export default Home