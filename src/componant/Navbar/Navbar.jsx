import React, { useState } from 'react';
import { LiaToothSolid } from 'react-icons/lia';

import { Link, useNavigate } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: ' الأسئلة الشائعة ', path: '/popular-qus' },
    { name: 'تواصل معانا', path: '/contact' },
  ];
  const [activeLink, setActiveLink] = useState('/');
  let navigate = useNavigate();
  return (
    <nav className="h-[70px] fixed top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-40 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D]">


      <Link to="/" className="text-xl flex items-center gap-2 p-3">

        <LiaToothSolid className="text-5xl text-[#3E5CBE]" />


        <div className="name text-start">
          <div className="text-[#3E5CBE] font-bold leading-tight">سمايل كلينك</div>
          <span className="text-[#3E5CBE] text-xs leading-none">للعناية بالأسنان</span>
        </div>
      </Link>


      <ul className="md:flex hidden items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              onClick={() => setActiveLink(link.path)}
              className={`${activeLink === link.path ?'border-b-2 border-[#032F76] p-1 text-[#032F76]' : 'border-none'} text-sm transition-colors duration-200`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">

        {/* Appointment Button */}
        <button onClick={() => navigate('/appointment')} className="bg-[#032F76] text-white border border-[#032F76] md:inline hidden text-sm hover:bg-opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full font-medium">
          احجز موعدك
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-block md:hidden active:scale-90 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-[70px] left-0 w-full bg-white p-6 shadow-lg md:hidden transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} onClick={() => setIsOpen(false)} className="text-base font-medium block border-b pb-2">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/appointment')} className="bg-[#032F76] cursor-pointer text-white mt-6 w-full h-11 rounded-full font-medium">
          احجز موعدك
        </button>
      </div>
    </nav>
  );
}