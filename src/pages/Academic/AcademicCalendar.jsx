import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen, FileText, Download, Bell, Search } from 'lucide-react';
import axios from 'axios';

// ✅ Define BASE_URL once at the top
const BASE_URL = 'https://meow.tilchattaas.com/academic';

const AcademicCalendar = () => {
  const [events, setEvents] = useState([]);
  const [regulations, setRegulations] = useState([]);
  const [stats, setStats] = useState([]);
  const [cta, setCta] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Use BASE_URL for all API calls
    axios.get(`${BASE_URL}/hero/`)
      .then(res => setStats(res.data))
      .catch(err => console.error('Stats Error:', err));

    axios.get(`${BASE_URL}/events/`)
      .then(res => setEvents(res.data))
      .catch(err => console.error('Events Error:', err));

    axios.get(`${BASE_URL}/regulations/`)
      .then(res => setRegulations(res.data))
      .catch(err => console.error('Regulations Error:', err));

    axios.get(`${BASE_URL}/stayupdated/`)
      .then(res => setCta(res.data[0]))
      .catch(err => console.error('CTA Error:', err));
  }, []);

  const getEventTypeColor = (type) => {
    if (!type) return 'bg-gray-100 text-gray-800';
    switch (type) {
      case 'admission': return 'bg-blue-100 text-blue-800';
      case 'exam': return 'bg-red-100 text-red-800';
      case 'break': return 'bg-green-100 text-green-800';
      case 'academic': return 'bg-purple-100 text-purple-800';
      case 'holiday': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEvents = events.filter(event =>
    (filterType === 'all' || event.category === filterType) &&
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedEvents = filteredEvents.reduce((acc, event) => {
    const monthYear = new Date(event.date).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
    acc[monthYear] = acc[monthYear] || [];
    acc[monthYear].push(event);
    return acc;
  }, {});

  const handleDownload = () => {
    alert('Export to PDF functionality can be integrated using jsPDF or html2pdf.');
  };


  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {stats[0]?.title || 'Academic Calendar & Regulations'}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            {stats[0]?.description || 'Stay informed with important academic dates, examination schedules, and institutional regulations governing academic life at Gautam Buddha University.'}
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-15 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: stat.background_color }}
                >
                  {stat.icon_class === 'calendar' && <Calendar className="w-8 h-8 text-blue-600" />}
                  {stat.icon_class === 'clock' && <Clock className="w-8 h-8 text-green-600" />}
                  {stat.icon_class === 'book' && <BookOpen className="w-8 h-8 text-purple-600" />}
                  {stat.icon_class === 'file' && <FileText className="w-8 h-8 text-orange-600" />}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {{
                    'calendar': stat.ssemester_count,
                    'clock': stat.teaching_days,
                    'book': stat.examination_periods,
                    'file': stat.academic_regulations
                  }[stat.icon_class] || '--'}
                </h3>
                <p className="text-gray-600">{stat.icon_text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 mb-10">
            <div className="flex-1 flex flex-col items-center">
              <h2 className="text-4xl sm:text-2xl font-bold text-gray-800 text-center">
                {events[0]?.heading || 'Academic Calendar'}
              </h2>
              <p className="text-lg text-gray-600 text-center pt-2">
                {events[0]?.desc || 'Timeline of academic milestones'}
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex space-x-2">
              {['all', 'admission', 'exam', 'holiday'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${filterType === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } transition`}
                >
                  {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-1/3">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="relative border-l-4 border-blue-600 ml-4 pl-6 space-y-12">
            {Object.entries(groupedEvents).length === 0 ? (
              <p className="text-gray-500 text-center">No events found.</p>
            ) : (
              Object.entries(groupedEvents).map(([month, events]) => (
                <div key={month}>
                  <h3 className="text-2xl font-semibold text-blue-700 mb-4">{month}</h3>
                  {events.map((event, index) => (
                    <div
                      key={event.id}
                      className="relative pl-8 before:absolute before:left-[-1.15rem] before:top-2 before:w-4 before:h-4 before:bg-blue-600 before:rounded-full before:border-4 before:border-white animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span>
                              {new Date(event.date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                          {event.category ? (
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.category)}`}>
                              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                            </span>
                          ) : (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                              Unknown
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800">{event.title}</h4>
                        <p className="text-gray-600 mt-1">{event.description}</p>
                        <div className="flex justify-between items-center mt-4 text-sm">
                          <span className={`font-medium ${event.status === 'completed' ? 'text-green-600' : 'text-orange-600'}`}>
                            {event.status === 'completed' ? '✓ Completed' : '⏰ Upcoming'}
                          </span>
                          <Bell className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Academic Regulations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Academic Regulations</h2>
            <p className="text-xl text-gray-600">Official guidelines and regulatory documents</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regulations.map((reg, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <a href={reg.document} download>
                    <Download className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{reg.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{reg.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Last updated: {new Date(reg.last_updated).toLocaleDateString()}</span>
                  <Link to={reg.document} className="text-blue-600 hover:text-blue-800 font-medium">Download PDF</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {cta && (
        <section className="py-16 text-white" style={{ backgroundColor: cta.background_color }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={cta.url1}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                {cta.button1_text}
              </a>
              <a
                href={cta.url2}
                className="border border-white border-solid text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {cta.button2_text}
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AcademicCalendar;
