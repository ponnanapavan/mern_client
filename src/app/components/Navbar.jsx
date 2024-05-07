import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [checkUser, setCheckUser] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userData = localStorage.getItem('user-blog');
            setCheckUser(userData !== null);
        }
    }, []);

    async function handleLogout() {
        try {
            const data = await fetch('https://blog-server-2-vrea.onrender.com/api/users/logout', {
                method: 'POST'
            });
            const response = await data.json();
            localStorage.removeItem('user-blog');
            setCheckUser(null);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <nav style={{backgroundColor:'rgb(12 10 9)'}}>
            <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <div className=" text-2xl sm:text-4xl font-bold text-white flex items-center  md:text-3xl lg:text-4xl xl:text-4xl">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                        Blog-website
                    </span>
                </div>
                <div className="mt-4 lg:mt-0">
                    {!checkUser ? (

<Link href="/pages" className="px-5 py-2.5 relative rounded group font-medium text-white  inline-block">
<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
<span className="relative"> 
     Sign Up</span>
</Link>
                       
                    ) : (
                        <Link href="#_" className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block">
                        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                        <span className="relative"> <button type="button"  onClick={handleLogout}>
                            Logout
                        </button></span>
                        </Link>
                        
                        
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
