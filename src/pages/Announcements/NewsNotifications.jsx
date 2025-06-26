
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import AdvancedSearchFilter from '../../components/announcement/AdvancedSearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';
// Card, CardContent, CardDescription, CardHeader, CardTitle
const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props}>{children}</div>
);
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-b ${className}`} {...props}>{children}</div>
);
const CardTitle = ({ children, className = '', ...props }) => (
  <h2 className={`font-bold text-xl ${className}`} {...props}>{children}</h2>
);
const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-gray-500 ${className}`} {...props}>{children}</p>
);
const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);

// Badge
const Badge = ({ children, variant = 'secondary', className = '', ...props }) => {
  const base = 'inline-block px-2 py-1 rounded font-medium';
  const variants = {
    secondary: 'bg-gray-200 text-gray-700',
    primary: 'bg-blue-500 text-white',
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
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white rounded ${sizes[size] || ''} ${className}`}
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
  const [startDate, setStartDate] = useState < Date | null > (null);
  const [endDate, setEndDate] = useState < Date | null > (null);
  const [selectedTag, setSelectedTag] = useState('all');
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

      const matchesTag = selectedTag === 'all' || news.tags.includes(selectedTag);
      const matchesYear = selectedYear === 'all' || new Date(news.date).getFullYear().toString() === selectedYear;
      const matchesSelectedTags = selectedTags.length === 0 || selectedTags.some(tag => news.tags.includes(tag));

      return matchesSearch && matchesDateRange && matchesTag && matchesYear && matchesSelectedTags;
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
  }, [searchQuery, startDate, endDate, selectedTag, selectedYear, selectedTags, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedNews.length / itemsPerPage);
  const currentNews = filteredAndSortedNews.slice(
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
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Latest News</h1>
          <p className="text-gray-600 text-lg">Stay updated with the latest happenings at GBU</p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentNews.map((news) => (
            <Card key={news.id} className="hover:shadow-lg transition-shadow">
              {news.image && (
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
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
                <CardTitle className="text-lg font-semibold line-clamp-2">
                  {news.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {format(new Date(news.date), 'MMMM dd, yyyy')} • By {news.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <Link to={`/news/${news.id}`}>
                    <Button size="sm">Read More</Button>
                  </Link>
                  <SocialShare
                    url={`${window.location.origin}/news/${news.id}`}
                    title={news.title}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAndSortedNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <EnhancedPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredAndSortedNews.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default NewsNotifications;
