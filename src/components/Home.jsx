import React from 'react'
import Sidenav from './partials/Sidenav'

const Home = () => {
    document.title = "VideoApp | HomePage"
  return (
    <>
        <Sidenav />
        <div className='h-screen w-[80%] '></div>
    </>
  )
}

export default Home