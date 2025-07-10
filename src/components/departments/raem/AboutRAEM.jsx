import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Award, Check } from "lucide-react";
import Raem from "../../../assets/Raem.png";
const AboutRAEM = () => {
  const missionPoints = [
    "Conduct research & develop solutions in railway signaling, telecom, and RAMS",
    "Undertake collaborative and contract research with Indian Railways and industry",
    "Offer specialized Diploma, Certificate, and M.Tech. programs",
    "Provide hands-on training and internships in rapid and alternative energy mobility",
    "Promote sustainable, innovative transport solutions for India’s future",
  ];

  const photos = [
    Raem
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-800 mb-10 sm:mb-12">
        About <span className="text-purple-800">RAEM</span>
        <div className="w-20 sm:w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* VISION & MISSION CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl border-gray-300 hover:shadow-lg transition"
          >
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a national leader in research, innovation, and capacity-building for sustainable, rapid, and alternative energy mobility systems.
            </p>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              RAEM aspires to create a robust ecosystem that bridges academia, industry, and government to advance railways, metro systems, hydrogen mobility, and renewable energy technologies.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl border-gray-300 hover:shadow-lg transition"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-lg">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="text-green-600 w-5 h-5 mr-2 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* BELOW CARDS: LEFT + RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Centre for Rapid and Alternative Energy Mobility (RAEM) is an initiative of Gautam Buddha University dedicated to advancing education, research, and innovation in rapid mobility systems, metro rail engineering, and alternative energy transportation such as hydrogen-powered vehicles and maglev trains.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">What We Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                RAEM offers specialized Diploma, Certificate, and M.Tech programs in Railway Signaling, Telecom, and RAMS. The Centre undertakes collaborative and contract research, provides training workshops, and develops indigenous solutions for the challenges faced by India's growing transportation sector.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to empowering the next generation of engineers, technologists, and innovators through industry-driven education, advanced R&D infrastructure, and meaningful partnerships with Indian Railways, NMRC, and DMRC.
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {photos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="RAEM Centre"
                className="rounded-lg shadow-lg border h-110 border-gray-200 w-full"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutRAEM;
