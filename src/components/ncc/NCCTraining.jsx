import React, { useState } from 'react';
// Card, CardContent, CardHeader, CardTitle, Button, Badge components (responsive, minimal styling)
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow border ${className}`}>{children}</div>
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
    "inline-flex items-center justify-center rounded px-3 py-1.5 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-900 text-white hover:bg-blue-800",
    outline:
      "border border-blue-900 text-blue-900 bg-white hover:bg-blue-50",
  };
  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
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
  variant = "solid",
  ...props
}) => {
  const base =
    "inline-block rounded-full px-2 py-0.5 text-xs font-semibold";
  const variants = {
    solid: "bg-blue-900 text-white",
    outline: "border border-blue-900 text-blue-900 bg-white",
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
import { Calendar, MapPin, Users, FileText, Share2, Shield, Target } from 'lucide-react';

const NCCTraining = () => {
  const camps = [/* ... unchanged camp data ... */];

  const trainingModules = [/* ... unchanged module data ... */];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Registration Open': return 'bg-orange-100 text-orange-800';
      case 'Planning': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Foundation': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Training & Camps</h2>
        <p className="text-lg text-gray-600">
          Comprehensive military training programs to develop discipline, leadership, and character
        </p>
      </div>

      {/* Training Camps */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Shield className="h-6 w-6 mr-2 text-blue-900" />
          Training Camps
        </h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {camps.map((camp) => (
            <Card key={camp.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-gray-900">{camp.title}</CardTitle>
                  <div className="flex space-x-2">
                    <Badge className={getStatusColor(camp.status)}>{camp.status}</Badge>
                    <Badge className="bg-blue-900 text-white">{camp.type}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Camp Details */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(camp.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}{' '}
                      • {camp.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{camp.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{camp.enrolled}/{camp.capacity} enrolled</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {camp.description}
                </p>

                {/* Progress Bar */}
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(camp.enrolled / camp.capacity) * 100}%` }}
                  ></div>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Training Activities:</h4>
                  <div className="flex flex-wrap gap-1">
                    {camp.activities.map((activity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {camp.requirements.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Target className="h-3 w-3 text-orange-600" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <FileText className="h-3 w-3" />
                    <span>Guidelines</span>
                  </Button>

                  {camp.status === 'Registration Open' && (
                    <Button size="sm" className="bg-blue-900 hover:bg-blue-800">
                      Apply Now
                    </Button>
                  )}

                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Share2 className="h-3 w-3" />
                    <span>Share</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Training Modules */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Target className="h-6 w-6 mr-2 text-orange-600" />
          Training Modules
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingModules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{module.title}</h4>
                  <Badge className={getLevelColor(module.level)}>{module.level}</Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-900">{module.duration}</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Training Statistics */}
      <Card className="bg-gradient-to-r from-blue-900 to-orange-600 text-white">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Training Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">120</div>
              <div className="text-blue-100">Training Periods/Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Camps Organized</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Cadets Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Completion Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Training Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Before Training</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Complete medical fitness certificate</li>
                <li>• Submit required documents</li>
                <li>• Attend briefing session</li>
                <li>• Arrange proper NCC uniform</li>
                <li>• Get parent/guardian consent</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">During Training</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Follow all safety protocols</li>
                <li>• Maintain discipline and punctuality</li>
                <li>• Actively participate in all activities</li>
                <li>• Respect instructors and fellow cadets</li>
                <li>• Keep training diary updated</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NCCTraining;
