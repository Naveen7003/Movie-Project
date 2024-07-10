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
import Notfound from "./components/Notfound"
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
        <Route path="/tv" element={<TVShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
        <Route path="*" element={<Notfound />} />
       
      </Routes>
    </div>
  )
}

export default App