import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TVShows from './components/TVShows'
import People from './components/People'
import Moviedetails from './components/Moviedetails'
import TvDetails from './components/TvDetails'
import Persondetails from './components/Persondetails'
import Trailer from './components/partials/Trailer'

const App = () => {
  return (
    <div className='w-screen h-screen flex bg-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} >
          <Route path= "/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/tvshows/details/:id" element={<TvDetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<Persondetails />} />
       
      </Routes>
    </div>
  )
}

export default App