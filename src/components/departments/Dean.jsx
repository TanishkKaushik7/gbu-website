import React from "react";

const LeadershipCard = () => {
  const leader = {
    name: "Dr. Arpit Bhardwaj",
    title: "Dean (I/C) – School of ICT, GBU",
    description:
      "Dr. Arpit Bhardwaj is the current Dean‑in‑Charge of USICT, joining GBU in 2008. He holds a Ph.D. from IIT Indore and has published over 50 papers in IEEE, Elsevier & Springer. His research spans Genetic Programming, EEG‑signal classification, and AI‑driven emotion recognition. As Dean, he oversees academic programs (B.Tech, M.Tech, Ph.D.), enhances industry collaborations, and actively promotes student‑faculty innovation initiatives.",
    image:
      "https://www.gbu.ac.in/USICT/media/img/arpit%20bhardwaj.jpg",
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10 sm:mb-12">
        Dean's <span className="text-blue-800">Message</span>
        <div className="w-20 sm:w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl border border-blue-200 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-60 h-56 sm:w-48 sm:h-64 md:w-[220px] md:h-[300px] object-cover rounded-xl shadow-md"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">
              {leader.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3">
              {leader.title}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              {leader.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCard;
