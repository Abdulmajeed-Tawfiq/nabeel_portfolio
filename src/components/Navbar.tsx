// src/components/Navbar.js
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navRef} className={`p-2 fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyLogo</div>
        <div className="hidden text-lg md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
        <button className="text-white text-lg font-bold border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300">Projects</button>
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
