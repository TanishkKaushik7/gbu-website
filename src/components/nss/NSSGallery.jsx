import React, { useState } from 'react';
import { Camera, Filter, Eye, Download } from 'lucide-react';

const NSSGallery = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [dialogImage, setDialogImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Blood Donation Camp 2024',
      category: 'Health',
      event: 'Blood Donation Camp',
      year: '2024',
      date: '2024-01-15',
      images: [
        { url: '/placeholder.svg', caption: 'Volunteers registering donors' },
        { url: '/placeholder.svg', caption: 'Medical team conducting checkups' },
        { url: '/placeholder.svg', caption: 'Blood collection in progress' },
        { url: '/placeholder.svg', caption: 'Volunteers with certificates' }
      ]
    },
    {
      id: 2,
      title: 'Tree Plantation Drive',
      category: 'Environment',
      event: 'Environmental Drive',
      year: '2024',
      date: '2024-02-05',
      images: [
        { url: '/placeholder.svg', caption: 'Volunteers planting saplings' },
        { url: '/placeholder.svg', caption: 'Community participation' },
        { url: '/placeholder.svg', caption: 'Before and after comparison' }
      ]
    },
    {
      id: 3,
      title: 'Digital Literacy Program',
      category: 'Education',
      event: 'Digital Literacy',
      year: '2024',
      date: '2024-01-22',
      images: [
        { url: '/placeholder.svg', caption: 'Teaching computer basics' },
        { url: '/placeholder.svg', caption: 'Children learning digital skills' },
        { url: '/placeholder.svg', caption: 'Volunteer instructors' },
        { url: '/placeholder.svg', caption: 'Certificate distribution' }
      ]
    },
    {
      id: 4,
      title: 'Community Health Camp',
      category: 'Health',
      event: 'Health Camp',
      year: '2023',
      date: '2023-12-10',
      images: [
        { url: '/placeholder.svg', caption: 'Free health checkups' },
        { url: '/placeholder.svg', caption: 'Medicine distribution' },
        { url: '/placeholder.svg', caption: 'Health awareness session' }
      ]
    },
    {
      id: 5,
      title: 'Rural Development Project',
      category: 'Community',
      event: 'Rural Development',
      year: '2023',
      date: '2023-11-15',
      images: [
        { url: '/placeholder.svg', caption: 'Infrastructure development work' },
        { url: '/placeholder.svg', caption: 'Community interaction' },
        { url: '/placeholder.svg', caption: 'Project completion ceremony' }
      ]
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const yearMatch = selectedYear === 'all' || item.year === selectedYear;
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const eventMatch = selectedEvent === 'all' || item.event === selectedEvent;
    return yearMatch && categoryMatch && eventMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Health': 'bg-red-100 text-red-800',
      'Education': 'bg-purple-100 text-purple-800',
      'Environment': 'bg-green-100 text-green-800',
      'Community': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">NSS Gallery</h2>
        <p className="text-lg text-gray-600">
          Capturing moments of service, impact, and community engagement
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filter by:</span>
          </div>

          {[{
            value: selectedYear,
            setValue: setSelectedYear,
            options: ['all', '2024', '2023', '2022'],
            label: 'Year',
            width: 'w-32'
          }, {
            value: selectedCategory,
            setValue: setSelectedCategory,
            options: ['all', 'Health', 'Education', 'Environment', 'Community'],
            label: 'Category',
            width: 'w-36'
          }, {
            value: selectedEvent,
            setValue: setSelectedEvent,
            options: ['all', 'Blood Donation Camp', 'Environmental Drive', 'Digital Literacy', 'Health Camp', 'Rural Development'],
            label: 'Event',
            width: 'w-40'
          }].map(({ value, setValue, options, label, width }, i) => (
            <div key={i} className={`relative ${width}`}>
              <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-3 py-2 border rounded bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {options.map(opt => (
                  <option key={opt} value={opt}>
                    {opt === 'all' ? `All ${label}s` : opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="space-y-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-1">
                    {new Date(item.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold border border-gray-300 text-gray-700 bg-white">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {item.images.map((image, index) => (
                  <div key={index} className="relative group cursor-pointer" onClick={() => setDialogImage(image)}>
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white opacity-0 transform scale-90 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">
                  {item.images.length} photos
                </span>
                <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded text-gray-700 bg-white hover:bg-gray-50">
                  <Download className="h-4 w-4" />
                  Download All
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog View */}
      {dialogImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true"
          onClick={() => setDialogImage(null)}
        >
          <div
            className="bg-white rounded-lg p-6 w-[90vw] md:w-auto max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setDialogImage(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="space-y-4">
              <img src={dialogImage.url} alt={dialogImage.caption} className="w-full h-auto rounded-lg" />
              <div className="flex justify-between items-center">
                <p className="text-gray-700">{dialogImage.caption}</p>
                <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded text-gray-700 bg-white hover:bg-gray-50">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow">
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Gallery Statistics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Total Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Events Documented</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Video Records</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Views & Downloads</div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors rounded-lg shadow">
        <div className="flex flex-col items-center justify-center py-12">
          <Camera className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Add New Photos</h3>
          <p className="text-gray-500 text-center mb-4">
            Upload event photos and videos to the gallery
          </p>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
            <Camera className="h-4 w-4" />
            Upload Media
          </button>
        </div>
      </div>
    </div>
  );
};

export default NSSGallery;
