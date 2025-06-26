
import React,{ useState } from 'react';
// Minimal UI components defined inline for demonstration purposes.
// In production, use a UI library or your own styled components.

const Input = ({ className = '', ...props }) => (
  <input
    className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${className}`}
    {...props}
  />
);

const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const base =
    'px-4 py-2 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100',
  };
  return (
    <button className={`${base} ${variants[variant] || ''} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Select = ({ children, onValueChange, ...props }) => (
  <select
    className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={e => onValueChange && onValueChange(e.target.value)}
    {...props}
  >
    {children}
  </select>
);

const SelectTrigger = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>{children}</div>
);

const SelectValue = ({ placeholder }) => (
  <option className="hidden" value="" disabled>{placeholder}</option>
);

const SelectContent = ({ children }) => children;

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

// Simple Calendar using input[type="date"]
const Calendar = ({ selected, onSelect, ...props }) => (
  <input
    type="date"
    value={selected ? selected.toISOString().split('T')[0] : ''}
    onChange={e => onSelect && onSelect(e.target.value ? new Date(e.target.value) : null)}
    className="border rounded px-2 py-1"
    {...props}
  />
);

// Simple Popover using a label and absolute positioning

const Popover = ({ children }) => <div className="relative">{children}</div>;

const PopoverTrigger = ({ asChild, children, ...props }) => {
  // asChild is ignored for this simple implementation
  return React.cloneElement(children, props);
};

const PopoverContent = ({ children, className = '', align = 'start', ...props }) => {
  // Simple absolute dropdown
  return (
    <div
      className={`absolute z-10 mt-2 bg-white border rounded shadow-lg ${className}`}
      style={{ minWidth: 200 }}
      {...props}
    >
      {children}
    </div>
  );
};
import { CalendarIcon, Search } from 'lucide-react';
import { format } from 'date-fns';
// Utility function to join class names conditionally
function cn(...args) {
  return args
    .flat()
    .filter(Boolean)
    .join(' ');
}

import PropTypes from 'prop-types';

const SearchFilter = ({
  onSearch,
  onDateFilter,
  onTypeFilter,
  onYearFilter,
  types = [],
  years = [],
  placeholder = "Search..."
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleDateChange = (date, isStart) => {
    if (isStart) {
      setStartDate(date || null);
      onDateFilter(date || null, endDate);
    } else {
      setEndDate(date || null);
      onDateFilter(startDate, date || null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Date Filters */}
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[140px] justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "MMM dd") : "Start Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate || undefined}
                  onSelect={(date) => handleDateChange(date, true)}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[140px] justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "MMM dd") : "End Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate || undefined}
                  onSelect={(date) => handleDateChange(date, false)}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button type="submit">Search</Button>
        </div>

        {/* Additional Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          {types.length > 0 && onTypeFilter && (
            <Select onValueChange={onTypeFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {years.length > 0 && onYearFilter && (
            <Select onValueChange={onYearFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;
SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onDateFilter: PropTypes.func.isRequired,
  onTypeFilter: PropTypes.func,
  onYearFilter: PropTypes.func,
  types: PropTypes.arrayOf(PropTypes.string),
  years: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
};

