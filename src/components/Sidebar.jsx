// Sidebar.jsx
import React from "react";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-orange-600 to-red-600 text-white flex flex-col shadow-xl">
      {/* Logo / Header */}
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-white/20">
        🍴 FoodieDash
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
        >
          <LayoutDashboard size={20} /> Dashboard
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
        >
          <UtensilsCrossed size={20} /> Menu Items
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
        >
          <ShoppingCart size={20} /> Orders
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
        >
          <Users size={20} /> Customers
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
        >
          <BarChart size={20} /> Analytics
        </a>

        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
        >
          <Settings size={20} /> Settings
        </a>
      </nav>

      {/* Footer / Logout */}
      <div className="px-4 py-6 border-t border-white/20">
        <a
          href="#"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition"
        >
          <LogOut size={20} /> Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
