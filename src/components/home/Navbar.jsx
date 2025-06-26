import{ useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const menuRefs = useRef({});

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = (menuKey) => {
    setMobileOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
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

  const menus = [
    {
      key: "about",
      label: "About Us",
      icon: <User size={16} />,
      items: [
        "vision-mission",
        "chancellor-message",
        "vice-chancellor-message",
        "governance-committees",
        "strategic-perspective",
        "policies-statutes-rti",
        "mandatory-disclosures",
        "media-coverage",
      ].map((slug) => (
        <Link to={`/about-us/${slug}`} key={slug}>
          {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </Link>
      )),
    },
    {
      key: "academics",
      label: "Academics",
      icon: <GraduationCap size={16} />,
      items: [
        ["academic-calendar", "Academic Calendar & Regulations"],
        ["cbcs-framework", "CBCS Curriculum Framework"],
        ["faculty", "Faculty Directory"],
        ["centers-of-excellence", "Centers of Excellence"],
        ["international-collaboration", "International Collaboration"],
        ["reports-publications", "Reports & Publications"],
        ["schools", "Schools & Departments"],
      ].map(([slug, text]) => (
        <Link to={`/academics/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "admissions",
      label: "Admissions",
      icon: <FileText size={16} />,
      items: [
        ["admission-process", "Admission Process"],
        ["courses-offered", "Courses Offered (UG | PG | PhD)"],
        ["eligibility-reservation", "Eligibility & Reservation"],
        ["fee-structure-prospectus", "Fee Structure & Prospectus"],
        ["international-admissions", "International Admissions"],
      ].map(([slug, text]) => (
        <Link to={`/admissions/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "research",
      label: "Research",
      icon: <BookOpen size={16} />,
      items: [
        ["research-centers", "Center of Excellence and Labs"],
        ["publications-patents", "Publications, Patents and Projects"],
        ["incubation", "GBU Incubation Cell"],
        ["institution-innovation", "Institution and Innovation"],
        ["ipr-cell", "IPR Cell"],
      ].map(([slug, text]) => (
        <Link to={`/research/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "campus",
      label: "Campus Life",
      icon: <Home size={16} />,
      items: [
        ["hero", "Overview"],
        ["hostel-facilities", "Hostels"],
        ["sports-fitness", "Sports"],
        ["clubs-societies", "Clubs and Societies"],
        ["meditation-center", "Meditation Centre"],
        ["NSS", "National Service Scheme (NSS)"],
        ["NCC", "National Cadet Corps (NCC)"],
      ].map(([slug, text]) => (
        <Link to={`/campus-life/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "announcements",
      label: "Announcements",
      icon: <Camera size={16} />,
      items: [
        ["news-notifications", "News & Updates"],
        ["event-calendar", "Event Calendar"],
        ["notices", "Notices"],
        ["press-releases", "Press Releases"],
        ["media-gallery", "Media Gallery"],
        ["newsletter", "Newsletter"],
      ].map(([slug, text]) => (
        <Link to={`/announcements/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
    {
      key: "placements",
      label: "Placements",
      icon: <Briefcase size={16} />,
      path: "/placements",
    },
    {
      key: "alumni",
      label: "Alumni",
      icon: <Users size={16} />,
      items: [
        ["alumni-network", "Alumni Network"],
        ["alumni-events", "Alumni Events"],
        ["alumni-achievements", "Alumni Achievements"],
        ["become-mentor", "Become a Mentor"],
      ].map(([slug, text]) => (
        <Link to={`/alumni/${slug}`} key={slug}>
          {text}
        </Link>
      )),
    },
  ];

  const createMenu = (label, icon, menuKey, items, path) => {
    if (path) {
      return (
        <li key={menuKey}>
          <Link
            to={path}
            className="flex items-center gap-1 hover:text-red-600"
          >
            {icon} {label}
          </Link>
        </li>
      );
    }

    return (
      <li
        key={menuKey}
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
                onClick={() => setOpenMenu(null)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="fixed top-9 left-0 w-full z-40 bg-white shadow px-4 md:px-16 py-3 flex items-center justify-between">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img src="/assets/logo.png" alt="GBU Logo" className="w-64 h-12 mr-3" />
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
        {menus.map(({ key, label, icon, items, path }) =>
          createMenu(label, icon, key, items, path)
        )}
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <Search size={16} />
        </li>
      </ul>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50 px-4 py-4">
          <ul className="flex flex-col gap-2 text-sm text-gray-700">
            {menus.map(({ key, label, icon, items, path }) => (
              <li key={key}>
                {path ? (
                  <Link
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-2 px-2 hover:text-red-600"
                  >
                    {icon} {label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleMobileMenu(key)}
                      className="w-full flex justify-between items-center py-2 px-2 text-left hover:text-blue-600"
                    >
                      <span className="flex items-center gap-2">
                        {icon} {label}
                      </span>
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
                            <div
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileOpenMenus({});
                              }}
                              className="block py-1 hover:text-red-600"
                            >
                              {item}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
            <li className="flex items-center gap-2 py-2 px-2 cursor-pointer hover:text-blue-600">
              <Search size={16} />
              Search
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
