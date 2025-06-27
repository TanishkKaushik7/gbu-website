import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const menuRefs = useRef({});

  const toggleMenu = (menuKey) => {
    setOpenMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const toggleMobileMenu = (menuKey) => {
    setMobileOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const handleClickOutside = (event) => {
    const isClickInsideAnyMenu = Object.values(menuRefs.current).some((ref) =>
      ref?.contains(event.target),
    );
    if (!isClickInsideAnyMenu) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const routes = {
    home: "/schools/ict",
    faculty: "/schools/ict/faculty",
    about: {
      dean: "/schools/ict/about/dean",
      coeidrone: "/schools/ict/about/coeidrone",
      coeiraem: "/schools/ict/about/coeiraem",
      board: "/schools/ict/about/board",
      staff: "/schools/ict/about/staff",
      labs: "/schools/ict/about/labs",
      activities: "/schools/ict/about/activities",
    },
    departments: {
      cse: "/schools/ict/departments/cse",
      it: "/schools/ict/departments/it",
      ece: "/schools/ict/departments/ece",
    },
    research: {
      profile: "/schools/ict/research/profile",
      consultancy: "/schools/ict/research/consultancy",
      scholars: "/schools/ict/research/scholars",
      projects: "/schools/ict/research/projects",
      patents: "/schools/ict/research/patents",
    },
    contact: "/schools/ict/contact",
  };

  const dropdownMenus = [
    {
      key: "about",
      label: "About Us",
      items: [
        { label: "Dean's Message", href: routes.about.dean },
        { label: "USICT COEIDrone Technologies", href: routes.about.coeidrone },
        { label: "USICT COEIRAEM", href: routes.about.coeiraem },
        { label: "USICT Board of Studies", href: routes.about.board },
        { label: "USICT Staff Members", href: routes.about.staff },
        { label: "USICT Laboratories", href: routes.about.labs },
        { label: "USICT Activities", href: routes.about.activities },
      ],
    },
    {
      key: "departments",
      label: "Departments & Academic Programs",
      items: [
        {
          label: "Department of Computer Science and Engineering",
          href: routes.departments.cse,
        },
        {
          label: "Department of Information Technology",
          href: routes.departments.it,
        },
        {
          label: "Department of Electronic & Communication",
          href: routes.departments.ece,
        },
      ],
    },
    {
      key: "research",
      label: "Research",
      items: [
        { label: "Research Area and Profile", href: routes.research.profile },
        {
          label: "Training and Consultancy",
          href: routes.research.consultancy,
        },
        { label: "Research Scholars", href: routes.research.scholars },
        { label: "Research Projects", href: routes.research.projects },
        { label: "Patents", href: routes.research.patents },
      ],
    },
  ];

  return (
    <nav className="fixed top-9 left-0 w-full z-40 bg-white shadow px-4 md:px-16 py-3 flex items-center justify-between">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img
          src="/assets/logo.svg"
          alt="USICT Logo"
          className="w-64 h-12 mr-3"
        />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex flex-wrap justify-center gap-6 text-sm text-gray-700 relative">
        <li>
          <Link to={routes.home} className="hover:text-purple-700">
            Home
          </Link>
        </li>
        <li>
          <Link to={routes.faculty} className="hover:text-purple-700">
            Faculty
          </Link>
        </li>
        {dropdownMenus.map(({ key, label, items }) => (
          <li
            key={key}
            className="relative"
            ref={(el) => (menuRefs.current[key] = el)}
            aria-haspopup="true"
            aria-expanded={openMenu === key}
          >
            <button
              type="button"
              onClick={() => toggleMenu(key)}
              className={`flex items-center gap-1 cursor-pointer ${
                openMenu === key ? "text-purple-700" : "hover:text-purple-700"
              }`}
            >
              {label} ▾
            </button>
            {openMenu === key && (
              <ul className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-lg border p-2 z-50">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                      onClick={() => setOpenMenu(null)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <Link to={routes.contact} className="hover:text-purple-700">
            Contact us
          </Link>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-purple-700">
          <Search size={16} />
        </li>
      </ul>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50 px-4 py-4">
          <ul className="flex flex-col gap-2 text-sm text-gray-700">
            <li>
              <Link
                to={routes.home}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-2 hover:text-purple-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={routes.faculty}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-2 hover:text-purple-700"
              >
                Faculty
              </Link>
            </li>
            {dropdownMenus.map(({ key, label, items }) => (
              <li key={key}>
                <button
                  onClick={() => toggleMobileMenu(key)}
                  className="w-full flex justify-between items-center py-2 px-2 text-left hover:text-purple-700"
                >
                  <span>{label}</span>
                  {mobileOpenMenus[key] ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {mobileOpenMenus[key] && (
                  <ul className="pl-6 flex flex-col gap-1 mt-1">
                    {items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href}
                          className="block py-1 hover:text-purple-700"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setMobileOpenMenus({});
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:text-purple-700">
              <Search size={16} />
              Search
            </li>
            <li>
              <Link
                to={routes.contact}
                className="block py-2 px-2 hover:text-purple-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
