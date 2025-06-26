
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SocialShare from '../../components/announcement/SocialShare';
import RelatedEvents from '../../components/announcement/RelatedEvents';
// Minimal UI components for EventDetail page

// Button component
const Button = ({ children, variant = "default", size = "md", asChild, className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-2.5 text-lg",
  };
  const classes = `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`;
  if (asChild) {
    // For <a> or other elements
    const child = React.Children.only(children);
    return React.cloneElement(child, { className: `${child.props.className || ""} ${classes}`.trim(), ...props });
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Badge component
const Badge = ({ children, className = "", variant = "solid", ...props }) => {
  const base = "inline-block px-3 py-1 rounded-full text-xs font-semibold";
  const variants = {
    solid: "bg-blue-600 text-white",
    outline: "border border-current text-inherit bg-transparent",
  };
  return (
    <span className={`${base} ${variants[variant] || variants.solid} ${className}`} {...props}>
      {children}
    </span>
  );
};

// Card components
const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props}>{children}</div>
);
const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`border-b px-6 py-4 ${className}`} {...props}>{children}</div>
);
const CardTitle = ({ children, className = "", ...props }) => (
  <h2 className={`text-xl font-bold ${className}`} {...props}>{children}</h2>
);
const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>{children}</div>
);

// Tabs components
const TabsContext = React.createContext();

const Tabs = ({ defaultValue, children, className = "" }) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className = "" }) => (
  <div className={`flex gap-2 bg-gray-100 rounded-lg p-1 mb-4 ${className}`}>{children}</div>
);

const TabsTrigger = ({ value, children, className = "" }) => {
  const { value: active, setValue } = React.useContext(TabsContext);
  const isActive = active === value;
  return (
    <button
      className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
        isActive
          ? "bg-white shadow text-blue-700"
          : "text-gray-600 hover:bg-gray-200"
      } ${className}`}
      onClick={() => setValue(value)}
      type="button"
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, className = "" }) => {
  const { value: active } = React.useContext(TabsContext);
  if (active !== value) return null;
  return <div className={className}>{children}</div>;
};
import { ArrowLeft, Calendar, MapPin, Users, ExternalLink, CalendarPlus, Download, Phone, Mail, QrCode } from 'lucide-react';
// Mock event data (replace with real data source in production)
const mockEvents = [
  {
    id: "1",
    title: "International Symposium on AI",
    description: "A premier event bringing together leading minds in Artificial Intelligence for knowledge sharing, networking, and collaboration.",
    date: "2024-07-15T09:00:00Z",
    endDate: "2024-07-15T17:00:00Z",
    venue: "Auditorium, GBU Campus",
    organizer: "School of ICT, GBU",
    type: "Symposium",
    mode: "Offline",
    isUpcoming: true,
    registrationUrl: "https://forms.gle/ai-symposium-gbu",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "2",
    title: "Web Development Workshop",
    description: "Hands-on workshop covering modern web development tools and frameworks.",
    date: "2024-08-10T10:00:00Z",
    venue: "Lab 2, GBU Campus",
    organizer: "School of Engineering, GBU",
    type: "Workshop",
    mode: "Offline",
    isUpcoming: false,
    registrationUrl: "",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    ]
  }
  // Add more mock events as needed
];

// Minimal date formatting using native JS
function format(date, formatStr) {
  const d = typeof date === "string" ? new Date(date) : date;
  const pad = n => n.toString().padStart(2, "0");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  if (formatStr === "MMMM dd, yyyy") {
    return `${months[d.getMonth()]} ${pad(d.getDate())}, ${d.getFullYear()}`;
  }
  if (formatStr === "MMM dd, yyyy") {
    return `${months[d.getMonth()].slice(0, 3)} ${pad(d.getDate())}, ${d.getFullYear()}`;
  }
  return d.toLocaleDateString();
}

const EventDetail = () => {
  const { id } = useParams();
  const [showQR, setShowQR] = useState(false);
  const event = mockEvents.find(item => item.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Event not found</h1>
          <Link to="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getTypeColor = (type) => {
    const colors = {
      'Symposium': 'bg-blue-100 text-blue-800',
      'Workshop': 'bg-green-100 text-green-800',
      'Seminar': 'bg-purple-100 text-purple-800',
      'Cultural': 'bg-orange-100 text-orange-800',
      'Conference': 'bg-red-100 text-red-800',
      'Webinar': 'bg-cyan-100 text-cyan-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getModeColor = (mode) => {
    const colors = {
      'Online': 'bg-green-100 text-green-800',
      'Offline': 'bg-blue-100 text-blue-800',
      'Hybrid': 'bg-purple-100 text-purple-800'
    };
    return colors[mode] || 'bg-gray-100 text-gray-800';
  };

  const addToGoogleCalendar = () => {
    const startDate = new Date(event.date);
    const endDate = event.endDate ? new Date(event.endDate) : new Date(startDate.getTime() + 2 * 60 * 60 * 1000);
    
    const formatDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.venue)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  // Mock data for additional sections
  const agenda = [
    { time: '09:00 AM', activity: 'Registration & Welcome Coffee' },
    { time: '10:00 AM', activity: 'Opening Ceremony' },
    { time: '11:00 AM', activity: 'Keynote Address' },
    { time: '12:30 PM', activity: 'Panel Discussion' },
    { time: '01:30 PM', activity: 'Lunch Break' },
    { time: '02:30 PM', activity: 'Technical Sessions' },
    { time: '04:00 PM', activity: 'Networking & Closing' }
  ];

  const speakers = [
    { name: 'Dr. Rajesh Kumar', designation: 'Professor, IIT Delhi', topic: 'AI in Healthcare' },
    { name: 'Prof. Anita Sharma', designation: 'Director, AIIMS', topic: 'Medical Innovation' },
    { name: 'Mr. Vikram Singh', designation: 'CTO, TechCorp', topic: 'Industry Perspective' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/events">
            <Button variant="outline" size="sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden mb-8">
              {event.images && event.images.length > 0 && (
                <div className="absolute inset-0">
                  <img 
                    src={event.images[0]} 
                    alt={event.title}
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
                </div>
              )}
              
              <div className="relative p-8 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={`${getTypeColor(event.type)} text-white bg-white/20`}>
                    {event.type}
                  </Badge>
                  <Badge className={`${getModeColor(event.mode)} text-white bg-white/20`}>
                    {event.mode}
                  </Badge>
                  {!event.isUpcoming && (
                    <Badge variant="outline" className="text-white border-white/50 border-[1px] border-solid">
                      Completed
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {event.title}
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <div>
                      <div>{format(new Date(event.date), 'MMMM dd, yyyy')}</div>
                      {event.endDate && (
                        <div>to {format(new Date(event.endDate), 'MMM dd, yyyy')}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <div>{event.venue}</div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users size={16} className="mr-2" />
                    <div>{event.organizer}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="agenda">Agenda</TabsTrigger>
                <TabsTrigger value="speakers">Speakers</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    {/* Contact Information */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Phone size={16} className="mr-2 text-blue-600" />
                          <span>+91 120 234 5678</span>
                        </div>
                        <div className="flex items-center">
                          <Mail size={16} className="mr-2 text-blue-600" />
                          <span>events@gbu.ac.in</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agenda">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {agenda.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                          <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium min-w-[80px] text-center">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="speakers">
                <Card>
                  <CardHeader>
                    <CardTitle>Speakers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {speakers.map((speaker, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-lg">{speaker.name}</h4>
                          <p className="text-blue-600 text-sm">{speaker.designation}</p>
                          <p className="text-gray-600 mt-2">{speaker.topic}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gallery">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {event.images && event.images.length > 1 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {event.images.slice(1).map((image, index) => (
                          <div key={index} className="aspect-video overflow-hidden rounded-lg">
                            <img 
                              src={image} 
                              alt={`${event.title} - Image ${index + 2}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">No additional images available for this event.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {event.isUpcoming && event.registrationUrl && (
                    <Button size="lg" className="w-full" asChild>
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} className="mr-2" />
                        Register Now
                      </a>
                    </Button>
                  )}
                  
                  <Button size="lg" variant="outline" className="w-full" onClick={addToGoogleCalendar}>
                    <CalendarPlus size={20} className="mr-2" />
                    Add to Calendar
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full">
                    <Download size={20} className="mr-2" />
                    Download Brochure
                  </Button>
                  
                  <SocialShare 
                    url={window.location.href}
                    title={event.title}
                    className="w-full"
                  />

                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setShowQR(!showQR)}
                  >
                    <QrCode size={20} className="mr-2" />
                    QR Code
                  </Button>

                  {showQR && (
                    <div className="p-4 bg-gray-50 rounded-lg text-center">
                      <div className="w-32 h-32 bg-gray-200 mx-auto rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">QR Code</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Scan to share</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Related Events */}
            <RelatedEvents currentEventId={event.id} />
          </div>
        </div>

        {/* Mobile Floating Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 lg:hidden z-50">
          <div className="flex space-x-2">
            {event.isUpcoming && event.registrationUrl && (
              <Button className="flex-1" asChild>
                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </Button>
            )}
            <Button variant="outline" onClick={addToGoogleCalendar}>
              <CalendarPlus size={16} />
            </Button>
            <SocialShare 
              url={window.location.href}
              title={event.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
