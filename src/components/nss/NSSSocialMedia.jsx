 import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Share2,
  Users,
  Heart,
  MessageCircle,
} from 'lucide-react';

const Card = ({ className = '', children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`rounded-lg shadow shadow-gray-300 bg-white ${className}`}
  >
    {children}
  </motion.div>
);

const CardContent = ({ className = '', children }) => (
  <div className={`px-4 py-4 sm:px-6 sm:py-6 ${className}`}>{children}</div>
);

const CardHeader = ({ className = '', children }) => (
  <div className={`border-b px-4 py-3 sm:px-6 sm:py-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h4 className={`text-lg font-semibold ${className}`}>{children}</h4>
);

const Button = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50',
    secondary: 'bg-white text-green-600 border border-green-600 hover:bg-green-50',
  };
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${
        sizes[size] || sizes.md
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const NSSSocialMedia = () => {
  const socialHandles = [
    {
      platform: 'Facebook',
      handle: '@UniversityNSS',
      followers: '2.5K',
      link: 'https://facebook.com/universitynss',
      description: 'Updates on events, activities, and community impact',
      color: 'bg-blue-600',
      icon: '📘',
    },
    {
      platform: 'Instagram',
      handle: '@university_nss',
      followers: '3.2K',
      link: 'https://instagram.com/university_nss',
      description: 'Visual stories of our volunteer work and achievements',
      color: 'bg-pink-600',
      icon: '📷',
    },
    {
      platform: 'YouTube',
      handle: 'University NSS',
      followers: '1.8K',
      link: 'https://youtube.com/@universitynss',
      description: 'Training videos, event highlights, and impact stories',
      color: 'bg-red-600',
      icon: '📺',
    },
    {
      platform: 'Twitter',
      handle: '@UniversityNSS',
      followers: '1.2K',
      link: 'https://twitter.com/universitynss',
      description: 'Real-time updates and community engagement',
      color: 'bg-blue-500',
      icon: '🐦',
    },
  ];

  const engagementStats = {
    totalFollowers: 8700,
    monthlyReach: 25000,
    engagementRate: '4.2%',
    postsThisMonth: 24,
  };

  return (
    <div className="space-y-8 mx-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Media Hub</h2>
        <p className="text-lg text-gray-600">
          Connect with us across platforms and stay updated with our latest activities
        </p>
      </motion.div>

      {/* Engagement Statistics */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Social Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{engagementStats.totalFollowers.toLocaleString()}</div>
              <div className="text-blue-100">Total Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{engagementStats.monthlyReach.toLocaleString()}</div>
              <div className="text-blue-100">Monthly Reach</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{engagementStats.engagementRate}</div>
              <div className="text-blue-100">Engagement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{engagementStats.postsThisMonth}</div>
              <div className="text-blue-100">Posts This Month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Handles */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialHandles.map((handle, index) => (
            <Card
              key={index}
              className="hover:shadow-lg shadow-gray-300 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${handle.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}
                >
                  {handle.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{handle.platform}</h4>
                <p className="text-gray-600 mb-2">{handle.handle}</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">{handle.followers}</div>
                <p className="text-sm text-gray-600 mb-4">{handle.description}</p>
                <Button
                  className="w-full"
                  onClick={() => window.open(handle.link, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Follow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NSSSocialMedia;
