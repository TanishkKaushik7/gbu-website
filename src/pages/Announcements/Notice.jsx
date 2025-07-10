
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SearchFilter from '../../components/announcement/SearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import Pagination from '../../components/announcement/Pagination';
// Card components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg border border-gray-200 border-solid${className}`}>{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="p-4 border-b border-gray-100 border-solid">{children}</div>
);
const CardTitle = ({ children, className = '' }) => (
  <h2 className={`text-xl font-bold text-gray-800 ${className}`}>{children}</h2>
);
const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

// Badge component
const Badge = ({ children, className = '' }) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${className}`}>{children}</span>
);

// Button component
const Button = ({ children, size = 'md', variant = 'default', className = '', ...props }) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50'
  };
  return (
    <button
      className={`rounded transition ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { Download, FileText } from 'lucide-react';
// Mock data for notices
const mockNotices = [
  {
    id: 1,
    title: "End Semester Examination Schedule - June 2025",
    content: "The final schedule for End Semester Examinations (June 2025) is now available. Students are advised to download the PDF and prepare accordingly.",
    date: "2025-05-25",
    type: "Exam",
    pdfUrl: "https://gbu.ac.in/notices/exam-schedule-june-2025.pdf"
  },
  {
    id: 2,
    title: "Extension of Fee Payment Deadline - Summer Semester",
    content: "The last date for fee payment for the Summer Semester has been extended to 5th June 2025. Late fee will be applicable after this date.",
    date: "2025-05-20",
    type: "Fee",
    pdfUrl: "https://gbu.ac.in/notices/fee-extension-summer-2025.pdf"
  },
  {
    id: 3,
    title: "Annual Convocation 2025 Notification",
    content: "The Annual Convocation for the graduating batch of 2025 will be held on 30th July. Graduates are required to register online.",
    date: "2025-05-15",
    type: "Event",
    pdfUrl: "https://gbu.ac.in/notices/convocation-2025-guidelines.pdf"
  },
  {
    id: 4,
    title: "Academic Calendar 2025-26 Released",
    content: "The detailed Academic Calendar for the session 2025-26 has been published. Download for semester-wise schedules and holidays.",
    date: "2025-05-10",
    type: "Academic",
    pdfUrl: "https://gbu.ac.in/notices/academic-calendar-2025-26.pdf"
  },
  {
    id: 5,
    title: "Notice Regarding Monsoon Break",
    content: "All students are informed that the Monsoon Break will be observed from 20th July to 5th August 2025.",
    date: "2025-05-12",
    type: "General",
    pdfUrl: ""
  },
  {
    id: 6,
    title: "Mid-Term Examination Guidelines - July 2025",
    content: "Please refer to the attached guidelines for the upcoming Mid-Term Examinations for all undergraduate and postgraduate programs.",
    date: "2025-06-01",
    type: "Exam",
    pdfUrl: "https://gbu.ac.in/notices/midterm-guidelines-july-2025.pdf"
  },
  {
    id: 7,
    title: "Scholarship Renewal Notice - 2025",
    content: "Students availing scholarships are advised to submit renewal applications before 10th August 2025 to the Scholarship Cell.",
    date: "2025-06-05",
    type: "General",
    pdfUrl: ""
  },
  {
    id: 8,
    title: "Workshop on Cybersecurity and Data Privacy",
    content: "A National Workshop on Cybersecurity and Data Privacy will be organized by the School of ICT on 22nd August. Limited seats available.",
    date: "2025-06-10",
    type: "Event",
    pdfUrl: "https://gbu.ac.in/notices/cybersecurity-workshop-2025.pdf"
  },
  {
    id: 9,
    title: "Notice for Hostel Allotment - New Session",
    content: "Online applications for hostel allotment for the academic session 2025-26 are now open. Download the notice for detailed procedure.",
    date: "2025-06-15",
    type: "General",
    pdfUrl: "https://gbu.ac.in/notices/hostel-allotment-2025.pdf"
  },
  {
    id: 10,
    title: "Holiday Notice: Raksha Bandhan",
    content: "The university will remain closed on 18th August 2025 on account of Raksha Bandhan.",
    date: "2025-06-18",
    type: "General",
    pdfUrl: ""
  }
];


// Simple date formatting function (similar to date-fns format)
function format(date, formatStr) {
  const d = new Date(date);
  const pad = (n) => n.toString().padStart(2, '0');
  const map = {
    'MMMM': d.toLocaleString('default', { month: 'long' }),
    'MMM': d.toLocaleString('default', { month: 'short' }),
    'MM': pad(d.getMonth() + 1),
    'dd': pad(d.getDate()),
    'yyyy': d.getFullYear(),
    'yy': d.getFullYear().toString().slice(-2)
  };
  return formatStr.replace(/MMMM|MMM|MM|dd|yyyy|yy/g, (match) => map[match]);
}

const Notice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allTypes = Array.from(new Set(mockNotices.map(notice => notice.type)));
  const allYears = Array.from(new Set(mockNotices.map(notice => new Date(notice.date).getFullYear().toString())));

  const filteredNotices = useMemo(() => {
    return mockNotices.filter(notice => {
      const matchesSearch = !searchQuery ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.content.toLowerCase().includes(searchQuery.toLowerCase());

      const noticeDate = new Date(notice.date);
      const matchesDateRange = (!startDate || noticeDate >= startDate) &&
        (!endDate || noticeDate <= endDate);

      const matchesType = selectedType === 'all' || notice.type === selectedType;
      const matchesYear = selectedYear === 'all' || new Date(notice.date).getFullYear().toString() === selectedYear;

      return matchesSearch && matchesDateRange && matchesType && matchesYear;
    });
  }, [searchQuery, startDate, endDate, selectedType, selectedYear]);

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const currentNotices = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleDateFilter = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    setCurrentPage(1);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const getTypeColor = (type) => {
    const colors = {
      'Exam': 'bg-red-100 text-red-800',
      'Fee': 'bg-blue-100 text-blue-800',
      'Event': 'bg-green-100 text-green-800',
      'Academic': 'bg-purple-100 text-purple-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[type] || colors['General'];
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pb-10">
        {/* <Header /> */}

        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Notices & Circulars</h1>
            <p className="text-white text-lg">Important notices and official circulars</p>
          </div>
        </section>




        <SearchFilter
          onSearch={handleSearch}
          onDateFilter={handleDateFilter}
          onTypeFilter={handleTypeFilter}
          onYearFilter={handleYearFilter}
          types={allTypes}
          years={allYears}
          placeholder="Search notices..."
        />

        <div className="space-y-4 mx-25">
          {currentNotices.map((notice) => (
            <Card key={notice.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(notice.type)}>
                        {notice.type}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {format(new Date(notice.date), 'MMMM dd, yyyy')}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {notice.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {notice.content.substring(0, 150)}...
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                    {notice.pdfUrl && (
                      <a
                        href={notice.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Button size="sm" variant="outline">
                          <Download size={16} className="mr-2" />
                          Download
                        </Button>
                      </a>
                    )}

                    <Link to={`/announcements/notices/${notice.id}`}>
                      <Button size="sm">
                        <FileText size={16} className="mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <SocialShare
                      url={`${window.location.origin}/notices/${notice.id}`}
                      title={notice.title}
                    />
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No notices found matching your criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>

    </>
  );
};

export default Notice;
