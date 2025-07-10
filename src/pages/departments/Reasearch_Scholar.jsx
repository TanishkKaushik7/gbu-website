 import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Star,
  Calendar,
  Mail,
  CheckCircle,
} from "lucide-react";

const ResearchScholars = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20   bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Our Research Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Meet the exceptional Ph.D. scholars and research associates who are
            pushing the boundaries of knowledge and innovation across various
            engineering disciplines at TechVision.
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">95</h3>
            <p className="text-gray-600">Ph.D. Scholars</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">28</h3>
            <p className="text-gray-600">Research Associates</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">45</h3>
            <p className="text-gray-600">Graduated Scholars</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">12</h3>
            <p className="text-gray-600">Award Winners</p>
          </div>
        </div>
      </section>

      {/* Featured Scholars */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Research Scholars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scholar 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  AS
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Arjun Sharma
                </h3>
                <p className="text-blue-600 font-semibold">
                  Ph.D. Scholar (Final Year)
                </p>
                <p className="text-sm text-gray-600">
                  Computer Science & Engineering
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Research Area:
                  </h4>
                  <p className="text-sm text-gray-600">
                    Deep Learning for Medical Image Analysis
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Supervisor:
                  </h4>
                  <p className="text-sm text-gray-600">Dr. Rajesh Kumar</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Publications:
                  </h4>
                  <p className="text-sm text-gray-600">
                    8 (3 in top-tier conferences)
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Recent Achievement:
                </p>
                <p className="text-xs text-gray-500">
                  Best Paper Award at ICML 2024 for work on "Attention
                  Mechanisms in Medical Imaging"
                </p>
              </div>
            </div>

            {/* Scholar 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  PK
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Priya Krishnan
                </h3>
                <p className="text-green-600 font-semibold">
                  Ph.D. Scholar (3rd Year)
                </p>
                <p className="text-sm text-gray-600">
                  Electronics & Communication
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Research Area:
                  </h4>
                  <p className="text-sm text-gray-600">
                    5G/6G Wireless Communication Systems
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Supervisor:
                  </h4>
                  <p className="text-sm text-gray-600">Dr. Meera Krishnan</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Publications:
                  </h4>
                  <p className="text-sm text-gray-600">
                    6 (2 in IEEE journals)
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Current Project:
                </p>
                <p className="text-xs text-gray-500">
                  SERB funded project on "Massive MIMO for 6G Networks" - ₹18
                  Lakhs
                </p>
              </div>
            </div>

            {/* Scholar 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  RM
                </div>
                <h3 className="text-xl font-bold text-gray-900">Rahul Mehta</h3>
                <p className="text-purple-600 font-semibold">
                  Research Associate
                </p>
                <p className="text-sm text-gray-600">Information Technology</p>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Research Area:
                  </h4>
                  <p className="text-sm text-gray-600">
                    Blockchain Security & Smart Contracts
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Principal Investigator:
                  </h4>
                  <p className="text-sm text-gray-600">Dr. Vikram Singh</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Publications:
                  </h4>
                  <p className="text-sm text-gray-600">
                    12 (5 in top cybersecurity journals)
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Innovation:
                </p>
                <p className="text-xs text-gray-500">
                  Developed secure voting system using blockchain - Patent filed
                </p>
              </div>
            </div>

            {/* Scholar 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SG
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sneha Gupta</h3>
                <p className="text-orange-600 font-semibold">
                  Ph.D. Scholar (2nd Year)
                </p>
                <p className="text-sm text-gray-600">
                  Computer Science & Engineering
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Research Area:
                  </h4>
                  <p className="text-sm text-gray-600">
                    Natural Language Processing & Chatbots
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Supervisor:
                  </h4>
                  <p className="text-sm text-gray-600">Dr. Priya Sharma</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Publications:
                  </h4>
                  <p className="text-sm text-gray-600">
                    4 (1 in ACL conference)
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Internship:
                </p>
                <p className="text-xs text-gray-500">
                  Google Research - Summer 2024, worked on multilingual chatbot
                  systems
                </p>
              </div>
            </div>

            {/* Scholar 5 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-xl">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  AK
                </div>
                <h3 className="text-xl font-bold text-gray-900">Amit Kumar</h3>
                <p className="text-teal-600 font-semibold">
                  Ph.D. Scholar (4th Year)
                </p>
                <p className="text-sm text-gray-600">
                  Electronics & Communication
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Research Area:
                  </h4>
                  <p className="text-sm text-gray-600">
                    VLSI Design for IoT Applications
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Supervisor:
                  </h4>
                  <p className="text-sm text-gray-600">Dr. Suresh Reddy</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Publications:
                  </h4>
                  <p className="text-sm text-gray-600">
                    10 (4 in IEEE VLSI journals)
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Industry Collaboration:
                </p>
                <p className="text-xs text-gray-500">
                  Intel partnership for low-power IoT chip design
                </p>
              </div>
            </div>

            {/* Scholar 6 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-xl">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  NK
                </div>
                <h3 className="text-xl font-bold text-gray-900">Neha Kapoor</h3>
                <p className="text-pink-600 font-semibold">
                  Ph.D. Scholar (1st Year)
                </p>
                <p className="text-sm text-gray-600">Information Technology</p>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Research Area:
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cloud Computing Security & Privacy
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Supervisor:
                  </h4>
                  <p className="text-sm text-gray-600">Dr. Anita Gupta</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Background:
                  </h4>
                  <p className="text-sm text-gray-600">
                    M.Tech from IIT Delhi (Gold Medalist)
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-lg">
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Fellowship:
                </p>
                <p className="text-xs text-gray-500">
                  CSIR Junior Research Fellowship recipient - ₹31,000/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Distribution */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Research Areas Distribution
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Department-wise Scholar Distribution
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Computer Science & Engineering
                    </h4>
                    <p className="text-sm text-gray-600">
                      AI/ML, Cybersecurity, Software Engineering
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600">42</span>
                    <p className="text-xs text-gray-500">Scholars</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Electronics & Communication
                    </h4>
                    <p className="text-sm text-gray-600">
                      VLSI, Communication Systems, Signal Processing
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-600">
                      35
                    </span>
                    <p className="text-xs text-gray-500">Scholars</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Information Technology
                    </h4>
                    <p className="text-sm text-gray-600">
                      Cloud Computing, Data Analytics, Web Technologies
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-600">
                      18
                    </span>
                    <p className="text-xs text-gray-500">Scholars</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Funding & Fellowship Status
              </h3>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    CSIR Fellowship
                  </h4>
                  <p className="text-sm text-gray-600">
                    25 scholars | ₹31,000-35,000/month
                  </p>
                  <p className="text-xs text-gray-500">
                    Includes contingency and HRA
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    UGC Fellowship
                  </h4>
                  <p className="text-sm text-gray-600">
                    20 scholars | ₹31,000-35,000/month
                  </p>
                  <p className="text-xs text-gray-500">
                    NET/GATE qualified scholars
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    SERB Fellowship
                  </h4>
                  <p className="text-sm text-gray-600">
                    12 scholars | ₹31,000-35,000/month
                  </p>
                  <p className="text-xs text-gray-500">Project-based funding</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    Industry Sponsored
                  </h4>
                  <p className="text-sm text-gray-600">
                    15 scholars | ₹25,000-40,000/month
                  </p>
                  <p className="text-xs text-gray-500">
                    TCS, Infosys, Intel partnerships
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Self-Funded</h4>
                  <p className="text-sm text-gray-600">23 scholars</p>
                  <p className="text-xs text-gray-500">
                    Working professionals and international students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholar Achievements */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Recent Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-xl">
              <Award className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Best Thesis Award
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Arjun Sharma won the "Best Ph.D. Thesis Award" from Indian
                Academy of Sciences for his work on medical image analysis.
              </p>
              <p className="text-xs text-gray-500">December 2024</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
              <Star className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                International Conference
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Priya Krishnan presented her research at IEEE Global
                Communications Conference (GLOBECOM) 2024 in Singapore.
              </p>
              <p className="text-xs text-gray-500">November 2024</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Publication Milestone
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Rahul Mehta published his 5th paper in a top-tier cybersecurity
                journal with impact factor 8.2.
              </p>
              <p className="text-xs text-gray-500">October 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Join Our Research Community
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ph.D. Admission Requirements
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">
                      Educational Qualification:
                    </strong>
                    <p className="text-sm text-gray-600">
                      M.Tech/M.E./M.S. in relevant field with minimum 60% marks
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Entrance Test:</strong>
                    <p className="text-sm text-gray-600">
                      GATE/NET qualified or TechVision Research Aptitude Test
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">
                      Research Proposal:
                    </strong>
                    <p className="text-sm text-gray-600">
                      2-3 page research proposal in chosen area
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Interview:</strong>
                    <p className="text-sm text-gray-600">
                      Technical interview with potential supervisors
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Application Timeline
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <strong className="text-gray-900">
                      Application Period:
                    </strong>
                    <p className="text-sm text-gray-600">
                      January 1 - March 31, 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <strong className="text-gray-900">Entrance Test:</strong>
                    <p className="text-sm text-gray-600">April 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                  <div>
                    <strong className="text-gray-900">Interviews:</strong>
                    <p className="text-sm text-gray-600">May 1-15, 2025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                  <div>
                    <strong className="text-gray-900">Results:</strong>
                    <p className="text-sm text-gray-600">May 31, 2025</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Application Fee:</strong> ₹2,000 (₹1,000 for SC/ST)
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Annual Fee:</strong> ₹50,000 (Subject to revision)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Connect with Our Research Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ph.D. Admissions</h3>
              <p className="text-gray-300">phd.admissions@techvision.edu</p>
              <p className="text-gray-300">+1 (555) 123-4576</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Research Coordinator
              </h3>
              <p className="text-gray-300">
                research.coordinator@techvision.edu
              </p>
              <p className="text-gray-300">+1 (555) 123-4577</p>
            </div>
            <div>
              <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fellowship Office</h3>
              <p className="text-gray-300">fellowships@techvision.edu</p>
              <p className="text-gray-300">+1 (555) 123-4578</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchScholars;
