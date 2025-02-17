import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import SearchBar from "../Search/SearchBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          MovieSearch
        </Link>

        {/* Search Bar (Hidden on Mobile) */}
        <div className="hidden md:block">
          <SearchBar/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/listtvshows" className="hover:text-yellow-400 transition">TV Shows</Link>
          </li>
          <li>
            <Link to="/listmovies" className="hover:text-yellow-400 transition">Movies</Link>
          </li>
        
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-yellow-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block text-yellow-400 hover:text-white" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tvshows" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/movies" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>
                Movies
              </Link>
            </li>
          
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
