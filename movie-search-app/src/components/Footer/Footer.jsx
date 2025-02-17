import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import bg from "../../assets/footer-bg.jpg"; 

function Footer() {
  return (
    <div
      className="relative bg-cover bg-center text-white py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Logo & Brand Name */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
            <Link to="/" className="text-2xl font-bold text-blue-400">
              Movie Search
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <Link to="/" className="block hover:text-blue-400">Home</Link>
            <Link to="/" className="block hover:text-blue-400">Contact Us</Link>
            <Link to="/" className="block hover:text-blue-400">Terms of Service</Link>
            <Link to="/" className="block hover:text-blue-400">About Us</Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Support</h3>
            <Link to="/" className="block hover:text-blue-400">Live</Link>
            <Link to="/" className="block hover:text-blue-400">FAQ</Link>
            <Link to="/" className="block hover:text-blue-400">Premium</Link>
            <Link to="/" className="block hover:text-blue-400">Privacy Policy</Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Movies</h3>
            <Link to="/" className="block hover:text-blue-400">Must Watch</Link>
            <Link to="/" className="block hover:text-blue-400">Recent Releases</Link>
            <Link to="/" className="block hover:text-blue-400">Top IMDB</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Movie Search | All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
