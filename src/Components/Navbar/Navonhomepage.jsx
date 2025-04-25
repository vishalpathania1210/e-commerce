import React from 'react';
import { Link } from 'react-router-dom';

export const Navonhomepage = ({ children }) => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex space-x-6">
        <Link
          className="text-gray-700 font-medium hover:text-indigo-600 transition"
          to="/homepage"
        >
          Homepage
        </Link>
        <Link
          className="text-gray-700 font-medium hover:text-indigo-600 transition"
          to="/electronics"
        >
          Electronics
        </Link>
        <Link
          className="text-gray-700 font-medium hover:text-indigo-600 transition"
          to="/healthproducts"
        >
          Health & Beauty
        </Link>
        <Link
          className="text-gray-700 font-medium hover:text-indigo-600 transition"
          to="/cart"
        >
          Cart
        </Link>
        <Link
          className="text-red-600 font-medium hover:text-red-800 transition"
          to="/logout"
        >
          Logout
        </Link>
      </div>
      <div>{children}</div>
    </nav>
  );
};
