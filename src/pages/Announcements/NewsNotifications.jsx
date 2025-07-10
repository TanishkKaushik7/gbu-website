import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SearchFilter from '../../components/announcement/SearchFilter';
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
export const mockNews = [
  {
    id: 1,
    title: 'GBU Inaugurates Centre for Artificial Intelligence',
    excerpt: 'Gautam Buddha University launched a state-of-the-art Centre for AI to boost interdisciplinary research and smart technologies.',
    date: '2024-06-20',
    author: 'Research Cell',
    tags: ['AI', 'Research', 'Innovation'],
    image: 'https://gburif.org/images/intro-carousel/gautam-buddha-university-3.jpg', 
  },
  {
    id: 2,
    title: 'Annual Convocation Ceremony Held at GBU',
    excerpt: 'Degrees were awarded to graduating students in the presence of faculty, parents, and special guests.',
    date: '2024-05-30',
    author: 'Admin',
    tags: ['Convocation', 'Graduation'],
    image: 'https://tennews.in/wp-content/uploads/2016/04/14-3.jpg', 
  },
  {
    id: 3,
    title: 'GBU Students Shine at National Hackathon',
    excerpt: 'A team of engineering students developed a smart traffic management system and won the top prize.',
    date: '2024-05-15',
    author: 'Innovation Cell',
    tags: ['Hackathon', 'Technology'],
    image: 'https://tennews.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-22-at-8.24.01-PM-e1669129715871.jpeg', // hackathon scene
  },
  {
    id: 4,
    title: 'Library Introduces Digital Resources Hub',
    excerpt: 'Students now have access to thousands of e-books, research journals, and digital archives.',
    date: '2024-04-28',
    author: 'Library Committee',
    tags: ['Library', 'Facilities'],
    image: 'https://makesaral.com/wp-content/uploads/2025/06/Screenshot_2025-06-03-11-45-15-673_com.google.android.apps_.maps-edit.jpg', // library
  },
  {
    id: 5,
    title: 'GBU Sports Meet: Champions of Tomorrow',
    excerpt: 'University athletes bagged multiple medals at the state-level sports meet.',
    date: '2024-04-10',
    author: 'Sports Department',
    tags: ['Sports', 'Achievements'],
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // sports track
  },
  {
    id: 6,
    title: 'Environment Week Concludes with Plantation Drive',
    excerpt: 'Students and staff planted over 500 saplings to promote sustainability on campus.',
    date: '2024-04-05',
    author: 'Eco Club',
    tags: ['Environment', 'Campus Life'],
    image: 'https://scalemag.online/wp-content/uploads/2019/03/Gautam_Buddha_University.jpg', 
  },
  {
    id: 7,
    title: 'Abhivyakti 2024: Cultural Fest Wraps Up',
    excerpt: 'Three days of music, dance, art exhibitions, and celebrity performances thrilled the campus.',
    date: '2024-03-20',
    author: 'Cultural Committee',
    tags: ['Cultural', 'Fest'],
    image: 'https://images.openai.com/thumbnails/url/VUAonnicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4pdXePdE1PTTRzDypwLPYzijAtjjAIzSpJLfbzKgur8o3y1E3XTdWNqNBNzwyvisoxzcgLcHNLSYtXKwYAxKYpTA', // fest stage
  },
  {
    id: 8,
    title: 'Blood Donation Camp Organized by NSS',
    excerpt: 'Volunteers donated over 300 units of blood to local hospitals.',
    date: '2024-03-15',
    author: 'NSS Unit',
    tags: ['Social Service', 'Health'],
    image: 'https://nss.gbu.ac.in/uploads/imagesfiles/666c5a020f5b4_WhatsApp%20Image%202024-03-09%20at%204.29.32%20PM.jpeg', // blood donation
  },
  {
    id: 9,
    title: 'Coding Club Conducts Competitive Programming Contest',
    excerpt: 'Top coders competed for exciting prizes and internship opportunities.',
    date: '2024-02-25',
    author: 'Coding Club',
    tags: ['Coding', 'Competition'],
    image: 'https://www.ic3ecsbhi.com/Events/20231006_133039.jpg', // coding
  },
  {
    id: 10,
    title: 'GBU Signs MoU with German University',
    excerpt: 'The partnership will enable student exchanges, joint research, and collaborative programs.',
    date: '2024-02-10',
    author: 'International Relations Office',
    tags: ['International', 'Collaboration'],
    image: 'https://ik.imagekit.io/edtechdigit/usaii/content/images/usaii-and-gautam-buddha-university-sign-mou-to-elevate-ai-education-in-india.png', // handshake agreement
  },
  {
    id: 11,
    title: 'Yoga Day Celebration Promotes Wellness',
    excerpt: 'Over 1000 students participated in the International Yoga Day session at the main lawn.',
    date: '2024-01-25',
    author: 'Wellness Club',
    tags: ['Yoga', 'Wellness'],
    image: 'https://images.openai.com/thumbnails/url/-F4ohXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw6yNHIy1zUsTgtKys-qMC0v9g41dorK8M8qSM7KDixODy8NdfTNzi9OLK6IKvc0cjKuiM8pLjVwz_RMcVQrBgAhZyqH', // yoga session
  },
  {
    id: 12,
    title: 'Guest Lecture on Industry Trends by Tech Leader',
    excerpt: 'Students interacted with a top industry veteran who shared insights on tech careers.',
    date: '2024-01-15',
    author: 'Career Cell',
    tags: ['Lecture', 'Careers'],
    image: 'https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x16.webp', // seminar hall
  },
  {
    id: 13,
    title: 'Placement Season: Record Offers for 2024 Batch',
    excerpt: 'Students received lucrative offers from leading MNCs across IT, finance, and consulting.',
    date: '2023-12-30',
    author: 'Placement Cell',
    tags: ['Placements', 'Careers'],
    image: 'https://images.openai.com/thumbnails/url/vLSln3icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5MDgsycfcx94zMcrQ0dXS1SHP1Kg70twj0CneKL0gucS7MjChwjfcwCdaNLAv2LA9IMrMszA8yS65QKwYAl74oRw', // interview scene
  },
  {
    id: 14,
    title: 'Arts Club Organizes Photography & Painting Workshop',
    excerpt: 'Budding artists learned new techniques and displayed their work in an on-campus exhibition.',
    date: '2023-12-15',
    author: 'Arts Club',
    tags: ['Workshop', 'Arts'],
    image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // art workshop
  },
  {
    id: 15,
    title: 'Political Science Students Visit Parliament House',
    excerpt: 'Students observed live parliamentary sessions and met with lawmakers as part of their study tour.',
    date: '2023-12-05',
    author: 'Political Science Dept',
    tags: ['Educational Tour', 'Politics'],
    image: 'https://niu.edu.in/wp-content/uploads/2025/06/image5-1.webp', // parliament
  },
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
      

        <div className="mb-1">
          <SearchFilter
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10 gap-8">
          {currentNews.map((news) => (
            <Card key={news.id} className="group relative overflow-hidden">
              {news.image && (
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
