import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeditationCenter = () => {
  const [hero, setHero] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [benefits, setBenefits] = useState([]);
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, sessionsRes, benefitsRes, techniquesRes] = await Promise.all([
          axios.get('https://meow.tilchattaas.com/campuslife/meditation-hero/'),
          axios.get('https://meow.tilchattaas.com/campuslife/meditation-sessions/'),
          axios.get('https://meow.tilchattaas.com/campuslife/meditation-benefits/'),
          axios.get('https://meow.tilchattaas.com/campuslife/meditation-techniques/')
        ]);

        setHero(heroRes.data[0]);
        setSessions(sessionsRes.data);
        setBenefits(benefitsRes.data);
        setTechniques(techniquesRes.data);
      } catch (err) {
        console.error('Error fetching meditation data:', err);
      }
    };

    fetchData();
  }, []);

  if (!hero) {
    return <div className="p-12 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: hero.background_color }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="mr-2">{hero.icon_class}</span> {hero.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {hero.description}
          </p>
        </div>

        {/* Wellness Section */}
        <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-lg p-8 text-white text-center mb-12">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">{hero.icon_class}</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Wellness for Mind, Body & Soul</h2>
          <p className="text-xl">
            Our meditation center offers a peaceful sanctuary where students can find relief from academic stress and develop mindfulness skills.
          </p>
        </div>

        {/* Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: session.icon_color || '#e0f2f1' }}>
                <span className="text-2xl">{session.icon_class}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{session.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">
                {session.start_time.slice(0, 5)} - {session.end_time.slice(0, 5)}
              </p>
              <p className="text-gray-600">{session.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits & Techniques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Meditation</h3>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: benefit.color || '#e0f2f1' }}>
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Meditation Techniques</h3>
            <div className="space-y-4">
              {techniques.map((technique) => (
                <div key={technique.id} className="border-l-4 pl-4"
                  style={{ borderColor: technique.color }}>
                  <h4 className="font-semibold text-gray-900">{technique.name}</h4>
                  <p className="text-gray-600 text-sm">{technique.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationCenter;
