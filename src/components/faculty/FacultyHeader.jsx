import React from 'react';
import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const FacultyHeader = ({ faculty }) => {
  return (
    <section className="bg-white py-8 border-b border-gray-200 border-solid">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - Faculty Photo */}
            <div className="lg:w-80 flex-shrink-0">
              <img
                src={`https://meow.tilchattaas.com/media/${faculty.image}`}
                alt={faculty.name}
                className="w-52 h-52 rounded-3xl ml-12 object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
              />

            </div>

            {/* Right side - Faculty Info */}
            <div className="flex-1">
              <div className="text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 text-left">{faculty.name}</h1>

                {/* Tags */}
                {faculty.tags && (
                  <div className="flex flex-wrap gap-2 mb-4 justify-start">
                    {faculty.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-lg text-gray-600 mb-4 text-left">{faculty.designation}</p>

                <div className="flex items-center space-x-2 text-gray-600 mb-3 justify-start">
                  <BookOpen className="w-4 h-4" />
                  <span>{faculty.specialization}</span>
                </div>

                {/* Contact Information */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{faculty.office}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{faculty.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline">
                      {faculty.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyHeader;
