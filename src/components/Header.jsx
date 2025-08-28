// src/components/Header.jsx
import { Menu, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header({ toggleSidebar }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow">
      {/* Sidebar Toggle */}
      <button onClick={toggleSidebar}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Search Bar */}
      <div className="flex items-center w-1/2 bg-gray-100 px-3 py-2 rounded-md">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 w-full bg-transparent outline-none text-gray-700"
        />
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          className="flex items-center space-x-2"
          onClick={() => setOpen(!open)}
        >
          <img
            src="https://via.placeholder.com/32"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDown className="w-4 h-4" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 bg-white shadow rounded w-40">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
