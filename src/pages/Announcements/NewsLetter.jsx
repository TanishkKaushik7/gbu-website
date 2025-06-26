
import { useState, useMemo } from 'react';
import Header from '../../components/announcement/Header';
import SearchFilter from '../../components/announcement/SearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import Pagination from '../../components/announcement/Pagination';
// Minimal UI components for this page only, styled with Tailwind CSS

// Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b border-gray-100 border-solid">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold text-gray-800 ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 ${className}`}>{children}</p>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

// Button Component
const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded transition focus:outline-none focus:ring-2 focus:ring-blue-500";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
    outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({
  className = "",
  ...props
}) => (
  <input
    className={`block w-full rounded border border-gray-300 border-solid px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500${className}`}
    {...props}
  />
);

// Badge Component
const Badge = ({ children, variant = "outline", className = "" }) => {
  const variants = {
    outline: "border border-blue-600 text-blue-600 bg-white",
    solid: "bg-blue-600 text-white",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${variants[variant] || ""} ${className}`}
    >
      {children}
    </span>
  );
};
import { Download, FileText, Mail } from 'lucide-react';
// Mock newsletter data
const mockNewsletters = [
  {
    id: 1,
    title: "Spring 2024 Edition",
    issueNumber: "Vol. 10, Issue 1",
    date: "2024-03-15",
    coverImage: "https://via.placeholder.com/400x600?text=Spring+2024",
    excerpt: "Highlights from the spring semester, including major events and achievements.",
  },
  {
    id: 2,
    title: "Winter 2023 Edition",
    issueNumber: "Vol. 9, Issue 4",
    date: "2023-12-10",
    coverImage: "https://via.placeholder.com/400x600?text=Winter+2023",
    excerpt: "A look back at the winter term and university milestones.",
  },
  {
    id: 3,
    title: "Autumn 2023 Edition",
    issueNumber: "Vol. 9, Issue 3",
    date: "2023-09-20",
    coverImage: "https://via.placeholder.com/400x600?text=Autumn+2023",
    excerpt: "Autumn activities, research highlights, and student stories.",
  },
  {
    id: 4,
    title: "Summer 2023 Edition",
    issueNumber: "Vol. 9, Issue 2",
    date: "2023-06-18",
    coverImage: "https://via.placeholder.com/400x600?text=Summer+2023",
    excerpt: "Summer programs, workshops, and campus news.",
  },
  {
    id: 5,
    title: "Spring 2023 Edition",
    issueNumber: "Vol. 9, Issue 1",
    date: "2023-03-12",
    coverImage: "https://via.placeholder.com/400x600?text=Spring+2023",
    excerpt: "Spring semester recap and upcoming events.",
  },
  {
    id: 6,
    title: "Winter 2022 Edition",
    issueNumber: "Vol. 8, Issue 4",
    date: "2022-12-08",
    coverImage: "https://via.placeholder.com/400x600?text=Winter+2022",
    excerpt: "End-of-year highlights and alumni achievements.",
  },
  {
    id: 7,
    title: "Autumn 2022 Edition",
    issueNumber: "Vol. 8, Issue 3",
    date: "2022-09-22",
    coverImage: "https://via.placeholder.com/400x600?text=Autumn+2022",
    excerpt: "Autumn events and research breakthroughs.",
  },
  {
    id: 8,
    title: "Summer 2022 Edition",
    issueNumber: "Vol. 8, Issue 2",
    date: "2022-06-15",
    coverImage: "https://via.placeholder.com/400x600?text=Summer+2022",
    excerpt: "Summer activities and student spotlights.",
  },
  {
    id: 9,
    title: "Spring 2022 Edition",
    issueNumber: "Vol. 8, Issue 1",
    date: "2022-03-10",
    coverImage: "https://via.placeholder.com/400x600?text=Spring+2022",
    excerpt: "Spring semester news and upcoming plans.",
  },
  {
    id: 10,
    title: "Winter 2021 Edition",
    issueNumber: "Vol. 7, Issue 4",
    date: "2021-12-05",
    coverImage: "https://via.placeholder.com/400x600?text=Winter+2021",
    excerpt: "Year-end review and university achievements.",
  },
];

import { format } from 'date-fns';
import { useToast } from '../../hooks/use-toast';

const NewsLetter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const itemsPerPage = 6;
  const { toast } = useToast();

  const allYears = Array.from(new Set(mockNewsletters.map(newsletter => new Date(newsletter.date).getFullYear().toString())));

  const filteredNewsletters = useMemo(() => {
    return mockNewsletters.filter(newsletter => {
      const matchesSearch = !searchQuery || 
        newsletter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        newsletter.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      const newsletterDate = new Date(newsletter.date);
      const matchesDateRange = (!startDate || newsletterDate >= startDate) && 
        (!endDate || newsletterDate <= endDate);
      
      const matchesYear = selectedYear === 'all' || new Date(newsletter.date).getFullYear().toString() === selectedYear;
      
      return matchesSearch && matchesDateRange && matchesYear;
    });
  }, [searchQuery, startDate, endDate, selectedYear]);

  const totalPages = Math.ceil(filteredNewsletters.length / itemsPerPage);
  const currentNewsletters = filteredNewsletters.slice(
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

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription Successful!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  const handleDownloadAll = () => {
    toast({
      title: "Download Started",
      description: "All newsletter issues are being prepared for download.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">University Newsletter</h1>
          <p className="text-gray-600 text-lg">Stay informed with our quarterly publications</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <Mail size={48} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6 opacity-90">
              Get the latest updates, achievements, and events delivered straight to your inbox
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-gray-800"
                required
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <SearchFilter
          onSearch={handleSearch}
          onDateFilter={handleDateFilter}
          onYearFilter={handleYearFilter}
          years={allYears}
          placeholder="Search newsletters..."
        />

        {/* Download All Button */}
        <div className="flex justify-end mb-6">
          <Button onClick={handleDownloadAll} variant="outline">
            <Download size={16} className="mr-2" />
            Download All Issues
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentNewsletters.map((newsletter) => (
            <Card key={newsletter.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-t-lg">
                <img 
                  src={newsletter.coverImage} 
                  alt={newsletter.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{newsletter.issueNumber}</Badge>
                  <span className="text-sm text-gray-500">
                    {format(new Date(newsletter.date), 'MMM yyyy')}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2">
                  {newsletter.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  Published on {format(new Date(newsletter.date), 'MMMM dd, yyyy')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {newsletter.excerpt}
                </p>
                <div className="flex flex-col gap-2">
                  <Button size="sm" className="w-full">
                    <FileText size={16} className="mr-2" />
                    Read Online
                  </Button>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                    <SocialShare 
                      url={`${window.location.origin}/newsletter#${newsletter.id}`}
                      title={newsletter.title}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNewsletters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No newsletters found matching your criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* Archive Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Newsletter Archive</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allYears.map((year) => {
              const yearCount = mockNewsletters.filter(n => new Date(n.date).getFullYear().toString() === year).length;
              return (
                <div key={year} className="text-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="text-2xl font-bold text-blue-600">{year}</div>
                  <div className="text-sm text-gray-600">{yearCount} Issues</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
