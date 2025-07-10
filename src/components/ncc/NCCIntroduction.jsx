// Minimal Card components for local use, styled for responsiveness
import { motion } from "framer-motion";
 // Minimal Card components
const Card = ({ className = "", children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`rounded-xl shadow bg-white ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h2 className={`font-bold text-xl md:text-2xl ${className}`}>{children}</h2>
);

const CardContent = ({ className = "", children }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);
import { Shield, Target, Users, Award, Star, Flag } from 'lucide-react';

const NCCIntroduction = () => {
  const stats = [
    { icon: Users, label: 'Enrolled Cadets', value: '300+', color: 'text-blue-600' },
    { icon: Shield, label: 'Training Camps', value: '25+', color: 'text-orange-600' },
    { icon: Award, label: 'Certificates Earned', value: '100+', color: 'text-green-600' },
    { icon: Star, label: 'RDC Selections', value: '15+', color: 'text-purple-600' },
  ];

  const objectives = [
    {
      icon: Shield,
      title: 'Character Development',
      description: 'Develop qualities of character, courage, comradeship, discipline, leadership, and patriotism.'
    },
    {
      icon: Target,
      title: 'Military Training',
      description: 'Provide basic military training to create a pool of organized, trained, and motivated youth.'
    },
    {
      icon: Flag,
      title: 'National Unity',
      description: 'Foster unity and brotherhood among youth of different backgrounds and regions.'
    },
    {
      icon: Users,
      title: 'Social Service',
      description: 'Encourage youth to actively participate in community development and social service.'
    }
  ];

  const unitDetails = {
    wing: 'Army Wing',
    nccCode: 'UP-07-A',
    paradeDay: 'Saturday',
    intakeCapacity: 150,
    establishedYear: 2015
  };

  return (
    <div className="space-y-8 mx-20">
      {/* Mission Statement */}
      <Card className="border-l-4 border-l-orange-600">
        <CardHeader>
          <CardTitle className="text-2xl text-orange-600">Our Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-gray-700">
            The National Cadet Corps (NCC) is a youth development movement under the Ministry of Defence, 
            aimed at instilling discipline, leadership, patriotism, and military awareness among students. 
            We uphold the motto "Unity and Discipline" - fostering national integration and building 
            character through military training and social service.
          </p>
        </CardContent>
      </Card>

      {/* Unit Information */}
      <Card className="bg-gradient-to-r   from-blue-600 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Shield className="h-8 w-8 mr-3" />
            Unit Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{unitDetails.wing}</div>
              <div className="text-blue-100">Affiliated Wing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{unitDetails.nccCode}</div>
              <div className="text-blue-100">NCC Unit Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{unitDetails.paradeDay}</div>
              <div className="text-blue-100">Parade Day</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{unitDetails.intakeCapacity}</div>
              <div className="text-blue-100">Intake Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{unitDetails.establishedYear}</div>
              <div className="text-blue-100">Established</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">A Grade</div>
              <div className="text-blue-100">Unit Rating</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Objectives */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">NCC Objectives</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <objective.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{objective.title}</h3>
                    <p className="text-gray-600">{objective.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* NCC Pledge */}
      <Card className="bg-gradient-to-r from-orange-100 to-blue-100">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-900">NCC Pledge</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-lg leading-relaxed text-gray-800 italic">
            "We, the cadets of the National Cadet Corps, do solemnly pledge that we shall always uphold 
            the unity of India. We resolve to be disciplined and responsible citizens of our nation. 
            We shall undertake positive community service in the spirit of selflessness and concern for 
            our fellow beings."
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r  from-blue-600 to-blue-400 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Corps</h2>
          <p className="text-xl mb-6">
            Be part of a disciplined force that builds character, leadership, and patriotism.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Learn More
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NCCIntroduction;
