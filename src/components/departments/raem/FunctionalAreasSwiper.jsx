import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FunctionalAreasSwiper() {
  const functionalAreas = [
    {
      title: "Signal, Telecom and RAMS",
      description:
        "Specialized focus on Railway Signaling, Telecom & Optical Fiber Technology, and RAMS to enhance safety, reliability, and efficiency in railway operations.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Education & Training Programs",
      description:
        "Short-term courses, Certificate Programs, One-Year Diploma, and Two-Year M.Tech in Railway Signaling, Telecom, and RAMS to develop skilled professionals.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Research and Development in Mobility",
      description:
        "Product development, lab establishment for ERTMS Level 1 & 2, and advanced R&D in traffic signaling, rolling stock, and reliability solutions.",
      image:
        "https://images.unsplash.com/photo-1621609776871-d9dbfb6ea865?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Alternative Energy Solutions",
      description:
        "Exploring hydrogen-powered vehicles, solar energy, and other renewable techniques to promote sustainable transportation systems.",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Maintenance & Optimization",
      description:
        "Forecasting reliability, managing inventory, preventive and corrective maintenance, and developing optimization solutions for smooth operations.",
      image:
        "https://images.unsplash.com/photo-1603187545809-160db1f9d603?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-800 mb-10 sm:mb-12">
        Key Functional <span className="text-purple-800">Areas</span>
        <div className="w-20 sm:w-24 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="max-w-7xl mx-auto px-4">
      <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  loop={true}  
  autoplay={{
    delay: 3000,   
    disableOnInteraction: false,  
  }}
  speed={2000}  
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-8"
>
  {functionalAreas.map((area, index) => (
    <SwiperSlide key={index}>
      <FunctionalAreaCard area={area} />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}
function FunctionalAreaCard({ area }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const descriptionLimit = 150;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-[450px] bg-white rounded-xl border border-gray-300 overflow-hidden transition-shadow hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={area.image}
          alt={area.title}
          className="h-48 w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
        <p className="text-gray-700 text-base leading-relaxed flex-grow">
          {expanded
            ? area.description
            : area.description.length > descriptionLimit
            ? area.description.slice(0, descriptionLimit) + "..."
            : area.description}
        </p>
        {area.description.length > descriptionLimit && (
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


