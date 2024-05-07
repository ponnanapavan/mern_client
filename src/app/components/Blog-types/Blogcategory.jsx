import React from 'react';

const Blogcategory = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between bg-gray-900 py-12 h-full gap-5">
      <div className="w-full flex flex-col lg:flex-row items-center justify-around">
        <div className="flex flex-col items-center justify-center text-center mb-8 lg:mb-0">
          <h1 className=" text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Create your own Blogs
          </h1>
          <p className="text-gray-400 font-bold">Start sharing your thoughts and ideas with the world.</p>
        </div>
        <div className="lg:ml-8">
          <img className="w-full sm:w-auto h-[300px] sm:h-[350px] rounded-lg shadow-lg" src="https://img.freepik.com/free-photo/social-media-networking-online-communication-connect-concept_53876-124862.jpg?t=st=1713957590~exp=1713961190~hmac=53e855bb0df9cc769d154df225f5c26f5fc1d59931f87e977562b5fb7e978577&w=900" alt="Blog category" />
        </div>
      </div>
      <div className="mt-2 w-full flex flex-col flex-col-reverse lg:flex-row items-center justify-around">
        <div className="lg:ml-8">
          <img className="w-full sm:w-auto h-full sm:h-[350px] rounded-lg shadow-lg order-2 sm:order-1" src="https://img.freepik.com/premium-photo/online-blog_53876-85926.jpg?w=740" alt="Blog category" />
        </div>
        <div className="flex flex-col items-center justify-center text-center order-1 sm:order-2">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Learn and Grow with Blogging
          </h1>
          <p className="text-gray-400 mb-8 font-bold">Unlock new possibilities and personal growth through the art of blogging.</p>
        </div>
      </div>
      <div className="w-full  flex  flex-col lg:flex-row items-center justify-around">
        <div className="flex flex-col items-center justify-center text-center mb-2 sm:mb-4 lg:mb-0">
          <h1 className=" text-2xl  sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Let's explore blog's world
          </h1>
          <p className="text-gray-400 mb-8 font-bold">Explore the world through blogging.</p>
        </div>
        <div className="lg:ml-8">
          <img className="w-full sm:w-auto h-full sm:h-[350px] rounded-lg shadow-lg order-2 sm:order-1" src="https://t4.ftcdn.net/jpg/02/24/09/39/360_F_224093937_rOQt19Vk5GAGWtsgCP071KQPzos2tXea.jpg" alt="Blog category" />
        </div>
      </div>
    </div>
  );
};

export default Blogcategory;
