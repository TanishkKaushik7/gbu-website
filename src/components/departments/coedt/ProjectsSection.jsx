 import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "X8 Drones",
    description:
      "X8 PRO multirotor frame is a professional UAV platform designed to be lightweight, rigid, and powerful for various aerial applications.",
    image: "/images/projects/x8-drone.jpg",
    category: "UAV Platform",
    year: "2023",
    status: "Prototype",
    technologies: ["Multirotor", "Composite Materials"],
  },
  {
    name: "Talon to VTOL Drone",
    description:
      "Transforming the Talon fixed-wing drone into a VTOL aircraft capable of vertical take-off, hover, and landing for enhanced operational flexibility.",
    image: "/images/projects/talon-vtol.jpg",
    category: "R&D",
    year: "2024",
    status: "Ongoing",
    technologies: ["VTOL", "Aero Design"],
  },
  {
    name: "GCS Team (Ground Control System)",
    description:
      "Developing a web application providing mission planning and control functionality similar to ArduPilot, accessible from any device.",
    image: "/images/projects/gcs-team.jpg",
    category: "Software",
    year: "2024",
    status: "Ongoing",
    technologies: ["Web App", "ArduPilot"],
  },
  {
    name: "Battery Management System",
    description:
      "Designing an intelligent battery management system to monitor and optimize drone power performance and safety.",
    image: "/images/projects/bms.jpg",
    category: "Electronics",
    year: "2023",
    status: "Prototype",
    technologies: ["BMS", "Embedded Systems"],
  },
  {
    name: "Anti-Drone Systems",
    description:
      "Creating a system to detect, track, and neutralize unauthorized drones, ensuring secure airspace for critical infrastructure and drone fleets.",
    image: "/images/projects/anti-drone.jpg",
    category: "Security",
    year: "2024",
    status: "Research",
    technologies: ["RF Jamming", "AI Detection"],
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-600 text-white";
    case "Ongoing":
      return "bg-blue-600 text-white";
    case "Prototype":
      return "bg-orange-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600">
            Innovative initiatives transforming ideas into reality
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg flex flex-col overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-indigo-100 text-indigo-800 font-medium px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-800 font-medium px-2 py-1 rounded-full">
                    {project.year}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 text-gray-800 font-medium px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
