import React from 'react';

export default function LatestUpdates() {
  const sections = [
    {
      title: "Latest News",
      gradient: "from-blue-700 to-green-500",
      items: [
        {
          heading: "GBU Launches New AI Research Center",
          date: "June 1, 2025",
          description:
            "The university has established a new Center for Artificial Intelligence and Machine Learning...",
        },
        {
          heading: "International Collaboration with Oxford University",
          date: "May 25, 2025",
          description:
            "GBU signs MoU with Oxford University for joint research and student exchange programs...",
        },
      ],
    },
    {
      title: "Notices",
      gradient: "from-orange-500 to-red-500",
      items: [
        {
          heading: "Revised Exam Schedule for Summer 2025",
          date: "June 4, 2025",
          description: "Final exam schedule revised due to national events...",
        },
        {
          heading: "Fee Payment Deadline Extended",
          date: "May 30, 2025",
          description: "Fee deadline extended to June 15...",
        },
      ],
    },
    {
      title: "Academic Events",
      gradient: "from-green-500 to-blue-700",
      items: [
        {
          heading: "International Conference on Sustainable Development",
          date: "Aug 15–17, 2025",
          description: "A 3-day event on sustainable development goals...",
        },
        {
          heading: "Workshop on Research Methodology",
          date: "July 10–12, 2025",
          description: "A comprehensive workshop for PhD scholars...",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-6 px-6 md:px-20 py-10">
      {sections.map((section, index) => (
        <article
          key={index}
          className="w-full md:w-1/3 bg-white rounded-lg shadow-lg flex flex-col"
        >
          {/* Card Header */}
          <div
            className={`bg-gradient-to-r ${section.gradient} text-white text-lg font-semibold px-4 py-2 rounded-t-lg`}
          >
            {section.title}
          </div>

          {/* Card Content */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 flex-1">
            {section.items.map((item, i) => (
              <section key={i} aria-label={item.heading}>
                <h3 className="text-blue-700 font-medium">{item.heading}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
                {i < section.items.length - 1 && <hr />}
              </section>
            ))}
          </div>

          {/* View All Button */}
          <div className="p-4">
            <button
              type="button"
              onClick={() => alert(`View all ${section.title.toLowerCase()}`)}
              className="w-full text-blue-700 font-semibold border border-blue-700 rounded-md py-1 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              View All
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}
