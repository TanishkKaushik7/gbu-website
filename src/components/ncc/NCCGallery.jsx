import React , { useState } from 'react';
// Minimal UI components defined inline for this file

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-bold text-lg ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 pb-6 ${className}`}>{children}</div>
);

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-sm",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold";
  const variants = {
    default: "bg-gray-100 text-gray-800",
    outline: "border border-gray-300 text-gray-700 bg-white",
  };
  return (
    <span
      className={`${base} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
import { Camera, Filter, Calendar, Eye, Download, Shield } from 'lucide-react';
// Minimal Select and Dialog components for this file

// Select Components
const Select = ({ value, onValueChange, children }) => {
  return (
    <div className="relative inline-block">{React.Children.map(children, child =>
      React.cloneElement(child, { value, onValueChange })
    )}</div>
  );
};

const SelectTrigger = ({ children, className = "", ...props }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="w-full flex items-center justify-between border border-gray-300 bg-white rounded-md px-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setOpen(o => !o)}
        {...props}
      >
        {children}
        <svg className="ml-2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && React.Children.map(props.children, child =>
        React.cloneElement(child, { open, setOpen })
      )}
    </div>
  );
};

const SelectValue = ({ placeholder }) => (
  <span className="truncate">{placeholder}</span>
);

const SelectContent = ({ children, open, setOpen, value, onValueChange }) => (
  open ? (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
      {React.Children.map(children, child =>
        React.cloneElement(child, { setOpen, value, onValueChange })
      )}
    </div>
  ) : null
);

const SelectItem = ({ value: itemValue, children, setOpen, value, onValueChange }) => (
  <div
    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 text-sm ${value === itemValue ? 'font-semibold text-blue-700' : 'text-gray-700'}`}
    onClick={() => {
      onValueChange(itemValue);
      setOpen(false);
    }}
  >
    {children}
  </div>
);

// Dialog Components
const Dialog = ({ children }) => {
  const [open, setOpen] = useState(false);
  // expects DialogTrigger and DialogContent as children
  return React.Children.map(children, child => {
    if (child.type === DialogTrigger) {
      return React.cloneElement(child, { setOpen });
    }
    if (child.type === DialogContent) {
      return open ? React.cloneElement(child, { setOpen }) : null;
    }
    return child;
  });
};

const DialogTrigger = ({ children, setOpen }) => (
  <div onClick={() => setOpen(true)}>{children}</div>
);

const DialogContent = ({ children, setOpen, className = "" }) => (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2 ${className}`}
    onClick={() => setOpen(false)}
  >
    <div
      className="bg-white rounded-lg shadow-lg max-w-full w-full md:w-auto"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        onClick={() => setOpen(false)}
        aria-label="Close"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="p-4">{children}</div>
    </div>
  </div>
);

const NCCGallery = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Republic Day Camp 2024',
      category: 'Camps',
      year: '2024',
      date: '2024-01-26',
      images: [
        { url: '/placeholder.svg', caption: 'RDC participants marching' },
        { url: '/placeholder.svg', caption: 'Cultural program at RDC' },
        { url: '/placeholder.svg', caption: 'Award ceremony' },
        { url: '/placeholder.svg', caption: 'Meeting with dignitaries' }
      ]
    },
    {
      id: 2,
      title: 'Annual Training Camp',
      category: 'Training',
      year: '2024',
      date: '2024-03-15',
      images: [
        { url: '/placeholder.svg', caption: 'Drill training session' },
        { url: '/placeholder.svg', caption: 'Weapon training practice' },
        { url: '/placeholder.svg', caption: 'Field craft exercises' },
        { url: '/placeholder.svg', caption: 'Camp closing ceremony' }
      ]
    },
    {
      id: 3,
      title: 'Adventure Training',
      category: 'Adventure',
      year: '2024',
      date: '2024-02-20',
      images: [
        { url: '/placeholder.svg', caption: 'Rock climbing training' },
        { url: '/placeholder.svg', caption: 'Trekking expedition' },
        { url: '/placeholder.svg', caption: 'Survival training' },
        { url: '/placeholder.svg', caption: 'Team building exercises' }
      ]
    },
    {
      id: 4,
      title: 'Shooting Competition',
      category: 'Competitions',
      year: '2023',
      date: '2023-12-10',
      images: [
        { url: '/placeholder.svg', caption: 'Cadets at shooting range' },
        { url: '/placeholder.svg', caption: 'Precision shooting practice' },
        { url: '/placeholder.svg', caption: 'Competition winners' },
        { url: '/placeholder.svg', caption: 'Trophy presentation' }
      ]
    },
    {
      id: 5,
      title: 'Parade Practice',
      category: 'Drill',
      year: '2023',
      date: '2023-11-15',
      images: [
        { url: '/placeholder.svg', caption: 'Morning parade formation' },
        { url: '/placeholder.svg', caption: 'Drill movements practice' },
        { url: '/placeholder.svg', caption: 'Command inspection' },
        { url: '/placeholder.svg', caption: 'Best drill squad' }
      ]
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const yearMatch = selectedYear === 'all' || item.year === selectedYear;
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Training': 'bg-blue-100 text-blue-800',
      'Camps': 'bg-green-100 text-green-800',
      'Adventure': 'bg-orange-100 text-orange-800',
      'Competitions': 'bg-red-100 text-red-800',
      'Drill': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">NCC Gallery</h2>
        <p className="text-lg text-gray-600">
          Capturing moments of discipline, training, and camaraderie
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Training">Training</SelectItem>
                <SelectItem value="Camps">Camps</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Competitions">Competitions</SelectItem>
                <SelectItem value="Drill">Drill</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Gallery Grid */}
      <div className="space-y-8">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-gray-900">{item.title}</CardTitle>
                  <p className="text-gray-600 mt-1">
                    {new Date(item.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <Badge variant="outline">{item.year}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {item.images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative group cursor-pointer">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                          <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="space-y-4">
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="flex justify-between items-center">
                          <p className="text-gray-700">{image.caption}</p>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-600">
                  {item.images.length} photos
                </span>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Gallery Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Camera className="h-6 w-6 text-purple-600" />
            <span>Training Videos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Drill Training Highlights', duration: '5:30', views: '2.1K' },
              { title: 'Adventure Camp Documentary', duration: '12:45', views: '3.5K' },
              { title: 'RDC Parade Performance', duration: '8:20', views: '4.2K' }
            ].map((video, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{video.title}</h4>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{video.duration}</span>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <Card className="bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Gallery Statistics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">800+</div>
              <div className="text-blue-100">Total Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75+</div>
              <div className="text-blue-100">Events Documented</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Training Videos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-blue-100">Total Views</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Section (Admin) */}
      <Card className="border-2 border-dashed border-gray-300 hover:border-orange-400 transition-colors">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Shield className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Add New Media</h3>
          <p className="text-gray-500 text-center mb-4">
            Upload training photos and videos to the gallery
          </p>
          <Button className="bg-blue-900 hover:bg-blue-800">
            <Camera className="h-4 w-4 mr-2" />
            Upload Media
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NCCGallery;
