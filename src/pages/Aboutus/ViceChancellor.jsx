import React, { useState } from "react";

const ViceChancellor = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Education', 'Research', 'Vision'];

const tabContent = {
  Overview: {
    title: "Experience",

    content:
      "Over 25 years of academic, research, and leadership experience in cancer biology and molecular oncology, with significant contributions to chemoprevention and angiogenesis research."

  },
  Education: {
    title: "Educational Background",
    content: (
      <div className="space-y-4">
        <div>

          <h4 className="font-semibold text-gray-800">
            Ph.D. in Cancer Biology
          </h4>
          <p className="text-sm text-gray-600">
            Jawaharlal Nehru University, New Delhi, India
          </p>
          <p className="text-xs text-gray-500">
            Thesis: "Mechanisms of Carcinogenesis and Chemopreventive Strategies"
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">
            M.Sc. in Life Sciences
          </h4>
          <p className="text-sm text-gray-600">
            Jawaharlal Nehru University, New Delhi, India
          </p>
          <p className="text-xs text-gray-500">
            Specialization: Molecular Biology and Biochemistry
          </p>

        </div>
      </div>
    )
  },
  Research: {
    title: "Research Contributions",
    content: (
      <div className="space-y-6">
        <div>

          <h4 className="font-semibold text-gray-800 mb-2">
            Cancer Chemoprevention & Angiogenesis
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            Discovering and evaluating anticancer activities of phytochemicals and providing mechanistic insights for their use in cancer prevention and therapy. Significant work in studying natural compounds with anti-angiogenic efficacies.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">
            Environmental Carcinogens & DNA Damage
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            Research on deregulated biological processes during cancer development, including apoptosis, mitogenic signaling, and DNA repair pathways affected by environmental carcinogens such as insecticides, pesticides, and UV radiation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">
            Microgravity Effects
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            Exploring molecular and biological effects of microgravity on cells and animal models to understand cancer development.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">
            Model Systems
          </h4>
          <p className="text-sm text-gray-700 mb-2">
            Established in vitro, in vivo, ex vivo, 3D spheroid, and organoid models to study tumor angiogenesis and cancer therapeutics.
          </p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg mt-4">
          <p className="text-sm">
            <strong>Publications:</strong> 150+ peer-reviewed papers
          </p>
          <p className="text-sm">
            <strong>h-index:</strong> 78
          </p>
          <p className="text-sm">
            <strong>i10-index:</strong> 154
          </p>
          <p className="text-sm">
            <strong>Citations:</strong> 16,539 total (5,266 since 2020)
          </p>

        </div>
      </div>
    )
  },
  Vision: {

    title: "Research Vision",
    content:
      "Committed to advancing non-toxic mechanism-based anticancer therapies and developing integrative models for understanding cancer progression, prevention, and treatment."

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
