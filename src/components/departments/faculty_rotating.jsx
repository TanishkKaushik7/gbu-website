import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample fallback data for testing
const defaultData = {
  title: "Faculty of ICT",
  subTitle: "",
  facultyList: [
     {
    name: "Dr. Arpit Bhardwaj",
    title: "Dean, CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/6735c61d170ee_WhatsApp%20Image%202024-11-14%20at%203.12.33%20PM.jpeg",
  },
  {
    name: "Dr. Arun Solanki",
    title: "HOD – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/67c6a617c08be_cropped-arun.jpg",
  },
  {
    name: "Dr. Aarti Gautam Dinker",
    title: "Assistant Professor – CSE",
    image: " https://faculty.gbu.ac.in/uploads/photos/6605300c5c849_aarti.jpg",
  },
  {
    name: "Dr. Anika",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/672ee826e3b19_Anika.jpg",
  },
  {
    name: "Dr. Anurag Singh Baghel",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/66052f4f5757a_asb.jpg",
  },
  {
    name: "Dr. Gaurav Kumar",
    title: "Assistant Professor – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/6721e9346dac1_Photo-removebg-preview.png",
  },
  {
    name: "Dr. Nitesh Singh Bhati",
    title: "Assistant Professor – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/671b256dd035a_WhatsApp%20Image%202024-10-25%20at%2010.05.19%20AM.jpeg",
  },
  {
    name: "Dr. Pradeep Tomar",
    title: "Assistant Professor – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/6603cfe3be87c_pradeep-tomar.jpg",
  },
  {
    name: "Dr. Rajendra Bahadur Singh",
    title: "Assistant Professor – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/6613ce13d7538_RBS_PIC.jpeg",
  },
  {
    name: "Dr. Raju Pal",
    title: "Assistant Professor – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/660a761667ced_CS%20Raju%20Pal.jpg",
  },
  {
    name: "Dr. Rakesh Kumar",
    title: "Assistant Professor – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/67c6cc28b50d0_SML_8821.JPG",
  },
  {
    name: "Dr. Shiraz Khurana",
    title: "Assistant Professor – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/672b4e0fd48e8_image%20(1).png",
  },
  {
    name: "Dr. Vimlesh Kumar Ray",
    title: "Assistant Professor – CSE",
    image: "https://faculty.gbu.ac.in/uploads/photos/66052fd60f82d_vimlesh.jpg",
  },
  {
    name: "Dr. Kartikeya Tiwari",
    title: "Assistant Professor – CSE",
    image:
      "https://faculty.gbu.ac.in/uploads/photos/66475c0d84def_IMG-20240517-WA0009%20(1).jpg",
  },
  {
    name: "Dr. Maneet Singh",
    title: "Assistant Professor – IT",
    image: "https://faculty.gbu.ac.in/uploads/photos/67c1a9f10e9e1_profile_pic_ManeetSingh.jpg",
  },
  ],
};

export default function FacultyResponsiveSlider({ data = defaultData }) {
  const { title, subTitle, facultyList } = data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableAnimation, setDisableAnimation] = useState(false);
  const navigate = useNavigate();

  const cardWidth = 280;
  const gap = 38;
  const moveBy = cardWidth + gap;
  const visibleCards = 4;
  const loopData = [...facultyList, ...facultyList.slice(0, visibleCards)];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === facultyList.length) {
          setDisableAnimation(true);
          setTimeout(() => {
            setCurrentIndex(0);
            setDisableAnimation(false);
          }, 50);
          return prev + 1;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [facultyList.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? facultyList.length - 1 : (prev - 1 + facultyList.length) % facultyList.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (facultyList.length + 1));
  };

  const handleCardClick = () => {
    navigate("/schools/ict/faculty");
  };

  return (
    <section className="py-10 bg-white overflow-hidden relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
          {title}
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full" />
        </h2>
        {subTitle && (
          <p className="text-gray-600 text-sm mt-1">{subTitle}</p>
        )}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <button
          onClick={handlePrev}
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute -right-10 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow-md z-10"
        >
          <ChevronRight size={24} />
        </button>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: -currentIndex * moveBy }}
            transition={
              disableAnimation ? { duration: 0 } : { ease: "easeInOut", duration: 0.6 }
            }
            className="flex gap-[38px]"
            style={{
              width: `${(cardWidth + gap) * (facultyList.length + visibleCards)}px`,
            }}
          >
            {loopData.map((member, i) => (
              <div
                key={i}
                onClick={handleCardClick}
                className="flex-shrink-0 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md border border-blue-200 p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                style={{ width: `${cardWidth}px` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-44 object-cover rounded-xl shadow mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
