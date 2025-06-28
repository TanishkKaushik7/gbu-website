import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Badge } from '../../components/ui/badge';

const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none';
  const variants = {
    default: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};



const ProgramsShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 const programs = [
    {
      name: 'B.Tech. Computer Science & Engineering',
      code: 'CSE',
      duration: '4 Years',
      specializations: [
        'AI & Robotics',
        'Data Science',
        'Cyber Security',
        'Software Engineering',
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      description:
        'UG program in CSE with specializations in AI & Robotics, Data Science, Cyber Security and Software Engineering.' ,
    },
    {
      name: 'Integrated B.Tech.–M.Tech. (CSE)',
      code: 'CSE–Dual',
      duration: '5 Years',
      specializations: [
        'AI & Robotics',
        'Data Science',
        'Software Engineering',
      ],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
      description:
        '5‑year integrated CSE dual‑degree granting B.Tech + M.Tech in AI, Data Science or Software Engineering.' ,
    },
    {
      name: 'M.Tech. CSE',
      code: 'M.Tech CSE',
      duration: '2 Years',
      specializations: [
        'AI & Robotics',
        'Data Science',
        'Software Engineering',
      ],
      image: 'https://images.unsplash.com/photo-1581091870639-8e2c3a0b5c3c?w=600&h=400&fit=crop',
      description:
        'Postgraduate program in CSE offering specializations in AI & Robotics, Data Science, Software Engineering.' ,
    },
    {
      name: 'Ph.D. CSE',
      code: 'Ph.D CSE',
      duration: 'Varies',
      specializations: [
        'Computer Science & Engineering Research',
      ],
      image: 'https://images.unsplash.com/photo-1537432376769-00a3a0ba71a4?w=600&h=400&fit=crop',
      description:
        'Doctoral research in CSE across AI, ML, Cybersecurity, IoT and related areas.' ,
    },
    {
      name: 'B.Tech. Information Technology',
      code: 'IT',
      duration: '4 Years',
      specializations: [
        'AI & ML',
        'Data Science & ML',
      ],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      description:
        'UG IT program with specializations in AI & ML, Data Science & Machine Learning.' ,
    },
    {
      name: 'M.Tech. IT / ICT',
      code: 'M.Tech IT',
      duration: '2 Years',
      specializations: [
        'Data Science & ML',
      ],
      image: 'https://images.unsplash.com/photo-1558655146-c0141db644a3?w=600&h=400&fit=crop',
      description:
        'Postgraduate ICT/IT program focused on Data Science and Machine Learning.' ,
    },
    {
      name: 'Ph.D. ICT/IT',
      code: 'Ph.D IT',
      duration: 'Varies',
      specializations: ['Information & Communication Technology Research'],
      image: 'https://images.unsplash.com/photo-1526379095098-7021f4cd1d10?w=600&h=400&fit=crop',
      description:
        'Doctoral research in Information & Communication Technology.' ,
    },
    {
      name: 'B.Tech. Electronics & Communication Engineering',
      code: 'ECE',
      duration: '4 Years',
      specializations: [
        'AI & ML',
        'VLSI & Embedded Systems',
        'Wireless Comm & Networks',
      ],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      description:
        'UG ECE program with focus areas in AI/ML, VLSI & Embedded, Wireless Communication & Networks.' ,
    },
    {
      name: 'Integrated B.Tech.–M.Tech. (ECE)',
      code: 'ECE–Dual',
      duration: '5 Years',
      specializations: [
        'Wireless Networks',
        'VLSI & Embedded Systems',
      ],
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop',
      description:
        '5‑year integrated ECE dual‑degree programs in Wireless Communication, VLSI & Embedded Systems.' ,
    },
    {
      name: 'M.Tech. ECE',
      code: 'M.Tech ECE',
      duration: '2 Years',
      specializations: [
        'Wireless Comm & Networks',
        'VLSI Design',
        'Railway Signalling & RAMS',
      ],
      image: 'https://images.unsplash.com/photo-1554168155-4cd745fe2b3e?w=600&h=400&fit=crop',
      description:
        'Postgraduate ECE specializing in Wireless Networks, VLSI Design, Railway Signalling & RAMS.' ,
    },
    {
      name: 'Ph.D. ECE',
      code: 'Ph.D ECE',
      duration: 'Varies',
      specializations: ['Electronics & Communication Engineering Research'],
      image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&h=400&fit=crop',
      description:
        'Doctoral research in ECE areas including signal processing, VLSI, comm networks.' ,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [programs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600">Cutting-edge engineering education</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Custom Card Slider */}
        <div className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden rounded-xl">
          <div className="p-0">
            <div className="relative h-96">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white to-indigo-50">
                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge className="bg-blue-600 text-white text-lg px-3 py-1">
                          {program.code}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-800">{program.duration}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">{program.name}</h3>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.specializations.map((spec, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="border-blue-400 text-blue-800"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full z-10 w-10 h-10 flex items-center justify-center"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full z-10 w-10 h-10 flex items-center justify-center"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center py-6 space-x-2 bg-gray-50">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 shadow-lg scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsShowcase;
