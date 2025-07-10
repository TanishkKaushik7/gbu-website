import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Search,
  Home,
  Users,
  GraduationCap,
  UserCheck,
  Calendar,
  Briefcase,
  Heart,
  Phone
} from "lucide-react";

// Card, CardContent, CardHeader, CardTitle
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl shadow bg-white ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);
const CardTitle = ({ children, className = "" }) => (
  <div className={`text-xl font-semibold ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

// Input
const Input = ({ className = "", ...props }) => (
  <input
    className={`block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none transition px-3 py-2 text-base ${className}`}
    {...props}
  />
);

// Collapsible, CollapsibleContent, CollapsibleTrigger
import { useState as useLocalState } from "react";
const Collapsible = ({ open, onOpenChange, children }) => {
  return <div>{children}</div>;
};
const CollapsibleTrigger = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={`flex w-full items-center justify-between focus:outline-none ${className}`}
    {...props}
  >
    {children}
  </button>
);
const CollapsibleContent = ({ children }) => <div>{children}</div>;

const sitemapAbout = [
  {
    title: "About Us",
    path: "/about",
    icon: Users,
    children: [
      { title: "Vision & Mission", path: "/about/vision" },
      { title: "Chancellor Message", path: "/about/chancellor" },
      { title: "Vice Chancellor Message", path: "/about/vice-chancellor" },
      { title: "Governance Committees", path: "/about/governance" },
      { title: "Strategic Perspective", path: "/about/strategy" },
      { title: "Policies, Statutes & RTI", path: "/about/policies" },
      { title: "Mandatory Disclosures", path: "/about/disclosures" },
      { title: "Media Coverage", path: "/about/media" },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    icon: GraduationCap,
    children: [
      { title: "Academic Calendar & Regulations", path: "/academics/calendar" },
      { title: "CBCS Curriculum Framework", path: "/academics/curriculum" },
      { title: "Faculty Directory", path: "/academics/faculty" },
      { title: "Centers of Excellence", path: "/academics/centers" },
      { title: "International Collaboration", path: "/academics/international" },
      { title: "Reports & Publications", path: "/academics/reports" },
      { title: "Schools & Departments", path: "/academics/departments" },
    ],
  },
  {
    title: "Admissions",
    path: "/admissions",
    icon: UserCheck,
    children: [
      { title: "Admission Process", path: "/admissions/process" },
      { title: "Courses Offered (UG | PG | PhD)", path: "/admissions/courses" },
      { title: "Eligibility & Reservation", path: "/admissions/eligibility" },
      { title: "Fee Structure & Prospectus", path: "/admissions/fees" },
      { title: "International Admissions", path: "/admissions/international" },
    ],
  },
  {
    title: "Campus Life",
    path: "/campus",
    icon: Heart,
    children: [
      { title: "Overview", path: "/campus/overview" },
      { title: "Hostels", path: "/campus/hostels" },
      { title: "Sports", path: "/campus/sports" },
      { title: "Clubs and Societies", path: "/campus/clubs" },
      { title: "Meditation Centre", path: "/campus/meditation" },
      { title: "NSS", path: "/campus/nss" },
      { title: "NCC", path: "/campus/ncc" },
    ],
  },
  {
    title: "Announcements",
    path: "/announcements",
    icon: Calendar,
    children: [
      { title: "News & Updates", path: "/announcements/news" },
      { title: "Event Calendar", path: "/announcements/events" },
      { title: "Notices", path: "/announcements/notices" },
      { title: "Press Releases", path: "/announcements/press" },
      { title: "Media Gallery", path: "/announcements/gallery" },
      { title: "Newsletter", path: "/announcements/newsletter" },
    ],
  },
  {
    title: "Placements",
    path: "/placements",
    icon: Briefcase,
    children: [
      { title: "Overview", path: "/placements/overview" },
      { title: "Recruiters", path: "/placements/recruiters" },
      { title: "Student Testimonials", path: "/placements/testimonials" },
      { title: "Reports", path: "/placements/reports" },
    ],
  },
  {
    title: "Alumni",
    path: "/alumni",
    icon: Users,
    children: [
      { title: "Alumni Network", path: "/alumni/network" },
      { title: "Alumni Events", path: "/alumni/events" },
      { title: "Alumni Achievements", path: "/alumni/achievements" },
      { title: "Become a Mentor", path: "/alumni/mentor" },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: Phone,
    children: [
      { title: "Contact Form", path: "/contact/form" },
      { title: "Address & Map", path: "/contact/address" },
      { title: "Key Contacts", path: "/contact/contacts" },
    ],
  },
];

const Sitemap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionTitle) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const getAllLinks = (items) => {
    const links = [];
    items.forEach((item) => {
      if (item.children) {
        links.push(...item.children);
        links.push(...getAllLinks(item.children));
      }
    });
    return links;
  };

  const filteredData = searchTerm
    ? sitemapAbout
        .map((section) => ({
          ...section,
          children: section.children?.filter(
            (child) =>
              child.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              section.title.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter(
          (section) =>
            section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (section.children && section.children.length > 0)
        )
    : sitemapAbout;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="flex items-center hover:text-blue-600 transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-gray-900">Sitemap</span>
        </nav>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through our comprehensive website structure. Find all pages and sections organized by category.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search pages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 focus:border-blue-500 rounded-lg shadow-sm"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((section) => (
            <Card
              key={section.title}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white/95"
            >
              <CardHeader>
                <Collapsible
                  open={openSections[section.title] ?? true}
                  onOpenChange={() => toggleSection(section.title)}
                >
                  <CollapsibleTrigger className="w-full">
                    <CardTitle className="flex items-center justify-between text-left group-hover:text-blue-600 transition-colors">
                      <div className="flex items-center space-x-3">
                        {section.icon && <section.icon className="w-6 h-6 text-blue-600" />}
                        <span className="text-lg font-semibold">{section.title}</span>
                      </div>
                      {openSections[section.title] ?? true ? (
                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400 transition-transform duration-200" />
                      )}
                    </CardTitle>
                  </CollapsibleTrigger>
                </Collapsible>
              </CardHeader>

              <Collapsible
                open={openSections[section.title] ?? true}
                onOpenChange={() => toggleSection(section.title)}
              >
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <Link
                        to={section.path}
                        className="block p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200 border-l-4 border-blue-500"
                      >
                        <span className="font-medium text-blue-700 hover:text-blue-800">
                          {section.title} Overview
                        </span>
                      </Link>

                      {section.children?.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border-l-2 border-transparent hover:border-gray-300 ml-4"
                        >
                          <span className="text-gray-700 hover:text-gray-900">{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {searchTerm && filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No pages found</h3>
            <p className="text-gray-600">
              Try searching with different keywords or browse all sections above.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">
              {getAllLinks(sitemapAbout).length + sitemapAbout.length} total pages available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
