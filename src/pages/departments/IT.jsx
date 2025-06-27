
import { Users, Award, BookOpen, Lightbulb, Globe, Server, Smartphone, Shield, GraduationCap, Brain, Code, Trophy, Star, User, Medal, Target } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg border ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-foreground ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-muted-foreground text-sm ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);


const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-lg transition duration-300";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700",
    outline: "border border-emerald-300 text-emerald-700 hover:bg-emerald-50",
    ghost: "text-emerald-700 hover:bg-emerald-100",
  };

  return (
    <button
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};


const IT = () => {

  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80"
            alt="Information Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-cyan-900/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <GraduationCap className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Department of
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Information Technology
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Shaping digital leaders through innovative IT education, cutting-edge research, and industry-focused learning for the future of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                <BookOpen className="h-5 w-5 mr-2" />
                Explore Programs
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                <Code className="h-5 w-5 mr-2" />
                Research Areas
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
              <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl backdrop-blur-sm border border-emerald-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Web Technologies</h3>
                <p className="text-muted-foreground text-center text-sm">Modern web development and frameworks</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl backdrop-blur-sm border border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Server className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">System Administration</h3>
                <p className="text-muted-foreground text-center text-sm">Server management and network infrastructure</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl backdrop-blur-sm border border-cyan-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-cyan-100 p-4 rounded-full mb-4">
                  <Smartphone className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Development</h3>
                <p className="text-muted-foreground text-center text-sm">iOS and Android application development</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/90 rounded-xl backdrop-blur-sm border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cybersecurity</h3>
                <p className="text-muted-foreground text-center text-sm">Information security and risk management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOD Message */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
              FROM THE DESK OF HOD, IT
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 flex flex-col items-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-6 shadow-2xl border-4 border-white">
                  <img
                    src="https://www.gbu.ac.in/USICT/media/img/Neeta.jpg"
                    alt="Dr. Neeta Singh - Head of Department"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Dr. Neeta Singh</h3>
                <p className="text-emerald-600 font-semibold text-lg">Head of Department</p>
                {/* <p className="text-sm text-muted-foreground">PhD Information Technology, NIT Delhi</p>
                <p className="text-sm text-muted-foreground">20+ Years of Experience</p> */}
              </div>

              <div className="md:col-span-2 space-y-6 text-muted-foreground bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="text-6xl text-emerald-200 font-serif">"</div>
                  <p className="leading-relaxed">
                    Greeting from the Department of Information Technology!!
                  </p>
                <p className="text-lg leading-relaxed -mt-4">
                  Information technology, one of the fastest-growing technologies, has become a strategic function in every organization and lands its foot in every walk of our life. At the undergraduate level, we offer a four-year B. Tech. IT Programme and BCA. At the postgraduate level, we offer two areas of specialization for a two-year M.C.A (i) Data Science and (ii) Artificial. From the academic Session, 2022-23 Department is starting M. Tech.. IT and M. Tech.. -Information and Cyberwarfare at post graduate level. We also offer Ph.D. There are programs for full-time and working professional mode in all areas where our faculty members are currently conducting research.
                </p>

                <p className="leading-relaxed">
                 
                The Department has well-qualified professional faculty members along with the non-teaching staff. Faculty members are not only contributing toward the holistic development of students but also works as resource person at the national and international level. Department has Approved Swyam Local Chapter since 2020.
                </p>

                <p className="leading-relaxed">
                 We also encourage students to organize events, participate in various technical and co-curricular events organized by other colleges, and get involved in activities of social relevance. Furthermore, to promote co-curricular activities among students and faculties, the department has organized various events, completion, and courses sponsored by NITTTR, DRDO, CSIR, etc. Most of our alumni found employment in companies of high repute in India and abroad.
                </p>

                <p className="leading-relaxed">
                  Dr. Neeta Singh
                  Head, Department of Information Technology Department
                  neeta@gbu.ac.in
                  Phone: 0120-2346080 (Ext.6080)
                </p>

                <div className="pt-6 border-t border-emerald-200">
                  <p className="font-bold text-foreground text-lg">Dr. Neeta Singh</p>
                  <p className="text-emerald-600 font-medium">Head of Department - IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Department Statistics</h2>
              <p className="text-xl text-muted-foreground">Leading the way in IT education</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-white rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Academic Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive IT education designed to create tomorrow's technology leaders and innovators.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-0 shadow-xl bg-white">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-85`}></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <GraduationCap className="h-8 w-8" />
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200">
                      <span className="font-semibold text-emerald-700">{program.duration}</span>
                      <span className="font-semibold text-teal-700">{program.intake}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Core Curriculum
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {program.curriculum.map((subject, idx) => (
                          <span key={idx} className="text-xs bg-emerald-50 text-emerald-700 px-3 py-2 rounded-full border border-emerald-200">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Research Excellence</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge research in emerging IT domains, addressing real-world challenges and advancing technological innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {researchAreas.map((area, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-emerald-500/20 p-3 rounded-full">
                        <area.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <CardTitle className="text-xl text-white">{area.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-white mb-3">Current Projects:</h4>
                    <div className="space-y-2">
                      {area.projects.map((project, idx) => (
                        <div key={idx} className="text-sm text-gray-300 bg-white/10 px-3 py-2 rounded-lg">
                          • {project}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-8">Research Impact</h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="bg-emerald-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-sm text-gray-300">Research Projects</div>
                </div>
                <div className="bg-teal-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">₹12Cr+</div>
                  <div className="text-sm text-gray-300">Research Funding</div>
                </div>
                <div className="bg-cyan-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">300+</div>
                  <div className="text-sm text-gray-300">Publications</div>
                </div>
                <div className="bg-blue-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <div className="text-sm text-gray-300">Patents Filed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Achievers */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Student Achievers</h2>
              <p className="text-xl text-muted-foreground">
                Celebrating our outstanding students who excel in academics, research, and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {topAchievers.map((student, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                  <CardHeader className="text-center pb-2">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-foreground">{student.name}</CardTitle>
                    <CardDescription className="text-emerald-600 font-semibold">{student.year}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                      <div className="flex items-start space-x-2 mb-2">
                        <Medal className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground leading-relaxed">{student.achievement}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
              <p className="text-xl text-muted-foreground">Excellence in technology education</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <achievement.icon className={`h-12 w-12 ${achievement.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default IT;
  const stats = [
    { icon: Users, label: "Students", value: "700+", color: "bg-emerald-600" },
    { icon: GraduationCap, label: "Faculty", value: "40+", color: "bg-teal-600" },
    { icon: Brain, label: "Research Projects", value: "100+", color: "bg-cyan-600" },
    { icon: Trophy, label: "Patents Filed", value: "20+", color: "bg-blue-600" },
  ];

  const programs = [
    {
      title: "B.Tech Information Technology",
      duration: "4 Years",
      intake: "120 Students",
      description: "Comprehensive program covering software development, web technologies, and information systems.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      gradient: "from-emerald-600 to-teal-600",
      curriculum: [
        "Data Structures & Algorithms",
        "Web Development (Full Stack)",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Information Security",
        "Mobile App Development",
        "Cloud Computing"
      ]
    },
    {
      title: "M.Tech Information Technology",
      duration: "2 Years",
      intake: "50 Students",
      description: "Advanced program with specializations in software engineering, data analytics, and IT management.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      gradient: "from-teal-600 to-cyan-600",
      curriculum: [
        "Advanced Software Engineering",
        "Big Data Analytics",
        "Machine Learning",
        "DevOps & Automation",
        "Enterprise Architecture",
        "IT Project Management",
        "Research Methodology",
        "Dissertation Project"
      ]
    }
  ];

  const researchAreas = [
    {
      title: "Data Science & Analytics",
      description: "Advanced research in machine learning, data mining, and predictive analytics for business intelligence.",
      icon: Brain,
      projects: ["Predictive Healthcare Analytics", "Financial Data Mining", "Social Media Sentiment Analysis"],
      color: "text-emerald-600"
    },
    {
      title: "Web Technologies",
      description: "Modern web development frameworks, progressive web apps, and user experience research.",
      icon: Globe,
      projects: ["Progressive Web Applications", "Real-time Web Systems", "Accessibility Research"],
      color: "text-teal-600"
    },
    {
      title: "Cloud Computing",
      description: "Distributed systems, serverless computing, and cloud-native application development.",
      icon: Server,
      projects: ["Microservices Architecture", "Serverless Computing", "Container Orchestration"],
      color: "text-cyan-600"
    },
    {
      title: "Mobile Computing",
      description: "Cross-platform mobile development, IoT integration, and mobile security research.",
      icon: Smartphone,
      projects: ["Cross-Platform Mobile Apps", "IoT Mobile Integration", "Mobile Security Frameworks"],
      color: "text-blue-600"
    }
  ];

  const topAchievers = [
    {
      name: "Arjun Kumar",
      year: "B.Tech IT 2024",
      achievement: "Microsoft Student Partner, Full Stack Developer Intern at Google",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      skills: ["React", "Node.js", "Azure", "Machine Learning"]
    },
    {
      name: "Priya Sharma",
      year: "M.Tech IT 2023",
      achievement: "Best Research Paper Award, Published 5 papers in international journals",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8cc?auto=format&fit=crop&w=300&q=80",
      skills: ["Data Science", "Python", "TensorFlow", "Research"]
    },
    {
      name: "Rahul Singh",
      year: "B.Tech IT 2024",
      achievement: "Winner of Smart India Hackathon 2023, Founder of tech startup",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      skills: ["Mobile Development", "Entrepreneurship", "UI/UX", "Leadership"]
    }
  ];

  const achievements = [
    {
      title: "ACM Student Chapter",
      description: "Largest ACM chapter with 300+ members",
      icon: Award,
      color: "text-emerald-600"
    },
    {
      title: "Open Source Projects",
      description: "200+ student-led projects on GitHub",
      icon: Code,
      color: "text-teal-600"
    },
    {
      title: "Tech Partnerships",
      description: "Collaborations with major IT companies",
      icon: Lightbulb,
      color: "text-cyan-600"
    },
    {
      title: "Career Success",
      description: "98% placement rate in top IT firms",
      icon: GraduationCap,
      color: "text-blue-600"
    }
  ];
