export default function AboutSection() {
  return (
    <div className="bg-white py-12 px-6 sm:py-16 sm:px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-700 to-red-500 mb-6">
            About Gautam Buddha University
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Established in 2008, Gautam Buddha University stands as a beacon of
            academic excellence in the National Capital Region. Named after
            Lord Buddha, the university embodies the principles of knowledge,
            wisdom, and enlightenment.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            With state-of-the-art infrastructure, world-class faculty, and
            innovative research programs, GBU is committed to nurturing global
            citizens who can contribute meaningfully to society and the nation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition w-full sm:w-auto">
              Learn More
            </button>
            <button className="border border-blue-700 text-blue-700 px-5 py-3 rounded-md hover:bg-blue-50 transition w-full sm:w-auto">
              Our Mission
            </button>
          </div>
        </div>

        {/* Right Image with Badge */}
        <div className="relative md:w-1/2 w-full mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop&crop=center"
            alt="Library"
            className="rounded-xl shadow-xl w-full object-cover"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-4 right-4 bg-orange-600 text-white text-center px-5 py-3 rounded-lg shadow-lg text-sm sm:text-base">
            <div className="text-xl sm:text-2xl font-bold">15+</div>
            <div>Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  );
}
