import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CampusLifeSection() {
  const [testimonials, setTestimonials] = useState([]);

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');
  const CAMPUS_LIFE_API = `${BASE}/landing/campus-life/`;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(CAMPUS_LIFE_API);
        const data = response.data;
        if (Array.isArray(data)) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Failed to fetch campus life data:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-3 md:mb-6">
        Campus Life at GBU
      </h2>
      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
        Experience a vibrant campus life filled with learning, growth, and unforgettable memories.
        Our diverse community of students creates an environment where everyone can thrive.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
        {testimonials.map((item, index) => {
          // Split only on the first hyphen to allow hyphens in the quote
          const [categoryRaw, ...quoteParts] = item.card_content.split('-');
          const category = categoryRaw?.trim() || '';
          const quote = quoteParts.join('-').replace(/^["\s]+|["\s]+$/g, '') || '';

          return (
            <div
              key={index}
              tabIndex={0}
              className="bg-white rounded-lg shadow hover:shadow-xl focus:shadow-xl transition-all duration-300 transform hover:scale-105 focus:scale-105 hover:-translate-y-2 outline-none cursor-pointer overflow-hidden group w-full h-[25rem] max-w-sm mx-auto"
              style={{ aspectRatio: '1/1' }}
            >
              <div className="relative h-3/5">
                <img
                  src={item.image}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow select-none transform transition-transform duration-300 group-hover:scale-110">
                  {category}
                </span>
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-between">
                <p className="italic text-gray-700 leading-tight text-xs sm:text-sm transform transition-transform duration-300 group-hover:translate-x-1 overflow-hidden">
                  "{quote.length > 500 ? quote.slice(0, 500) + '...' : quote}"
                </p>
                <p className="text-white font-semibold text-xs sm:text-sm transform transition-all duration-300 group-hover:text-white group-hover:translate-x-1 mt-2">
                  {item.name}
                  <br />
                  <span className="italic text-xs">{item.course}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
