'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Viewblog = ({ params }) => {
    const postId = params.id;
    const [postdata, setPostData] = useState({});

    useEffect(() => {
        async function getPostData() {
            try {
                const response = await fetch(`https://blog-server-2-vrea.onrender.com/api/blogposts/getIdPost/${postId}`);
                const data = await response.json();
                setPostData(data);
            } catch (err) {
                console.log(err.message)
            }
        }
        getPostData();
    }, []);

    return (
        <div className='bg-gray-900 text-white w-full h-screen flex justify-center items-center'>
            <div className="max-w-4xl w-full px-8 py-6 rounded-lg shadow-md bg-gray-800">
                <div className="flex justify-center">
                    <img src={postdata.Blogimg} alt="" className="w-full max-w-full h-auto rounded-lg mb-4" />
                </div>
                
               
                <div className="text-lg mb-2 text-center font-bold">{postdata.title}</div>
                <div className="text-gray-300 text-center max-h-32 overflow-y-auto py-4 px-2">
                    {postdata.BlogDesc}
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link href={`/updateblog/${postdata._id}`}>Update Blog</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Viewblog;
