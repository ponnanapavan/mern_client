'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const AllPosts = () => {
    const [postData, setPostData] = useState([]); // Changed variable name from postdata to postData
    const parsedData = JSON.parse(localStorage.getItem('user-blog'));

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch('https://blog-server-2-vrea.onrender.com/api/blogposts/getposts', {
                    method: 'GET'
                });
                const data = await response.json();
                setPostData(data);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []); 

    async function handleDelete(username,postId) {
        try {
            if (parsedData.username !== username) {
                return alert('You do not have access to delete other users\' blogs');
            }

            const response = await fetch(`https://blog-server-2-vrea.onrender.com/api/blogposts/deletepost/${postId}`, {
                method: 'DELETE'
            });
            
            const data = await response.json();
            setPostData(data);
             console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='relative bg-gray-900 min-h-screen text-white'>
            <div className='fixed top-4 right-4 z-50'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer'><Link href='/createblog'>Create Blog</Link></button>
            </div>
            <div className='flex justify-center items-center w-full h-full px-4 pt-20'>
                <div className='flex flex-col gap-9 w-full max-w-screen-lg'>
                    {postData && postData?.map((items, indx) => ( // Changed postdata to postData
                        <div className='flex flex-col gap-4 w-full' key={indx}>
                            <img src={items.Blogimg} alt="" className='w-full h-auto rounded-lg cursor-pointer' />
                            <div className='flex flex-col w-full gap-2 items-center justify-center'>
                                <div className='text-xl'>Blog Type: {items.BlogType}</div>
                                <div className='text-gray-300'><span className='font-bold'>Blog Title:</span> {items.title}</div>
                                <div className='flex justify-center items-center gap-4'>
                                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5"><Link href={`/viewblog/${items._id}`}>View More</Link></button>
                                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5" onClick={() => handleDelete(items.username, items._id)}>Delete</button>
                                </div>
                                {  <h3 className='text-gray-600'>Posted by: {items.username}</h3>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllPosts;
