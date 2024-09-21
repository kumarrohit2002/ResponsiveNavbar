import { useState } from 'react';
import logo from '../assets/react.svg';
import navlogo from '../assets/navlogo.svg';
import searchlogo from '../assets/searchlogo.png';

const Navbar = () => {
  const [active, setActive] = useState(null); // Track active item
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state
  const navele = ['Docs', 'Pricing', 'Changelog', 'Blogs', 'Login'];

  const handleClick = (index) => {
    setActive(index); // Set the clicked item as active
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu open/close state
  };

  return (
    <div>
      <nav className='p-2 px-2 sm:px-10 flex bg-[#122a4f] text-white justify-between items-center flex-wrap'>
        <div className='flex gap-2 md:gap-10'>
          {/* Logo */}
          <a href="#" className="flex gap-2 items-center">
            <img className="object-cover rounded-full w-10 h-10" src={logo} alt="logo" />
            <span className="text-lg hidden sm:block font-medium">ToDesktop</span>
          </a>
          {/* Search Bar */}
          <div className="hidden sm:block">
          <div className="bg-white text-black p-1 flex flex-row items-center justify-center rounded ">
            <img src={searchlogo} className="max-w-8 max-h-8" alt="" />
            <input type="text" className="rounded outline-none w-36 sm:w-full" />
          </div>
          </div>
        </div>
        <div className="bg-white sm:hidden p-1  text-black px-1 flex items-center justify-center rounded">
            <img src={searchlogo} className="max-w-8 max-h-8" alt="" />
            <input type="text" className="rounded outline-none w-36 sm:w-48" />
          </div>
        {/* Desktop Navbar Links */}
        <div className="hidden md:flex flex-col md:flex-row font-medium">
          {navele.map((ele, idx) => (
            <a
              key={idx}
              href="#"
              className={`cursor-pointer text-white ml-8 ${active === idx ? 'text-orange-400' : 'text-black'}`}
              onClick={() => handleClick(idx)}
            >
              {ele}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button className='md:hidden' onClick={toggleMobileMenu}>
          <img
            src={navlogo}
            className="object-cover w-12 h-12"
            alt="navlogo"
            style={{ filter: 'invert(100%)' }} // This will make the navlogo white
          />
        </button>
      </nav>

      {/* Mobile Menu Links - Show/Hide based on state */}
      {isMobileMenuOpen && (
        <div className="flex flex-col bg-slate-200 p-1 gap-4 items-center font-medium md:hidden">
          {navele.map((ele, idx) => (
            <a
              key={idx}
              href="#"
              className={`cursor-pointer font-semibold ${active === idx ? 'text-blue-500' : 'text-black'}`}
              onClick={() => {
                toggleMobileMenu();
                handleClick(idx);
              }}
            >
              {ele}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
