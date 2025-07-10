 import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Award, Check } from "lucide-react";

const AboutCEDT = () => {
  const missionPoints = [
    "Train skilled drone pilots and technicians",
    "Develop indigenous drone systems and applications",
    "Foster research and innovation in aerial robotics",
    "Collaborate with industry and government bodies",
    "Promote safe and responsible use of drone technology",
  ];

  const photos = [
    "https://placehold.co/400x250/png" 
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10 sm:mb-12">
        About Us 
        <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
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
              To be a national leader in drone innovation, education, and
              capacity-building, driving sustainable solutions and technological
              excellence.
            </p>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              The CEDT is committed to systematizing knowledge, assistance, and
              skill-building concerning technical and social aspects of drone
              technology, meeting sophisticated indigenous requirements in NCR
              and Uttar Pradesh.
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
                The Centre of Excellence – Drone Technology (CEDT) is a
                pioneering initiative of the School of ICT, Gautam Buddha
                University, in collaboration with Omnipresent Robot Tech and
                IASC SSC. From its inception, CEDT has focused on designing,
                assembling, and testing advanced drone systems for government,
                industry, and healthcare applications.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">What We Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                CEDT offers drone pilot training, data processing and analysis,
                app development, and drone design and repair. We provide
                education and skill development programs that blend classroom
                learning with hands-on experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Our Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are dedicated to systematizing knowledge, assistance, and
                skill-building across technical and social aspects of drone
                technology. The Centre aspires to meet sophisticated indigenous
                requirements in NCR and Uttar Pradesh, contributing to India’s
                technological advancement.
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="grid grid-cols-1 gap-6"
>
  {photos.map((src, idx) => (
    <img
      key={idx}
      src= "https://static.wixstatic.com/media/bc6a73_a51fa15dce7d4c229f9090932d2071f3~mv2.jpg/v1/fill/w_950,h_799,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bc6a73_a51fa15dce7d4c229f9090932d2071f3~mv2.jpg"
   
      className="rounded-lg shadow-lg border border-gray-200 w-full"
    />
  ))}
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCEDT;
