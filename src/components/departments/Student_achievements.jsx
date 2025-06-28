import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon 2024 (USICT Internal Round)",
    achievement: "224 Participants",
    year: "2024",
    student: "USICT Students",
    department: "CSE/IT/ECE",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    description:
      "GBU hosted the internal SIH 2024 with 224 participants from USICT solving real-world challenges." ,
  },
  {
    title: "Shell Eco-Marathon, Manila",
    achievement: "India Representation",
    year: "2018",
    student: "Sachin Mishra & Team (Mechanical)",
    department: "Mechanical",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    description:
      "GBU’s Mechanical team designed a hydrogen-powered Eco-Kart and represented India." ,
  },
  {
    title: "Elite Women’s National Boxing Championship 2023",
    achievement: "Hosted Event",
    year: "2023",
    student: "58 States & Club Athletes",
    department: "Sports",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
    description:
      "GBU hosted the 7th Elite Women’s National Boxing Championship in Dec 2023." ,
  },
  {
    title: "AI Centre of Excellence Establishment",
    achievement: "₹50 Cr UP Govt Funding",
    year: "2024",
    student: "USICT Researchers",
    department: "CSE/IT",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
    description:
      "UP Govt & industry partners funded AI CoE at GBU to boost advanced tech research." ,
  }
];


const StudentAchievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
          Student Achievements
          </h2>
          <p className="text-xl text-gray-600">Celebrating excellence and innovation</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden rounded-xl">
          <div className="relative h-96">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50">
                    <div className="mb-4 space-x-2">
                      <Badge className="bg-green-100 text-green-800">
                        {achievement.year}
                      </Badge>
                      <Badge
                        className={`${
                          achievement.department === "All"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {achievement.department} Department
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-500 font-bold text-xl mb-2">
                      {achievement.achievement}
                    </p>
                    <p className="text-gray-600 mb-4">{achievement.description}</p>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold text-blue-900">{achievement.student}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 z-20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 z-20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center py-6 space-x-2 bg-gray-50">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 shadow-lg scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentAchievements;
