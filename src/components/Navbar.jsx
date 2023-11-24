// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand/Logo */}
        <a href="/" className="text-white text-lg font-semibold mb-2 md:mb-0 md:mr-4">
          Your Name
        </a>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/about" className="text-white">
            About
          </a>
          <a href="/projects" className="text-white">
            Projects
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
