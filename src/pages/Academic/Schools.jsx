import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, BookOpen, Award, Globe } from 'lucide-react';

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    * {
      font-family: 'Inter', sans-serif;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .card-hover {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .card-hover:hover {
      transform: translateY(-12px);
    }
    
    .glass-effect {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .floating-animation {
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    .hero-gradient {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    }
    
    .school-card {
      background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06),
        0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
    
    .school-card:hover {
      box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.25),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  `}</style>
);

const StatsCard = ({ icon: Icon, number, label }) => (
  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center text-white border border-white/30">
    <Icon className="w-8 h-8 mx-auto mb-3 text-white/90" />
    <div className="text-3xl font-bold mb-1">{number}</div>
    <div className="text-sm opacity-90">{label}</div>
  </div>
);

const SchoolCard = ({ imageUrl, label, description, path, features }) => {
  return (
    <Link 
      to={path}
      className="school-card card-hover group cursor-pointer rounded-2xl overflow-hidden relative block no-underline"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Floating Badge */}
        <div className="absolute top-4 right-4 glass-effect text-white px-3 py-1 rounded-full text-xs font-medium">
          Explore
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {label}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span key={index} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-xs font-medium">
              {feature}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">Learn More</span>
          <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

const HoverCards = () => {
  const stats = [
    { icon: Users, number: "15K+", label: "Students" },
    { icon: BookOpen, number: "8", label: "Schools" },
    { icon: Award, number: "200+", label: "Programs" },
    { icon: Globe, number: "50+", label: "Countries" }
  ];

  const schools = [
    {
      imageUrl: "https://www.gbu.ac.in/USICT/media/img/slider/1.jpg",
      label: "School of Information and Communication Technology",
      description: "Leading innovation in computer science, AI, cybersecurity, and digital transformation with cutting-edge research facilities and industry partnerships.",
      path: "/schools/ict",
      features: ["AI & ML", "Cybersecurity", "Software Engineering", "Data Science"]
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoLwvVWxxxBLWiAC0R019yjKPhFJzb5TuFg&s",
      label: "School of Biotechnology",
      description: "Advancing life sciences through molecular biology, genetic engineering, and biomedical research with state-of-the-art laboratories.",
      path: "/schools/biotechnology",
      features: ["Genetic Engineering", "Molecular Biology", "Bioinformatics", "Drug Discovery"]
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU89cU4dCM-KXWNc_7tD7_VrF45IcfZGDgFQ&s",
      label: "School of Engineering",
      description: "Excellence in mechanical, civil, electrical, and chemical engineering with focus on sustainable technology and innovation.",
      path: "/schools/engineering",
      features: ["Mechanical", "Civil", "Electrical", "Chemical"]
    },
    {
      imageUrl: "https://raw.githubusercontent.com/vishal-pandey/content-gbusite/master/slider/5.jpg",
      label: "School of Buddhist Studies & Civilization",
      description: "Preserving ancient wisdom while exploring contemporary applications of Buddhist philosophy, meditation, and cultural studies.",
      path: "/schools/buddhist",
      features: ["Philosophy", "Meditation", "Cultural Studies", "Ancient Texts"]
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk75RFQPIldQiGk1kAwU7bEURFQV0ORVlqyg&s",
      label: "School of Law, Justice and Governance",
      description: "Shaping future legal minds through comprehensive programs in constitutional law, international law, and public policy.",
      path: "/schools/law",
      features: ["Constitutional Law", "International Law", "Public Policy", "Legal Research"]
    },
    {
      imageUrl: "https://allegiance-educare.in/storage/uploads/colleges/14974330541497431571kjhldf.jpg",
      label: "School of Management",
      description: "Developing business leaders through innovative MBA programs, entrepreneurship studies, and strategic management education.",
      path: "/schools/management",
      features: ["MBA Programs", "Entrepreneurship", "Finance", "Marketing"]
    },
    {
      imageUrl: "https://www.psychologs.com/wp-content/uploads/2023/03/GBU-final.jpg",
      label: "School of Humanities and Social Sciences",
      description: "Exploring human culture, society, and behavior through interdisciplinary approaches in psychology, sociology, and literature.",
      path: "/schools/humanities",
      features: ["Psychology", "Sociology", "Literature", "History"]
    },
    {
      imageUrl: "https://images.shiksha.com/mediadata/images/1742534877phpTHlfCW.jpeg",
      label: "School of Vocational Studies",
      description: "Providing practical skills and industry-ready training through hands-on programs designed for immediate career readiness.",
      path: "/schools/vocational",
      features: ["Skill Development", "Industry Training", "Certification", "Placement"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalStyles />
      
      {/* Hero Section */}
      <section className="hero-gradient py-24 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-animation absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="floating-animation absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" style={{animationDelay: '2s'}}></div>
          <div className="floating-animation absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-yellow-300">Schools</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Discover excellence across 8 distinguished schools, where innovation meets tradition and knowledge transforms into wisdom
            </p>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 group-hover:shadow-lg transition-all duration-300">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Grid Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our <span className="gradient-text">Academic Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each school represents a commitment to academic rigor, research innovation, and preparing students for tomorrow's challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schools.map((school, index) => (
              <SchoolCard
                key={index}
                {...school}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students who have chosen excellence. Explore our admission process and find your perfect academic home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HoverCards;