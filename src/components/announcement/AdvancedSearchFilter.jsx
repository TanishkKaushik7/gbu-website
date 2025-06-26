
import { useState } from 'react';
const Input = ({ className = '', ...props }) => (
  <input
    className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition ${className}`}
    {...props}
  />
);

const Button = ({ children, variant = "default", size = "md", className = '', ...props }) => {
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary bg-white hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200"
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    sm: "px-3 py-1 text-xs"
  };
  return (
    <button
      className={`rounded-md font-medium transition ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Select = ({ value, onValueChange, children, className = '', ...props }) => (
  <select
    value={value}
    onChange={e => onValueChange?.(e.target.value)}
    className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition ${className}`}
    {...props}
  >
    {children}
  </select>
);

const SelectTrigger = ({ children, className = '', ...props }) => (
  <div className={`relative ${className}`} {...props}>{children}</div>
);

const SelectValue = ({ placeholder }) => (
  <span className="text-gray-500">{placeholder}</span>
);

const SelectContent = ({ children }) => <>{children}</>;

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

const Calendar = ({ selected, onSelect, mode = "single", initialFocus }) => {
  // Simple date picker using input[type=date]
  return (
    <input
      type="date"
      value={selected ? new Date(selected).toISOString().slice(0, 10) : ''}
      onChange={e => onSelect?.(e.target.value ? new Date(e.target.value) : null)}
      className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
};

const Popover = ({ children }) => <div className="relative">{children}</div>;
const PopoverTrigger = ({ asChild, children }) => children;
const PopoverContent = ({ children, className = '', align }) => (
  <div className={`absolute z-50 mt-2 bg-white border rounded-md shadow-lg p-2 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = "default", className = '', ...props }) => {
  const variants = {
    default: "bg-primary text-white",
    outline: "border border-primary text-primary bg-white",
    secondary: "bg-gray-200 text-gray-700"
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${variants[variant] || ''} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
import { CalendarIcon, Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { format } from 'date-fns';
// Utility function to join class names conditionally
function cn(...args) {
  return args
    .flatMap(arg => {
      if (!arg) return [];
      if (typeof arg === 'string') return [arg];
      if (Array.isArray(arg)) return arg;
      if (typeof arg === 'object') {
        return Object.entries(arg)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}

// PropTypes will be used for prop validation below

const AdvancedSearchFilter = ({
  onSearch,
  onDateFilter,
  onTypeFilter,
  onYearFilter,
  onSortChange,
  types = [],
  years = [],
  placeholder = "Search...",
  currentSort = 'newest',
  tags = [],
  onTagFilter,
  selectedTags = []
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const clearFilters = () => {
    setSearchQuery('');
    setStartDate(null);
    setEndDate(null);
    onSearch('');
    onDateFilter(null, null);
    onTypeFilter?.('all');
    onYearFilter?.('all');
    selectedTags.forEach(tag => onTagFilter?.(tag));
  };

  const hasActiveFilters = searchQuery || startDate || endDate || selectedTags.length > 0;

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'alphabetical', label: 'A-Z' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md mb-6 sticky top-20 z-40">
      <div className="p-4">
        {/* Main Search Bar */}
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
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

            {/* Sort Dropdown */}
            {onSortChange && (
              <Select value={currentSort} onValueChange={onSortChange}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {/* Filter Toggle */}
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal size={16} />
              Filters
              {hasActiveFilters && (
                <Badge variant="secondary" className="ml-1">
                  {selectedTags.length + (searchQuery ? 1 : 0) + (startDate || endDate ? 1 : 0)}
                </Badge>
              )}
            </Button>

            <Button type="submit">Search</Button>
          </div>

          {/* Expanded Filters */}
          {isFilterOpen && (
            <div className="border-t pt-4 space-y-4">
              {/* Date Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full sm:w-[150px] justify-start text-left font-normal",
                          !startDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "MMM dd, yyyy") : "Start Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate || undefined}
                        onSelect={(date) => handleDateChange(date, true)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full sm:w-[150px] justify-start text-left font-normal",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "MMM dd, yyyy") : "End Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate || undefined}
                        onSelect={(date) => handleDateChange(date, false)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Type and Year Filters */}
                <div className="flex gap-2">
                  {types.length > 0 && onTypeFilter && (
                    <Select onValueChange={onTypeFilter}>
                      <SelectTrigger className="w-full sm:w-[150px]">
                        <SelectValue placeholder="Type" />
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
                      <SelectTrigger className="w-full sm:w-[150px]">
                        <SelectValue placeholder="Year" />
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
              </div>

              {/* Tag Cloud */}
              {tags.length > 0 && onTagFilter && (
                <div>
                  <div className="text-sm font-medium mb-2">Tags:</div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/80"
                        onClick={() => onTagFilter(tag)}
                      >
                        {tag}
                        {selectedTags.includes(tag) && (
                          <X size={12} className="ml-1" />
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X size={16} className="mr-2" />
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdvancedSearchFilter;
import PropTypes from 'prop-types';

AdvancedSearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onDateFilter: PropTypes.func.isRequired,
  onTypeFilter: PropTypes.func,
  onYearFilter: PropTypes.func,
  onSortChange: PropTypes.func,
  types: PropTypes.arrayOf(PropTypes.string),
  years: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  currentSort: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onTagFilter: PropTypes.func,
  selectedTags: PropTypes.arrayOf(PropTypes.string),
};

