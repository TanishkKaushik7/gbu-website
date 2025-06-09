import React from 'react';

export default function CampusGallery() {
  return (
    <div className="px-6 md:px-20 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Campus Gallery</h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Explore the vibrant life at GBU through our photo gallery showcasing memorable moments,
        events, and the beautiful campus environment.
      </p>

      {/* Gallery Card */}
      <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
        {/* Left Side */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Annual Convocation 2025</h3>
          <div className="flex items-center gap-4">
            <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-3 py-1 text-sm rounded-full select-none">
              150 Photos
            </span>
            <span className="text-gray-500 text-sm">Latest Event</span>
          </div>
          <p className="text-gray-700">
            Graduation ceremony celebrating academic achievements of our students.
          </p>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              className="border border-blue-700 text-blue-700 font-medium px-4 py-2 rounded-md hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="View previous event"
            >
              Previous Event
            </button>
            <button
              type="button"
              className="bg-gradient-to-r from-green-500 to-blue-700 text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="View next event"
            >
              Next Event
            </button>
          </div>

          {/* View All Button */}
          <button
            type="button"
            className="w-full mt-4 border border-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="View all gallery images"
          >
            View All Gallery
          </button>
        </div>

        {/* Right Side (Images) */}
        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          <div className="col-span-2">
            <img
              src="/your-path/convocation.jpg"
              alt="Annual Convocation 2025"
              className="rounded-lg object-cover w-full h-48 md:h-56"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x300?text=Image+Not+Found'; }}
            />
          </div>
          <div className="relative group">
            <img
              src="/your-path/fitness.jpg"
              alt="Fitness Event"
              className="rounded-lg w-full h-24 object-cover group-hover:brightness-75 transition"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x150?text=Image+Not+Found'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition pointer-events-none">
              View
            </div>
          </div>
          <div>
            <img
              src="/your-path/graduates.jpg"
              alt="Graduates Event"
              className="rounded-lg w-full h-24 object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x150?text=Image+Not+Found'; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
