
import React, { useState } from 'react';

// import { Card, CardContent } from '@/components/ui/card';
// Carousel Components
const Carousel = ({ className = "", children }) => (
  <div className={`relative ${className}`}>{children}</div>
);

const CarouselContent = ({ className = "", children }) => (
  <div className={`flex overflow-x-auto scrollbar-hide ${className}`}>{children}</div>
);

const CarouselItem = ({ className = "", children }) => (
  <div className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 ${className}`}>{children}</div>
);

const CarouselPrevious = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous"
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-green-600 hover:text-white text-green-600 rounded-full shadow p-2 transition-all"
    onClick={() => {
      const container = document.querySelector('.overflow-x-auto');
      if (container) container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
      if (onClick) onClick();
    }}
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
  </button>
);

const CarouselNext = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next"
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-green-600 hover:text-white text-green-600 rounded-full shadow p-2 transition-all"
    onClick={() => {
      const container = document.querySelector('.overflow-x-auto');
      if (container) container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
      if (onClick) onClick();
    }}
  >
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
  </button>
);

// Dialog Components
const Dialog = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onOpenChange}>
      <div className="relative" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ className = "", children }) => (
  <div className={`bg-white rounded-lg shadow-xl p-6 ${className}`}>
    {children}
  </div>
);

const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const DialogTitle = ({ className = "", children }) => (
  <h2 className={`font-bold text-xl ${className}`}>{children}</h2>
);

const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-lg border bg-white text-black shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const SportsWellness = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  const sportsFacilities = [
    {
      id: 1,
      icon: '⚽',
      title: 'Outdoor Stadium',
      shortDescription: 'Professional football stadium',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=600&fit=crop',
      capacity: '5000 spectators',
      location: 'Main Sports Complex',
      access: 'Students & Staff',
      type: 'Outdoor Sports Facility',
      timings: '6:00 AM - 8:00 PM',
      contact: 'Sports Director - ext. 2340',
      description: 'FIFA-standard football stadium with natural grass pitch and professional lighting system for evening matches.',
      features: [
        'Natural grass pitch',
        'Professional lighting',
        'Spectator stands',
        'Player facilities',
        'Equipment storage',
        'First aid station',
        'Scoreboard',
        'Sound system'
      ],
      bookingInfo: 'Advance booking required for matches'
    },
    {
      id: 2,
      icon: '🏀',
      title: 'Basketball Court',
      shortDescription: 'Indoor professional court',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
      capacity: '500 spectators',
      location: 'Sports Complex - Block A',
      access: 'Students & Staff',
      type: 'Indoor Court',
      timings: '7:00 AM - 10:00 PM',
      contact: 'Basketball Coach - ext. 2341',
      description: 'Professional indoor basketball court with wooden flooring and regulation-height hoops.',
      features: [
        'Wooden flooring',
        'Regulation hoops',
        'Spectator seating',
        'Locker rooms',
        'Equipment rental',
        'Climate control',
        'LED lighting',
        'Shot clock'
      ],
      bookingInfo: 'Open court hours and reserved slots available'
    },
    {
      id: 3,
      icon: '🏸',
      title: 'Indoor Badminton Arena',
      shortDescription: 'Multi-court badminton facility',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      capacity: '6 courts, 120 spectators',
      location: 'Sports Complex - Block B',
      access: 'Students & Staff',
      type: 'Indoor Arena',
      timings: '6:00 AM - 10:00 PM',
      contact: 'Badminton Coach - ext. 2342',
      description: 'State-of-the-art indoor badminton facility with professional wooden flooring and international standard courts.',
      features: [
        'Professional wooden flooring',
        'International standard courts',
        'High-quality lighting',
        'Spectator seating',
        'Equipment rental',
        'Air conditioning',
        'Changing rooms',
        'Practice nets'
      ],
      bookingInfo: 'Court booking system available online'
    },
    {
      id: 4,
      icon: '🏓',
      title: 'Table Tennis Room',
      shortDescription: 'Dedicated TT facility',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      capacity: '8 tables, 50 spectators',
      location: 'Sports Complex - Ground Floor',
      access: 'Students & Staff',
      type: 'Indoor Recreation',
      timings: '7:00 AM - 9:00 PM',
      contact: 'Recreation Manager - ext. 2343',
      description: 'Dedicated table tennis facility with professional tables and equipment for recreational and competitive play.',
      features: [
        'Professional TT tables',
        'Quality paddles & balls',
        'Spectator area',
        'Equipment storage',
        'Scorekeeping',
        'Ventilation system',
        'Non-slip flooring',
        'Practice wall'
      ],
      bookingInfo: 'Walk-in basis with hourly slots'
    },
    {
      id: 5,
      icon: '🏋️',
      title: 'Gymnasium',
      shortDescription: 'Modern fitness center',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      capacity: '100 users simultaneously',
      location: 'Sports Complex - First Floor',
      access: 'Students & Staff (Membership)',
      type: 'Fitness Center',
      timings: '5:00 AM - 11:00 PM',
      contact: 'Fitness Manager - ext. 2344',
      description: 'Modern gymnasium equipped with latest fitness equipment for strength training, cardio, and functional fitness.',
      features: [
        'Latest cardio equipment',
        'Weight training section',
        'Functional fitness area',
        'Personal training',
        'Group fitness classes',
        'Locker facilities',
        'Shower rooms',
        'Nutritional guidance'
      ],
      bookingInfo: 'Membership required for access'
    },
    {
      id: 6,
      icon: '🏐',
      title: 'Volleyball Court',
      shortDescription: 'Indoor & outdoor courts',
      image: 'https://images.unsplash.com/photo-1594736797933-d0400e808d57?w=800&h=600&fit=crop',
      capacity: '2 courts, 200 spectators',
      location: 'Sports Complex - Multi-purpose',
      access: 'Students & Staff',
      type: 'Multi-purpose Court',
      timings: '6:00 AM - 9:00 PM',
      contact: 'Volleyball Coach - ext. 2345',
      description: 'Professional volleyball courts suitable for both indoor and beach volleyball with regulation nets and equipment.',
      features: [
        'Regulation nets',
        'Professional flooring',
        'Spectator seating',
        'Equipment storage',
        'Scoreboard',
        'Line marking',
        'Lighting system',
        'Player benches'
      ],
      bookingInfo: 'Team bookings and open play sessions'
    },
    {
      id: 7,
      icon: '🏊',
      title: 'Swimming Pool',
      shortDescription: 'Olympic-size pool',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop',
      capacity: '50m Olympic-size pool',
      location: 'Aquatic Center',
      access: 'Students & Staff (Swimming test)',
      type: 'Aquatic Facility',
      timings: '6:00 AM - 9:00 PM',
      contact: 'Aquatics Director - ext. 2346',
      description: 'Olympic-standard swimming pool with separate diving area and training facilities for competitive swimming.',
      features: [
        '50m Olympic-size pool',
        '8 racing lanes',
        'Diving pool',
        'Starting blocks',
        'Timing system',
        'Lifeguard service',
        'Pool equipment',
        'Poolside seating'
      ],
      bookingInfo: 'Swimming test required for access'
    },
    {
      id: 8,
      icon: '🏃‍♂️',
      title: 'Track & Field Ground',
      shortDescription: '400m athletic track',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
      capacity: '8-lane 400m track',
      location: 'Main Athletic Ground',
      access: 'Students & Staff',
      type: 'Athletics Facility',
      timings: '5:30 AM - 7:30 PM',
      contact: 'Athletics Coach - ext. 2347',
      description: 'International standard 400-meter running track with field event areas for comprehensive athletic training.',
      features: [
        '8-lane synthetic track',
        'Long jump pit',
        'High jump area',
        'Shot put circle',
        'Javelin throw area',
        'Pole vault facility',
        'Electronic timing',
        'Starting blocks'
      ],
      bookingInfo: 'Open access during operating hours'
    },
    {
      id: 9,
      icon: '🎭',
      title: 'Multipurpose Sports Auditorium',
      shortDescription: 'Large indoor arena',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop',
      capacity: '2000 spectators',
      location: 'Central Sports Complex',
      access: 'Students & Staff (Event bookings)',
      type: 'Indoor Arena',
      timings: '8:00 AM - 10:00 PM',
      contact: 'Arena Manager - ext. 2348',
      description: 'Large indoor arena suitable for basketball, volleyball, and major sporting events with professional-grade facilities.',
      features: [
        'Multi-sport flooring',
        'Professional lighting',
        'Sound system',
        'Video displays',
        'VIP seating',
        'Media facilities',
        'Climate control',
        'Event support'
      ],
      bookingInfo: 'Advance booking required for events'
    }
  ];

  const handleFacilityClick = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <section id="sports-wellness" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sports & <span className="text-green-600">Wellness Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our world-class sports facilities designed for excellence in athletics and wellness.
          </p>
        </div>

        {/* Sports Facilities Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {sportsFacilities.map((facility) => (
                <CarouselItem key={facility.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden h-full"
                    onClick={() => handleFacilityClick(facility)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-4 left-4 text-4xl">
                          {facility.icon}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg font-bold mb-1">{facility.title}</h3>
                          <p className="text-sm opacity-90">{facility.shortDescription}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-600">Location:</span>
                            <span className="text-gray-800">{facility.location}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-600">Capacity:</span>
                            <span className="text-gray-800">{facility.capacity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-600">Timings:</span>
                            <span className="text-gray-800">{facility.timings}</span>
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <span className="text-green-600 text-sm font-medium hover:text-green-700">
                            Click for more details →
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Facility Details Modal */}
        {selectedFacility && (
          <Dialog open={!!selectedFacility} onOpenChange={() => setSelectedFacility(null)}>
            <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <span className="text-3xl">{selectedFacility.icon}</span>
                  {selectedFacility.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Facility Details</h3>
                    <div className="space-y-2">
                      <div><span className="font-medium">Type:</span> {selectedFacility.type}</div>
                      <div><span className="font-medium">Location:</span> {selectedFacility.location}</div>
                      <div><span className="font-medium">Capacity:</span> {selectedFacility.capacity}</div>
                      <div><span className="font-medium">Access:</span> {selectedFacility.access}</div>
                      <div><span className="font-medium">Timings:</span> {selectedFacility.timings}</div>
                      <div><span className="font-medium">Contact:</span> {selectedFacility.contact}</div>
                      <div><span className="font-medium">Booking:</span> {selectedFacility.bookingInfo}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Features & Amenities</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedFacility.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600">{selectedFacility.description}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default SportsWellness;
