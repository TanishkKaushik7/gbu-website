import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecruitersShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recruiters = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "HCL", logo: "https://logo.clearbit.com/hcltech.com" },
    { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
    { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
    { name: "Byju's", logo: "https://logo.clearbit.com/byjus.com" },
    { name: "Axis Bank", logo: "https://logo.clearbit.com/axisbank.com" },
    { name: "S&P Global", logo: "https://logo.clearbit.com/spglobal.com" },
    { name: "Freecharge", logo: "https://logo.clearbit.com/freecharge.in" },
  ];

  const itemsPerSlide = 8;
  const totalSlides = Math.ceil(recruiters.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentRecruiters = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return recruiters.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-college-navy mb-4 bg-gradient-to-r from-college-navy to-college-blue bg-clip-text text-transparent">
            Our Recruiters
          </h2>
          <p className="text-xl text-gray-600">Industry leaders who trust our talent</p>
          <div className="w-24 h-1 bg-gradient-to-r from-college-blue to-college-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Showcase Container */}
        <div className="rounded-xl shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100 p-4 text-center">
            <h3 className="text-college-navy flex items-center justify-center font-bold text-lg">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              Industry Partners
            </h3>
          </div>

          {/* Grid */}
          <div className="p-8">
            <div className="relative">
              <div className="grid grid-cols-4 gap-6">
                {getCurrentRecruiters().map((company, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-16 object-contain rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-college-blue transition-colors duration-300">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full p-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full p-2"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-college-blue shadow-lg scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitersShowcase;
