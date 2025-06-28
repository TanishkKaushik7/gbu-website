// Button component
const Button = ({ children, className = "", size = "md", ...props }) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg font-semibold"
  };
  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${sizeClasses[size] || sizeClasses.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card component
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-xl shadow-md border border-gray-100 border-solid${className}`}
    {...props}
  >
    {children}
  </div>
);

// CardContent component
const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

// Badge component
const Badge = ({ children, className = "", ...props }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold ${className}`}
    {...props}
  >
    {children}
  </span>
);
import { 
  Lightbulb, 
  Users, 
  Book, 
  Award, 
  ArrowDown, 
  Check,
  School,
  Star
} from "lucide-react";

const Vison = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Banner */}
      <div className="relative h-[60vh] md:h-[50vh] sm:h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-blue-900/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-[2.8rem] md:text-[2rem] font-bold mb-4 leading-tight drop-shadow-lg">
            About Gautam Buddha University
          </h1>
          <p className="text-[1.2rem] mb-12 opacity-90 drop-shadow-md">
            An Ultimate Destination for Higher Learning
          </p>
          
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto" />
          </div>
        </div>
      </div>

      {/* Section 2: At a Glance - Counters */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl shadow-md">
              <CardContent className="p-4 text-center">
                <School className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">511+</div>
                <div className="text-gray-600 text-sm">Acres Campus</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl shadow-md">
              <CardContent className="p-4 text-center">
                <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-1">6500+</div>
                <div className="text-gray-600 text-sm">Students</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl shadow-md">
              <CardContent className="p-4 text-center">
                <Award className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">200+</div>
                <div className="text-gray-600 text-sm">Faculty Members</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl shadow-md">
              <CardContent className="p-4 text-center">
                <Book className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600 mb-1">150+</div>
                <div className="text-gray-600 text-sm">Programs</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 col-span-2 md:col-span-1 rounded-xl shadow-md">
              <CardContent className="p-4 text-center">
                <Star className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-600 mb-1">2008</div>
                <div className="text-gray-600 text-sm">Established</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Section 3: About GBU Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://architecture.live/wp-content/uploads/2022/09/7-2048x1448.jpg" 
                alt="Gautam Buddha Statue at GBU" 
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Gautam Buddha University
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Gautam Buddha University, established in 2008 by the Government of Uttar Pradesh, 
                stands as a beacon of educational excellence. With UGC recognition and AIU membership, 
                our university is committed to providing world-class multidisciplinary education 
                that combines traditional values with modern innovation across diverse academic fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vision & Mission */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  To emerge as a world-class university that promotes excellence in teaching, 
                  research, and innovation while fostering global citizenship and sustainable 
                  development for the betterment of society.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-1 w-5 h-5" />
                    Provide quality education and research opportunities
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-1 w-5 h-5" />
                    Foster innovation and entrepreneurship
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-1 w-5 h-5" />
                    Promote ethical values and social responsibility
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-2 mt-1 w-5 h-5" />
                    Build global partnerships and collaborations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Organizational Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Governance & Organizational Leadership
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Chancellor</h3>
                <p className="text-gray-600">Chief Minister of UP</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Vice Chancellor</h3>
                <p className="text-gray-600">Academic Leadership</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <School className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Deans of Schools</h3>
                <p className="text-gray-600">Academic Departments</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow rounded-xl">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Book className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Registrar</h3>
                <p className="text-gray-600">Administrative Affairs</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-lg">More Details</Button>
          </div>
        </div>
      </section>

      {/* Section 6: Schools & Programs */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Schools & Programs
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: "School of Engineering", icon: "🏗️", summary: "Technology-led UG/PG courses" },
              { name: "School of ICT", icon: "💻", summary: "Computing & Information Technology" },
              { name: "School of Management", icon: "📊", summary: "Business & Management Studies" },
              { name: "School of Biotechnology", icon: "🧬", summary: "Life Sciences & Research" },
              { name: "School of Law", icon: "⚖️", summary: "Legal Studies & Practice" },
              { name: "School of Architecture", icon: "🏛️", summary: "Design & Planning" },
              { name: "School of Buddhist Studies", icon: "🕯️", summary: "Philosophy & Spirituality" },
              { name: "School of Humanities", icon: "📚", summary: "Liberal Arts & Literature" }
            ].map((school, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{school.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{school.name}</h3>
                  <p className="text-sm text-gray-600">{school.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-lg">More Details</Button>
          </div>
        </div>
      </section>

      {/* Section 7: Facilities & Infrastructure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Facilities & Infrastructure
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Central Library", icon: "📚", summary: "Digital collections & research facilities" },
              { title: "Modern Auditoriums", icon: "🎭", summary: "Advanced audio-visual systems" },
              { title: "Smart Classrooms", icon: "💻", summary: "Technology-enabled learning spaces" },
              { title: "Research Labs", icon: "🔬", summary: "State-of-the-art equipment" },
              { title: "Computer Centers", icon: "🖥️", summary: "High-speed connectivity" },
              { title: "Conference Halls", icon: "🏢", summary: "Professional meeting spaces" }
            ].map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Hostel & Residential Life */}
      <section className="py-16 bg-beige-50" style={{ backgroundColor: '#f5f5dc' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/assets/hostels.jpg" 
                alt="Hostel Room" 
                className="rounded-lg"
              />
              <img 
                src="/assets/hostel2.jpg" 
                alt="Dining Area" 
                className="rounded-lg"
              />
           

            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hostel & Residential Life
              </h2>
              
              <ul className="space-y-4">
                {[
                  "18+ Modern Hostels",
                  "Wi-Fi Enabled Campus",
                  "Biometric Access Control",
                  "In-house Dining Facilities",
                  "24×7 Medical Support",
                  "Banking & ATM Services"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Check className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Meditation & Wellness Center */}
      <section className="py-16 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src="/assets/meditation.jpg" 
                alt="Meditation Center" 
                className="rounded-full shadow-xl mx-auto mb-6 w-100 h-100 object-cover"
              />
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Meditation & Wellness Center
              </h2>
              
              <div className="flex justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🧘</div>
                  <p className="text-sm text-gray-600">Yoga</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🕉️</div>
                  <p className="text-sm text-gray-600">Meditation</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🌿</div>
                  <p className="text-sm text-gray-600">Wellness</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                Our dedicated wellness center offers yoga sessions, mindfulness practices, 
                and spiritual guidance to nurture the holistic development of our students. 
                Experience tranquility in our serene meditation dome.
              </p>
              
              <div className="text-center">
                <Button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-lg">
                  Explore More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Section 10: Green Eco-Friendly Campus */}
<section className="py-16 relative">
  {/* Green translucent overlay */}
  <div className="absolute inset-0 bg-green-700/80 z-10"></div>

  {/* Background image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
    }}
  ></div>

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-4">
        Green Eco-Friendly Campus
      </h2>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: "Rainwater Harvesting", icon: "💧" },
        { title: "Solar-Powered Lighting", icon: "☀️" },
        { title: "Botanical Gardens", icon: "🌺" },
        { title: "Pedestrian Pathways", icon: "🚶‍♂️" },
        { title: "Sustainable Design", icon: "🌱" },
        { title: "Green Architecture", icon: "🏢" }
      ].map((feature, index) => (
        <Card key={index} className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all rounded-xl">
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Section 11: Sports & Recreation */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Sports & Recreation
            </h2>
            <p className="text-xl text-gray-300">
              Eklavya Sports Complex - Excellence in Athletics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700 border-[1px] border-solid rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🏟️</div>
                <h3 className="font-bold text-black mb-2">47-Acre Sports Zone</h3>
                <p className="text-gray-700">Comprehensive outdoor facilities</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 border-[1px] border-solid rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🏃‍♂️</div>
                <h3 className="font-bold text-black mb-2">Multi-Sport Facilities</h3>
                <p className="text-gray-700">Cricket, Football, Squash, Gym</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 border-[1px] border-solid rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🏛️</div>
                <h3 className="font-bold text-black mb-2">₹78 Cr Indoor Stadium</h3>
                <p className="text-gray-700">Coming in 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 12: Research & Innovation */}
      <section className="py-16" style={{ backgroundColor: '#4682b4' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Research & Innovation
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center rounded-xl">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">700+</div>
                <p className="text-gray-700">Publications</p>
              </CardContent>
            </Card>
            <Card className="text-center rounded-xl">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">82</div>
                <p className="text-gray-700">Ph.D.s Awarded</p>
              </CardContent>
            </Card>
            <Card className="text-center rounded-xl">
              <CardContent className="p-6">
                <div className="text-xl font-bold text-purple-600 mb-2">DST, CSIR</div>
                <p className="text-gray-700">Sponsored Research</p>
              </CardContent>
            </Card>
            <Card className="text-center rounded-xl">
              <CardContent className="p-6">
                <div className="text-xl font-bold text-orange-600 mb-2">AI, Cyber</div>
                <p className="text-gray-700">Centers of Excellence</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 13: Student Life & Community */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Life & Community
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "30+ Clubs & Societies", icon: "🎭" },
              { title: "NSS/NCC Programs", icon: "🎖️" },
              { title: "Tech & Cultural Fests", icon: "🎉" },
              { title: "Campus Amenities", icon: "🏪" }
            ].map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 14: Placements & Collaborations */}
      {/* <section className="py-16 bg-white border-t border-gray-200 border-solid">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Placements & Global Collaborations
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Recruiters</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Axis Bank", "S&P Global", "Tekion Corp", "Wipro", "TCS", "Infosys", "HCL", "Dell"].map((company, index) => (
                  <Card key={index} className="p-4 text-center border-2 hover:border-blue-200 transition-colors rounded-lg">
                    <p className="font-semibold text-gray-800">{company}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Partnerships</h3>
              <div className="space-y-4">
                <Card className="p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Australia</h4>
                  <p className="text-gray-600">MOUs with leading universities</p>
                </Card>
                <Card className="p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">United Kingdom</h4>
                  <p className="text-gray-600">Collaborative programs</p>
                </Card>
                <Card className="p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Denmark</h4>
                  <p className="text-gray-600">Research partnerships</p>
                </Card>
              </div>
              <Button className="mt-6 w-full bg-black text-white hover:bg-gray-800 transition-colors rounded-lg">Explore Placement Records</Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Section 15: Final CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Join GBU – Where Excellence, Empathy & Enlightenment Thrive
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-lg"
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-lg"
            >
              Download Brochure
            </Button>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-lg"
            >
              Plan a Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vison;
