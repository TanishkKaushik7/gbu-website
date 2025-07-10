import React, { useState } from "react";
import { Linkedin } from "lucide-react";
 
import { motion } from "framer-motion";
const mentors = [
  // 🌿 GBU Mentors
  {
    type: "GBU",
    image:
      "http://meow.tilchattaas.com/media/leadership/Screenshot_2025-06-24_at_10.41.43AM.png",
    name: "Prof. Rana Pratap Singh",
    role: "Honorable Vice Chancellor, GBU",
    qualifications: "",
    expertise:
      "Fiber Optics, Optical Communication Systems and Network, Nanophotonics, Photonic Crystal Fiber, Photonic Crystal Devices, Nano Science and Technology",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: "/images/rajeshsir.jpeg",
    name: "Dr. Rajesh Mishra",
    role: "Chairperson - CEDT",
    qualifications:
      "Ph.D. (IIT Kharagpur), M.Tech. (IIT Kharagpur), B.E. (Electronics Engineering)",
    expertise: "Networks, Signal Processing, Communication Systems, RAMS",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: "/images/14141679_10155181884145752_7398975048469234012_n.jpg",
    name: "Dr. O. V. Singh",
    role: "Member - CEDT",
    qualifications: "Ph.D. (Jamia Milia Islamia, New Delhi)",
    expertise:
      "Power Systems, Renewable Energy Sources, Electric Vehicles, Artificial Intelligence",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: "/images/nzr.png",
    name: "Dr. Navaid Zafar Rizvi",
    role: "Coordinator & Convener - CEDT",
    qualifications: "Ph.D., MS (TU Darmstadt, Germany), MS (HFU, Germany)",
    expertise:
      "ML for ICs, VLSI Design, HF Electronics and Communication, Microsystems",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: "/images/sanjay.sharma.png",
    name: "Prof. Sanjay Kumar Sharma",
    role: "Dean, USICT",
    qualifications: "",
    expertise:
      "Information Technology, Artificial Intelligence, Nanotechnology, Research Methodology, Research & Publication Ethics",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: "/images/mm.jpeg",
    name: "Dr. Manmohan Singh Shishodia",
    role: "Member - CEDT",
    qualifications: "Ph.D. (IIT Delhi)",
    expertise:
      "Plasmonics, Nanoplasmonics, Semiconductor Optoelectronics, Theoretical and Computational Physics",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: "/images/download.jpg",
    name: "Dr. Navin Kumar",
    role: "Member - CEDT",
    qualifications: "Ph.D. (JNU)",
    expertise:
      "Animal Biotechnology, Regenerative Medicine, Immunology, Host-Pathogen Interaction, Human Physiology, Medical Lab Technology, Molecular Medicine",
    linkedin: "#",
  },
  {
    type: "GBU",
    image: "/images/vimlesh.jpg",
    name: "Dr. Vimlesh Kumar Ray",
    role: "Co-coordinator - CEDT",
    qualifications: "Ph.D. (GBU)",
    expertise:
      "Adhoc and Sensor Networks, Wireless Communications, UAV Communications, Control Systems",
    linkedin: "#",
  },

  // 🟣 Omnipresent Collaborators
  {
    type: "Collaborator",
    image: "/images/D6tYrEFVsAAWNA8.jpg",
    name: "Mr. Aakash Sinha",
    role: "Founder & CEO Omnipresent Robo Tech",
    qualifications: "MS (Robotics) – Carnegie Mellon University, USA",
    about:
      "Professor of Practice at Shiv Nadar University. Has rich drone-making experience with Lockheed-Martin and iRobot Corp. Founder of India's leading drone-based services company.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: "/images/WhatsApp Image 2022-07-31 at 1.21_edited.jpg",
    name: "Mr. Souraj S R",
    role: "R&D Lead, Omnipresent Robo Tech",
    qualifications:
      "Mechatronics Engineering (Nehru Institute of Engineering and Technology)",
    about:
      "Expertise in assemblies, hardware integration, PCB design, piloting, RPA design, and manufacturing of drones. Successfully developed India's longest 50km-range drone and led major Survey of India mapping projects.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: "/images/1516872346233.jpg",
    name: "Ms. Jyoti Vashishtha",
    role: "CTO, Omnipresent Robo Tech",
    qualifications:
      "MS (University of California, US), MS (TU Munich, Germany)",
    about:
      "Expert in wireless communications, robotics, and AI. Winner of the Top 20 Women in Comp Sc award from US NSF and Dept. of Science and Technology, Gold Medalist.",
    linkedin: "#",
  },
  {
    type: "Collaborator",
    image: "/images/shravan yadav photmo.jpg",
    name: "Mr. Shravan Yadav",
    role: "Drone Expert, Omnipresent Robo Tech",
    qualifications: "",
    about:
      "Specialist in drone piloting and operations with experience in developing advanced UAV platforms and training programs.",
    linkedin: "#",
  },
];

const Mentors = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const maxLength = 140;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-black mb-10 sm:mb-12"
        >
          <span className="text-blue-800">Meet Our Mentors</span>
          <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => {
            const text = mentor.type === "GBU" ? mentor.expertise : mentor.about;
            const shouldTruncate = text.length > maxLength;

            return (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-50 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{mentor.role}</p>
                {mentor.qualifications && (
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Qualifications:</strong> {mentor.qualifications}
                  </p>
                )}
                <p className="text-sm text-gray-700 mb-2">
                  {shouldTruncate && !expanded[index]
                    ? `${text.slice(0, maxLength)}...`
                    : text}
                </p>
                {shouldTruncate && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-gray-600 text-sm font-semibold hover:underline text-left"
                  >
                    {expanded[index] ? "Read Less" : "Read More"}
                  </button>
                )}
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 hover:underline"
                >
                  <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
