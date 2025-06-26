
import { useState } from 'react';
import Header from '../../components/announcement/Header';
import EventFilters from '../../components/announcement/EventFilters';
import EventTabs from '../../components/announcement/EventTabs';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';
// Mock event data
const mockEvents = [
  {
    id: 1,
    title: "GBU Tech Symposium",
    date: "2024-07-10",
    type: "Seminar",
    isUpcoming: true,
    description: "A symposium on the latest in technology.",
  },
  {
    id: 2,
    title: "Annual Science Fair",
    date: "2023-12-15",
    type: "Fair",
    isUpcoming: false,
    description: "Showcase of student science projects.",
  },
  {
    id: 3,
    title: "Mathematics Workshop",
    date: "2024-08-05",
    type: "Workshop",
    isUpcoming: true,
    description: "Interactive workshop on advanced mathematics.",
  },
  {
    id: 4,
    title: "Cultural Fest",
    date: "2023-11-20",
    type: "Festival",
    isUpcoming: false,
    description: "Celebration of cultural diversity.",
  },
  {
    id: 5,
    title: "AI Guest Lecture",
    date: "2024-09-01",
    type: "Lecture",
    isUpcoming: true,
    description: "Lecture on Artificial Intelligence trends.",
  },
  {
    id: 6,
    title: "Sports Meet",
    date: "2023-10-10",
    type: "Sports",
    isUpcoming: false,
    description: "Annual sports competition.",
  },
  {
    id: 7,
    title: "Research Paper Presentation",
    date: "2024-07-25",
    type: "Presentation",
    isUpcoming: true,
    description: "Students present their research papers.",
  },
  {
    id: 8,
    title: "Alumni Meet",
    date: "2023-09-05",
    type: "Meet",
    isUpcoming: false,
    description: "Reunion of GBU alumni.",
  },
];

// Custom hook for event filtering and pagination
import { useState, useMemo } from 'react';

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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Academic Events</h1>
          <p className="text-gray-600 text-lg">Discover upcoming and past academic events at GBU</p>
        </div>

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
    </div>
  );
};

export default EventsPage;
