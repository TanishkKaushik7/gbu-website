import React, { useState } from "react";

const ViceChancellor = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Education', 'Research', 'Vision'];

  const tabContent = {
    Overview: {
      title: "Experience",
      content: "Over 30 years in academic, administration, and research excellence across multiple disciplines."
    },
    Education: {
      title: "Educational Background",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800">Ph.D. in Computer Science & Engineering</h4>
            <p className="text-sm text-gray-600">Indian Institute of Technology (IIT) Delhi, 1995</p>
            <p className="text-xs text-gray-500">Thesis: "Advanced Machine Learning Algorithms for Pattern Recognition"</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">M.Tech in Computer Science</h4>
            <p className="text-sm text-gray-600">Indian Institute of Science (IISc) Bangalore, 1990</p>
            <p className="text-xs text-gray-500">Specialization: Artificial Intelligence and Data Structures</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">B.Tech in Electronics & Communication</h4>
            <p className="text-sm text-gray-600">Delhi College of Engineering, 1988</p>
            <p className="text-xs text-gray-500">First Class with Distinction, Gold Medalist</p>
          </div>
        </div>
      )
    },
    Research: {
      title: "Research Contributions",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Internet of Things (IoT) & Smart Cities</h4>
            <p className="text-sm text-gray-700 mb-2">Leading research in IoT infrastructure for smart city development, focusing on sensor networks and data analytics.</p>
            <div className="space-y-1">
              <a href="https://doi.org/10.1109/IoT.2023.001" className="text-blue-600 hover:underline text-xs block">
                "IoT-Based Smart Infrastructure for Urban Development" - IEEE IoT Journal (2023)
              </a>
              <a href="https://doi.org/10.1016/j.iot.2023.100567" className="text-blue-600 hover:underline text-xs block">
                "Sustainable Smart Cities using IoT: A Comprehensive Framework" - Internet of Things Journal (2023)
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Artificial Intelligence & Machine Learning</h4>
            <p className="text-sm text-gray-700 mb-2">Pioneering work in AI applications for education, healthcare, and industrial automation.</p>
            <div className="space-y-1">
              <a href="https://doi.org/10.1007/s10462-023-10234-x" className="text-blue-600 hover:underline text-xs block">
                "Deep Learning Models for Educational Assessment" - Artificial Intelligence Review (2023)
              </a>
              <a href="https://doi.org/10.1016/j.artint.2023.103887" className="text-blue-600 hover:underline text-xs block">
                "AI-Driven Healthcare Diagnostics: A Multi-Modal Approach" - Artificial Intelligence (2023)
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Cybersecurity & Blockchain</h4>
            <p className="text-sm text-gray-700 mb-2">Advanced research in blockchain technology for secure academic credential verification.</p>
            <div className="space-y-1">
              <a href="https://doi.org/10.1109/TDSC.2023.3245678" className="text-blue-600 hover:underline text-xs block">
                "Blockchain-Based Academic Credential System" - IEEE Trans. Dependable and Secure Computing (2023)
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg mt-4">
            <p className="text-sm"><strong>Publications:</strong> 180+ peer-reviewed papers, H-index: 42</p>
            <p className="text-sm"><strong>Citations:</strong> 3,500+ citations, Google Scholar verified</p>
            <p className="text-sm"><strong>Research Grants:</strong> ₹15+ Crores from DST, SERB, and industry partners</p>
          </div>
        </div>
      )
    },
    Vision: {
      title: "Leadership Vision",
      content: "Pioneered interdisciplinary innovation at Gautam Buddha University, fostering academic excellence and industry-academia collaboration."
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(75, 85, 150, 0.8), rgba(75, 85, 150, 0.8)), url('assets/prof.jepg')"
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Vice-Chancellor's Message</h1>
          <p className="text-lg opacity-90">Academic Leadership and Innovation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Vice Chancellor Card */}
          <div className="lg:w-1/3">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <div className="bg-gray-300 h-64 rounded-lg mb-4 flex items-center justify-center">
                {/* <span className="text-gray-600">Vice Chancellor's Photo</span> */}
                <img
                  src="/assets/prof.jpeg"
                  alt="Prof. Rana Pratap Singh"
                  className="object-cover h-full w-full rounded-lg"
/>

              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Prof. Rana Pratap Singh</h3>
                <p className="text-sm text-blue-600 mb-1">Vice Chancellor</p>
                <p className="text-xs text-gray-500">Gautam Buddha University</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3">
            {/* Quote Icon */}
            <div className="text-6xl text-blue-500 font-serif ">"</div>
          
            {/* Quote Text */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg text-justify">
                It is a great honour and privilege to work under the able leadership of hon'ble Chief Minister, 
                Shri Yogi Adityanath Ji, the hon'ble Chancellor of Gautam Buddha University.
             
                Gautam Buddha University stands as a beacon of knowledge, innovation, and inclusivity, 
                committed to shaping the future of education, research, and societal transformation. 
                Rooted in the values of wisdom, compassion, and excellence, our university fosters an 
                environment where intellectual pursuits align with ethical responsibility and social commitment.
              </p>
              
              <p className="text-lg text-justify">
                In an era marked by rapid technological advancements and evolving global challenges, 
                we strive to equip our students with the skills, creativity, and moral compass necessary 
                to lead with integrity. Our academic ecosystem nurtures a culture of inquiry, critical thinking, 
                and interdisciplinary research, ensuring that our graduates emerge as thought leaders and 
                change-makers who contribute meaningfully to society.
              </p>

              <p className="text-lg text-justify">
                With a steadfast focus on holistic development, Gautam Buddha University integrates 
                tradition with modernity, blending the wisdom of ancient knowledge systems with 
                contemporary scientific and technological advancements. We remain dedicated to fostering 
                innovation, entrepreneurship, and sustainable solutions that address societal needs while 
                upholding the values of equity, justice, and inclusivity.
              </p>
              <p className="text-lg text-justify">
                As we continue our journey toward becoming a globally recognized university, I invite 
                faculty, students, scholars, and industry leaders to collaborate in our shared mission 
                of academic excellence, cultivation of research and innovation, and transformative impact. 
                Together, let us build a future that is enlightened, empowered, and enduring.
              </p>
            </div>
 <div className="text-6xl text-blue-500 font-serif mb-4 text-right">"</div>
            {/* Signature */}
            <div className="mt-8 text-right">
              <p className="text-xl font-semibold text-blue-600">Prof. Rana Pratap Singh</p>

            </div>
          </div>
        </div>

        {/* Know the Vice-Chancellor Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Know the Vice-Chancellor</h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === tab
                      ? 'bg-red-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {tabContent[activeTab].title}
                  </h3>
                  <div className="text-gray-700 leading-relaxed">
                    {typeof tabContent[activeTab].content === 'string' ? (
                      <p>{tabContent[activeTab].content}</p>
                    ) : (
                      tabContent[activeTab].content
                    )}
                  </div>
                </div>
                <div className="lg:col-span-1">
                  {activeTab === 'Overview' && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-blue-800">30+ Years Experience</p>
                          <p className="text-xs text-gray-600">Academic & Administrative Leadership</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-green-800">University Transformation</p>
                          <p className="text-xs text-gray-600">Modernizing academic infrastructure</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-purple-800">Industry Connect</p>
                          <p className="text-xs text-gray-600">Building corporate partnerships</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 'Education' && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Academic Honors</h3>
                      <div className="space-y-3">
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-yellow-800">Gold Medalist</p>
                          <p className="text-xs text-gray-600">B.Tech First Class with Distinction</p>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-indigo-800">IIT Delhi Alumni</p>
                          <p className="text-xs text-gray-600">Ph.D. in Computer Science</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-red-800">IISc Graduate</p>
                          <p className="text-xs text-gray-600">M.Tech in AI Specialization</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'Research' && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Research Impact</h3>
                      <div className="space-y-3">
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-cyan-800">H-Index: 42</p>
                          <p className="text-xs text-gray-600">High research impact factor</p>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-teal-800">₹15+ Crores</p>
                          <p className="text-xs text-gray-600">Research grants secured</p>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-emerald-800">180+ Publications</p>
                          <p className="text-xs text-gray-600">Peer-reviewed research papers</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'Vision' && (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Leadership Focus</h3>
                      <div className="space-y-3">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-orange-800">Global Recognition</p>
                          <p className="text-xs text-gray-600">Making university world-class</p>
                        </div>
                        <div className="bg-pink-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-pink-800">Innovation Hub</p>
                          <p className="text-xs text-gray-600">Fostering entrepreneurship</p>
                        </div>
                        <div className="bg-violet-50 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-violet-800">Sustainable Future</p>
                          <p className="text-xs text-gray-600">Equity & inclusivity focus</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViceChancellor;
