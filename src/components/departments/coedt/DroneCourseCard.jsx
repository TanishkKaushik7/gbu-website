 import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import droneImage from "../../../assets/Drone.png";

export default function DroneCourseCardFullWidth() {
  return (
    <section className="py-16 w-full mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center py-16"
      >
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Courses Offered by CEDT
        </h2>
        <p className="text-lg text-gray-600">
          Innovative initiatives transforming ideas into reality
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mx-20 mb-10 flex flex-col lg:flex-row bg-white/90 backdrop-blur-md border border-gray-200 shadow hover:shadow-xl transition-all overflow-hidden rounded-xl"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full relative"
        >
          <img
            src={droneImage}
            alt="Drone Training Course"
            className="h-64 lg:h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-bold shadow-md bg-gradient-to-r from-blue-500 to-indigo-500">
            NEW
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col p-6 gap-6 lg:w-1/2"
        >
          <h3 className="text-2xl font-bold text-blue-900 hover:text-blue-600 transition-colors">
            Training & Certification in Drone Designing & Piloting
          </h3>

          <p className="text-gray-700">
            Become a certified professional drone pilot. Master drone designing,
            flight concepts, assembly, maintenance, and real-time applications
            like agriculture, mapping, and flood damage assessment.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">5 + 1 Weeks</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">₹49,000</div>
              <div className="text-sm text-gray-600">Pricing</div>
            </div>
          </div>

          {/* Key Info */}
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Eligibility:</strong> 2nd Year+ Engineering, Diploma & Science Graduates
            </p>
            <p>
              <strong>Start Date:</strong> 6th September 2022
            </p>
            <p>
              <strong>Venue:</strong> CEDT, USICT, Gautam Buddha University, Greater Noida
            </p>
          </div>

          {/* Course Highlights */}
          <div className="bg-blue-50 p-4 rounded-xl">
            <h4 className="font-semibold text-blue-900 mb-2">Course Highlights:</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1"></span>
                Industry and Academic Instructors
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1"></span>
                DGCA Rules & Regulations
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1"></span>
                25 Hours of Drone Flying Practice
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 mt-1"></span>
                Job Placement Assistance
              </li>
            </ul>
          </div>

          {/* Download Button */}
          <div className="mt-2">
            <a
              href=""
              download
              className="block text-center w-full py-2 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:brightness-110 transition"
            >
              Download Syllabus
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
