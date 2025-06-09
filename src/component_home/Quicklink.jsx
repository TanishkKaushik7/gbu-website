import React from "react";
import {
  FaUniversity,
  FaMoneyCheckAlt,
  FaBriefcase,
  FaBook,
  FaBuilding,
} from "react-icons/fa";

const quickLinks = [
  {
    title: "Schools",
    desc: "Explore our academic schools",
    icon: <FaUniversity className="text-white text-2xl" />,
    color: "bg-green-600",
  },
  {
    title: "Fees",
    desc: "Fee structure and payment",
    icon: <FaMoneyCheckAlt className="text-white text-2xl" />,
    color: "bg-blue-800",
  },
  {
    title: "Placements",
    desc: "Career opportunities",
    icon: <FaBriefcase className="text-white text-2xl" />,
    color: "bg-orange-600",
  },
  {
    title: "Courses Offered",
    desc: "Academic programs",
    icon: <FaBook className="text-white text-2xl" />,
    color: "bg-green-700",
  },
  {
    title: "Infrastructure",
    desc: "Campus facilities",
    icon: <FaBuilding className="text-white text-2xl" />,
    color: "bg-blue-700",
  },
];

export default function QuickAccess() {
  return (
    <section
      className="bg-gray-50 py-12 mt-24"
      role="region"
      aria-labelledby="quick-access-heading"
    >
      <h2
        id="quick-access-heading"
        className="text-3xl font-bold text-center text-blue-800 mb-10"
      >
        Quick Access
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {quickLinks.map((item, idx) => (
          <div
            key={idx}
            className="w-72 sm:w-64 bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            <div
              className={`w-14 h-14 mx-auto flex items-center justify-center rounded-full ${item.color} mb-4`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
