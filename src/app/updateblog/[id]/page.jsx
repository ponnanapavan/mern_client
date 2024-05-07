'use client'
import React, { useEffect, useState } from 'react';

const UpdateBlog = ({ params }) => {
    const postId = params.id;
    const [postdata, setPostData] = useState({});
    const parsedData = JSON.parse(localStorage.getItem('user-blog'));

    useEffect(() => {
        async function getPostData() {
            try {
                const response = await fetch(`https://blog-server-2-vrea.onrender.com/api/blogposts/getIdPost/${postId}`);
                const data = await response.json();
                setPostData(data);
            } catch (err) {
                console.log(err.message);
            }
        }
        getPostData();
    }, [postId]);

    const [data, setData] = useState({
        postedBy: parsedData._id,
        BlogType: '',
        title: '',
        Blogimg: '',
        BlogDesc: '',
    });

    useEffect(() => {
        if (postdata) {
            setData({
                postedBy: parsedData._id,
                BlogType: postdata.BlogType,
                title: postdata.title,
                Blogimg: postdata.Blogimg,
                BlogDesc: postdata.BlogDesc,
            });
        }
    }, [postdata, parsedData._id]);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(`https://blog-server-2-vrea.onrender.com/api/blogposts/updatepost/${postdata._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const resData = await response.json();
            if (resData.error) {
                console.error(resData.error);
                return;
            }
            window.location.href = `/viewblog/${postdata._id}`;
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold mb-6 text-center">Update Blog</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="blogType" className="block text-sm font-medium text-gray-700">Blog Type</label>
                        <input
                            type="text"
                            id="blogType"
                            name="blogType"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Blog Type"
                            value={data.BlogType}
                            onChange={(e) => setData({ ...data, BlogType: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="blogTitle" className="block text-sm font-medium text-gray-700">Blog Title</label>
                        <input
                            type="text"
                            id="blogTitle"
                            name="blogTitle"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Blog Title"
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="blogImg" className="block text-sm font-medium text-gray-700">Blog Image URL</label>
                        <input
                            type="text"
                            id="blogImg"
                            name="blogImg"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Blog Image URL"
                            value={data.Blogimg}
                            onChange={(e) => setData({ ...data, Blogimg: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="blogDesc" className="block text-sm font-medium text-gray-700">Blog Description</label>
                        <textarea
                            id="blogDesc"
                            name="blogDesc"
                            rows="4"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter Blog Description"
                            value={data.BlogDesc}
                            onChange={(e) => setData({ ...data, BlogDesc: e.target.value })}
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;
