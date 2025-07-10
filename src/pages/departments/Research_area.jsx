 import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Users, Award, TrendingUp, Brain, Zap, Shield, Database } from "lucide-react";

const ResearchArea = () => {
  return (
<>
 
{/* Hero Section */}
      <section className="py-20   bg-gradient-to-br  from-green-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Research Excellence at TechVision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              Our research ecosystem spans cutting-edge domains in engineering and technology, fostering innovation
            that addresses global challenges and shapes the future of technology.
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4 bg-white"> 
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Active Research Projects</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">85</h3>
              <p className="text-gray-600">Research Faculty</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Publications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹25Cr</h3>
              <p className="text-gray-600">Research Funding</p>
            </div>
          </div>
      </section>

      {/* Major Research Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Major Research Domains</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Brain className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Artificial Intelligence & Machine Learning</h3>
                  <p className="text-blue-600 font-semibold">Leading Research Domain</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Deep Learning & Neural Networks</strong>
                    <p className="text-sm text-gray-600">Advanced architectures for computer vision and NLP</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Computer Vision & Image Processing</strong>
                    <p className="text-sm text-gray-600">Medical imaging, autonomous systems, surveillance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Natural Language Processing</strong>
                    <p className="text-sm text-gray-600">Chatbots, sentiment analysis, language models</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Reinforcement Learning</strong>
                    <p className="text-sm text-gray-600">Game AI, robotics, decision-making systems</p>
                  </div>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Key Faculty:</strong> Dr. Rajesh Kumar, Dr. Priya Sharma, Dr. Neha Agarwal</p>
                <p className="text-sm text-gray-600"><strong>Research Projects:</strong> 25 | <strong>Funding:</strong> ₹8.5 Cr</p>
              </div>
            </div>

            {/* VLSI & Electronics */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Zap className="h-12 w-12 text-green-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">VLSI Design & Electronics</h3>
                  <p className="text-green-600 font-semibold">Core Engineering Research</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Low Power VLSI Design</strong>
                    <p className="text-sm text-gray-600">Energy-efficient chip design for mobile devices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>RF & Microwave Engineering</strong>
                    <p className="text-sm text-gray-600">5G/6G communication systems, antenna design</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Embedded Systems & IoT</strong>
                    <p className="text-sm text-gray-600">Smart sensors, edge computing, industrial IoT</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Signal Processing</strong>
                    <p className="text-sm text-gray-600">Biomedical signals, audio/video processing</p>
                  </div>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Key Faculty:</strong> Dr. Meera Krishnan, Dr. Suresh Reddy, Dr. Amit Kumar</p>
                <p className="text-sm text-gray-600"><strong>Research Projects:</strong> 22 | <strong>Funding:</strong> ₹6.8 Cr</p>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-red-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Cybersecurity & Information Security</h3>
                  <p className="text-red-600 font-semibold">Critical Infrastructure Protection</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Network Security & Intrusion Detection</strong>
                    <p className="text-sm text-gray-600">Advanced threat detection, zero-day exploits</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Cryptography & Blockchain</strong>
                    <p className="text-sm text-gray-600">Post-quantum cryptography, DeFi security</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Digital Forensics</strong>
                    <p className="text-sm text-gray-600">Cyber crime investigation, evidence analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>IoT Security</strong>
                    <p className="text-sm text-gray-600">Secure device communication, privacy protection</p>
                  </div>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Key Faculty:</strong> Dr. Amit Patel, Dr. Vikram Singh, Dr. Kavita Jain</p>
                <p className="text-sm text-gray-600"><strong>Research Projects:</strong> 18 | <strong>Funding:</strong> ₹5.2 Cr</p>
              </div>
            </div>

            {/* Data Science */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Database className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Data Science & Big Data Analytics</h3>
                  <p className="text-purple-600 font-semibold">Data-Driven Innovation</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Big Data Processing</strong>
                    <p className="text-sm text-gray-600">Distributed computing, real-time analytics</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Predictive Analytics</strong>
                    <p className="text-sm text-gray-600">Healthcare predictions, financial modeling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Data Mining & Visualization</strong>
                    <p className="text-sm text-gray-600">Pattern discovery, interactive dashboards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Business Intelligence</strong>
                    <p className="text-sm text-gray-600">Decision support systems, performance analytics</p>
                  </div>
                </li>
              </ul>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600"><strong>Key Faculty:</strong> Dr. Anita Gupta, Dr. Rahul Mehta, Dr. Pooja Sharma</p>
                <p className="text-sm text-gray-600"><strong>Research Projects:</strong> 20 | <strong>Funding:</strong> ₹4.5 Cr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Specialized Research Centers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Center for AI & Robotics</h3>
              <p className="text-gray-600 mb-4">Interdisciplinary research in artificial intelligence, machine learning, and autonomous systems.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Director: Dr. Rajesh Kumar</li>
                <li>• Established: 2020</li>
                <li>• Research Fellows: 25</li>
                <li>• Industry Partners: 8</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Microelectronics Research Lab</h3>
              <p className="text-gray-600 mb-4">Advanced research in VLSI design, nanoelectronics, and semiconductor technology.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Director: Dr. Meera Krishnan</li>
                <li>• Established: 2018</li>
                <li>• Research Fellows: 20</li>
                <li>• Clean Room Facility: Yes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cybersecurity Research Center</h3>
              <p className="text-gray-600 mb-4">Cutting-edge research in information security, cryptography, and digital forensics.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Director: Dr. Amit Patel</li>
                <li>• Established: 2019</li>
                <li>• Research Fellows: 18</li>
                <li>• Security Lab: Advanced</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Science & Analytics Hub</h3>
              <p className="text-gray-600 mb-4">Big data research, predictive analytics, and business intelligence solutions.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Director: Dr. Anita Gupta</li>
                <li>• Established: 2021</li>
                <li>• Research Fellows: 22</li>
                <li>• Computing Cluster: 500 cores</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT & Smart Systems Lab</h3>
              <p className="text-gray-600 mb-4">Internet of Things, smart cities, and industrial automation research.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Director: Dr. Vikram Singh</li>
                <li>• Established: 2020</li>
                <li>• Research Fellows: 15</li>
                <li>• Test Bed: Smart Campus</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Renewable Energy Systems</h3>
              <p className="text-gray-600 mb-4">Sustainable energy research, smart grids, and energy optimization systems.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Director: Dr. Suresh Reddy</li>
                <li>• Established: 2017</li>
                <li>• Research Fellows: 12</li>
                <li>• Solar Farm: 100kW</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Funding & Collaboration */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Funding Sources */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Funding Sources</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Department of Science & Technology (DST)</h3>
                    <p className="text-sm text-gray-600">Government of India</p>
                  </div>
                  <span className="text-blue-600 font-bold">₹8.5 Cr</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Science & Engineering Research Board (SERB)</h3>
                    <p className="text-sm text-gray-600">Early Career Research Awards</p>
                  </div>
                  <span className="text-green-600 font-bold">₹6.2 Cr</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry Collaborations</h3>
                    <p className="text-sm text-gray-600">TCS, Infosys, Intel, Qualcomm</p>
                  </div>
                  <span className="text-purple-600 font-bold">₹5.8 Cr</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Council of Scientific & Industrial Research</h3>
                    <p className="text-sm text-gray-600">CSIR Research Grants</p>
                  </div>
                  <span className="text-orange-600 font-bold">₹4.5 Cr</span>
                </div>
              </div>
            </div>

            {/* International Collaborations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">International Collaborations</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">Massachusetts Institute of Technology (MIT)</h3>
                  <p className="text-sm text-gray-600 mb-2">Collaboration in AI and Machine Learning Research</p>
                  <p className="text-xs text-gray-500">Joint Publications: 12 | Exchange Programs: Active</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">Stanford University</h3>
                  <p className="text-sm text-gray-600 mb-2">VLSI Design and Computer Architecture Research</p>
                  <p className="text-xs text-gray-500">Joint Publications: 8 | Faculty Exchange: 2 per year</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">University of Cambridge</h3>
                  <p className="text-sm text-gray-600 mb-2">Cybersecurity and Cryptography Research</p>
                  <p className="text-xs text-gray-500">Joint Publications: 6 | Research Fellows: 3</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">National University of Singapore</h3>
                  <p className="text-sm text-gray-600 mb-2">IoT and Smart Systems Development</p>
                  <p className="text-xs text-gray-500">Joint Publications: 10 | Student Exchange: Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Impact & Recognition</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600 mb-4">Research Publications</p>
              <p className="text-sm text-gray-500">SCI/Scopus Indexed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">45</div>
              <p className="text-gray-600 mb-4">Patents Filed</p>
              <p className="text-sm text-gray-500">National & International</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">28</div>
              <p className="text-gray-600 mb-4">Awards & Recognitions</p>
              <p className="text-sm text-gray-500">National & International</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <p className="text-gray-600 mb-4">Technology Transfers</p>
              <p className="text-sm text-gray-500">To Industry Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Explore More Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link to="/training-consultancy" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Training & Consultancy</h3>
              <p className="text-gray-300 text-sm">Professional development and industry services</p>
            </Link>
            <Link to="/research-scholars" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <BookOpen className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research Scholars</h3>
              <p className="text-gray-300 text-sm">Meet our brilliant research community</p>
            </Link>
            <Link to="/research-projects" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research Projects</h3>
              <p className="text-gray-300 text-sm">Current and completed research initiatives</p>
            </Link>
            <Link to="/patents" className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <TrendingUp className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patents</h3>
              <p className="text-gray-300 text-sm">Our intellectual property portfolio</p>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default ResearchArea;
