 import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, Youtube } from "lucide-react";
import Talks from "../../../assets/Talks.png"; // Assuming you have a JSON file with talk data
export default function RecentTalks() {
  const talks = [
    {
      title: "How Drones Will Bring Big Disruptions in Industry and Jobs",
      speaker: "Akash Sinha",
      dateTime: "10th March 2022 · 3 PM",
      venue: "Main Auditorium, GBU",
      description:
        "Mr. Aakash Sinha (Founder & CEO, Omnipresent Robot Tech) discussed how drone technology will transform industry and create new job opportunities.",
      image: Talks,
      youtubeLink: "https://youtu.be/B3W3wQ4ZRPQ?si=fFNMi3zv43gu1PoJ",
    },
    // You can add more talks here
  ];

  return (
    <section className=" bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center  py-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Recent Talks and Session
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
        {talks.map((talk, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-300 hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-64">
              <img
                src={talk.image}
                alt={talk.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {talk.title}
                </h3>
                <div className="flex items-center text-gray-700 mb-2">
                  <User className="w-5 h-5 mr-2 text-purple-600" />
                  Talk by {talk.speaker}
                </div>
                <div className="flex items-center text-gray-700 mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                  {talk.dateTime} · {talk.venue}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mt-2">
                  {talk.description}
                </p>
              </div>
              {talk.youtubeLink && (
                <a
                  href={talk.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Watch Recording
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
