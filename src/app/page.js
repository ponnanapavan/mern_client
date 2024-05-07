"use client"

import Blogcategory from "./components/Blog-types/Blogcategory";
import Head from "./components/Head";
import Navbar from "./components/Navbar";

import DiscoverBlog from './components/DiscoverBlog'
import GetStarted   from './components/GetStarted'
import Footer from './components/Footer'
export default function Home() {
  return (
   
      <main className="w-full">
      <Navbar/>
      <Head/>
      {/* <WhatBlog/> */}
      <Blogcategory/>
      <DiscoverBlog/>
      <GetStarted/>
      <Footer/>
    </main>
  
    
  );
}
