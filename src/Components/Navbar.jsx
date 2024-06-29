import { useState, useEffect } from 'react';
import PreLoader from './PreLoader';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (loading) {
    return <PreLoader />;
  }

  return (
    <nav className="bg-[#121D33] border-b border-opacity-20 border-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-5 py-4 flex justify-between items-center text-white">
        <div className="flex items-center space-x-2 md:space-x-10">
          <h1 className="text-xl font-bold md:text-3xl">
            <a href="/">
              Bit<span className="italic text-gray-400">Mine</span>
            </a>
          </h1>
          <ul className="hidden md:flex space-x-6 pt-1">
            
            <li>
              <a href="contact" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/login">
            <li className="list-none border hover:bg-[#2a4375] rounded-lg px-4 py-2">Log in</li>
          </a>
          <a href="/signup">
            <li className="list-none border bg-white hover:bg-gray-400 text-black rounded-lg px-4 py-2">Sign Up</li>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} id="menu-btn" className="block text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <a href="about" className="block text-lg text-white hover:text-gray-300">About us</a>
          </li>
          <li>
            <a href="contact" className="block text-lg text-white hover:text-gray-300">Contact</a>
          </li>
          <li>
            <a href="/login" className="w-[18%] block text-lg border hover:bg-[#2a4375] text-white rounded-lg px-4 py-2">Log in</a>
          </li>
          <li>
            <a href="/signup" className="w-[21%] block text-lg border bg-white hover:bg-gray-400 text-black rounded-lg px-4 py-2">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
