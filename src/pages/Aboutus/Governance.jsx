import React, { useState } from 'react';
import { Crown, Users, Building, GraduationCap, DollarSign, User } from 'lucide-react';

const governanceData = {
  finance: {
    title: 'Finance Committee',
    icon: <DollarSign className="w-6 h-6" />,
    members: [
      { id: 'MJ', name: 'Dr. M.K. Jain', role: 'Chief Finance Officer', color: 'bg-purple-500' },
      { id: 'ST', name: 'Mr. S.K. Tiwari', role: 'Accounts Officer', color: 'bg-blue-500' },
      { id: 'RSH', name: 'Ms. R. Sharma', role: 'Audit Officer', color: 'bg-pink-500' },
      { id: 'PY', name: 'Mr. P.L. Yadav', role: 'Budget Officer', color: 'bg-green-500' }
    ]
  },
  executive: {
    title: 'Executive Council',
    icon: <Crown className="w-6 h-6" />,
    members: [
      { id: 'YA', name: 'Yogi Adityanath', role: 'Chancellor', color: 'bg-red-500' },
      { id: 'RS', name: 'Prof. R.K. Singh', role: 'Vice Chancellor', color: 'bg-indigo-500' },
      { id: 'AV', name: 'Mr. A.B. Verma', role: 'Registrar', color: 'bg-teal-500' },
      { id: 'MJ', name: 'Dr. M.K. Jain', role: 'Finance Officer', color: 'bg-purple-500' }
    ]
  },
  academic: {
    title: 'Academic Council',
    icon: <GraduationCap className="w-6 h-6" />,
    members: [
      { id: 'RS', name: 'Prof. R.K. Singh', role: 'Chairman', color: 'bg-indigo-500' },
      { id: 'AS', name: 'Prof. A.K. Sharma', role: 'Dean, Engineering', color: 'bg-emerald-500' },
      { id: 'PG', name: 'Dr. P.K. Gupta', role: 'Dean, Management', color: 'bg-orange-500' },
      { id: 'SM', name: 'Prof. S.N. Mishra', role: 'Dean, Sciences', color: 'bg-cyan-500' }
    ]
  }
};

const organizationalStructure = [
  {
    name: 'Chancellor',
    person: 'Shri Yogi Adityanath',
    color: 'bg-gradient-to-r from-red-100 to-red-200 border-red-300',
    icon: <Crown className="w-7 h-7 text-red-600" />,
    children: [
      {
        name: 'Vice Chancellor',
        person: 'Prof. R.K. Singh',
        color: 'bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300',
        icon: <User className="w-7 h-7 text-blue-600" />,
        children: [
          {
            name: 'Dean, Engineering',
            person: 'Dr. Kirti Pal',
            color: 'bg-gradient-to-r from-green-100 to-green-200 border-green-300',
            icon: <Building className="w-6 h-6 text-green-600" />
          },
          {
            name: 'Dean, Management',
            person: 'Dr. Indu Uprety',
            color: 'bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300',
            icon: <Building className="w-6 h-6 text-yellow-600" />
          },
          {
            name: 'Dean, Humanities',
            person: 'Prof. Bandana Pandey',
            color: 'bg-gradient-to-r from-pink-100 to-pink-200 border-pink-300',
            icon: <Building className="w-6 h-6 text-pink-600" />
          },
      
          {
            name: 'Dean, ICT',
            person: 'Dr. Arpit Bhardwaj',
            color: 'bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300',
            icon: <Building className="w-6 h-6 text-blue-600" />
          },
          {
            name: 'Dean, Biotechnology',
            person: 'Dr. N.P. Melkania',
            color: 'bg-gradient-to-r from-teal-100 to-teal-200 border-teal-300',
            icon: <Building className="w-6 h-6 text-teal-600" />
          },
          {
            name: 'Dean, Buddhist Studies & Civilization',
            person: 'Prof. Shweta Anand',
            color: 'bg-gradient-to-r from-purple-100 to-purple-200 border-purple-300',
            icon: <Building className="w-6 h-6 text-purple-600" />
          },
          {
            name: 'Dean, Law, Justice & Governance',
            person: 'Dr. Krishna Kant Dwivedi',
            color: 'bg-gradient-to-r from-indigo-100 to-indigo-200 border-indigo-300',
            icon: <Building className="w-6 h-6 text-indigo-600" />
          },
          {
            name: 'Dean, Vocational & Applied Sciences',
            person: 'Prof. N.P. Melkania',
            color: 'bg-gradient-to-r from-orange-100 to-orange-200 border-orange-300',
            icon: <Building className="w-6 h-6 text-orange-600" />
          }
        ]
      }
    ]
  }
];

const OrgNode = ({ node }) => (
  <div className="flex flex-col items-center relative">
    <div
      className={`rounded-2xl sm:h-2 sm:w-2 border-2 shadow-xl px-8 py-5 mb-2 transition-all duration-300
        ${node.color} hover:scale-105 hover:shadow-2xl`}
      style={{
        height:190,
        width: 240,
        zIndex: 10,
        boxShadow: '0 4px 24px 0 rgba(80,80,180,0.10)'
      }}
    >
      <div className="flex items-center  gap-3 mb-1">
        {node.icon}
        <span className="font-bold text-lg md:text-xl text-gray-800">{node.name}</span>
      </div>
      <div className="text-gray-700 font-medium text-base md:text-lg">{node.person}</div>
    </div>

    {node.children && (
      <div className="flex flex-col items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-gray-300 to-gray-400"></div>
        <div className="mt-2 w-full">
          <div className="flex justify-center flex-wrap md:flex-nowrap md:overflow-x-auto gap-6">
            {node.children.map((child, idx) => (
              <OrgNode key={idx} node={child} />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

const OrgNodeHorizontal = ({ node }) => (
  <div className="flex flex-col items-center relative min-w-[140px] md:min-w-[200px]">
    <div
      className={`rounded-xl border-2 shadow-lg px-3 py-2 md:px-6 md:py-4 mb-2 transition-all duration-300
        ${node.color} hover:scale-105 hover:shadow-2xl`}
      style={{
        minWidth: 120,
        minHeight:140,
        width: 120,
        zIndex: 10,
        boxShadow: '0 2px 12px 0 rgba(80,80,180,0.10)'
      }}
    >
      <div className="flex items-center gap-1 md:gap-2 mb-1">
        {/* {node.icon} */}
        <span className="font-semibold text-xs md:text-base text-gray-800">{node.name}</span>
      </div>
      <div className="text-gray-700 font-medium text-xs md:text-base">{node.person}</div>
    </div>
  </div>
);

const UniversityGovernance = () => {
  const [activeTab, setActiveTab] = useState('finance');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
            Governance & Committees
          </h1>
          <p className="text-xl text-blue-100 font-light">
            Leadership Structure and Academic Governance
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">University Governance</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(governanceData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-7 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {data.icon}
                {data.title}
              </button>
            ))}
          </div>

          <div className="transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full">
                {governanceData[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{governanceData[activeTab].title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {governanceData[activeTab].members.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-6 text-center`}>
                    <div className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg`}>
                      {member.id}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{member.name}</h4>
                    <p className="text-gray-600 text-sm font-medium">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="lg:text-4xl sm:text-2xl font-bold text-gray-800 my-1 text-center">Organizational Structure</h2>

          {/* Large screen: show full tree with deans in single row */}
          <div className="hidden md:flex justify-center scale-[0.60]">
            <OrgNode node={organizationalStructure[0]} />
          </div>

          {/* Small screen: vertical scroll for full structure */}
          <div className="md:hidden w-full mt-4">
            <div className="flex flex-row items-center gap-4 min-w-max pb-2">
              <OrgNodeHorizontal node={{
                ...organizationalStructure[0],
                children: undefined
              }} />
              <OrgNodeHorizontal node={{
                ...organizationalStructure[0].children[0],
                children: undefined
              }} />
              <div className='flex flex-col'>{organizationalStructure[0].children[0].children.map((dean, idx) => (
                <OrgNodeHorizontal key={idx} node={dean} />
              ))}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityGovernance;
