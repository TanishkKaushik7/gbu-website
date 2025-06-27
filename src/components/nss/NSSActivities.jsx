import React, { useState, useContext, createContext, useEffect } from 'react';
import { Calendar, MapPin, Users, FileText, Camera, Share2, Upload, Download } from 'lucide-react';

// === UI COMPONENTS ===
const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-xl shadow border border-gray-200 p-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`px-6 pt-6 pb-2 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`font-bold text-lg ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>
    {children}
  </div>
);

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400',
  };
  const sizes = {
    sm: 'px-2 py-1 text-xs md:text-sm',
    md: 'px-4 py-2 text-sm md:text-base',
    lg: 'px-6 py-3 text-base md:text-lg',
  };
  return (
    <button
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, className = '', ...props }) => (
  <span className={`inline-block px-2 py-0.5 rounded-full text-xs md:text-sm font-semibold ${className}`} {...props}>
    {children}
  </span>
);

// === DIALOG CONTEXT COMPONENTS ===
const DialogContext = createContext();

const Dialog = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({ children }) => {
  const { setOpen } = useContext(DialogContext);
  return React.cloneElement(children, {
    onClick: (e) => {
      e.stopPropagation();
      setOpen(true);
    },
  });
};

const DialogContent = ({ children }) => {
  const { open, setOpen } = useContext(DialogContext);

  useEffect(() => {
    const handleClose = (e) => {
      if (e.target.classList.contains('nss-dialog-overlay')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
    return () => document.removeEventListener('mousedown', handleClose);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 bg-black/40 nss-dialog-overlay">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
const DialogTitle = ({ children }) => <h3 className="text-lg font-semibold text-gray-900">{children}</h3>;

// === MAIN COMPONENT ===
const NSSActivities = () => {
  const activities = [
    {
      id: 1,
      name: 'Blood Donation Camp',
      date: '2024-01-15',
      venue: 'University Medical Center',
      mode: 'Offline',
      status: 'Completed',
      description: 'Organized a blood donation camp in collaboration with Red Cross Society. Successfully collected 150 units of blood.',
      impact: '150 lives potentially saved through blood donation',
      volunteers: 45,
      photos: 4,
      hasNotice: true,
      hasReport: true,
    },
    {
      id: 2,
      name: 'Digital Literacy Program',
      date: '2024-01-22',
      venue: 'Rural School, Village Rampur',
      mode: 'Offline',
      status: 'Completed',
      description: 'Conducted digital literacy sessions for rural school children, teaching basic computer skills.',
      impact: '200+ children learned basic computer skills',
      volunteers: 25,
      photos: 6,
      hasNotice: true,
      hasReport: true,
    },
    {
      id: 3,
      name: 'Environmental Awareness Drive',
      date: '2024-02-05',
      venue: 'City Park',
      mode: 'Offline',
      status: 'Upcoming',
      description: 'Tree plantation and environmental awareness campaign for local communities.',
      impact: 'Expected to plant 500+ trees',
      volunteers: 60,
      photos: 0,
      hasNotice: true,
      hasReport: false,
    },
    {
      id: 4,
      name: 'Online Mental Health Workshop',
      date: '2024-02-12',
      venue: 'Virtual Platform',
      mode: 'Online',
      status: 'Upcoming',
      description: 'Mental health awareness workshop for university students conducted by professional counselors.',
      impact: 'Mental health support for 300+ students',
      volunteers: 15,
      photos: 0,
      hasNotice: true,
      hasReport: false,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getModeColor = (mode) =>
    mode === 'Online' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800';

  const shareActivity = (activity) => {
    const shareText = `Join us for ${activity.name} on ${activity.date} at ${activity.venue}. #NSS #CommunityService #SocialImpact`;
    const url = encodeURIComponent(window.location.href);
    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      instagram: '#',
    };
  };

  return (
    <div className="space-y-8 py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">NSS Activities</h2>
        <p className="text-lg text-gray-600">
          Explore our community service initiatives and their impact on society
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <Card key={activity.id} className="hover:shadow-lg transition-transform transform hover:-translate-y-1">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl text-gray-900">{activity.name}</CardTitle>
                <div className="flex space-x-2">
                  <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                  <Badge className={getModeColor(activity.mode)}>{activity.mode}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Details */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(activity.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{activity.venue}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{activity.volunteers} Volunteers</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">{activity.description}</p>

              {/* Impact */}
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-1">Impact Summary</h4>
                <p className="text-blue-800 text-sm">{activity.impact}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2">
                {activity.hasNotice && (
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <FileText className="h-3 w-3" />
                    <span>Notice</span>
                  </Button>
                )}
                {activity.photos > 0 && (
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Camera className="h-3 w-3" />
                    <span>Photos ({activity.photos})</span>
                  </Button>
                )}
                {activity.hasReport && (
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Download className="h-3 w-3" />
                    <span>Report</span>
                  </Button>
                )}
                <Dialog>
                  <DialogTrigger>
                    <Button variant="outline" size="sm" className="flex items-center space-x-1">
                      <Share2 className="h-3 w-3" />
                      <span>Share</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Share Activity</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-gray-600">Share "{activity.name}" on social media:</p>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(shareActivity(activity)).map(([platform, url]) => (
                          <Button
                            key={platform}
                            variant="outline"
                            onClick={() => platform !== 'instagram' && window.open(url, '_blank')}
                            disabled={platform === 'instagram'}
                            className="capitalize"
                          >
                            {platform}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Admin Add New */}
      <Card className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Upload className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Add New Activity</h3>
          <p className="text-gray-500 text-center mb-4">Upload event details, photos, and documents</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="h-4 w-4 mr-2" />
            Add Activity
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NSSActivities;
