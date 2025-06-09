import React from "react";

const stats = [
  { label: "Students", value: "400+" },
  { label: "Programs", value: "6+" },
  { label: "Faculty Members", value: "20+" },
  { label: "Acres Campus", value: "25" },
  { label: "Placement Rate", value: "4%" },
];

const Glance = () => {
  return (
    <section
      aria-label="GBU statistics overview"
      className="relative py-16 text-white bg-gradient-to-r from-green-800 via-blue-800 to-orange-800"
    >
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">GBU at a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              tabIndex={0}
              className="rounded-xl p-6 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white transition-transform duration-300"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Glance;
