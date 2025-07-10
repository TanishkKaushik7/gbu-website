 import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Share2,
  Users,
  Heart,
  MessageCircle,
  Shield,
  Award
} from 'lucide-react';

const Card = ({ className = '', children }) => (
  <div className={`rounded-xl shadow bg-white ${className}`}>{children}</div>
);

const CardContent = ({ className = '', children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Button = ({ className = '', children, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 rounded-md bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 w-auto ${className}`}
    {...props}
  >
    {children}
  </button>
);

const NCCSocialMedia = () => {
  const socialHandles = [
    {
      platform: 'Facebook',
      handle: '@UniversityNCC',
      followers: '1.8K',
      link: 'https://facebook.com/universityncc',
      description: 'Updates on training, camps, and achievements',
      color: 'bg-blue-600',
      icon: '📘'
    },
    {
      platform: 'Instagram',
      handle: '@university_ncc_cadets',
      followers: '2.3K',
      link: 'https://instagram.com/university_ncc_cadets',
      description: 'Visual stories of cadet life and training',
      color: 'bg-pink-600',
      icon: '📷'
    },
    {
      platform: 'YouTube',
      handle: 'University NCC Wing',
      followers: '1.2K',
      link: 'https://youtube.com/@universityncc',
      description: 'Training videos and camp documentaries',
      color: 'bg-red-600',
      icon: '📺'
    },
    {
      platform: 'Twitter',
      handle: '@UniversityNCC',
      followers: '950',
      link: 'https://twitter.com/universityncc',
      description: 'Real-time updates and announcements',
      color: 'bg-blue-500',
      icon: '🐦'
    }
  ];

  const engagementStats = {
    totalFollowers: 6300,
    monthlyReach: 18000,
    engagementRate: '5.8%',
    postsThisMonth: 18
  };

  return (
    <motion.div
      className="space-y-12 mx-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Social Media Hub</h2>
        <p className="text-lg text-gray-600">
          Stay connected with NCC activities and share our journey of discipline and service
        </p>
      </motion.div>

      {/* Engagement Statistics */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl shadow"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Digital Presence</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              ['Total Followers', engagementStats.totalFollowers.toLocaleString()],
              ['Monthly Reach', engagementStats.monthlyReach.toLocaleString()],
              ['Engagement Rate', engagementStats.engagementRate],
              ['Posts This Month', engagementStats.postsThisMonth]
            ].map(([label, value], index) => (
              <motion.div
                key={index}
                className="hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold mb-2">{value}</div>
                <div className="text-blue-100">{label}</div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </motion.div>

      {/* Social Media Handles */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialHandles.map((handle, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${handle.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
                    {handle.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{handle.platform}</h4>
                  <p className="text-gray-600 mb-2">{handle.handle}</p>
                  <div className="text-2xl font-bold text-orange-600 mb-4">{handle.followers}</div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NCCSocialMedia;
