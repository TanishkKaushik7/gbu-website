import { Badge } from "../ui/badge";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const ClubsAchievements = () => {
  const clubs = [
    {
      name: "Techno Cultural Club",
      description: "Runs coding contests, hackathons, robotics, quizzes, poster-making & cultural events.",
      members: 150,
      category: "Technical & Cultural",
      facultyAdvisor: "Dr. Vimlesh Kumar Ray",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop",
      socialLinks: {
        instagram: "https://instagram.com/technoculture_gbu",
        linkedin: "https://linkedin.com/company/techno-club-gbu",
        email: "techno.ict.gbu@gmail.com"
      }
    },
    {
      name: "GDSC – Google Developer Student Club",
      description: "Peer-run community for workshops in Web Dev, Cloud, ML under GDSC umbrella.",
      members: 500,
      category: "Technical",
      facultyAdvisor: "Dr. Rajesh Mishra",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
      socialLinks: {
        instagram: "https://instagram.com/gdsc_gbu",
        linkedin: "https://linkedin.com/company/gdsc-gautam-buddha-university",
        email: "gdsc@gbu.ac.in"
      }
    },
    {
      name: "IEEE Student Branch",
      description: "Professional branch organizing tech talks, paper contests & networking.",
      members: 60,
      category: "Professional",
      facultyAdvisor: "Dr. Vikram Singh",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com/company/ieeestudentbranch",
        twitter: "https://twitter.com/ieeestudents",
        email: "ieee@gbu.ac.in"
      }
    },
    {
      name: "Programming / CodeChef Chapter",
      description: "Competitive coding community hosting Code Matrix, Learn to Code & hackathons.",
      members: 200,
      category: "Technical",
      facultyAdvisor: "Dr. Anurag Singh Baghel",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
      socialLinks: {
        instagram: "https://instagram.com/codechef_gbu",
        email: "codechef@gbu.ac.in"
      }
    },
    {
      name: "Robotics Club",
      description: "Builds autonomous systems & competes in national robotics events.",
      members: 45,
      category: "Technical",
      facultyAdvisor: "Dr. Vimlesh Kumar Ray",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=200&fit=crop",
      socialLinks: {
        twitter: "https://twitter.com/robiotics_gbu",
        email: "robotics@gbu.ac.in"
      }
    },
    {
      name: "Dhrishtikon – Debate Society",
      description: "Promotes free discussion, public speaking & debate competitions.",
      members: 80,
      category: "Cultural",
      facultyAdvisor: "Dr. Manjari Suman",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop",
      socialLinks: {
        linkedin: "https://linkedin.com/company/drishtikon-gbu",
        email: "drishtikon@gbu.ac.in"
      }
    },
    {
      name: "Cultural Council",
      description: "Oversees Drama, Dance, Music, Painting, Photography, Literature, Adventure clubs.",
      members: 300,
      category: "Cultural",
      facultyAdvisor: "Dr. Anand Pratap Singh",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop",
      socialLinks: {
        facebook: "https://facebook.com/abhivyanjana",
        instagram: "https://instagram.com/abhivyanjana_gbu",
        email: "cultural@gbu.ac.in"
      }
    },
    {
      name: "Adventure Club",
      description: "Organizes trekking, camping and outdoor adventure activities.",
      members: 60,
      category: "Adventure",
      facultyAdvisor: "Dr. Sunita Gupta",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=200&fit=crop",
      socialLinks: {
        email: "adventure@gbu.ac.in"
      }
    },
    {
      name: "Photography Club",
      description: "Encourages campus photography exhibitions & workshops.",
      members: 50,
      category: "Creative",
      facultyAdvisor: "Dr. Vidushi Sharma",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
      socialLinks: {
        instagram: "https://instagram.com/photoclub_gbu",
        email: "photography@gbu.ac.in"
      }
    },
    {
      name: "Art & Painting Club",
      description: "Hosts workshops & exhibitions to nurture visual arts on campus.",
      members: 40,
      category: "Creative",
      facultyAdvisor: "Dr. Anand Pratap Singh",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop",
      socialLinks: {
        email: "art@gbu.ac.in"
      }
    }
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