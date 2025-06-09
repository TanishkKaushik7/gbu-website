import React, { useState, useEffect, useRef } from "react";
import {
  User,
  GraduationCap,
  FileText,
  BookOpen,
  Home,
  Camera,
  Briefcase,
  Users,
  Search,
} from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRefs = useRef({});

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const handleClickOutside = (event) => {
    const isClickInsideAnyMenu = Object.values(menuRefs.current).some(
      (ref) => ref?.contains(event.target)
    );
    if (!isClickInsideAnyMenu) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const createMenu = (label, icon, menuKey, items) => (
    <li
      className="relative"
      ref={(el) => (menuRefs.current[menuKey] = el)}
      aria-haspopup="true"
      aria-expanded={openMenu === menuKey}
    >
      <button
        type="button"
        onClick={() => toggleMenu(menuKey)}
        className={`flex items-center gap-1 cursor-pointer ${
          openMenu === menuKey ? "text-red-600" : "hover:text-red-600"
        }`}
      >
        {icon}
        {label} ▾
      </button>
      {openMenu === menuKey && (
        <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border rounded-lg z-40 p-2 text-left">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="px-3 py-1 rounded cursor-pointer transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <nav className="bg-white shadow px-4 md:px-16 py-3 flex flex-col md:flex-row items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="https://gbu-campus-gateway.lovable.app/lovable-uploads/5ae0d9ed-e0e0-4921-a0f1-8e17676824d6.png"
          alt="GBU Logo"
          className="w-64 h-12 mr-3"
        />
      </div>

      {/* Navigation */}
      <ul className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 text-sm text-gray-700 relative">
        {createMenu("About Us", <User size={16} />, "about", [
          "Vision & Mission",
          "Chancellor's Message",
          "Vice-Chancellor's Message",
          "Governance & Committees",
          "GBU Strategic Perspective",
          "Policies, Statutes & RTI",
          "Mandatory Disclosures",
          "Media Coverage",
        ])}

        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <GraduationCap size={16} />
          Academics
        </li>

        {createMenu("Admissions", <FileText size={16} />, "admissions", [
          "Admission Process",
          "Courses Offered (UG | PG | PhD)",
          "Eligibility & Reservation",
          "Fee Structure & Prospectus",
          "International Admissions",
        ])}

        {createMenu("Research", <BookOpen size={16} />, "research", [
          "Research Centers and Labs",
          "Publications and Patents",
          "Incubation and Innovation",
          "Startups",
          "Funded Projects",
          "IRP Cell",
          "Research Highlights",
        ])}

        {createMenu("Campus Life", <Home size={16} />, "campus", [
          "Hostel Facilities",
          "Sports & Fitness",
          "Cultural Activities",
          "Clubs & Societies",
          "Health & Wellness",
          "Student Support Services",
          "Campus Events",
        ])}

        {createMenu("Announcements", <Camera size={16} />, "announcements", [
          "News & Updates",
          "Event Calendar",
          "Notices",
          "Press Releases",
          "Media Gallery",
          "Newsletter",
        ])}

        {createMenu("Placements", <Briefcase size={16} />, "placements", [
          "Placement Process",
          "Top Recruiters",
          "Internship Opportunities",
          "Career Counseling",
          "Placement Statistics",
        ])}

        {createMenu("Alumni", <Users size={16} />, "alumni", [
          "Alumni Network",
          "Alumni Events",
          "Alumni Achievements",
          "Become a Mentor",
        ])}

        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <Search size={16} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
