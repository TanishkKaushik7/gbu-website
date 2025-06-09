export default function VisionaryLeadership() {
  return (
    <section
      className="py-16 px-6 md:px-20 bg-white text-center"
      role="region"
      aria-labelledby="visionary-leadership-title"
    >
      <h2
        id="visionary-leadership-title"
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-10"
      >
        Visionary Leadership
        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-2 rounded-full" />
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Chancellor Card */}
        <LeadershipCard
          image="https://storage.googleapis.com/uxpilot-auth.appspot.com/9b60c2dd46-957b3b02a27ff4586526.png"
          name="Yogi Adityanath"
          role="Hon'ble Chancellor"
          quote="A visionary leader guiding GBU with focus on holistic development and academic excellence."
        />

        {/* Vice-Chancellor Card */}
        <LeadershipCard
          image="https://storage.googleapis.com/uxpilot-auth.appspot.com/b095364397-5cc29b829758bc2f8d51.png"
          name="Dr. Rana P. Singh"
          role="Hon'ble Vice-Chancellor"
          quote="Over 20+ years of academic leadership. Key research areas: Stem Cells, Tumor Biology, Dosha balance, Microgravity biology."
        />
      </div>
    </section>
  );
}

const LeadershipCard = ({ image, name, role, quote }) => (
  <div className="flex w-full max-w-md md:w-[500px] bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
    <img
      src={image}
      alt={`Portrait of ${name}`}
      className="w-1/3 object-cover"
    />
    <div className="p-4 text-left">
      <h3 className="text-lg font-bold text-blue-800">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">{role}</p>
      <p className="text-gray-700 text-sm">{quote}</p>
    </div>
  </div>
);
