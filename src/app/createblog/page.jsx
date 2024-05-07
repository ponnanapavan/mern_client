'use client'
import React from 'react';
import { useState } from 'react';
const CreateBlog = () => {
      const parsedData = JSON.parse(localStorage.getItem('user-blog'));
      console.log(parsedData);
    const [data,setData]=useState({
        postedBy:parsedData._id,
        BlogType:"",
        title:"",
        Blogimg:"",
        BlogDesc:""
    })
      async function handleSubmit(e){
        e.preventDefault();
        console.log(data);
        try{
             const response=await fetch('https://blog-server-2-vrea.onrender.com/api/blogposts',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
             })
             const datares=await response.json();
             window.location.href='/allposts';
             console.log(datares);
            
        }catch(err){
            console.error(err.message);
        }
      }
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold mb-6 text-center">Create Blog</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="blogType" className="block text-sm font-medium text-gray-700">Blog Type</label>
                        <input type="text" id="blogType" name="blogType" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Blog Type"  value={data.BlogType} onChange={(e)=>setData({...data,BlogType:e.target.value})} />
                    </div>
                    <div>
                        <label htmlFor="blogTitle" className="block text-sm font-medium text-gray-700">Blog Title</label>
                        <input type="text" id="blogTitle" name="blogTitle" 
                        className="mt-1 p-2 w-full border
                         border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                         placeholder="Enter Blog Title"  value={data.title} onChange={(e)=>setData({...data,title:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="blogImg" className="block text-sm font-medium text-gray-700">Blog Image URL</label>
                        <input type="text" id="blogImg" name="blogImg" className="mt-1 p-2 w-full border border-gray-300 rounded-md 
                        focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Blog Image URL"  value={data.Blogimg} onChange={(e)=>setData({...data,Blogimg:e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="blogDesc" className="block text-sm font-medium text-gray-700">Blog Description</label>
                        <textarea id="blogDesc" name="blogDesc" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none
                         focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Blog Description" value={data.BlogTypeBlogDesc} onChange={(e)=>setData({...data,BlogDesc:e.target.value})}></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
