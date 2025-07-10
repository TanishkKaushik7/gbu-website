import React, { useState } from 'react';
import { Mail, User } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const CardContent = ({ className = '', children }) => (
  <div className={className}>{children}</div>
);

const Badge = ({ className = '', children }) => (
  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${className}`}>
    {children}
  </span>
);

// ✅ Reusable fallback image component
const FallbackAvatar = ({ src, alt, className }) => {
  const [hasError, setHasError] = useState(false);

  return hasError || !src ? (
    <div
      className={`bg-gray-100 flex items-center justify-center text-gray-400 ${className}`}
    >
      <User className="w-2/3 h-2/3" />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

const ClubTeam = ({ club }) => {
  const officeBarers = [
    club.team.president,
    club.team.vicePresident,
    club.team.secretary,
    club.team.treasurer,
  ];

  return (
    <SearchableWrapper>
      <div className="space-y-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Faculty Coordinator */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl"></span> Faculty Coordinator
          </h3>
          <Card className="max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="relative mb-4">
                  <FallbackAvatar
                    src={club.team.facultyCoordinator.photo}
                    alt={club.team.facultyCoordinator.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
                    <User className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {club.team.facultyCoordinator.name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {club.team.facultyCoordinator.department}
                </p>
                <Badge className="bg-blue-100 text-blue-800">
                  {club.team.facultyCoordinator.role}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Bearers */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-2xl"></span> Office Bearers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeBarers.map((member) => (
              <Card
                key={member.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <FallbackAvatar
                        src={member.photo}
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gray-100"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{member.department}</p>
                    <Badge
                      className={`text-xs ${
                        member.role === 'President'
                          ? 'bg-purple-100 text-purple-800'
                          : member.role === 'Vice President'
                          ? 'bg-indigo-100 text-indigo-800'
                          : member.role === 'Secretary'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {member.role}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Team Members */}
        {club.team.members.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-2xl"></span> Core Team Members
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {club.team.members.map((member) => (
                <Card key={member.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <FallbackAvatar
                        src={member.photo}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{member.name}</h4>
                        <p className="text-sm text-gray-600 truncate">{member.role}</p>
                        <p className="text-xs text-gray-500 truncate">{member.department}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
          <CardContent className="p-6">
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Have questions? Want to collaborate? Our team is always ready to help!
              </p>
              <p className="text-sm text-gray-500">
                Contact our Secretary: <span className="font-medium">{club.team.secretary.name}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SearchableWrapper>
  );
};

export default ClubTeam;
