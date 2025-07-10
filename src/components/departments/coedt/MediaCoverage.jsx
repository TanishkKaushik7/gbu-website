 import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const MediaCoverage = () => {
  const mediaItems = [
    {
      title: "Design Thinking Bootcamp",
      date: "2024-09-10",
      image: "",
      description: "Hands-on workshop on design thinking methodology and rapid prototyping.",
      link: ""
    },
    {
      title: "Drone Assembly Training Program",
      date: "2024-08-25",
      image: "",
      description: "Students learn to assemble multirotor drone platforms from scratch.",
      link: ""
    },
    {
      title: "AI & Robotics Seminar",
      date: "2024-07-15",
      image: "",
      description: "Expert talk series covering AI applications in drone navigation.",
      link: ""
    },
    {
      title: "Drone Aerodynamics Workshop",
      date: "2024-06-20",
      image: "",
      description: "Workshop on flight dynamics and aerodynamics of UAVs.",
      link: ""
    },
    {
      title: "Drone Pilot Training & Certification",
      date: "2024-05-10",
      image: "",
      description: "Professional training program for drone pilots with certification.",
      link: ""
    },
    {
      title: "Industry Interaction Session",
      date: "2024-04-05",
      image: " ",
      description: "Interactive session with drone tech startups and industry mentors.",
      link: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Media Coverage
          </h2>
          <p className="text-lg text-gray-600">
            Explore how our work is making headlines
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl shadow-lg border border-gray-200 bg-white p-6 h-[600px]"
        >
          <h3 className="text-blue-800 text-lg font-bold mb-4">News & Articles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto h-[calc(100%-80px)] pr-2 custom-scrollbar">
            {mediaItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-semibold text-blue-900 text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 mb-1">
                  {item.description}
                </p>
                <div className="flex items-center text-xs text-blue-600 font-medium">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCoverage;
