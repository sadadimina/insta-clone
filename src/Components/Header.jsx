import React from "react";
import logo from "../assets/logo.jpg";
import userIcon from "../assets/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-start justify-between border border-gray-700 rounded-xl border-opacity-25 bg-gray-100 px-6 py-4">
      <div>
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </div>

      <nav className="flex gap-8 self-center">
        <Link to="/" className="text-black font-medium hover:underline">
          Home
        </Link>
        <Link
          to="/Notification"
          className="text-black font-medium hover:underline"
        >
          Notifications
        </Link>
        <Link to="/Search" className="text-black font-medium hover:underline">
          Search
        </Link>
        <Link to="/About" className="text-black font-medium hover:underline">
          About
        </Link>
      </nav>

      <div>
        <img
          src={userIcon}
          alt="User Icon"
          className="w-14 h-14 border-2 border-black rounded-full p-1"
        />
      </div>
    </header>
  );
};
export default Header;
