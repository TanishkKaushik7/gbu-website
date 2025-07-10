
import { useState } from 'react';
import Header from '../../components/announcement/Header';
import EventFilters from '../../components/announcement/EventFilters';
import EventTabs from '../../components/announcement/EventTabs';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';
// Mock event data
const mockEvents = [
  {
    id: 1,
    title: "GBU Tech Symposium 2024",
    date: "2024-07-10",
    type: "Seminar",
    isUpcoming: true,
    description: "A state-level symposium with talks and presentations on cutting-edge technologies by students and industry experts.",
    image: "https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x18.webp"
  },
  {
    id: 2,
    title: "Annual Science & Innovation Fair",
    date: "2023-12-15",
    type: "Fair",
    isUpcoming: false,
    description: "Students present their innovative science projects and working models to guests and faculty.",
    image: "https://images.openai.com/thumbnails/url/NS93cXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4KLjQzjIp3CzfKiM92zQnISzINLC8oqkpKMss0LI80zDcqMM_Mcs5w9IuwqAy19E6KSHYyD3JJSY0qcVQrBgAavCnC"
  },
  {
    id: 3,
    title: "Mathematics Research Workshop",
    date: "2024-08-05",
    type: "Workshop",
    isUpcoming: true,
    description: "An intensive workshop on modern mathematics and its applications in research and industry.",
    image: "https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x17.webp"
  },
  {
    id: 4,
    title: "Abhivyakti: Cultural Fest",
    date: "2023-11-20",
    type: "Festival",
    isUpcoming: false,
    description: "GBU’s flagship cultural festival showcasing dance, drama, music, and literary competitions.",
    image: "https://www.indianarrative.com/wp-content/uploads/2024/12/India-Nepal-Cultural-Festival-01-1024x683.jpeg"
  },
  {
    id: 5,
    title: "AI & Robotics Guest Lecture",
    date: "2024-09-01",
    type: "Lecture",
    isUpcoming: true,
    description: "A guest lecture on Artificial Intelligence, Robotics, and future technology trends.",
    image: "https://gburif.org/images/intro-carousel/dsf8939-b-copy.jpg"
  },
  {
    id: 6,
    title: "GBU Annual Sports Meet",
    date: "2023-10-10",
    type: "Sports",
    isUpcoming: false,
    description: "Annual inter-departmental sports meet with athletics, football, cricket, and indoor games.",
    image: "https://www.gbu.ac.in/Content/img/sports/banner2.jpg"
  },
  {
    id: 7,
    title: "National Research Paper Presentation",
    date: "2024-07-25",
    type: "Presentation",
    isUpcoming: true,
    description: "Students and scholars present research papers on various disciplines at national level.",
    image: "https://www.ic3ecsbhi.com/Events/Picture1.jpg"
  },
  {
    id: 8,
    title: "GBU Alumni Meet 2023",
    date: "2023-09-05",
    type: "Meet",
    isUpcoming: false,
    description: "GBU alumni reconnect and share industry insights with current students.",
    image: "https://images.openai.com/thumbnails/url/iYaDH3icu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw42KHCJMDJ3DMnKCyuPzLdMCw9xKa_yiMgyKHNLssirqDAsTzQzzQhNdfJOTbLQ9c72cjfJSC2pSCwPKFcrBgAWxioa"
  },
  {
    id: 9,
    title: "NSS Blood Donation Camp",
    date: "2024-07-05",
    type: "Social Service",
    isUpcoming: true,
    description: "Organized by NSS volunteers to collect blood for local hospitals and awareness drive.",
    image: "https://nss.gbu.ac.in/uploads/eventsfiles/photos/66ffb64b39157_WhatsApp%20Image%202024-04-19%20at%201.59.17%20PM.jpeg"
  },
  {
    id: 10,
    title: "International Yoga Day",
    date: "2023-06-21",
    type: "Wellness",
    isUpcoming: false,
    description: "Mass yoga session for students and staff promoting healthy living and mindfulness.",
    image: "https://images.openai.com/thumbnails/url/-F4ohXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6yNHIy1zUsTgtKys-qMC0v9g41dorK8M8qSM7KDixODy8NdfTNzi9OLK6IKvc0cjKuiM8pLjVwz_RMcVQrBgAhZyqH"
  },
  {
    id: 11,
    title: "Guest Lecture: Industry 5.0",
    date: "2024-07-18",
    type: "Lecture",
    isUpcoming: true,
    description: "A talk by industry leaders on Industry 5.0, smart factories, and the future of work.",
    image: "https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x14.webp"
  },
  {
    id: 12,
    title: "Coding Club Hackathon",
    date: "2023-10-30",
    type: "Competition",
    isUpcoming: false,
    description: "24-hour coding marathon for students to build tech solutions and win exciting prizes.",
    image: "https://raw.githubusercontent.com/K4R7IK/Glitch-Poster/master/poster/ctf.png"
  },
  {
    id: 13,
    title: "GBU Startup Pitch Day",
    date: "2024-08-20",
    type: "Competition",
    isUpcoming: true,
    description: "Students pitch their startup ideas to investors and mentors to get funding and incubation support.",
    image: "https://www.gbu.ac.in/Content/gbudata/incubation/Incubation_Pic9.jpg"
  },
  {
    id: 14,
    title: "GBU Photography Exhibition",
    date: "2023-09-25",
    type: "Exhibition",
    isUpcoming: false,
    description: "Photography club exhibition displaying student works on campus life and nature.",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1421489668197469_122196337857221_100002005655347_147553_4172796_n.jpg"
  },
  {
    id: 15,
    title: "Environmental Awareness Drive",
    date: "2024-09-10",
    type: "Social Service",
    isUpcoming: true,
    description: "Tree plantation and cleanliness drive by students under the GBU Eco Club.",
    image: "https://www.gniotgroup.edu.in/lifegniotimg/1633936837-244588932_4383100388473842_7973588752178033120_n.jpg"
  }
];


// Custom hook for event filtering and pagination
import { useMemo } from 'react';

function useEventFiltering({ events, itemsPerPage }) {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch =
        !search ||
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        (event.description && event.description.toLowerCase().includes(search.toLowerCase()));
      const matchesDate = !date || event.date === date;
      const matchesType = !type || event.type === type;
      const matchesYear = !year || new Date(event.date).getFullYear().toString() === year;
      return matchesSearch && matchesDate && matchesType && matchesYear;
    });
  }, [events, search, date, type, year]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const currentEvents = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredEvents.slice(start, start + itemsPerPage);
  }, [filteredEvents, currentPage, itemsPerPage]);

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleDateFilter = (value) => {
    setDate(value);
    setCurrentPage(1);
  };

  const handleTypeFilter = (value) => {
    setType(value);
    setCurrentPage(1);
  };

  const handleYearFilter = (value) => {
    setYear(value);
    setCurrentPage(1);
  };

  return {
    filteredEvents,
    currentEvents,
    totalPages,
    currentPage,
    setCurrentPage,
    handleSearch,
    handleDateFilter,
    handleTypeFilter,
    handleYearFilter,
  };
}

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const allTypes = Array.from(new Set(mockEvents.map(event => event.type)));
  const allYears = Array.from(new Set(mockEvents.map(event => new Date(event.date).getFullYear().toString())));

  const upcomingEvents = mockEvents.filter(event => event.isUpcoming);
  const pastEvents = mockEvents.filter(event => !event.isUpcoming);

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const {
    filteredEvents,
    currentEvents: paginatedEvents,
    totalPages,
    currentPage,
    setCurrentPage,
    handleSearch,
    handleDateFilter,
    handleTypeFilter,
    handleYearFilter
  } = useEventFiltering({ events: currentEvents, itemsPerPage });

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* <Header /> */}
       <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Academic Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Discover upcoming and past academic events at GBU
          </p>
        </div>
      </section>
      
        
            <EventFilters
          onSearch={handleSearch}
          onDateFilter={handleDateFilter}
          onTypeFilter={handleTypeFilter}
          onYearFilter={handleYearFilter}
          types={allTypes}
          years={allYears}
        />
          

        <EventTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          upcomingEvents={upcomingEvents}
          pastEvents={pastEvents}
          currentEvents={paginatedEvents}
        />

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <EnhancedPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredEvents.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
        </div>
  
  );
};

export default EventsPage;
