import React from "react";
import { Link } from "react-router-dom";
// Button component defined locally for this file
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  // Variant styles
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent",
    ghost: "bg-transparent hover:bg-gray-100",
    secondary: "bg-white text-blue-600 hover:bg-gray-100",
  };

  // Size styles
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-sm ${variantClasses[variant] || ""} ${sizeClasses[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
// Card components defined locally for this file

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl bg-white overflow-hidden shadow ${className}`}

  >
    {children}
  </div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`px-6 pt-6 ${className}`}>{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={`font-semibold text-xl ${className}`}>{children}</h3>
);

const CardContent = ({ className = "", children }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

const CardDescription = ({ className = "", children }) => (
  <p className={`text-gray-500 text-base ${className}`}>{children}</p>
);
import {
  GraduationCap,
  Users,
  Calendar,
  Phone,
  ChevronRight,
} from "lucide-react";

const SitemapMain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our University
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover excellence in education, research, and innovation. Navigate
            through our comprehensive website to explore all that we offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sitemap">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Sitemap
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Academics Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white backdrop-blur-sm">
            <CardHeader className="text-center pb-2 bg-white">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Academics</CardTitle>
            </CardHeader>
            <CardContent className="text-center bg-white">
              <CardDescription className="mb-4">
                Explore our academic programs, faculty, and research
                opportunities.
              </CardDescription>
              <Link to="/sitemapAcademics">
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Learn More →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Admissions Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardHeader className="text-center pb-2 bg-white">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Admissions</CardTitle>
            </CardHeader>
            <CardContent className="text-center bg-white">
              <CardDescription className="mb-4">
                Find information about courses, eligibility, and admission
                process.
              </CardDescription>
              <Link to="/admissions/admission-process">
                <Button
                  variant="ghost"
                  className="text-green-600 hover:text-green-700"
                >
                  Apply Now →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Events Card */}

<Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
  <CardHeader className="text-center pb-2 bg-white">
    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
      <Calendar className="w-6 h-6 text-purple-600" />
    </div>
    <CardTitle className="text-lg">Events</CardTitle>
  </CardHeader>
  <CardContent className="text-center bg-white">
    <CardDescription className="mb-4">
      Stay updated with latest news, events, and announcements.
    </CardDescription>
    <Link to="/announcements/news-notifications">
      <Button
        variant="ghost"
        className="text-purple-600 hover:text-purple-700"
      >
        View Events →
      </Button>
    </Link>
  </CardContent>
</Card>



          {/* Contact Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-2 bg-white">
              <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-center bg-white">
              <CardDescription className="mb-4">
                Get in touch with us for any queries or assistance.
              </CardDescription>
              <Link to="/sitemapContact">
                <Button
                  variant="ghost"
                  className="text-orange-600 hover:text-orange-700"
                >
                  Contact Us →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Sitemap Highlight */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-xl">
          <CardContent className="text-center bg-white py-8">
            <h2 className="text-2xl text-blue-600 font-bold mb-4">
              Need to find something specific?
            </h2>
            <p className="text-blue-400 mb-6 max-w-2xl mx-auto">
              Our comprehensive sitemap provides an organized view of all pages
              and sections on our website, making it easy to navigate and find
              exactly what you're looking for.
            </p>
            <Link to="/sitemap">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Complete Sitemap
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SitemapMain;
