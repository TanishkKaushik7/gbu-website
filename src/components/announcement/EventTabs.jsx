
// Minimal Tabs components for usage in this file only
const Tabs = ({ value, onValueChange, children, className }) => (
  <div className={className}>{children}</div>
);

const TabsList = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const TabsTrigger = ({ value, children }) => (
  <button type="button">{children}</button>
);

const TabsContent = ({ value, children }) => (
  <div>{children}</div>
);

// Minimal EventItem type for usage in this file only
/**
 * @typedef {Object} EventItem
 * @property {string|number} id
 * @property {any} [key]
 */
import EventCard from './EventCard';

/**
 * @typedef {Object} EventTabsProps
 * @property {string} activeTab
 * @property {(tab: string) => void} onTabChange
 * @property {EventItem[]} upcomingEvents
 * @property {EventItem[]} pastEvents
 * @property {EventItem[]} currentEvents
 */

/** @param {EventTabsProps} props */
const EventTabs = ({
  activeTab,
  onTabChange,
  upcomingEvents,
  pastEvents,
  currentEvents
}) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="upcoming">Upcoming Events ({upcomingEvents.length})</TabsTrigger>
        <TabsTrigger value="past">Past Events ({pastEvents.length})</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="past">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event) => (
            <EventCard key={event.id} event={event} isPastEvent />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default EventTabs;
