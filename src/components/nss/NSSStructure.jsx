import React from 'react';
// Card, CardContent, CardHeader, and CardTitle components defined locally for responsive design
const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const CardHeader = ({ className = '', children }) => (
  <div className={`px-6 py-4 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ className = '', children }) => (
  <h2 className={`font-bold ${className}`}>{children}</h2>
);

const CardContent = ({ className = '', children }) => (
  <div className={className}>{children}</div>
);
import { Mail, Phone } from 'lucide-react';
// Card, CardContent, CardHeader, CardTitle, and Badge components defined locally

const Badge = ({ className = '', variant = '', children }) => {
  let base =
    'inline-block px-3 py-1 rounded-full text-xs font-semibold';
  let color =
    variant === 'secondary'
      ? 'bg-blue-100 text-blue-800'
      : variant === 'outline'
      ? 'border border-blue-400 text-blue-700 bg-white'
      : 'bg-gray-100 text-gray-700';
  return (
    <span className={`${base} ${color} ${className}`}>{children}</span>
  );
};

const NSSStructure = () => {
  const programOfficer = {
    name: 'Dr. Priya Sharma',
    designation: 'Program Officer',
    email: 'priya.sharma@university.edu',
    phone: '+91-9876543210',
    image: '/placeholder.svg',
    qualifications: ['Ph.D. in Social Work', 'M.A. in Development Studies'],
    experience: '8 years in community development'
  };

  const volunteerLeaders = [
    {
      name: 'Rahul Kumar',
      role: 'NSS Secretary',
      year: 'Final Year',
      program: 'B.Tech CSE',
      email: 'rahul.kumar@student.edu',
      image: '/placeholder.svg',
      achievements: ['Best Volunteer 2023', 'Leadership Award']
    },
    {
      name: 'Priya Singh',
      role: 'Joint Secretary',
      year: 'Third Year',
      program: 'B.A. English',
      email: 'priya.singh@student.edu',
      image: '/placeholder.svg',
      achievements: ['Community Service Award', 'Event Coordinator']
    },
    {
      name: 'Amit Patel',
      role: 'Volunteer Coordinator',
      year: 'Second Year',
      program: 'B.Com',
      email: 'amit.patel@student.edu',
      image: '/placeholder.svg',
      achievements: ['Social Media Manager', 'Event Organizer']
    }
  ];

  const units = [
    { name: 'Unit A', volunteers: 120, focus: 'Community Health' },
    { name: 'Unit B', volunteers: 95, focus: 'Education Support' },
    { name: 'Unit C', volunteers: 110, focus: 'Environmental Conservation' },
    { name: 'Unit D', volunteers: 85, focus: 'Rural Development' }
  ];

  return (
    <div className="space-y-8">
      {/* Program Officer Section */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardTitle className="text-2xl">Program Officer</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={programOfficer.image}
              alt={programOfficer.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{programOfficer.name}</h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">{programOfficer.designation}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">{programOfficer.email}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700">{programOfficer.phone}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Qualifications:</h4>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {programOfficer.qualifications.map((qual, index) => (
                    <Badge key={index} variant="secondary">{qual}</Badge>
                  ))}
                </div>
              </div>

              <p className="text-gray-600">{programOfficer.experience}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Volunteer Leaders Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Volunteer Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {volunteerLeaders.map((leader, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-blue-200"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{leader.role}</p>
                <p className="text-gray-600 mb-2">{leader.year} • {leader.program}</p>

                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{leader.email}</span>
                </div>

                <div className="space-y-1">
                  {leader.achievements.map((achievement, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* NSS Units */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">NSS Units</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.map((unit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-blue-600">{unit.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">{unit.volunteers}</div>
                <div className="text-sm text-gray-600 mb-4">Active Volunteers</div>
                <Badge className="bg-blue-100 text-blue-800">{unit.focus}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Organizational Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Organizational Hierarchy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-8">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Program Officer
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                NSS Secretary
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                Joint Secretary
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                Volunteer Coordinator
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex flex-wrap justify-center gap-4">
              {units.map((unit, index) => (
                <div key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg">
                  {unit.name} ({unit.volunteers} Volunteers)
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NSSStructure;
