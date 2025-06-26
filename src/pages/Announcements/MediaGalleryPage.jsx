
import { useState, useMemo } from 'react';
import Header from '../../components/announcement/Header';
import SearchFilter from '../../components/announcement/SearchFilter';
import EnhancedPagination from '../../components/announcement/EnhancedPagination';
// Dialog, DialogContent, DialogTrigger
const Dialog = ({ open, onOpenChange, children }) => {
  return open !== undefined ? (
    open ? <>{children}</> : null
  ) : (
    <>{children}</>
  );
};
const DialogTrigger = ({ asChild, children }) => children;
const DialogContent = ({ className = '', children }) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 ${className}`}
    style={{ animation: 'fadeIn 0.2s' }}
  >
    <div className="relative">{children}</div>
  </div>
);

// Button
const Button = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent hover:bg-gray-200',
  };
  const sizes = {
    md: 'h-10 px-4 text-base',
    icon: 'h-10 w-10 p-0',
  };
  return (
    <button
      type="button"
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge
const Badge = ({ children, className = '' }) => (
  <span
    className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);

// Tabs, TabsList, TabsTrigger, TabsContent
import { useState, cloneElement } from 'react';
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
    {React.Children.map(children, (child) =>
      cloneElement(child, { active, setActive })
    )}
  </div>
);
TabsList.displayName = 'TabsList';

const TabsTrigger = ({
  value,
  children,
  active,
  setActive,
  className = '',
}) => (
  <button
    type="button"
    className={`py-2 px-4 rounded-t font-medium transition-colors ${
      active === value
        ? 'bg-white shadow text-blue-700'
        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
    } ${className}`}
    onClick={() => setActive(value)}
  >
    {children}
  </button>
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = ({ value, active, children }) =>
  active === value ? <div>{children}</div> : null;
TabsContent.displayName = 'TabsContent';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// Mock media data
const mockMedia = [
  {
    id: 1,
    title: 'Convocation 2023 Highlights',
    category: 'Convocation',
    year: '2023',
    date: '2023-05-15',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 2,
    title: 'Annual Sports Meet',
    category: 'Sports',
    year: '2022',
    date: '2022-11-10',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 3,
    title: 'Cultural Fest Night',
    category: 'Cultural',
    year: '2023',
    date: '2023-02-20',
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 4,
    title: 'Academic Seminar',
    category: 'Academic',
    year: '2021',
    date: '2021-09-05',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 5,
    title: 'Campus Life Moments',
    category: 'Campus Life',
    year: '2022',
    date: '2022-03-18',
    images: [
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 6,
    title: 'Tech Symposium',
    category: 'Events',
    year: '2023',
    date: '2023-07-12',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

// Simple date formatting function (similar to date-fns/format)
function format(date, formatStr) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const pad = (n) => n < 10 ? '0' + n : n;
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return formatStr
    .replace('MMMM', monthNames[d.getMonth()])
    .replace('dd', pad(d.getDate()))
    .replace('yyyy', d.getFullYear());
}

const MediaGalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedMediaItem, setSelectedMediaItem] = useState<any>(null);

  const allCategories = Array.from(new Set(mockMedia.map(item => item.category)));
  const allYears = Array.from(new Set(mockMedia.map(item => item.year)));

  const filteredMedia = useMemo(() => {
    return mockMedia.filter(item => {
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || item.year === selectedYear;
      
      return matchesSearch && matchesCategory && matchesYear;
    });
  }, [searchQuery, selectedCategory, selectedYear]);

  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const currentMedia = filteredMedia.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const openImageModal = (mediaItem, imageIndex) => {
    setSelectedMediaItem(mediaItem);
    setSelectedImageIndex(imageIndex);
  };

  const navigateImage = (direction) => {
    if (!selectedMediaItem || selectedImageIndex === null) return;
    
    const currentIndex = selectedImageIndex;
    const totalImages = selectedMediaItem.images.length;
    
    if (direction === 'next') {
      setSelectedImageIndex((currentIndex + 1) % totalImages);
    } else {
      setSelectedImageIndex((currentIndex - 1 + totalImages) % totalImages);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Convocation': 'bg-purple-100 text-purple-800',
      'Sports': 'bg-green-100 text-green-800',
      'Cultural': 'bg-orange-100 text-orange-800',
      'Academic': 'bg-blue-100 text-blue-800',
      'Campus Life': 'bg-pink-100 text-pink-800',
      'Events': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Media Gallery</h1>
          <p className="text-gray-600 text-lg">Explore photos and videos from university events</p>
        </div>

        <SearchFilter
          onSearch={handleSearch}
          onDateFilter={() => {}} // Not used for media gallery
          onTypeFilter={handleCategoryFilter}
          onYearFilter={handleYearFilter}
          types={allCategories}
          years={allYears}
          placeholder="Search media..."
        />

        <Tabs value="all" className="w-full">
          <TabsList className="grid w-full grid-cols-1 mb-8">
            <TabsTrigger value="all" className="w-full">All Media ({filteredMedia.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentMedia.map((item) => (
                <div key={item.id} className="space-y-3">
                  <div className="grid grid-cols-1 gap-2">
                    {item.images.map((image, imageIndex) => (
                      <Dialog key={imageIndex}>
                        <DialogTrigger asChild>
                          <div 
                            className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => openImageModal(item, imageIndex)}
                          >
                            <img 
                              src={image} 
                              alt={`${item.title} - ${imageIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </DialogTrigger>
                      </Dialog>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{item.year}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {format(new Date(item.date), 'MMMM dd, yyyy')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No media found matching your criteria.</p>
          </div>
        )}

        {totalPages > 1 && (
          <EnhancedPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredMedia.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={handleItemsPerPageChange}
            showItemsPerPage={true}
          />
        )}
      </div>

      {/* Image Modal */}
      {selectedMediaItem && selectedImageIndex !== null && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
          <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
            <div className="relative">
              <img 
                src={selectedMediaItem.images[selectedImageIndex]} 
                alt={`${selectedMediaItem.title} - ${selectedImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Navigation Buttons */}
              {selectedMediaItem.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateImage('prev')}
                  >
                    <ChevronLeft size={24} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateImage('next')}
                  >
                    <ChevronRight size={24} />
                  </Button>
                </>
              )}
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImageIndex(null)}
              >
                <X size={24} />
              </Button>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedMediaItem.title}</h3>
                <div className="flex items-center justify-between">
                  <span>{format(new Date(selectedMediaItem.date), 'MMMM dd, yyyy')}</span>
                  <span>{selectedImageIndex + 1} of {selectedMediaItem.images.length}</span>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default MediaGalleryPage;
