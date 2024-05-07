import React from 'react';
import { useRouter } from 'next/navigation';
const GetStarted = () => {
  const userData = localStorage.getItem('user-blog');
  const router=useRouter();
  function handlesubmit(){
    if(!userData){
      alert('must logged into this application to see other blogs');
      return ;
    }
    router.push('/allposts');
  }
    return (
        <div className='relative w-full flex justify-center items-center' style={{backgroundColor: "black"}}>
            <div className="relative z-10 max-w-md p-6">
            <h1 className="text-3xl font-bold mb-4" style={{backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent", backgroundImage: "linear-gradient(to right, #4f3dff, #ff005d)"}}>
                    Start your own Blog
                </h1>
                <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white  px-11 mx-5 " ><button onClick={handlesubmit}>Get Started</button></span>
                </a>
            </div>
        </div>
    );
}
export default GetStarted;
