 import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Award,
  Building,
  Target,
  Calendar,
  CheckCircle,
  TrendingUp,
  Briefcase,
} from "lucide-react";

const TrainingConsultancy = () => {
  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <section className="py-20   bg-gradient-to-br  from-green-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Professional Excellence Through Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            TechVision Engineering College offers comprehensive training
            programs and consultancy services to bridge the gap between academia
            and industry, fostering continuous learning and innovation.
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">5000+</h3>
            <p className="text-gray-600">Professionals Trained</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
            <p className="text-gray-600">Corporate Partners</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">150+</h3>
            <p className="text-gray-600">Training Programs</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Training Programs
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Corporate Training */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Briefcase className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Corporate Training
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Industry-Specific Solutions
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Artificial Intelligence & Machine Learning
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Comprehensive AI/ML training for technical teams
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 40 hours</span>
                    <span>Mode: Online/Offline</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Cybersecurity Awareness
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Security protocols and threat management
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 24 hours</span>
                    <span>Mode: Hybrid</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Digital Transformation
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Technology adoption and change management
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 32 hours</span>
                    <span>Mode: Online</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Price Range:</strong> ₹15,000 - ₹50,000 per
                  participant
                </p>
                <p className="text-xs text-blue-600">
                  Group discounts available
                </p>
              </div>
            </div>

            {/* Faculty Development */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-green-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Faculty Development
                  </h3>
                  <p className="text-green-600 font-semibold">
                    Academic Excellence Programs
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Emerging Technologies Workshop
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Latest trends in engineering education
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 5 days</span>
                    <span>Participants: 30</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Research Methodology Training
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Advanced research techniques and publication strategies
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 3 days</span>
                    <span>Participants: 25</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Pedagogical Skills Enhancement
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Modern teaching methodologies and assessment
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 4 days</span>
                    <span>Participants: 40</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Registration Fee:</strong> ₹5,000 - ₹12,000
                </p>
                <p className="text-xs text-green-600">
                  Accommodation available on campus
                </p>
              </div>
            </div>

            {/* Student Programs */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Award className="h-12 w-12 text-purple-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Student Enhancement
                  </h3>
                  <p className="text-purple-600 font-semibold">
                    Career Readiness Programs
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Industry Readiness Bootcamp
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Technical skills and soft skills development
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 2 weeks</span>
                    <span>Batch Size: 50</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Competitive Programming
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Algorithm design and problem-solving techniques
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 6 weeks</span>
                    <span>Batch Size: 30</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Entrepreneurship Development
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Business planning and startup methodologies
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Duration: 4 weeks</span>
                    <span>Batch Size: 25</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Special Offer:</strong> Free for TechVision students
                </p>
                <p className="text-xs text-purple-600">
                  External students: ₹2,000 - ₹8,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Consultancy Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Consultancy */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Consultancy
              </h3>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    AI/ML Implementation
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    End-to-end AI solution development and deployment
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Machine Learning Model Development</li>
                    <li>• Computer Vision Applications</li>
                    <li>• Natural Language Processing</li>
                    <li>• Predictive Analytics Solutions</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    VLSI Design Services
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Custom chip design and verification services
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Digital IC Design</li>
                    <li>• Analog Circuit Design</li>
                    <li>• FPGA Implementation</li>
                    <li>• Design Verification</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    IoT System Development
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Complete IoT ecosystem design and implementation
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Sensor Network Design</li>
                    <li>• Edge Computing Solutions</li>
                    <li>• Cloud Integration</li>
                    <li>• Mobile Application Development</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Consultancy */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Business Consultancy
              </h3>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Digital Transformation
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Strategic technology adoption and process optimization
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Technology Assessment</li>
                    <li>• Process Re-engineering</li>
                    <li>• Change Management</li>
                    <li>• ROI Analysis</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Cybersecurity Audit
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Comprehensive security assessment and recommendations
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Vulnerability Assessment</li>
                    <li>• Penetration Testing</li>
                    <li>• Security Policy Development</li>
                    <li>• Compliance Audit</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Technology Strategy
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    IT roadmap planning and technology selection
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Technology Roadmapping</li>
                    <li>• Vendor Selection</li>
                    <li>• Cost-Benefit Analysis</li>
                    <li>• Implementation Planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Tech Mahindra
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                "TechVision's AI training program helped our team transition
                from traditional software development to cutting-edge machine
                learning solutions."
              </p>
              <div className="text-xs text-gray-500">
                <p>
                  <strong>Program:</strong> AI/ML Corporate Training
                </p>
                <p>
                  <strong>Participants:</strong> 150 engineers
                </p>
                <p>
                  <strong>Duration:</strong> 3 months
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  State Bank of India
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                "The cybersecurity audit and training provided by TechVision
                significantly enhanced our security posture and employee
                awareness."
              </p>
              <div className="text-xs text-gray-500">
                <p>
                  <strong>Service:</strong> Cybersecurity Consultancy
                </p>
                <p>
                  <strong>Scope:</strong> 500+ branches
                </p>
                <p>
                  <strong>Impact:</strong> 95% threat reduction
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Smart City Project
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                "TechVision's IoT consultancy was instrumental in developing our
                smart traffic management system, reducing congestion by 40%."
              </p>
              <div className="text-xs text-gray-500">
                <p>
                  <strong>Project:</strong> Smart Traffic System
                </p>
                <p>
                  <strong>Scale:</strong> 200 intersections
                </p>
                <p>
                  <strong>Timeline:</strong> 18 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Partnership Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Initial Consultation
              </h3>
              <p className="text-sm text-gray-600">
                Free consultation to understand your requirements and objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Proposal Development
              </h3>
              <p className="text-sm text-gray-600">
                Customized proposal with detailed scope, timeline, and pricing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Project Execution
              </h3>
              <p className="text-sm text-gray-600">
                Dedicated team delivers the training or consultancy service
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Follow-up Support
              </h3>
              <p className="text-sm text-gray-600">
                Ongoing support and maintenance as per agreement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with TechVision Engineering College for comprehensive
            training and consultancy solutions tailored to your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Calendar className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Schedule Consultation
              </h3>
              <p className="text-gray-300">Book a free consultation call</p>
              <p className="text-green-400 font-semibold">
                training@techvision.edu
              </p>
            </div>
            <div>
              <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-300">Tailored programs for your needs</p>
              <p className="text-blue-400 font-semibold">
                consultancy@techvision.edu
              </p>
            </div>
            <div>
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Partnership Opportunities
              </h3>
              <p className="text-gray-300">Long-term collaboration</p>
              <p className="text-purple-400 font-semibold">
                partnerships@techvision.edu
              </p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg inline-block">
            <p className="text-lg font-semibold mb-2">Contact Information</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4575</p>
            <p className="text-gray-300">Email: training@techvision.edu</p>
            <p className="text-gray-300">Office: Building D, Ground Floor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingConsultancy;
