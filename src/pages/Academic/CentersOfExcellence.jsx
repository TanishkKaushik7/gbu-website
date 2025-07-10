import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Shield,
  Brain,
  Zap,
  ArrowRight,
  Users,
  Award,
  BookOpen,
} from 'lucide-react';

// ✅ Local icon map for dynamic matching
const iconMap = {
  'cyber security': Shield,
  'artificial intelligence': Brain,
  'drone technologies': Zap,
  'drone technology': Zap,
  'data science': Brain,
  'robotics': Zap,
};

const CentersOfExcellence = () => {
  const [heroData, setHeroData] = useState(null);
  const [centers, setCenters] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [ctaData, setCtaData] = useState(null);

  const BASE_URL = import.meta.env.VITE_HOST;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, centersRes, galleryRes, joinRes] = await Promise.all([
          axios.get(`${BASE_URL}/academic/coe/hero/`),
          axios.get(`${BASE_URL}/academic/coe/list/`),
          axios.get(`${BASE_URL}/academic/coe/gallery/`),
          axios.get(`${BASE_URL}/academic/coe/join/`),
        ]);

        setHeroData(heroRes.data[0]);
        setCenters(centersRes.data);
        setGalleryImages(
          galleryRes.data.map((img) => ({
            src: `${BASE_URL}/media/${img.image}`,
            caption: img.card_desc,
            alt: img.title,
          }))
        );
        
        setCtaData(joinRes.data[0]);
      } catch (error) {
        console.error('Error fetching Centers of Excellence data:', error);
      }
    };

    fetchData();
  }, [BASE_URL]);

  if (!heroData || !ctaData) return <div className="text-center py-10">Loading...</div>;

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white py-20"
        style={{ backgroundColor: heroData.background_color }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{heroData.title}</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">{heroData.description}</p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatCard
              icon={<Award className="w-8 h-8 text-purple-600" />}
              value={heroData.coe_count}
              label="Centers of Excellence"
              bg="bg-purple-100"
            />
            <StatCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              value={`${heroData.ResearchAndstudents}+`}
              label="Researchers & Students"
              bg="bg-blue-100"
            />
            <StatCard
              icon={<BookOpen className="w-8 h-8 text-green-600" />}
              value={`${heroData.projects_count}+`}
              label="Research Projects"
              bg="bg-green-100"
            />
            <StatCard
              icon={<Shield className="w-8 h-8 text-orange-600" />}
              value={heroData.memberrs_count}
              label="Faculty Members"
              bg="bg-orange-100"
            />
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Centers of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our centers drive excellence in research, technology, and societal impact through interdisciplinary collaboration and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {centers.map((center) => {
              const IconComponent =
                iconMap[center.title.toLowerCase()] || Shield;

              return (
                <div
                  key={center.id}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group animate-fade-in"
                >
                  <div className="h-52 relative bg-gradient-to-br from-gray-600 to-gray-800 overflow-hidden flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white z-10" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {center.card_title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {center.card_desc}
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-blue-600">
                          {center.faculty_count}
                        </div>
                        <div className="text-xs text-gray-500">Faculty</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">
                          {center.student_count}
                        </div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">
                          {center.project_count}
                        </div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Director:</span>{' '}
                      {center.director || 'N/A'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Gallery of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore moments of innovation, collaboration, and brilliance captured from across our Centers of Excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-sm backdrop-blur-sm">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{ctaData.title}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {ctaData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ctaData.url1}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105"
            >
              {ctaData.button1_text}
            </a>
            <a
              href={ctaData.url2}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-600 border-solid text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              {ctaData.button2_text}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const StatCard = ({ icon, value, label, bg }) => (
  <div className="animate-fade-in">
    <div
      className={`${bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
    >
      {icon}
    </div>
    <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default CentersOfExcellence;
