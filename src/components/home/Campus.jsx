import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CampusLifeSection() {
  const [testimonials, setTestimonials] = useState([]);
  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, "");
  const CAMPUS_LIFE_API = `${BASE}/landing/campus-life/`;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Your original axios API call logic here
        const response = await fetch(CAMPUS_LIFE_API);
        const data = await response.json();
        if (Array.isArray(data)) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Failed to fetch campus life data:", error);
      }
    };
    fetchTestimonials();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="px-6 md:px-20 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Campus Life at GBU
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p
          className="text-gray-600 mb-4 max-w-3xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience a vibrant campus life filled with learning, growth, and
          unforgettable memories. Our diverse community of students creates an
          environment where everyone can thrive.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((item, index) => {
          const [categoryRaw] = item.card_content.split("-");
          const category = categoryRaw?.trim() || "";
          const quote = item.description?.replace(/\r\n/g, " ").trim() || "";

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-96 relative border border-gray-100">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={category}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    variants={imageVariants}
                    whileHover="hover"
                  />

                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0"
                    variants={overlayVariants}
                    whileHover="hover"
                  />

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-3 left-3"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative">
                      <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/20">
                        <span className="text-gray-800 text-xs font-bold tracking-wide uppercase">
                          {category}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-500/20 rounded-2xl"></div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60"></div>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="px-4 py-5 h-40 relative">
                  <motion.div
                    variants={textVariants}
                    whileHover="hover"
                    className="h-full flex flex-col justify-center"
                  >
                    <p className="text-gray-800 text-xl leading-relaxed italic relative font-semibold">
                      <span
                        className="relative z-10 line-clamp-3 font-medium"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {quote}
                      </span>
                    </p>
                  </motion.div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
