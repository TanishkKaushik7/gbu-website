import React, { useEffect, useState } from "react";
import {
  FaUniversity,
  FaMoneyCheckAlt,
  FaBriefcase,
  FaBook,
  FaBuilding,
  FaBatteryEmpty,
  FaPersonBooth,
  FaWordpress,
  FaCreativeCommonsNcEu,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

// Map string from backend to your icons
const iconMap = {
  university: <FaUniversity className="text-white text-2xl" />,
  book: <FaBook className="text-white text-2xl" />,
  briefcase: <FaBriefcase className="text-white text-2xl" />,
  building: <FaBuilding className="text-white text-2xl" />,
  user: <FaUser className="text-white text-2xl" />,
};

const BASE = (import.meta.env.VITE_HOST || "").replace(/\/$/, "");

export default function QuickAccess() {
  const [quickLinks, setQuickLinks] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("Quick Access");

  useEffect(() => {
    const fetchQuickAccess = async () => {
      try {
        const res = await axios.get(`${BASE}/landing/quick-access`);
        const data = res.data;
        if (Array.isArray(data) && data.length) {
          const mappedLinks = data.map((item) => ({
            title: item.card_title || "Title",
            desc: item.card_description || "Description",
            icon: iconMap[item.icon?.toLowerCase()] || <FaUniversity className="text-white text-2xl" />,
            color: "bg-green-600",
            link: item.url || "#",
            external: item.url?.startsWith("http"),
          }));
          setQuickLinks(mappedLinks);
          if (data[0].title) {
            setSectionTitle(data[0].title);
          }
        }
      } catch (err) {
        console.error("Failed to fetch quick access data:", err);
      }
    };

    fetchQuickAccess();
  }, []);

  return (
    <section
      className="bg-gray-50 py-12"
      role="region"
      aria-labelledby="quick-access-heading"
    >
      <h2
        id="quick-access-heading"
        className="text-3xl font-bold text-center text-blue-800 mb-10"
      >
        {sectionTitle}
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {quickLinks.map((item, idx) => {
          const Card = (
            <div className="w-70 sm:w-64 bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full">
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
          );

          return item.external ? (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              {Card}
            </a>
          ) : (
            <Link key={idx} to={item.link} className="block h-full">
              {Card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
