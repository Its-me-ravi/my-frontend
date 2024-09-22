// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex justify-around text-white">
          <li>
            <Link 
              to="/register" 
              className="hover:bg-blue-500 px-4 py-2 rounded transition duration-300"
            >
              Register
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="hover:bg-blue-500 px-4 py-2 rounded transition duration-300"
            >
              Login
            </Link>
          </li>
          <li>
            <Link 
              to="/posts" 
              className="hover:bg-blue-500 px-4 py-2 rounded transition duration-300"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link 
              to="/create-post" 
              className="hover:bg-blue-500 px-4 py-2 rounded transition duration-300"
            >
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
