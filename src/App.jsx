import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TVShows from './components/TVShows'
import People from './components/People'

const App = () => {
  return (
    <div className='w-screen h-screen flex bg-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  )
}

export default App