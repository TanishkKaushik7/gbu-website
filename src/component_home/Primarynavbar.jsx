import React from "react";
import {
  Send,
  Info,
  CreditCard,
  User,
  Phone,
  LogIn,
  Map,
} from "lucide-react";

const Primarynavbar = () => {
  return (
    <nav
      className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-700 text-white text-sm"
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="w-full py-2 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-2">
        {/* Left links */}
        <div className="flex flex-wrap gap-4 items-center">
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Send size={14} /> Tenders
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Send size={14} /> Recruitments
          </a>
          <a href="#" className="hover:underline">Booking</a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Info size={14} /> RTI
          </a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>

        {/* Right links */}
        <div className="flex flex-wrap gap-4 items-center">
          <a href="#" className="flex items-center gap-1 hover:underline">
            <CreditCard size={14} /> Online Fee Payment
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <User size={14} /> Student Portal
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <LogIn size={14} /> Employee Login
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Map size={14} /> Directory
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Phone size={14} /> Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Primarynavbar;
