import React, { useEffect, useState } from 'react';

const DiscoverBlog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getDiscoverPosts() {
            try {
                const response = await fetch("https://blog-server-2-vrea.onrender.com/api/blogposts/getdata");
                const resData = await response.json();
                console.log(resData);
                setData(resData);
            } catch (err) {
                console.error(err.message);
            }
        }
        getDiscoverPosts();
    }, []);

    return (
        <div className="bg-gradient-to-r from-teal-400 to-yellow-200 text-black p-8 rounded-lg shadow-lg">
            <div className="mb-6 flex justify-center items-center w-full">
                <h1 className=" text-4xl sm:text-3xl font-bold">Discover Blogs</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {data?.map((item, index) => (
                    <div key={index} className="w-full h-full rounded-lg overflow-hidden  ">
                        <img src={item.Blogimg} alt="" className="w-full h-[450px] sm:h-[250px] md:h-[300px] cursor-pointer" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverBlog;
