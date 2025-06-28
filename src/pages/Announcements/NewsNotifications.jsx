import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import AdvancedSearchFilter from '../../components/announcement/AdvancedSearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';

// Card, CardContent, CardDescription, CardHeader, CardTitle
const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-white rounded-2xl shadow-xl border border-gray-100 border-solid hover:shadow-2xl transition-all duration-300${className}`}
    {...props}
  >
    {children}
  </div>
);
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-5 border-b border-gray-100 border-solid bg-gradient-to-r from-blue-50/60 to-white${className}`} {...props}>
    {children}
  </div>
);
const CardTitle = ({ children, className = '', ...props }) => (
  <h2 className={`font-bold text-xl text-blue-900 leading-tight ${className}`} {...props}>
    {children}
  </h2>
);
const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-gray-500 ${className}`} {...props}>
    {children}
  </p>
);
const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-5 ${className}`}>{children}</div>
);

// Badge
const Badge = ({ children, variant = 'secondary', className = '', ...props }) => {
  const base = 'inline-block px-2 py-1 rounded-full font-medium shadow-sm';
  const variants = {
    secondary: 'bg-gradient-to-r from-gray-200 to-gray-100 text-gray-700',
    primary: 'bg-gradient-to-r from-blue-500 to-blue-400 text-white',
  };
  return (
    <span className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </span>
  );
};

// Button
const Button = ({ children, size = 'md', className = '', ...props }) => {
  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-7 py-3 text-lg',
  };
  return (
    <button
      className={`bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full shadow-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// mockNews (minimal mock data for demonstration)
const mockNews = [
  {
    id: 1,
    title: 'GBU Launches New Research Center',
    excerpt: 'The university has inaugurated a new interdisciplinary research center...',
    date: '2024-05-10',
    author: 'Admin',
    tags: ['Research', 'Campus'],
    image: 'https://via.placeholder.com/400x200',
  },
  {
    id: 2,
    title: 'Annual Sports Meet Announced',
    excerpt: 'Get ready for the annual sports meet with exciting events and prizes...',
    date: '2024-04-22',
    author: 'Sports Dept',
    tags: ['Sports', 'Events'],
    image: 'https://via.placeholder.com/400x200',
  },
  // Add more mock news items as needed
];
import { format } from 'date-fns';

const NewsNotifications = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState('newest');
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = Array.from(new Set(mockNews.flatMap(news => news.tags)));
  const allYears = Array.from(new Set(mockNews.map(news => new Date(news.date).getFullYear().toString())));

  const filteredAndSortedNews = useMemo(() => {
    let filtered = mockNews.filter(news => {
      const matchesSearch = !searchQuery ||
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const newsDate = new Date(news.date);
      const matchesDateRange = (!startDate || newsDate >= startDate) &&
        (!endDate || newsDate <= endDate);

      const matchesYear = selectedYear === 'all' || new Date(news.date).getFullYear().toString() === selectedYear;
      const matchesSelectedTags = selectedTags.length === 0 || selectedTags.some(tag => news.tags.includes(tag));

      return matchesSearch && matchesDateRange && matchesYear && matchesSelectedTags;
    });
    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [searchQuery, startDate, endDate, selectedYear, selectedTags, sortOrder]);
  const currentNews = filteredAndSortedNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredAndSortedNews.length / itemsPerPage);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleDateFilter = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    setCurrentPage(1);
  };

  const handleTagFilter = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setCurrentPage(1);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortOrder(sort);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <div className="container mx-auto pb-5">
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-3 drop-shadow-lg tracking-tight">
            Latest News
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Stay updated with the latest happenings at <span className="font-semibold text-white">GBU</span>
          </p>
          </div>
        </section>
      

        <div className="mb-10">
          <AdvancedSearchFilter
            onSearch={handleSearch}
            onDateFilter={handleDateFilter}
            onTypeFilter={handleTagFilter}
            onYearFilter={handleYearFilter}
            onSortChange={handleSortChange}
            types={allTags}
            years={allYears}
            placeholder="Search news..."
            currentSort={sortOrder}
            tags={allTags}
            onTagFilter={handleTagFilter}
            selectedTags={selectedTags}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentNews.map((news) => (
            <Card key={news.id} className="group relative overflow-hidden">
              {news.image && (
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-200 opacity-70" />
                </div>
              )}
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {news.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {news.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full" />
                  {format(new Date(news.date), 'MMMM dd, yyyy')} • By {news.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex justify-between items-center">
                   <Link to={`/announcements/news-notifications/${news.id}`}>
          <Button size="sm" className="shadow hover:scale-105">
            Read More
          </Button>
        </Link>
                  <SocialShare
                    url={`${window.location.origin}/news/${news.id}`}
                    title={news.title}
                  />
                </div>
              </CardContent>
              <div className="absolute inset-0 pointer-events-none group-hover:bg-blue-50/40 transition-all duration-300 rounded-2xl" />
            </Card>
          ))}
        </div>

        {filteredAndSortedNews.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-lg border border-blue-100">
              <svg className="mx-auto mb-3 text-blue-400" width="48" height="48" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" />
              </svg>
              <p className="text-gray-500 text-lg font-medium">No news found matching your criteria.</p>
            </div>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12">
            <EnhancedPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredAndSortedNews.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsNotifications;
