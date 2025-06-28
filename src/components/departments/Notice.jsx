



import { Calendar } from "lucide-react";

// Card Components
const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Badge Component
const Badge = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const NoticeEvents = () => {
  const notices = [
    {
      title: "Back Paper Examination Date Sheet – Even Semester 2024–25",
      date: "2025-05-16",
      type: "Important",
    },
    {
      title: "Notice for Aadhaar e‑kyc through UPDESCO",
      date: "2025-06-03",
      type: "Administrative",
    },
    {
      title: "Tablet Distribution Program Scheduled",
      date: "2025-05-24",
      type: "General",
    },
    {
      title: "Office Order for Hostel & Mess Exemption (Married PG/PhD Students)",
      date: "2025-05-13",
      type: "Administrative",
    },
  ];

  const events = [
    {
      title: "Online National Article Writing Competition (GST)",
      date: "2025-06-30",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2NnCSPRdgMAEkEafMhZojs0fdgEv6hFY0A&s",
      description: "Organized by School of Law, extended submission date.",
    },
    {
      title: "Six‑Day Residential Vipassana Program",
      date: "2025-06-09",
      image: "https://data.gbu.ac.in/Events/1714148988_FIVE%20DAY%20VIPASSANA%20COURSE%20FEB2024_page-0001.jpg", 
      description: "Well‑being retreat by School of Buddhist Studies.",
    },
    {
      title: "World Environment Day Report",
      date: "2025-06-05",
      image: "https://images.timesnownews.com/thumb/msid-151788925,thumbsize-1151391,width-1280,height-720,resizemode-75/151788925.jpg",
      description: "Activities report by Department of Environmental Science.",
    },
    {
      title: "SOBSC Vesak Day Celebrations",
      date: "2025-05-03",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwXCDOopXvx7WxXSEcJJJ86SzCi_HjeITTQ&s", 
      description: "Celebration at School of Buddhist Studies & Civilization.",
    },
    {
      title: "ICSSR‑Sponsored AI Research Methodology Course",
      date: "2024-12-03",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQud5sjoe92WQkeO2ddUOccbSRysoFo6K5GvgRZzSeMy1a2DsromFso3Hp7ctE8W-e94&usqp=CAU",
      description: "10‑day course on integrating AI in research, sponsored by ICSSR.",
    },
    {
      title: "Digital India Talk Show",
      date: "2024-11-20",
      image: "https://negd.gov.in/wp-content/uploads/2025/01/gatishakti.jpeg", 
      description: "Awareness session on e‑governance chaired by VC Prof. R.K. Sinha.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-3">
            SOICT Campus Life
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with latest notices and events
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-10 gap-10">
          {/* Notice Board */}
          <div className="lg:col-span-3">
            <div className="rounded-xl shadow-lg border-0 bg-white p-6">
              <div className="text-blue-800 text-lg font-bold flex items-center gap-2 mb-4">
                <Calendar size={20} />
                Notice Board
              </div>
              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-sm text-blue-900">
                        {notice.title}
                      </h4>
                      <Badge className="text-xs px-2 py-0.5 capitalize bg-blue-100 text-blue-800">
                        {notice.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">{notice.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Gallery */}
          <div className="lg:col-span-7">
            <div className="rounded-xl shadow-lg border-0 bg-white p-6">
              <h3 className="text-blue-800 text-lg font-bold mb-4">
                Event Gallery
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg" /> */}
                    </div>
                    <h4 className="font-semibold text-blue-900 text-sm mb-1">
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-600 mb-1">
                      {event.description}
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      {event.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeEvents;