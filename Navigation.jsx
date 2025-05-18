import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 h-14">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center border-b-2 px-1 ${
                isActive
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/social"
            className={({ isActive }) =>
              `flex items-center border-b-2 px-1 ${
                isActive
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`
            }
          >
            Go Social
          </NavLink>
          <NavLink
            to="/guru"
            className={({ isActive }) =>
              `flex items-center border-b-2 px-1 ${
                isActive
                  ? 'border-blue-600 text-blue-600'
                  : ' text-gray-500 hover:text-gray-700'
              }`
            }
          >
            Ask Guru
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;