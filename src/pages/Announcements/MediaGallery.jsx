import React, { useState, useMemo, cloneElement } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SearchFilter from '../../components/announcement/SearchFilter';
import Pagination from '../../components/announcement/Pagination';

// === Dialog ===
const Dialog = ({ open, children }) => (open ? <>{children}</> : null);
const DialogTrigger = ({ children }) => children;
const DialogContent = ({ className = '', children }) => (
  <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm ${className}`}>
    <div className="relative">{children}</div>
  </div>
);

// === Button ===
const Button = ({ children, onClick, variant = 'default', size = 'md', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md',
    ghost: 'bg-transparent hover:bg-gray-200',
    glass: 'bg-white/20 backdrop-blur text-white hover:bg-white/30',
  };
  const sizes = {
    md: 'h-10 px-4 text-base',
    icon: 'h-10 w-10 p-0',
  };
  return (
    <button type="button" className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

// === Badge ===
const Badge = ({ children, className = '' }) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold shadow-sm ${className}`}>{children}</span>
);

// === Format date ===
function format(date, formatStr) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const pad = (n) => (n < 10 ? '0' + n : n);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return formatStr.replace('MMMM', monthNames[d.getMonth()]).replace('dd', pad(d.getDate())).replace('yyyy', d.getFullYear());
}

// === Tabs ===
const Tabs = ({ value, children, className = '' }) => {
  const [active, setActive] = useState(value);
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        child.type.displayName === 'TabsList'
          ? cloneElement(child, { active, setActive })
          : cloneElement(child, { active })
      )}
    </div>
  );
};
const TabsList = ({ children, active, setActive, className = '' }) => (
  <div className={className}>
    {React.Children.map(children, (child) => cloneElement(child, { active, setActive }))}
  </div>
);
TabsList.displayName = 'TabsList';

const TabsTrigger = ({ value, children, active, setActive, className = '' }) => (
  <button
    type="button"
    className={`py-2 px-4 rounded-t font-medium transition-colors ${active === value ? 'bg-white shadow text-blue-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'} ${className}`}
    onClick={() => setActive(value)}
  >
    {children}
  </button>
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = ({ value, active, children }) => (active === value ? <div>{children}</div> : null);
TabsContent.displayName = 'TabsContent';

// === Mock Media ===
const mockMedia = [
  {
    id: 1,
    title: '15th Annual Convocation Ceremony',
    category: 'Convocation',
    year: '2025',
    date: '2025-05-12',
    images: [
      'https://www.ic3ecsbhi.com/Gallery/20231224_134240.jpg',
      'https://www.ic3ecsbhi.com/Events/IMG-20231224-WA0082.jpg',
      'https://hostels.gbu.ac.in/uploads/eventsfiles/photos/65a98a5384fb0_GBU-Convocation.jpeg',
    ],
  },
  {
    id: 2,
    title: 'National Sports Meet 2025',
    category: 'Sports',
    year: '2025',
    date: '2025-02-18',
    images: [
      'https://www.gbu.ac.in/Content/img/sports/banner2.jpg',
      'https://www.gbu.ac.in/Content/img/sports/banner1.jpg',
    ],
  },
  {
    id: 3,
    title: 'Annual Cultural Fest - Rhythms 2025',
    category: 'Cultural',
    year: '2025',
    date: '2025-03-10',
    images: [
      'https://images.openai.com/thumbnails/url/VUAonnicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4pdXePdE1PTTRzDypwLPYzijAtjjAIzSpJLfbzKgur8o3y1E3XTdWNqNBNzwyvisoxzcgLcHNLSYtXKwYAxKYpTA',
      'https://www.gbu.ac.in/Content/img/cc/Artboard%201abhivyanjana7.jpg',
    ],
  },
  {
    id: 4,
    title: 'International Research Symposium',
    category: 'Academic',
    year: '2025',
    date: '2025-04-08',
    images: [
      'https://images.openai.com/thumbnails/url/LsfcCHicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5yCUrMyjJPyQ6N9LIMsnBNiSjNNNJ1T0oNTI4vyvf3yCnwN03OLk_JKI9MTXIOMk23NI40dHYsM061SFcrBgAaYCmm',
    ],
  },
  {
    id: 5,
    title: 'Campus Life - Spring Moments',
    category: 'Campus Life',
    year: '2025',
    date: '2025-03-25',
    images: [
      'https://cdn.thedecorjournalindia.com/wp-content/uploads/2022/11/9_Modern-day-marvel-Gautam-Buddha-University-by-CP-Kukreja-architects-transpires-fresh-vibe-and-ancient-wisdom.jpg?lossy=1&resize=1920%2C1357&ssl=1&strip=all',
      'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/11/03131617/1-inside-image-816-x-576-horizontal.jpeg',
      'https://hawmagazine.com/wp-content/uploads/2023/11/DSF8939-croped-1.jpg',
    ],
  },
  {
    id: 6,
    title: 'Tech Symposium 2025',
    category: 'Events',
    year: '2025',
    date: '2025-01-22',
    images: [
      'https://www.gbu.ac.in/Content/gbudata/incubation/Incubation_Pic9.jpg',
      'https://www.ic3ecsbhi.com/dsf8951%20copy.jpeg',
    ],
  },
  {
    id: 7,
    title: 'Robotics Workshop & Expo',
    category: 'Academic',
    year: '2024',
    date: '2024-08-10',
    images: [
      'https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x1.webp','https://static.toiimg.com/thumb/msid-104795413%2Cwidth-1280%2Cheight-720%2Cresizemode-72/104795413.jpg',
    ],
  },
  {
    id: 8,
    title: 'Faculty Development Program 2024',
    category: 'Academic',
    year: '2024',
    date: '2024-12-12',
    images: [
      'https://images.openai.com/thumbnails/url/zkzpLXicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4MyfdN8zD28HBKcs11M0mJCg0wLnT2sgwpKk_1K89zcTUKDQxMKs4tcws19wpwyi2JSCwzKEtNcvSMClQrBgAHqSmf',
    ],
  },
  {
    id: 9,
    title: 'Science & Innovation Fair',
    category: 'Academic',
    year: '2024',
    date: '2024-10-18',
    images: [
      'https://gburif.org/images/intro-carousel/gautam-buddha-university-3.jpg','https://www.hindustantimes.com/ht-img/img/2024/09/05/1600x900/The-12-hour-Hackathon-was-held-at-the-Central-Comp_1725563537794.jpg',
    ],
  },
  {
    id: 10,
    title: 'Inter-College Football League',
    category: 'Sports',
    year: '2024',
    date: '2024-09-20',
    images: [
      'https://www.gbu.ac.in/Content/img/sports/banner1.jpg',
    ],
  },
  {
    id: 11,
    title: 'Winter Cultural Gala',
    category: 'Cultural',
    year: '2024',
    date: '2024-12-22',
    images: [
      'https://i.ytimg.com/vi/Aicd7XpY9eI/sd2.jpg?rs=AOn4CLCprID9Bk-ruT1eZpLbeLjahWmBSg&sqp=-oaymwEoCIAFEOAD8quKqQMcGADwAQH4AYwCgALgA4oCDAgAEAEYVCAgKH8wDw%3D%3D',
    ],
  },
  {
    id: 12,
    title: 'Open Stage Night',
    category: 'Cultural',
    year: '2024',
    date: '2024-11-15',
    images: [
      'https://images.openai.com/thumbnails/url/7Lm6aHicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw70yzeriqpK84uvjPd0yqrKMDDLMS-KDwwxTg4LKowITk3P9c2vTEqxTAkviTTKjfD2TC0rMg0ydQtVKwYA5T8p4A',
    ],
  },
  {
    id: 13,
    title: 'Yoga & Wellness Retreat',
    category: 'Campus Life',
    year: '2024',
    date: '2024-07-05',
    images: [
      'https://www.gbu.ac.in/Content/gbudata/meditation/img/buddha28.jpg','https://www.gbu.ac.in/Content/gbudata/meditation/img/buddha31.jpg',
    ],
  },
  {
    id: 14,
    title: 'GBU Literary Festival',
    category: 'Cultural',
    year: '2024',
    date: '2024-09-15',
    images: [
      'https://sameer.mygbu.in/home/uploads/4.jpg',
    ],
  },
  {
    id: 15,
    title: 'GBU Half Marathon 2025',
    category: 'Sports',
    year: '2025',
    date: '2025-01-28',
    images: [
      'https://www.gbu.ac.in/Content/img/sports/banner1.jpg',
    ],
  },
  {
  id: 16,
  title: 'Inter-University Debate Championship',
  category: 'Academic',
  year: '2025',
  date: '2025-02-20',
  images: [
    'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/opportunity-bannerImages/1743929131.png',
  ],
},
{
  id: 17,
  title: 'Startup Expo & Innovation Fair',
  category: 'Events',
  year: '2025',
  date: '2025-03-18',
  images: [
    'https://images.unsplash.com/photo-1564866657310-2630c1f1df9f?auto=format&fit=crop&w=600&q=80',
  ],
},
{
  id: 18,
  title: 'Women Empowerment Seminar',
  category: 'Academic',
  year: '2025',
  date: '2025-03-25',
  images: [
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  ],
},
{
  id: 19,
  title: 'Spring Tree Plantation Drive',
  category: 'Campus Life',
  year: '2025',
  date: '2025-04-05',
  images: [
    'https://images.unsplash.com/photo-1559634684-e3eab5be0985?auto=format&fit=crop&w=600&q=80',
  ],
},
{
  id: 20,
  title: 'GBU Alumni Meet & Reunion',
  category: 'Events',
  year: '2025',
  date: '2025-04-20',
  images: [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
  ],
},
{
  id: 21,
  title: 'Environmental Awareness Drive',
  category: 'Campus Life',
  year: '2025',
  date: '2025-05-02',
  images: [
    'https://images.unsplash.com/photo-1575202335306-5c8c54b6db1c?auto=format&fit=crop&w=600&q=80',
  ],
},
{
  id: 22,
  title: 'Inter-College Hackathon',
  category: 'Academic',
  year: '2025',
  date: '2025-05-15',
  images: [
    'https://images.unsplash.com/photo-1537432376769-00aabc1ca45c?auto=format&fit=crop&w=600&q=80',
  ],
},
{
  id: 23,
  title: 'Cultural Evening - Folk Fusion',
  category: 'Cultural',
  year: '2025',
  date: '2025-06-10',
  images: [
    'https://images.unsplash.com/photo-1587049352849-35263f2e96f5?auto=format&fit=crop&w=600&q=80',
  ],
},
{
  id: 24,
  title: 'Photography Exhibition',
  category: 'Cultural',
  year: '2025',
  date: '2025-06-20',
  images: [
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
  ],
},
{
  id: 25,
  title: 'Summer Internship Orientation',
  category: 'Academic',
  year: '2025',
  date: '2025-07-01',
  images: [
    'https://biotechworldindia.in/wp-content/uploads/2023/11/IMG-20200620-WA0002-1024x705.jpg',
  ],
},

];



// === Shimmer ===
const shimmer = 'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-shimmer';

// === Main ===
const MediaGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedMediaItem, setSelectedMediaItem] = useState(null);

  const allCategories = Array.from(new Set(mockMedia.map(item => item.category)));
  const allYears = Array.from(new Set(mockMedia.map(item => item.year)));

  const filteredMedia = useMemo(() => {
    return mockMedia.filter(item => {
      const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || item.year === selectedYear;
      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const currentMedia = filteredMedia.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const openImageModal = (item) => {
    setSelectedMediaItem(item);
    setSelectedImageIndex(0);
  };

  const navigateImage = (dir) => {
    const total = selectedMediaItem.images.length;
    setSelectedImageIndex((prev) => (dir === 'next' ? (prev + 1) % total : (prev - 1 + total) % total));
  };

  const getCategoryColor = (cat) => ({
    Convocation: 'bg-purple-100 text-purple-800',
    Sports: 'bg-green-100 text-green-800',
    Cultural: 'bg-orange-100 text-orange-800',
  }[cat] || 'bg-gray-100 text-gray-800');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-2">Media Gallery</h1>
        <p className="text-lg">Explore vibrant moments from university events. Click to view details!</p>
      </section>

      <div className="container mx-auto py-12">
        <SearchFilter onSearch={setSearchQuery} onTypeFilter={setSelectedCategory} onYearFilter={setSelectedYear} types={allCategories} years={allYears} placeholder="Search..." />

        <Tabs value="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all"><span>All Media ({filteredMedia.length})</span></TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 gap-8">
              {currentMedia.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow border border-gray-100 border-solid overflow-hidden hover:shadow-lg transition-all duration-300" style={{ height: '26rem' }}>
                  <div className="h-[70%] cursor-pointer overflow-hidden" onClick={() => openImageModal(item)}>
                    <img src={item.images[0]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 h-[30%] flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-1">
                      <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                      <span className="text-sm text-gray-500">{item.year}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{format(item.date, 'MMMM dd, yyyy')}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {totalPages > 1 && (
          <div className="mt-10">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} itemsPerPage={itemsPerPage} onItemsPerPageChange={setItemsPerPage} />
          </div>
        )}

        {selectedMediaItem && selectedImageIndex !== null && (
          <Dialog open>
            <DialogContent className=" w-full p-0 bg-black/90 rounded-2xl">
              <div className="relative">
                <img src={selectedMediaItem.images[selectedImageIndex]} alt="" className="w-full max-h-[80vh] object-contain rounded-xl" />
                <Button variant="glass" size="icon" className="absolute top-4 right-4" onClick={() => setSelectedImageIndex(null)}><X size={26} /></Button>
                {selectedMediaItem.images.length > 1 && (
                  <>
                    <Button variant="glass" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={() => navigateImage('prev')}><ChevronLeft size={28} /></Button>
                    <Button variant="glass" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => navigateImage('next')}><ChevronRight size={28} /></Button>
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white rounded-b-2xl">
                  <h3 className="text-2xl font-bold mb-2">{selectedMediaItem.title}</h3>
                  <div className="flex justify-between text-sm">{format(selectedMediaItem.date, 'MMMM dd, yyyy')} <span>{selectedImageIndex + 1} of {selectedMediaItem.images.length}</span></div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
