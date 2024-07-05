import React, { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loader from './Loader';

const Home = () => {
  document.title = 'VideoApp | HomePage';
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
    if (!wallpaper) {
      getHeaderWallpaper();
    }
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
<<<<<<< HEAD
      <div className='h-full w-[80%]  overflow-auto overflow-x-hidden'>
        <Topnav />
        <Header data={wallpaper} />
        <div className='p-4 flex justify-between'>
=======
      <div className='h-full w-[80%] overflow-auto overflow-x-hidden'>
        <Topnav />
        <Header data={wallpaper} />
        <div className='p-3 flex justify-between'>
>>>>>>> 9e22c22f5d0929afa887ed09cea2cb6f3fb771e2
          <h1 className='text-3xl mt-2 font-semibold text-zinc-400'>
            Trending
          </h1>
          <Dropdown title='Filter' options={['tv', 'movie', 'all']} func={(e) => setCategory(e.target.value)} />
        </div>
<<<<<<< HEAD
        <HorizontalCards  data={trending} />
=======
        <HorizontalCards data={trending} />
>>>>>>> 9e22c22f5d0929afa887ed09cea2cb6f3fb771e2
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
