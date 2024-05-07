import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Head = () => {
  const [checkUser, setCheckUser] = useState(false);
 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user-blog');
      setCheckUser(userData !== null);
    }
  }, []);
  const router = useRouter();

  function exploreBlogs() {
   
    if (!checkUser) {
      return alert('Must login to explore blogs');
    } else {
      router.push('/allposts');
    }
  }

  return (
    <div className=" flex sm:flex-row flex-col w-full sm:justify-around sm:p-0 p-4  items-center h-auto sm:h-screen" style={{ backgroundColor: 'rgb(39 39 42)', maxHeight: '600px'}}>
      <div className="text-white text-3xl font-bold ">
        <h1 className="sm:text-6xl text-4xl mb-4" style={{ backgroundImage: 'linear-gradient(to right, #ff8a00, #da1b60)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Welcome to Blog</h1>
        <h5 className="mt-2 text-xl">Let's embark on an exploration of captivating blogs</h5>
        <div>
          
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 mt-3 sm:text-2xl text-xl" onClick={exploreBlogs}>Let's Explore</button>
        </div>
      </div>
      <div>
        <img src="https://www.ascian.in/creatives/wp-content/uploads/blog.jpg" className="w-104 h-170 rounded-lg shadow-lg " alt="" />
      </div>
    </div>
  );
};

export default Head;
