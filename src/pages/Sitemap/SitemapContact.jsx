import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

function SitemapContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/sitemapMain" className="flex items-center hover:text-blue-600 transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-gray-900">Contact Us</span>
        </nav>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">Get in touch with us for any queries or assistance.</p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <p className="text-gray-700 mb-4">This is a placeholder page for the Contact Us section.</p>
            <p className="text-gray-600">Contact form, address, and key contacts will be added here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitemapContact;
