import { Badge } from "../ui/badge";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const ClubsAchievements = () => {
  const clubs = [
    {
      name: "Robotics Club",
      description:
        "Building autonomous systems and competing in national robotics competitions",
      members: 45,
      category: "Technical",
      facultyAdvisor: "Dr. Rajesh Kumar",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
      socialLinks: {
        instagram: "https://instagram.com/roboticsclub",
        twitter: "https://twitter.com/roboticsclub",
        linkedin: "https://linkedin.com/company/roboticsclub",
        email: "robotics@college.edu"
      }
    },
    {
      name: "Coding Club",
      description:
        "Programming contests, hackathons, and software development projects",
      members: 120,
      category: "Technical",
      facultyAdvisor: "Prof. Priya Sharma",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
      socialLinks: {
        facebook: "https://facebook.com/codingclub",
        instagram: "https://instagram.com/codingclub",
        twitter: "https://twitter.com/codingclub",
        email: "coding@college.edu"
      }
    },
    {
      name: "Innovation Cell",
      description: "Fostering entrepreneurship and supporting startup ideas",
      members: 35,
      category: "Entrepreneurship",
      facultyAdvisor: "Dr. Amit Patel",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=200&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com/company/innovationcell",
        twitter: "https://twitter.com/innovationcell",
        instagram: "https://instagram.com/innovationcell",
        email: "innovation@college.edu"
      }
    },
    {
      name: "Cultural Society",
      description: "Music, dance, drama, and organizing cultural events",
      members: 80,
      category: "Cultural",
      facultyAdvisor: "Dr. Sunita Gupta",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop",
      socialLinks: {
        facebook: "https://facebook.com/culturalsociety",
        instagram: "https://instagram.com/culturalsociety",
        twitter: "https://twitter.com/culturalsociety",
        email: "cultural@college.edu"
      }
    },
    {
      name: "IEEE Student Branch",
      description: "Professional development and technical paper presentations",
      members: 60,
      category: "Professional",
      facultyAdvisor: "Dr. Vikram Singh",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com/company/ieeestudentbranch",
        twitter: "https://twitter.com/ieeestudents",
        instagram: "https://instagram.com/ieeestudentbranch",
        email: "ieee@college.edu"
      }
    },
    {
      name: "Sports Committee",
      description:
        "Organizing sports events and representing college in tournaments",
      members: 90,
      category: "Sports",
      facultyAdvisor: "Coach Ravi Mehta",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop",
      socialLinks: {
        facebook: "https://facebook.com/sportscommittee",
        instagram: "https://instagram.com/sportscommittee",
        twitter: "https://twitter.com/sportscommittee",
        email: "sports@college.edu"
      }
    },
  ];

  const renderSocialIcon = (platform, url) => {
    const baseClass = "w-5 h-5 transition-colors cursor-pointer";
    
    const getIconClass = (platform) => {
      switch (platform) {
        case 'facebook':
          return `${baseClass} text-gray-600 hover:text-blue-600`;
        case 'instagram':
          return `${baseClass} text-gray-600 hover:text-pink-500`;
        case 'twitter':
          return `${baseClass} text-gray-600 hover:text-sky-500`;
        case 'linkedin':
          return `${baseClass} text-gray-600 hover:text-blue-700`;
        case 'email':
          return `${baseClass} text-gray-600 hover:text-red-500`;
        default:
          return `${baseClass} text-gray-600 hover:text-college-blue`;
      }
    };
    
    switch (platform) {
      case 'facebook':
        return <Facebook className={getIconClass(platform)} onClick={() => window.open(url, '_blank')} />;
      case 'instagram':
        return <Instagram className={getIconClass(platform)} onClick={() => window.open(url, '_blank')} />;
      case 'twitter':
        return <Twitter className={getIconClass(platform)} onClick={() => window.open(url, '_blank')} />;
      case 'linkedin':
        return <Linkedin className={getIconClass(platform)} onClick={() => window.open(url, '_blank')} />;
      case 'email':
        return <Mail className={getIconClass(platform)} onClick={() => window.open(`mailto:${url.replace('mailto:', '')}`, '_blank')} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-college-navy mb-4">
            SOICT Clubs
          </h2>
          <p className="text-xl text-gray-600">Excellence beyond academics</p>
        </div>

        {/* Student Clubs */}
        <div className="mb-16">
          {/* <h3 className="text-3xl font-bold text-college-navy mb-8 text-center">
            Student Clubs
          </h3> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white">
                      {club.category}
                    </Badge>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h4 className="text-college-navy text-lg font-semibold mb-2">
                    {club.name}
                  </h4>
                  <p className="text-gray-600 mb-3">{club.description}</p>
                  
                  {/* Faculty Advisor */}
                  <div className="mb-3">
                    <span className="text-sm text-gray-500">Faculty Advisor: </span>
                    <span className="text-sm font-medium text-college-navy">
                      {club.facultyAdvisor}
                    </span>
                  </div>
                  
                  {/* Members Count */}
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-500">Members:</span>
                    <span className="font-semibold text-college-blue">
                      {club.members}
                    </span>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="border-t pt-4">
                    <div className="flex justify-center space-x-4">
                      {Object.entries(club.socialLinks).map(([platform, url]) => (
                        <div key={platform}>
                          {renderSocialIcon(platform, url)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubsAchievements;