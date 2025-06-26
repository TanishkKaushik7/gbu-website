
import React, { useState, useEffect } from 'react';
import SimpleLayout from '../../components/faculty/SimpleLayout';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, Globe, Award,
  BookOpen, Users, Search, Filter, X
} from 'lucide-react';

const Faculty = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedQualification, setSelectedQualification] = useState('All');
  const [selectedSchool, setSelectedSchool] = useState('All Schools');
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Fetch the data when component mounts
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await fetch('https://meow.tilchattaas.com/academic/faculty/members/');
        const data = await res.json();
        setFacultyMembers(data);
      } catch (err) {
        console.error('Failed to fetch faculty:', err);
      }
    };

    fetchFaculty();
  }, []);

  const schools = [
  'All Schools',
  'School of Information and Communication Technology',
  'School of Biotechnology',
  'School of Engineering',
  'School of Management',
  'School of Humanities',
  'School of Law'
];

const departments = [
  'All Departments',
  'Computer Science & Engineering',
  'Electronics & Communication Engineering',
  'Biotechnology',
  'Management',
  'Law',
  'English',
  'Political Science'
];

const experienceRanges = [
  'All',
  '0-5 years',
  '6-10 years',
  '11-15 years',
  '16+ years'
];

const qualifications = [
  'All',
  'PhD',
  'M.Tech',
  'M.Sc',
  'MBA',
  'B.Tech'
];

  // Filter faculty based on search term, filters, and selected school
  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch = 
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.researchAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDepartment = selectedDepartment === 'All Departments' || faculty.department === selectedDepartment;
    const matchesSchool = selectedSchool === 'All Schools' || faculty.school === selectedSchool;

    const matchesExperience = selectedExperience === 'All' || 
      (selectedExperience === '0-5 years' && faculty.experienceYears <= 5) ||
      (selectedExperience === '6-10 years' && faculty.experienceYears >= 6 && faculty.experienceYears <= 10) ||
      (selectedExperience === '11-15 years' && faculty.experienceYears >= 11 && faculty.experienceYears <= 15) ||
      (selectedExperience === '16+ years' && faculty.experienceYears >= 16);

    const matchesQualification = selectedQualification === 'All' || faculty.qualification === selectedQualification;

    return matchesSearch && matchesDepartment && matchesSchool && matchesExperience && matchesQualification;
  });

  const clearFilters = () => {
    setSelectedDepartment('All Departments');
    setSelectedExperience('All');
    setSelectedQualification('All');
    setSelectedSchool('All Schools');
    setSearchTerm('');
  };

  return (
    <SimpleLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Faculty Directory</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Meet our distinguished faculty members who are leaders in their fields, 
            committed to excellence in teaching, research, and innovation.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">85%</h3>
              <p className="text-gray-600">PhD Qualified</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">2000+</h3>
              <p className="text-gray-600">Research Publications</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">International Collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search faculty by name, department, specialization, or research area..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 border-solid rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* School Tabs */}
            <div className="bg-white rounded-lg border border-gray-200 border-solid p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Schools</h3>
              <div className="flex flex-wrap gap-2">
                {schools.map((school) => (
                  <button
                    key={school}
                    onClick={() => setSelectedSchool(school)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedSchool === school
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {school}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Toggle Button */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white border border-gray-300 border-solid px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
              
              {(selectedDepartment !== 'All Departments' || selectedExperience !== 'All' || selectedQualification !== 'All' || selectedSchool !== 'All Schools' || searchTerm) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="bg-white p-6 rounded-lg border border-gray-200 border-solid space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Department Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full border border-gray-300 border-solid rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experience Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full border border-gray-300 border-solid rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {experienceRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  {/* Qualification Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                    <select
                      value={selectedQualification}
                      onChange={(e) => setSelectedQualification(e.target.value)}
                      className="w-full border border-gray-300 border-solid rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {qualifications.map((qual) => (
                        <option key={qual} value={qual}>{qual}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {filteredFaculty.length} of {facultyMembers.length} faculty members
              {selectedSchool !== 'All Schools' && ` in ${selectedSchool}`}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredFaculty.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFaculty.map((faculty, index) => (
                <Link to={`/academics/faculty/${faculty.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
  src={`https://meow.tilchattaas.com/media/${faculty.image}`}
  alt={faculty.name}
  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
/>

                      <h1>{faculty.image}</h1>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{faculty.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{faculty.designation}</p>
                      
                      <div className="w-full space-y-3 mb-6">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-600 mb-1">Specialization</p>
                          <p className="text-gray-800">{faculty.specialization}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-blue-50 rounded-lg p-3 text-center">
                            <p className="text-lg font-bold text-blue-600">{faculty.experience}</p>
                            <p className="text-xs text-gray-600">Experience</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3 text-center">
                            <p className="text-lg font-bold text-green-600">{faculty.publications}</p>
                            <p className="text-xs text-gray-600">Publications</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-600 mb-1">Education</p>
                          <p className="text-sm text-gray-800">{faculty.education}</p>
                        </div>
                      </div>
                      
                      <div className="w-full space-y-2">
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span>{faculty.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{faculty.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Academic Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Are you passionate about teaching and research? Explore career opportunities 
            and become part of our distinguished faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/careers"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              Faculty Positions
            </a>
            <a 
              href="/research"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Research Opportunities
            </a>
          </div>
        </div>
      </section>
    </SimpleLayout>
  );
};

export default Faculty;
