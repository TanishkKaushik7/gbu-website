
import { Link } from 'react-router-dom';
// Card component
const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-gray-50 rounded-lg border border-gray-200 border-solid shadow-sm transition-shadow${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-3 border-b border-gray-100 border-solid${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }) => (
  <h4 className={`font-semibold text-gray-800 ${className}`} {...props}>
    {children}
  </h4>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-3 ${className}`} {...props}>
    {children}
  </div>
);

// Badge component
const Badge = ({ children, className = '', ...props }) => (
  <span
    className={`inline-block px-2 py-0.5 rounded-full font-medium text-xs ${className}`}
    {...props}
  >
    {children}
  </span>
);

// Button component
const Button = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition-colors duration-150';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline:
      'border border-blue-600 text-blue-700 bg-white hover:bg-blue-50',
  };
  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';
// Mock events data
const mockEvents = [
  {
    id: '1',
    title: 'International Symposium on AI',
    type: 'Symposium',
    date: '2024-07-15',
    venue: 'Auditorium A',
    isUpcoming: true,
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    type: 'Workshop',
    date: '2024-07-20',
    venue: 'Lab 3',
    isUpcoming: true,
  },
  {
    id: '3',
    title: 'Quantum Computing Seminar',
    type: 'Seminar',
    date: '2024-08-05',
    venue: 'Room 101',
    isUpcoming: true,
  },
  {
    id: '4',
    title: 'Annual Cultural Fest',
    type: 'Cultural',
    date: '2024-09-10',
    venue: 'Open Grounds',
    isUpcoming: true,
  },
  {
    id: '5',
    title: 'Tech Conference 2024',
    type: 'Conference',
    date: '2024-10-01',
    venue: 'Main Hall',
    isUpcoming: false,
  },
  {
    id: '6',
    title: 'Cloud Computing Webinar',
    type: 'Webinar',
    date: '2024-07-25',
    venue: 'Online',
    isUpcoming: true,
  },
];

import PropTypes from 'prop-types';

const RelatedEvents = ({ currentEventId, maxEvents = 4 }) => {
  const relatedEvents = mockEvents
    .filter(event => event.id !== currentEventId && event.isUpcoming)
    .slice(0, maxEvents);

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

  if (relatedEvents.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Upcoming Events</h3>
        <Link to="/events">
          <Button variant="outline" size="sm">View All</Button>
        </Link>
      </div>
      
      <div className="space-y-4">
        {relatedEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <Badge className={`${getTypeColor(event.type)} text-xs`}>
                  {event.type}
                </Badge>
              </div>
              <CardTitle className="text-sm font-medium line-clamp-2">
                {event.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-1 text-xs text-gray-600 mb-3">
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {format(new Date(event.date), 'MMM dd, yyyy')}
                </div>
                <div className="flex items-center">
                  <MapPin size={12} className="mr-1" />
                  <span className="line-clamp-1">{event.venue}</span>
                </div>
              </div>
              <Link to={`/events/${event.id}`}>
                <Button size="sm" variant="outline" className="w-full text-xs">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedEvents;
RelatedEvents.propTypes = {
  currentEventId: PropTypes.string.isRequired,
  maxEvents: PropTypes.number,
};

