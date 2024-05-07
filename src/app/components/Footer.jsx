import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-center">&copy; 2024 Your Website. All rights reserved.</p>
        <div className="flex mt-4">
          <a href="#" className="mx-2 hover:text-white">Home</a>
          <a href="#" className="mx-2 hover:text-white">About</a>
          <a href="#" className="mx-2 hover:text-white">Services</a>
          <a href="#" className="mx-2 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
