// src/components/Navbar.js
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 h-[10vh]">
      <div className="container mx-auto flex justify-start space-x-12 items-center">
        <div className="text-white text-lg font-bold">MyLogo</div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-gray-300 hover:text-white py-2">Home</a>
          <a href="#" className="block text-gray-300 hover:text-white py-2">About</a>
          <a href="#" className="block text-gray-300 hover:text-white py-2">Services</a>
          <a href="#" className="block text-gray-300 hover:text-white py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
