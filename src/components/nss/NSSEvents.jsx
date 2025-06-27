import React, { useState } from 'react';
// Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`border-b px-6 py-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

// Button component
const Button = ({ children, onClick, variant = "solid", size = "md", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500";
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
  };
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Badge component
const Badge = ({ children, className = "" }) => (
  <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${className}`}>{children}</span>
);
import { Calendar, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
const Select = ({ value, onValueChange, children }) => (
  <div className="relative">
    <select
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      value={value}
      onChange={e => onValueChange(e.target.value)}
    >
      {React.Children.map(children, child => {
        if (child.type === SelectContent) {
          return child.props.children;
        }
        return null;
      })}
    </select>
  </div>
);

const SelectTrigger = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const SelectValue = ({ placeholder }) => (
  <option value="" disabled hidden>{placeholder}</option>
);

const SelectContent = ({ children }) => <>{children}</>;

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

const NSSEvents = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filterMonth, setFilterMonth] = useState('all');
  const [filterYear, setFilterYear] = useState('2024');
  const [filterCategory, setFilterCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Blood Donation Camp',
      date: new Date(2024, 0, 15),
      category: 'Health',
      status: 'completed',
      description: 'Annual blood donation drive'
    },
    {
      id: 2,
      title: 'Tree Plantation Drive',
      date: new Date(2024, 1, 5),
      category: 'Environment',
      status: 'upcoming',
      description: 'Environmental conservation initiative'
    },
    {
      id: 3,
      title: 'Digital Literacy Program',
      date: new Date(2024, 1, 12),
      category: 'Education',
      status: 'upcoming',
      description: 'Teaching digital skills to rural communities'
    },
    {
      id: 4,
      title: 'Cleanliness Drive',
      date: new Date(2024, 1, 20),
      category: 'Community',
      status: 'upcoming',
      description: 'Community cleaning initiative'
    },
    {
      id: 5,
      title: 'Health Awareness Camp',
      date: new Date(2024, 2, 8),
      category: 'Health',
      status: 'upcoming',
      description: 'Health checkup and awareness program'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Health': 'bg-red-100 text-red-800',
      'Education': 'bg-purple-100 text-purple-800',
      'Environment': 'bg-green-100 text-green-800',
      'Community': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const getEventsForDate = (day) => {
    return events.filter(event =>
      event.date.getDate() === day &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const filteredEvents = events.filter(event => {
    const monthMatch = filterMonth === 'all' || event.date.getMonth() === parseInt(filterMonth);
    const yearMatch = event.date.getFullYear() === parseInt(filterYear);
    const categoryMatch = filterCategory === 'all' || event.category === filterCategory;
    return monthMatch && yearMatch && categoryMatch;
  });

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(day);
      days.push(
        <div key={day} className="h-24 border border-gray-200 p-1 overflow-hidden hover:bg-gray-50">
          <div className="font-semibold text-sm text-gray-900">{day}</div>
          <div className="space-y-1 mt-1">
            {dayEvents.slice(0, 2).map(event => (
              <div
                key={event.id}
                className={`text-xs px-1 py-0.5 rounded text-white text-center truncate ${
                  event.status === 'completed' ? 'bg-green-500' :
                  event.status === 'upcoming' ? 'bg-blue-500' : 'bg-red-500'
                }`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 text-center">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Events Calendar</h2>
        <p className="text-lg text-gray-600">
          Stay updated with upcoming NSS events and activities
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>

            <Select value={filterMonth} onValueChange={setFilterMonth}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Months</SelectItem>
                <SelectItem value="0">January</SelectItem>
                <SelectItem value="1">February</SelectItem>
                <SelectItem value="2">March</SelectItem>
                <SelectItem value="3">April</SelectItem>
                <SelectItem value="4">May</SelectItem>
                <SelectItem value="5">June</SelectItem>
                <SelectItem value="6">July</SelectItem>
                <SelectItem value="7">August</SelectItem>
                <SelectItem value="8">September</SelectItem>
                <SelectItem value="9">October</SelectItem>
                <SelectItem value="10">November</SelectItem>
                <SelectItem value="11">December</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterYear} onValueChange={setFilterYear}>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Environment">Environment</SelectItem>
                <SelectItem value="Community">Community</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">
                  {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => navigateMonth(-1)}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigateMonth(1)}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-0 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="h-8 flex items-center justify-center font-semibold text-gray-700 bg-gray-100">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0 border border-gray-200">
                {renderCalendar()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event List */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredEvents.slice(0, 6).map(event => (
                <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {event.date.toLocaleDateString('en-IN')}
                    </span>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm">Upcoming Events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm">Completed Events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm">Cancelled Events</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NSSEvents;
