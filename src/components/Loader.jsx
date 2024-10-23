import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [isApiDown, setIsApiDown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsApiDown(true);
    }, 7000); // 10 seconds timer

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (isApiDown) {
    return (
      <div className='h-full w-full flex justify-center items-center bg-black'>
        <p className='text-red-500 text-lg text-center'>
          It seems that the TMDB third-party API is currently not working or is down. As a result, the project functionality is affected. Please check back later or visit the GitHub repository for Code: <br />
          <a href='https://github.com/Naveen7003/Movie-Project' className='underline text-blue-400'>Github Repo</a>
        </p>
      </div>
    );
  }

  return (
    <div className='h-full w-full flex justify-center items-center bg-black'>
      <img className='h-[60%]' src='/leaders.gif' alt="Loading..." />
    </div>
  );
};

export default Loader;
