import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Launchpad', to: 'launchpad' },
    { name: 'Features', to: 'features' },
    { name: 'Students', to: 'students' },
    { name: 'Colleges', to: 'colleges' },
    { name: 'Stories', to: 'stories' },
  ];

  const activeLinkClass = 'text-primary-600 font-semibold'; // Active link style

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${ // Adjusted shadow and added border for scrolled state
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md border-b border-slate-200 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <Rocket className="h-8 w-8 text-primary-600" />
              <span className={`ml-2 text-2xl font-bold ${scrolled ? 'text-primary-700' : 'text-white'}`}>TEJSTARTER</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4"> {/* Reduced spacing slightly for more links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass={activeLinkClass} // Added activeClass
                className={`px-3 py-2 rounded-md text-sm lg:text-base transition-colors hover:text-primary-500 cursor-pointer font-medium ${ // Adjusted padding and font size
                  scrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70} // Adjust if your navbar height is different
              className="ml-4 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm lg:text-base cursor-pointer"
            >
              Join TEJSTARTER
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none p-1 rounded-md ${scrolled ? 'text-gray-800 hover:bg-slate-100' : 'text-white hover:bg-white/20'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass={activeLinkClass} // Added activeClass
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-gray-50"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70} // Adjust if your navbar height is different
              onClick={closeMenu} // Close menu on click
              className="w-full mt-3 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors block text-center cursor-pointer"
            >
              Join TEJSTARTER
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;