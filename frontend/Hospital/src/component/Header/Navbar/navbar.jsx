import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import MalikaHospitallogo from '../../../assets/MalikaHospital-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { title: 'About Us', dropdownItems: [] },
    { title: 'Our Services', dropdownItems: ['CATHLAB', 'ICU', 'OT', 'WARD', 'DIALYSIS CENTER', 'PHARMACY', 'PATHOLOGY LAB'] },
    { title: 'Surgeries', dropdownItems: ['General Surgery', 'Onco Surgery', 'Obstetrics & Gynecology', 'Orthopedic', 'Neuro Surgery', 'Urology', 'ENT', 'Proctology', 'Plastic Surgery', 'Pediatric Surgery',] },
    { title: 'Consultants', dropdownItems: ['Physician & Diabetology', 'Nephrology', 'Cardiology', 'Neurology', 'Oncology', 'Gastroenterology', 'Hematology', 'Dermatology', 'Pediatrician'] }, 
    { title: 'Cashless & TPA', dropdownItems: [] },
    { title: 'Govt.Sch', dropdownItems: [] },
    { title: 'Testimonial', dropdownItems: [] },
  ];

  // Helper to generate URL paths based on Category and Item
  const getPath = (category, item) => {
    let catSlug = category.toLowerCase().replace("our ", "").replace(/\s+/g, '-');
    let itemSlug = item.toLowerCase().replace(/\s+/g, '-').replace("&", "and");
    return `/${catSlug}/${itemSlug}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Reset dropdowns when closing main menu
  };
  
  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open so the background page doesn't scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav ref={dropdownRef} className="bg-white/90 md:backdrop-blur-lg backdrop-saturate-150 shadow-xl fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo - Links to Home */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu}>
              <img className='size-27' src={MalikaHospitallogo} alt="Malika Hospital"/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex size-fit" ref={dropdownRef}>
              {navItems.map((item) => (
                <div key={item.title} className="relative">
                  {item.dropdownItems.length > 0 ? (
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="text-gray-600 hover:text-blue-600 px-2 py-0.5 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.title}
                      <svg className={`mt-1 ml-1 h-3 w-3 transform transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Desktop Dropdown Content */}
                  <div className={`origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-out transform ${
                      activeDropdown === item.title ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                    }`}>
                    <div className="py-1 max-h-80 overflow-y-auto">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem}
                          to={getPath(item.title, dropdownItem)}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 transition-colors duration-150"
                        >
                          {dropdownItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105">
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none p-2">
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Pulldown Overlay */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-2xl rounded-b-2xl border-b border-gray-200 transition-all duration-300 ease-in-out z-40 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-12 space-y-2 overflow-y-auto max-h-[75vh]">
          {navItems.map((item) => (
            <div key={item.title} className="border-b border-gray-100 last:border-none">
              {item.dropdownItems.length > 0 ? (
                <>
                  {/* Entire row is now a clickable button */}
                  <button 
                    onClick={() => toggleDropdown(item.title)}
                    className="flex items-center justify-between w-full py-4 rounded-md text-gray-800 font-semibold text-lg focus:outline-none"
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Mobile Dropdown Items */}
                  <div
                    className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.title ? 'max-h-[1000px] mb-4' : 'max-h-0'
                    }`}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem}
                        to={getPath(item.title, dropdownItem)}
                        onClick={closeMenu}
                        className="block px-3 py-3 rounded-md text-base text-gray-600 hover:text-blue-600 hover:bg-slate-50"
                      >
                        {dropdownItem}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  onClick={closeMenu}
                  className="block w-full py-4 rounded-md text-gray-800 font-semibold text-lg"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          
          {/* Mobile "Book Appointment" Button inside the menu */}
          <div className="pt-6 pb-8">
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="flex justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;