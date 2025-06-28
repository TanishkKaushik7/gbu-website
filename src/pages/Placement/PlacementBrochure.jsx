import React from 'react'
import { Award, BookOpen, Download, TrendingUp, Users } from 'lucide-react'

function PlacementBrochure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Download Our Latest Placement Brochure
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get comprehensive insights into our placement statistics, success stories, and career opportunities
            </p>
            <button
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
              onClick={() => window.open('https://www.gbu.ac.in/Content/admissions/brochures/Final_GBU_Brochure_2022.pdf', '_blank')}
            >
              <Download className="h-6 w-6 mr-3" />
              Download PDF Brochure
            </button>
          </div>
          

          {/* Quick Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg">
              <div className="p-4 pt-3 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">₹45 LPA</h3>
                <p className="text-gray-600">Highest Package</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg">
              <div className="p-4 pt-3 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">250+</h3>
                <p className="text-gray-600">Number of Recruiters</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg">
              <div className="p-4 pt-3 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">600+</h3>
                <p className="text-gray-600">Internship Offers</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg">
              <div className="p-4 pt-3 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-2">15+</h3>
                <p className="text-gray-600">Top Sectors</p>
              </div>
            </div>
          </div>

          {/* What's Inside Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Inside?</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Department-wise Placement Records</h3>
                    <p className="text-gray-600 text-sm">Detailed statistics for all departments</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">👥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Alumni Success Stories</h3>
                    <p className="text-gray-600 text-sm">Inspiring journeys of our graduates</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Recruiter Testimonials</h3>
                    <p className="text-gray-600 text-sm">What companies say about our students</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Training & Support Programs</h3>
                    <p className="text-gray-600 text-sm">Comprehensive career development initiatives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brochure Preview */}
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl inline-block hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                   onClick={() => window.open('https://www.gbu.ac.in/Content/admissions/brochures/Final_GBU_Brochure_2022.pdf', '_blank')}>
                <div className="w-64 h-80 bg-gradient-to-b from-red-600 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-2xl">
                  <div className="text-center">
                    <BookOpen className="h-20 w-20 mx-auto mb-6" />
                    <div className="font-bold text-xl mb-2">Placement</div>
                    <div className="font-bold text-xl mb-2">Brochure</div>
                    <div className="text-md opacity-90">2024-25</div>
                  </div>
                </div>
                <p className="text-gray-800 mt-4 text-md">Click to preview</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore?</h2>
              <p className="text-gray-600 mb-6">Download our comprehensive placement brochure and discover endless career opportunities</p>
              <button
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
                onClick={() => window.open('https://www.gbu.ac.in/Content/admissions/brochures/Final_GBU_Brochure_2022.pdf', '_blank')}
              >
                <Download className="h-6 w-6 mr-3" />
                Download Full Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlacementBrochure