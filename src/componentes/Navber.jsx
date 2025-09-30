import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
  return (
    <nav className="flex items-center gap-6 p-4 bg-gray-800">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg font-medium transition-colors ${
            isActive
              ? 'text-cyan-400 border-b-2 border-cyan-400'
              : 'text-gray-300 hover:text-white'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-lg font-medium transition-colors ${
            isActive
              ? 'text-cyan-400 border-b-2 border-cyan-400'
              : 'text-gray-300 hover:text-white'
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/user"
        className={({ isActive }) =>
          `text-lg font-medium transition-colors ${
            isActive
              ? 'text-cyan-400 border-b-2 border-cyan-400'
              : 'text-gray-300 hover:text-white'
          }`
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/user2"
        className={({ isActive }) =>
          `text-lg font-medium transition-colors ${
            isActive
              ? 'text-cyan-400 border-b-2 border-cyan-400'
              : 'text-gray-300 hover:text-white'
          }`
        }
      >
        Users2
      </NavLink>
      <NavLink
        to="/user3"
        className={({ isActive }) =>
          `text-lg font-medium transition-colors ${
            isActive
              ? 'text-cyan-400 border-b-2 border-cyan-400'
              : 'text-gray-300 hover:text-white'
          }`
        }
      >
        Users3
      </NavLink>
      
    </nav>
  );
};

export default Navber;
