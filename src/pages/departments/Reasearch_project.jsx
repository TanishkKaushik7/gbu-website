 import { Link } from "react-router-dom";
import { ArrowLeft, Award, Calendar, DollarSign, Users, CheckCircle, Clock, Target } from "lucide-react";

const ResearchProjects = () => {
  return (
<>
 <div className="min-h-sceen">
 {/* Hero Section */}
      <section className="py-20   bg-gradient-to-br from-purple-50 to-indigo-100 h-[310px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
           Transformative Research Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Our research projects span cutting-edge technologies and address real-world challenges,
            funded by prestigious government agencies and industry partners.
          </p>
        </div>
      </section>
      {/* Stats */}
      <section className="py-16 px-4 bg-white"> 
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6  max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">75</h3>
              <p className="text-gray-600">Active Projects</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹45Cr</h3>
              <p className="text-gray-600">Total Funding</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">120</h3>
              <p className="text-gray-600">Researchers Involved</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">45</h3>
              <p className="text-gray-600">Completed Projects</p>
            </div>
          </div>
      </section>

      {/* Major Ongoing Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Major Ongoing Projects</h2>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      AI/ML
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    AI-Powered Smart Healthcare Monitoring System
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Development of an intelligent healthcare monitoring system using IoT sensors,
                    machine learning algorithms, and real-time data analytics for early disease detection
                    and patient monitoring in rural healthcare settings.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Duration: 2023-2026
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Team: 8 researchers
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Funding Agency:</span>
                      <span className="font-semibold">SERB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Grant Amount:</span>
                      <span className="font-semibold text-green-600">₹2.5 Cr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal Investigator:</span>
                      <span className="font-semibold">Dr. Rajesh Kumar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-semibold">CSE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Progress:</span>
                      <span className="font-semibold text-blue-600">65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      5G/6G
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Next-Generation Wireless Communication for Smart Cities
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Research and development of advanced 5G/6G communication protocols, massive MIMO
                    systems, and network optimization algorithms for smart city infrastructure
                    including traffic management, environmental monitoring, and public safety.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Duration: 2024-2027
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Team: 12 researchers
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Funding Agency:</span>
                      <span className="font-semibold">DST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Grant Amount:</span>
                      <span className="font-semibold text-green-600">₹3.2 Cr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal Investigator:</span>
                      <span className="font-semibold">Dr. Meera Krishnan</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-semibold">ECE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Progress:</span>
                      <span className="font-semibold text-blue-600">35%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-100 p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      Cybersecurity
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Quantum-Resistant Cryptography for Critical Infrastructure
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Development of post-quantum cryptographic algorithms and protocols to secure
                    critical infrastructure against quantum computing threats. Focus on banking,
                    power grids, and government communication systems.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Duration: 2023-2025
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Team: 6 researchers
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Funding Agency:</span>
                      <span className="font-semibold">DRDO</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Grant Amount:</span>
                      <span className="font-semibold text-green-600">₹1.8 Cr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal Investigator:</span>
                      <span className="font-semibold">Dr. Amit Patel</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-semibold">CSE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Progress:</span>
                      <span className="font-semibold text-blue-600">80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Project Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Government Funded</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">SERB Projects:</span>
                  <span className="font-semibold">15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">DST Projects:</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">DRDO Projects:</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">CSIR Projects:</span>
                  <span className="font-semibold">6</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-gray-900">Total Funding:</span>
                    <span className="text-green-600">₹28 Cr</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Collaboration</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">TCS Partnership:</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Infosys Projects:</span>
                  <span className="font-semibold">6</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Intel Collaboration:</span>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Qualcomm Projects:</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-gray-900">Total Funding:</span>
                    <span className="text-green-600">₹12 Cr</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">International Projects</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">EU Horizon Projects:</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">NSF Collaboration:</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">JSPS Fellowship:</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Newton Fund:</span>
                  <span className="font-semibold">1</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-gray-900">Total Funding:</span>
                    <span className="text-green-600">₹5 Cr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Completed Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recently Completed Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Blockchain-based Supply Chain Management System
              </h3>
              <p className="text-gray-600 mb-4">
                Developed a comprehensive blockchain solution for transparent and secure supply chain
                tracking with focus on pharmaceutical and food industries.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <p className="font-semibold">2021-2024</p>
                </div>
                <div>
                  <span className="text-gray-500">Funding:</span>
                  <p className="font-semibold text-green-600">₹1.5 Cr</p>
                </div>
                <div>
                  <span className="text-gray-500">PI:</span>
                  <p className="font-semibold">Dr. Vikram Singh</p>
                </div>
                <div>
                  <span className="text-gray-500">Publications:</span>
                  <p className="font-semibold">12</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Impact:</strong> Technology transferred to 3 companies, 2 patents filed
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Energy-Efficient VLSI Design for IoT Devices
              </h3>
              <p className="text-gray-600 mb-4">
                Research on ultra-low power VLSI circuits and system design methodologies
                for battery-operated IoT sensors and wearable devices.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <p className="font-semibold">2020-2023</p>
                </div>
                <div>
                  <span className="text-gray-500">Funding:</span>
                  <p className="font-semibold text-green-600">₹2.2 Cr</p>
                </div>
                <div>
                  <span className="text-gray-500">PI:</span>
                  <p className="font-semibold">Dr. Suresh Reddy</p>
                </div>
                <div>
                  <span className="text-gray-500">Publications:</span>
                  <p className="font-semibold">15</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Impact:</strong> 90% power reduction achieved, licensed to semiconductor company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Upcoming Research Initiatives</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-orange-500 mr-3" />
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Planning Phase
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Quantum Machine Learning Research Center
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Establishment of a dedicated research center for quantum computing and machine learning convergence.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Expected Start:</span>
                  <span className="font-semibold">2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Proposed Funding:</span>
                  <span className="font-semibold">₹10 Cr</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">5 years</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-orange-500 mr-3" />
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Proposal Submitted
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Autonomous Vehicle Safety Systems
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Development of AI-powered safety systems for autonomous vehicles with focus on Indian traffic conditions.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Expected Start:</span>
                  <span className="font-semibold">2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Proposed Funding:</span>
                  <span className="font-semibold">₹4.5 Cr</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">4 years</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-orange-500 mr-3" />
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Under Review
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Sustainable Computing Infrastructure
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Research on green computing technologies and sustainable data center architectures for reduced carbon footprint.
              </p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span>Expected Start:</span>
                  <span className="font-semibold">2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Proposed Funding:</span>
                  <span className="font-semibold">₹3.8 Cr</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Impact & Outcomes</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Publications & Patents</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">IEEE Journal Publications</span>
                    <span className="text-2xl font-bold text-blue-600">85</span>
                  </div>
                  <p className="text-sm text-gray-600">High-impact journal publications</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Conference Papers</span>
                    <span className="text-2xl font-bold text-green-600">145</span>
                  </div>
                  <p className="text-sm text-gray-600">International conference presentations</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Patents Filed</span>
                    <span className="text-2xl font-bold text-purple-600">28</span>
                  </div>
                  <p className="text-sm text-gray-600">National and international patents</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Technology Transfers</span>
                    <span className="text-2xl font-bold text-orange-600">12</span>
                  </div>
                  <p className="text-sm text-gray-600">Successful industry collaborations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Impact</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Healthcare Innovation</h4>
                  <p className="text-sm text-gray-600">
                    AI-powered diagnostic tools developed by our team are being used in 15+ rural
                    healthcare centers, improving early disease detection by 40%.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Agriculture</h4>
                  <p className="text-sm text-gray-600">
                    IoT-based crop monitoring systems have helped 500+ farmers increase crop
                    yield by 25% while reducing water consumption by 30%.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Education Technology</h4>
                  <p className="text-sm text-gray-600">
                    Personalized learning platforms developed for K-12 education are being
                    used by 10,000+ students across 50 schools.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Environmental Monitoring</h4>
                  <p className="text-sm text-gray-600">
                    Air quality monitoring network deployed in 3 cities provides real-time
                    pollution data to local authorities and citizens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Research Collaboration Opportunities</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Interested in collaborating on cutting-edge research projects?
            Contact our research office to explore partnership opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research Office</h3>
              <p className="text-gray-300">research.office@techvision.edu</p>
              <p className="text-gray-300">+1 (555) 123-4580</p>
            </div>
            <div>
              <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Funding Support</h3>
              <p className="text-gray-300">funding.support@techvision.edu</p>
              <p className="text-gray-300">+1 (555) 123-4581</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Relations</h3>
              <p className="text-gray-300">industry.relations@techvision.edu</p>
              <p className="text-gray-300">+1 (555) 123-4582</p>
            </div>
          </div>
        </div>
      </section>
   </div>
      </>
  );
};

export default ResearchProjects;
