import React, { useState } from 'react';
import { Calendar, Users, Award, FileText, Camera, Upload, Share2, Mail } from 'lucide-react';
// Minimal UI components defined in this file for usage below

const Button = ({ children, className = '', ...props }) => (
  <button
    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-600 text-white hover:bg-blue-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-b ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h2 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h2>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

const Tabs = ({ value, onValueChange, children, className = '', ...props }) => {
  // Pass value and onValueChange via context
  const [active, setActive] = React.useState(value);
  React.useEffect(() => setActive(value), [value]);
  return (
    <TabsContext.Provider value={{ active, setActive: onValueChange }}>
      <div className={className} {...props}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsContext = React.createContext();

const TabsList = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>{children}</div>
);

const TabsTrigger = ({ value, children, className = '', ...props }) => {
  const ctx = React.useContext(TabsContext);
  const isActive = ctx.active === value;
  return (
    <button
      className={`transition-colors border-b-2 ${isActive ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-700 hover:bg-gray-100'} font-medium focus:outline-none ${className}`}
      onClick={() => ctx.setActive(value)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, ...props }) => {
  const ctx = React.useContext(TabsContext);
  if (ctx.active !== value) return null;
  return <div {...props}>{children}</div>;
};

const Badge = ({ children, className = '', ...props }) => (
  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800 ${className}`} {...props}>
    {children}
  </span>
);
import NSSIntroduction from '../../components/nss/NSSIntroduction';
import NSSStructure from '../../components/nss/NSSStructure';
import NSSActivities from '../../components/nss/NSSActivities';
import NSSRegistration from '../../components/nss/NSSRegistration';
import NSSEvents from '../../components/nss/NSSEvents';
import NSSAchievements from '../../components/nss/NSSAchievements';
import NSSResources from '../../components/nss/NSSResources';
import NSSGallery from '../../components/nss/NSSGallery';
import NSSSocialMedia from '../../components/nss/NSSSocialMedia';

const NSS = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">National Service Scheme</h1>
          <p className="text-2xl font-light mb-6">"Not Me, But You"</p>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>500+ Volunteers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span>50+ Events</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6" />
              <span>10,000+ Service Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-9 h-auto p-1">
              <TabsTrigger value="overview" className="text-xs lg:text-sm py-3">Overview</TabsTrigger>
              <TabsTrigger value="structure" className="text-xs lg:text-sm py-3">Structure</TabsTrigger>
              <TabsTrigger value="activities" className="text-xs lg:text-sm py-3">Activities</TabsTrigger>
              <TabsTrigger value="register" className="text-xs lg:text-sm py-3">Register</TabsTrigger>
              <TabsTrigger value="events" className="text-xs lg:text-sm py-3">Events</TabsTrigger>
              <TabsTrigger value="achievements" className="text-xs lg:text-sm py-3">Achievements</TabsTrigger>
              <TabsTrigger value="resources" className="text-xs lg:text-sm py-3">Resources</TabsTrigger>
              <TabsTrigger value="gallery" className="text-xs lg:text-sm py-3">Gallery</TabsTrigger>
              <TabsTrigger value="social" className="text-xs lg:text-sm py-3">Social</TabsTrigger>
            </TabsList>

            <div className="py-8">
              <TabsContent value="overview">
                <NSSIntroduction />
              </TabsContent>

              <TabsContent value="structure">
                <NSSStructure />
              </TabsContent>

              <TabsContent value="activities">
                <NSSActivities />
              </TabsContent>

              <TabsContent value="register">
                <NSSRegistration />
              </TabsContent>

              <TabsContent value="events">
                <NSSEvents />
              </TabsContent>

              <TabsContent value="achievements">
                <NSSAchievements />
              </TabsContent>

              <TabsContent value="resources">
                <NSSResources />
              </TabsContent>

              <TabsContent value="gallery">
                <NSSGallery />
              </TabsContent>

              <TabsContent value="social">
                <NSSSocialMedia />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default NSS;
