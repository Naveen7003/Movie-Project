import React, { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loader from './Loader';

const Home = () => {
  document.title = 'VideoApp | Home';
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState('all');

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    getTrending();
  }, [category]);

  useEffect(() => {
    if (!wallpaper) {
      getHeaderWallpaper();
    }
  }, [wallpaper]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className='h-full w-[80%] overflow-auto overflow-x-hidden'>
        <Topnav />
        <Header data={wallpaper} />
        <div className='p-4 flex justify-between'>
          <h1 className='text-3xl mt-2 font-semibold text-zinc-400'>
            Trending
          </h1>
          <Dropdown title='Filter' options={['tv', 'movie', 'all']} func={(e) => setCategory(e.target.value)} />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
