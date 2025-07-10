import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Clock, Wifi, Globe, BookOpen, Book, Armchair } from 'lucide-react';

// Dialog components
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onOpenChange}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-2xl mx-4 sm:mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ className = "", children, ...props }) => (
  <div
    className={`bg-white rounded-lg shadow-lg p-6 sm:p-8 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;

const DialogTitle = ({ className = "", children, ...props }) => (
  <h2 className={`text-xl sm:text-2xl font-bold ${className}`} {...props}>
    {children}
  </h2>
);

const Card = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border bg-white text-black shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const iconMap = {
  book: BookOpen,
  armchair: Armchair,
  clock: Clock,
  wifi: Wifi,
  globe: Globe,
};

const Library = () => {
  const [libraryInfo, setLibraryInfo] = useState(null);
  const [features, setFeatures] = useState([]);
  const [stats, setStats] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [selectedSpace, setSelectedSpace] = useState(null);

  const BASE_URL = import.meta.env.VITE_HOST;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [infoRes, featuresRes, statsRes, facilitiesRes] = await Promise.all([
          axios.get(`${BASE_URL}campuslife/library-info/`),
          axios.get(`${BASE_URL}campuslife/library-facilities/`),
          axios.get(`${BASE_URL}campuslife/library-stats/`),
          axios.get(`${BASE_URL}campuslife/library-facilities/`),
        ]);
        setLibraryInfo(infoRes.data[0]);
        setFeatures(featuresRes.data);
        setStats(statsRes.data);
        setFacilities(facilitiesRes.data);
      } catch (error) {
        console.error('Failed to fetch library data:', error);
      }
    };
    fetchData();
  }, [BASE_URL]);

  return (
    <section id="library" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Dynamic Title & Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {libraryInfo?.title || 'Library'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {libraryInfo?.description}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all pt-5 duration-500 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Library Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-10 gap-6 mb-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedSpace(facility)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <h4 className="font-bold text-sm">{facility.name}</h4>
                      <p className="text-xs opacity-90">{facility.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Card className="bg-gradient-to-r pt-5 from-purple-600 to-blue-600 text-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold mb-2">{stat.label}</div>
                  <div className="text-sm opacity-90">{stat.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dialog */}
        {selectedSpace && (
          <Dialog open={!!selectedSpace} onOpenChange={() => setSelectedSpace(null)}>
            <DialogContent className="max-w-2xl bg-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedSpace.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedSpace.image}
                  alt={selectedSpace.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-gray-700">{selectedSpace.description}</p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Library;
