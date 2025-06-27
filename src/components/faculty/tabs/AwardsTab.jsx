import React from 'react';
// Card, CardHeader, CardTitle, CardContent, and Badge components defined locally

// Card container with subtle shadow and rounded corners
const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-xl border border-gray-200 border-solid shadow-sm${className}`}>
    {children}
  </div>
);

// CardHeader with padding and bottom border
const CardHeader = ({ className = '', children }) => (
  <div className={`px-6 py-4 border-b border-gray-100 border-solid${className}`}>{children}</div>
);

// CardTitle with font styling
const CardTitle = ({ className = '', children }) => (
  <h2 className={`font-bold text-lg tracking-tight ${className}`}>{children}</h2>
);

// CardContent with padding
const CardContent = ({ className = '', children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Badge with color, rounded, and optional outline
const Badge = ({ className = '', variant, children }) => {
  const base =
    'inline-flex items-center px-2 py-0.5 rounded-full font-medium text-xs transition-colors';
  const outline =
    'border border-current bg-transparent';
  const filled =
    'bg-gray-100 text-gray-800';
  const style = variant === 'outline' ? outline : filled;
  return (
    <span className={`${base} ${style} ${className}`}>
      {children}
    </span>
  );
};
import { Trophy, Calendar, Star, Award, Medal } from 'lucide-react';

export const AwardsTab = () => {
  const awards = [
    {
      title: "Excellence in Research Award",
      awardingBody: "Gautam Buddha University",
      year: 2024,
      category: "institutional",
      level: "university",
      description: "Recognized for outstanding research contributions in the field of Machine Learning and Cybersecurity with significant impact on both academic community and industry applications.",
      significance: "Annual award given to top 3 faculty members university-wide"
    },
    {
      title: "Best Paper Award",
      awardingBody: "IEEE International Conference on Communications (ICC)",
      year: 2023,
      category: "academic",
      level: "international",
      description: "Awarded for the paper 'Machine Learning-Based Intrusion Detection for Smart Home IoT Devices' which presented novel approaches to IoT security.",
      significance: "Selected from over 2000 submitted papers"
    },
    {
      title: "Young Researcher Award",
      awardingBody: "Computer Society of India (CSI)",
      year: 2023,
      category: "professional",
      level: "national",
      description: "Recognition for exceptional research contributions by researchers under 35 years of age in the field of computer science and information technology.",
      significance: "Annual award for top 5 young researchers in India"
    },
    {
      title: "Outstanding Faculty Award",
      awardingBody: "School of ICT, Gautam Buddha University",
      year: 2022,
      category: "institutional",
      level: "department",
      description: "Recognized for excellence in teaching, research, and service to the academic community with consistently high student evaluations and research productivity.",
      significance: "Voted by students and peer faculty"
    },
    {
      title: "Research Excellence Fellowship",
      awardingBody: "Department of Science & Technology (DST), Government of India",
      year: 2022,
      category: "government",
      level: "national",
      description: "Prestigious fellowship awarded to support cutting-edge research in artificial intelligence and cybersecurity with funding for research activities and equipment.",
      significance: "Competitive fellowship with 2% selection rate"
    },
    {
      title: "Best Thesis Award",
      awardingBody: "Indian Institute of Technology Delhi",
      year: 2021,
      category: "academic",
      level: "institutional",
      description: "Awarded for exceptional PhD thesis work on 'Advanced Machine Learning Techniques for Cybersecurity Applications' demonstrating significant theoretical and practical contributions.",
      significance: "Best thesis among all PhD graduates in Computer Science"
    }
  ];

  const achievements = [
    {
      title: "Reviewer for Top-Tier Journals",
      description: "Regular reviewer for IEEE Transactions, ACM journals, and other prestigious publications",
      count: "15+ journals"
    },
    {
      title: "Conference Program Committee Member",
      description: "Served on program committees of international conferences in AI and cybersecurity",
      count: "10+ conferences"
    },
    {
      title: "Research Grant Success",
      description: "Successfully secured multiple research grants totaling over ₹25 lakhs",
      count: "₹25L+ funding"
    },
    {
      title: "Student Mentorship",
      description: "Guided numerous students to successful completion of their research projects",
      count: "20+ students"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'institutional': return 'bg-blue-100 text-blue-800';
      case 'academic': return 'bg-green-100 text-green-800';
      case 'professional': return 'bg-purple-100 text-purple-800';
      case 'government': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'international': return 'bg-purple-100 text-purple-800';
      case 'national': return 'bg-blue-100 text-blue-800';
      case 'university': return 'bg-green-100 text-green-800';
      case 'department': return 'bg-orange-100 text-orange-800';
      case 'institutional': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'institutional': return Trophy;
      case 'academic': return Award;
      case 'professional': return Medal;
      case 'government': return Star;
      default: return Trophy;
    }
  };

  return (
    <div className="space-y-6">
      {/* Awards Overview */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-blue-600" />
            Awards & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{awards.length}</div>
              <div className="text-sm text-blue-700">Total Awards</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">
                {awards.filter(award => award.level === 'international' || award.level === 'national').length}
              </div>
              <div className="text-sm text-purple-700">National/International</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {awards.filter(award => award.year >= 2022).length}
              </div>
              <div className="text-sm text-green-700">Recent Awards</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">{Math.max(...awards.map(a => a.year))}</div>
              <div className="text-sm text-orange-700">Latest Year</div>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Dr. Kumar's excellence in research, teaching, and service has been recognized through numerous 
            prestigious awards and honors at institutional, national, and international levels. These 
            accolades reflect his significant contributions to the academic and research community.
          </p>
        </CardContent>
      </Card>

      {/* Awards List */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Award Recognition</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {awards.map((award, index) => {
              const IconComponent = getCategoryIcon(award.category);
              return (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-yellow-500 text-white p-2 rounded-lg">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{award.title}</h3>
                          <p className="text-blue-600 font-medium mb-2">{award.awardingBody}</p>
                          <p className="text-gray-700 leading-relaxed mb-3">{award.description}</p>
                          <p className="text-sm text-gray-600 italic">{award.significance}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <Badge className={getCategoryColor(award.category)}>
                        {award.category.charAt(0).toUpperCase() + award.category.slice(1)}
                      </Badge>
                      <Badge className={getLevelColor(award.level)}>
                        {award.level.charAt(0).toUpperCase() + award.level.slice(1)}
                      </Badge>
                      <span className="text-sm text-gray-600 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {award.year}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Additional Achievements */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Notable Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <Star className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-700 mb-2">{achievement.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {achievement.count}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Awards Timeline */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Awards Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {awards.sort((a, b) => b.year - a.year).map((award, index) => (
              <div key={index} className="relative pl-8 pb-4 border-l-2 border-yellow-300 border-solid last:border-l-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-2"></div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-4 border border-yellow-200 border-solid">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{award.title}</h3>
                      <p className="text-xs text-gray-600">{award.awardingBody}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getLevelColor(award.level)}>
                        {award.level}
                      </Badge>
                      <span className="text-xs text-gray-600">{award.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
