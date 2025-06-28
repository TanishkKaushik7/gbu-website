import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const faculty = [
  {
    name: "Dr. Rakesh Kumar",
    title: "Assistant Professor – CSE",
    image: "https://via.placeholder.com/200x250?text=Dr.+Rakesh+Kumar",
  },
  {
    name: "Dr. Raju Pal",
    title: "Assistant Professor – CSE",
    image: "https://via.placeholder.com/200x250?text=Dr.+Raju+Pal",
  },
  {
    name: "Dr. Vidushi Sharma",
    title: "Assistant Professor – ECE",
    image: "https://via.placeholder.com/200x250?text=Dr.+Vidushi+Sharma",
  },
  {
    name: "Dr. Vimlesh Kumar Ray",
    title: "Assistant Professor – ECE",
    image: "https://via.placeholder.com/200x250?text=Dr.+Vimlesh+Kumar+Ray",
  },
  {
    name: "Dr. Maneet Singh",
    title: "Assistant Professor – IT",
    image: "https://via.placeholder.com/200x250?text=Dr.+Maneet+Singh",
  },
  {
    name: "Dr. Akash Kumar",
    title: "Assistant Professor – IT",
    image: "https://via.placeholder.com/200x250?text=Dr.+Akash+Kumar",
  },
];

// Duplicate for infinite effect
const repeatedFaculty = [...faculty, ...faculty];

export default function FacultyResponsiveSlider() {
  const [x, setX] = useState(0);
  const cardWidth = 280;
  const gap = 38;
  const moveBy = cardWidth + gap;
  const totalCards = repeatedFaculty.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setX((prevX) => {
        const nextX = prevX - moveBy;
        const maxOffset = -moveBy * faculty.length;
        return nextX <= maxOffset ? 0 : nextX;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-white overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8">
        Faculty of ICT
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.div
          animate={{ x }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="flex"
          style={{
            width: `${(cardWidth + gap) * totalCards}px`,
            columnGap: `${gap}px`,
          }}
        >
          {repeatedFaculty.map((member, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md border border-blue-200 p-4 flex flex-col items-center text-center"
              style={{ width: `${cardWidth}px` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-44 object-cover rounded-xl shadow mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
