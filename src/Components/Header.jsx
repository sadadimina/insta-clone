import React from 'react';
import logo from '../assets/logo.jpg';
import userIcon from '../assets/user.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-start justify-between border border-gray-700 rounded-xl border-opacity-25 bg-gray-100 px-6 py-4">
      <div>
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </div>

      <nav className="flex gap-8 self-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-indigo-500 font-bold' : 'text-gray-600'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Notification"
          className={({ isActive }) =>
            isActive ? 'text-indigo-500 font-bold' : 'text-gray-600'
          }
        >
          Notifications
        </NavLink>
        <NavLink
          to="/Search"
          className={({ isActive }) =>
            isActive ? 'text-indigo-500 font-bold' : 'text-gray-600'
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? 'text-indigo-500 font-bold' : 'text-gray-600'
          }
        >
          About
        </NavLink>
      </nav>

      <div>
        <Link to="/Profile" className="flex items-center">
          <img
            src={userIcon}
            alt="User Icon"
            className="w-14 h-14 border-2 border-black rounded-full p-1"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
