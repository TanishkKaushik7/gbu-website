import { Link } from 'react-router-dom';

// Card component
const Card = ({ className = '', children }) => (
  <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50/60 to-white">{children}</div>
);

const CardTitle = ({ className = '', children }) => (
  <h3 className={`text-2xl font-extrabold tracking-tight text-gray-900 ${className}`}>{children}</h3>
);

const CardContent = ({ children }) => (
  <div className="p-6">{children}</div>
);

// Badge component
const Badge = ({ className = '', variant, children }) => {
  const base = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-sm";
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
    sm: "px-4 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg"
  };
  const variants = {
    default: "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50"
  };
  const classes = `inline-flex items-center rounded-full transition font-semibold ${sizes[size] || sizes.md} ${variants[variant] || variants.default} ${className}`;
  if (asChild) {
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
import SocialShare from './SocialShare';
import PropTypes from 'prop-types';

const shimmer =
  "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse";

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
    <Link to={`/announcements/event-calendar/${event.id}`} className="block">
      <Card className={`hover:shadow-2xl transition-shadow duration-300 ${isPastEvent ? 'opacity-80 grayscale' : ''}`}>
        {event.images && event.images.length > 0 ? (
          <div className="aspect-video w-full overflow-hidden relative group">
            <img
              src={event.images[0]}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          <div className={`aspect-video w-full ${shimmer} rounded-t-2xl`} />
        )}

        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className={getTypeColor(event.type)}>
              {event.type}
            </Badge>
            <Badge className={getModeColor(event.mode)}>
              {event.mode}
            </Badge>
            {isPastEvent && <Badge variant="outline">Completed</Badge>}
          </div>
          <CardTitle className="line-clamp-2">
            {event.title}
          </CardTitle>
          <div className="space-y-1 text-sm text-gray-600 mt-2">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-blue-500" />
              <span>
                {format(new Date(event.date), 'MMM dd, yyyy')}
                {event.endDate && ` - ${format(new Date(event.endDate), 'MMM dd, yyyy')}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-rose-500" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-green-500" />
              <span>{event.organizer}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-gray-700 mb-5 line-clamp-4 leading-relaxed">
            {event.description}
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Button>View Details</Button>

            {event.registrationUrl && !isPastEvent && (
              <Button size="sm" variant="outline" asChild>
                <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Register
                </a>
              </Button>
            )}

            <div className="ml-auto">
              <SocialShare
                url={`${window.location.origin}/events/${event.id}`}
                title={event.title}
                className="!ml-0"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
