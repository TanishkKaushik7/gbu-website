
// Custom Card components with modern UI and subtle effects

const Card = ({ children, className = "", ...props }) => (
  <div
    className={
      `rounded-2xl bg-white border border-gray-200 shadow-md transition-all duration-300 ${className}`
    }
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div
    className={`px-6 pt-6 pb-2 bg-gradient-to-r from-gray-50 via-white to-gray-100 rounded-t-2xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3
    className={`font-semibold text-lg md:text-xl tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div
    className={`px-6 pb-6 pt-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);
import { Mail, BookOpen, Award } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Aarti Gautam Dinker",
      position: "Professor & Research Head",
      specialization: "Artificial Intelligence, Machine Learning",
      email: "priya.sharma@cse.edu",
      achievements: "50+ Publications, IEEE Fellow",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8cc?auto=format&fit=crop&w=300&q=80",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Dr. Anurag Baghel",
      position: "Associate Professor",
      specialization: "Cybersecurity, Network Security",
      email: "amit.kumar@cse.edu",
      achievements: "30+ Publications, NSF Grant Recipient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Dr. Sarah Chen",
      position: "Assistant Professor",
      specialization: "Data Science, Big Data Analytics",
      email: "sarah.chen@cse.edu",
      achievements: "25+ Publications, Google Research Award",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Dr. Ravi Patel",
      position: "Professor",
      specialization: "Software Engineering, Distributed Systems",
      email: "ravi.patel@cse.edu",
      achievements: "40+ Publications, ACM Distinguished Scientist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="faculty" className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Distinguished Faculty
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Learn from world-class faculty members who are leaders in their respective fields of computer science research.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${faculty.color} rounded-full border-2 border-white`}></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground">{faculty.name}</CardTitle>
                      <p className={`font-medium bg-gradient-to-r ${faculty.color} bg-clip-text text-transparent`}>
                        {faculty.position}
                      </p>
                      <p className="text-muted-foreground text-sm">{faculty.specialization}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 bg-gray-50/50">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{faculty.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{faculty.achievements}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-muted-foreground mb-6 text-center text-lg">
                Our department has <span className="font-semibold text-foreground">45+ experienced faculty members</span> with expertise across all areas of computer science.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Research Papers</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-600 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PhD</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">PhD Faculty</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="w-8 h-8 bg-orange-600 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Exp</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Avg Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
