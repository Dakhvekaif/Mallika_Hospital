import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import MalikaHospitallogo from '../../../assets/MalikaHospital-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { title: 'About Us', dropdownItems: [] },
    { title: 'Our Services', dropdownItems: ['CATHLAB', 'ICU', 'OT', 'WARD', 'DIALYSIS CENTER', 'PHARMACY', 'LAB'] },
    { title: 'Surgeries', dropdownItems: ['General Surgery', 'Onco Surgery', 'Obstetrics & Gynecology', 'Orthopedic', 'Neuro Surgery', 'Ent', 'Opthalmology', 'Proctology'] }, //Other options that can be added "Vascular Surgery", "Plastic Surgery"
    { title: 'Consultants', dropdownItems: ['Physician & Diabetology', 'Neprology', 'Cardiology', 'Neurology', 'Oncology', 'Gastroenterology', 'Pediatrician', 'Dermatology'] }, //other option that can be added "Radiology", "Urology"
    { title: 'Cashless & TPA', dropdownItems: [] },
    { title: 'Govt.Sch', dropdownItems: [] },
    { title: 'Contact', dropdownItems: [] },
    { title: 'Media', dropdownItems: ['Floor1', 'Floor2', 'Floor3'] },
  ];

  // Helper to generate URL paths based on Category and Item
  // Example: Category "Our Services", Item "CATHLAB" => /services/cathlab
  const getPath = (category, item) => {
    // 1. Clean the category (e.g., "Our Services" -> "services")
    let catSlug = category.toLowerCase().replace("our ", "").replace(/\s+/g, '-');
    
    // 2. Clean the item (e.g., "CATHLAB" -> "cathlab", "General Surgery" -> "general-surgery")
    let itemSlug = item.toLowerCase().replace(/\s+/g, '-').replace("&", "and");

    return `/${catSlug}/${itemSlug}`;
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
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

  return (
    <nav className="bg-white/90 md:backdrop-blur-lg backdrop-saturate-150 shadow-xl fixed top-0 left-0 w-full z-50">
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
                    // Dropdown Button
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
                    // Regular Link if no dropdown
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

      {/* Mobile Menu Panel */}
      <div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
    isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-screen overflow-y-auto">
    {navItems.map((item) => (
      <div key={item.title} className="px-2">
        {item.dropdownItems.length > 0 ? (
          <>
            <div className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-slate-100 text-gray-700 font-medium">
              <span>{item.title}</span>

              {/* Toggle Icon */}
              <svg
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(item.title);
                }}
                className={`h-4 w-4 cursor-pointer transform transition-transform duration-200 ${
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
            </div>

            {/* Mobile Dropdown Items */}
            <div
              className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                activeDropdown === item.title ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {item.dropdownItems.map((dropdownItem) => (
                <Link
                  key={dropdownItem}
                  to={getPath(item.title, dropdownItem)}
                  onClick={closeMenu}
                  className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-slate-50"
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
                  className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-slate-100"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;