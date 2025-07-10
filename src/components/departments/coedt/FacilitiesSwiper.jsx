 import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FacilitiesSwiper() {
  const facilities = [
    {
      title: "CEDT Research & Development Laboratory",
      description:
        "Equipped for end-to-end drone manufacturing with frameworks, propulsion, aerodynamics, communication, automation, payloads, security, and control systems.",
      image:
        "https://images.unsplash.com/photo-1608874978857-d3c9b0e929ba?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Designing Lab",
      description:
        "Executed with expert guidance and AI-powered modeling, layout, and visualization software for precise design analysis.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Flying Zone",
      description:
        "511-acre campus with open spaces simplifying and streamlining the flight test process.",
      image:
        "https://images.unsplash.com/photo-1571046812121-dba6aa46e7c2?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Assembly Lab",
      description:
        "In-house rapid prototyping and advanced manufacturing tools for streamlined assembly.",
      image:
        "https://images.unsplash.com/photo-1581094165875-2a23890d8e43?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Smart Classroom",
      description:
        "Modern teaching spaces with projectors, LCD panels, and an integrated learning management system.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-blue-800 mb-4">
          Facilities Offered
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Swiper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4"
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {facilities.map((facility, index) => (
            <SwiperSlide key={index}>
              <FacilityCard facility={facility} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

function FacilityCard({ facility }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const descriptionLimit = 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-[450px] bg-white rounded-xl border border-gray-300 hover:shadow-lg transition overflow-hidden"
    >
      <div className="relative">
        <img
          src={facility.image}
          alt={facility.title}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {facility.title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed flex-grow">
          {expanded
            ? facility.description
            : facility.description.length > descriptionLimit
            ? facility.description.slice(0, descriptionLimit) + "..."
            : facility.description}
        </p>
        {facility.description.length > descriptionLimit && (
          <button
            onClick={toggleExpanded}
            className="mt-3 text-sm text-left text-gray-600 hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </motion.div>
  );
}
