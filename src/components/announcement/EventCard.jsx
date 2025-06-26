
import { Link } from 'react-router-dom';
// Card component
const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow border ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const CardTitle = ({ className = '', children }) => (
  <h3 className={`text-xl font-bold ${className}`}>{children}</h3>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

// Badge component
const Badge = ({ className = '', variant, children }) => {
  const base = "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium";
  const outline = "border border-gray-300 bg-white text-gray-800";
  return (
    <span className={`${base} ${variant === "outline" ? outline : ""} ${className}`}>
      {children}
    </span>
  );
};

// Button component
const Button = ({ size = "md", variant = "default", asChild, className = '', children, ...props }) => {
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50"
  };
  const classes = `inline-flex items-center rounded transition ${sizes[size] || sizes.md} ${variants[variant] || variants.default} ${className}`;
  if (asChild) {
    // expects children to be a single element (like <a>)
    return React.cloneElement(children, {
      className: `${classes} ${children.props.className || ''}`,
      ...props
    });
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { EventItem } from '@/data/mockData';
import SocialShare from './SocialShare';

import PropTypes from 'prop-types';

const EventCard = ({ event, isPastEvent = false }) => {
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

  return (
    <Card className={`hover:shadow-lg transition-shadow ${isPastEvent ? 'opacity-90' : ''}`}>
      {event.images && event.images.length > 0 && (
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img 
            src={event.images[0]} 
            alt={event.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge className={getTypeColor(event.type)}>
            {event.type}
          </Badge>
          <Badge className={getModeColor(event.mode)}>
            {event.mode}
          </Badge>
          {isPastEvent && <Badge variant="outline">Completed</Badge>}
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2">
          {event.title}
        </CardTitle>
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar size={14} className="mr-2" />
            {format(new Date(event.date), 'MMM dd, yyyy')}
            {event.endDate && ` - ${format(new Date(event.endDate), 'MMM dd, yyyy')}`}
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-2" />
            {event.venue}
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-2" />
            {event.organizer}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to={`/events/${event.id}`}>
            <Button size="sm" variant={isPastEvent ? "outline" : "default"}>
              View Details
            </Button>
          </Link>
          {event.registrationUrl && !isPastEvent && (
            <Button size="sm" variant="outline" asChild>
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} className="mr-2" />
                Register
              </a>
            </Button>
          )}
          <SocialShare 
            url={`${window.location.origin}/events/${event.id}`}
            title={event.title}
            className={isPastEvent ? "" : "ml-auto"}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
    endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    venue: PropTypes.string.isRequired,
    organizer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    registrationUrl: PropTypes.string,
  }).isRequired,
  isPastEvent: PropTypes.bool,
};

