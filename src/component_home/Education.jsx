import React, { useState } from 'react';

export default function ExcellenceSection() {
  const [activeTab, setActiveTab] = useState('Centers of Excellence');

  const tabs = ['Centers of Excellence', 'Research Labs', 'Infrastructure'];

  const content = {
    'Centers of Excellence': [
      {
        title: 'Artificial Intelligence Center',
        description: 'Cutting-edge research in machine learning, deep learning, and AI applications across various domains.',
        image: 'https://images.unsplash.com/photo-1608652763120-b9c5dd0c708e',
      },
      {
        title: 'Drone Technology Hub',
        description: 'Advanced drone research facility focusing on autonomous systems and aerial robotics.',
        image: 'https://images.unsplash.com/photo-1508610048659-a06b669e7b74',
      },
      {
        title: 'Cybersecurity Institute',
        description: 'State-of-the-art cybersecurity research and training center for digital security solutions.',
        image: 'https://images.unsplash.com/photo-1581093588401-12d1d4e3e03c',
      },
    ],
    'Research Labs': [
      {
        title: 'Bioinformatics Lab',
        description: 'Pioneering research at the intersection of biology and computational science.',
        image: 'https://images.unsplash.com/photo-1581093588401-12d1d4e3e03c',
      },
      {
        title: 'Materials Research Facility',
        description: 'Innovative lab exploring new materials and nanotechnology applications.',
        image: 'https://images.unsplash.com/photo-1559757175-0836fdba79e0',
      },
    ],
    'Infrastructure': [
      {
        title: 'High Performance Computing Center',
        description: 'Robust computational infrastructure supporting large-scale data processing.',
        image: 'https://images.unsplash.com/photo-1581090700227-1e8a6b4c63d1',
      },
      {
        title: 'Smart Campus Network',
        description: 'IoT-enabled infrastructure for real-time campus monitoring and management.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
      },
    ],
  };

  return (
    <div className="px-6 md:px-20 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">Excellence in Education</h2>

      {/* Tabs with Larger Buttons */}
      <div className="flex justify-center mb-8 flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 font-semibold text-base rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              activeTab === tab
                ? 'bg-white text-indigo-800 shadow-md'
                : 'bg-blue-50 text-gray-600 hover:bg-white hover:text-indigo-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {content[activeTab].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
