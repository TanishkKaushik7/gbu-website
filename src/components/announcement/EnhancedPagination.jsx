
// Minimal Button component
const Button = ({ variant = "default", size = "md", disabled, onClick, className = "", children }) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

// Minimal Select components
const Select = ({ value, onValueChange, children }) => (
  <div className="relative">{React.Children.map(children, child => React.cloneElement(child, { value, onValueChange }))}</div>
);

const SelectTrigger = ({ children, className = "" }) => (
  <div className={`border border-gray-300 border-solid rounded-md px-3 py-1.5 bg-white cursor-pointer flex items-center${className}`}>
    {children}
  </div>
);

const SelectValue = ({ value }) => (
  <span>{value}</span>
);

const SelectContent = ({ children }) => (
  <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 border-solid rounded-md shadow-lg z-10">
    {children}
  </div>
);

const SelectItem = ({ value, children, onValueChange }) => (
  <div
    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
    onClick={() => onValueChange(value)}
    tabIndex={0}
    role="option"
  >
    {children}
  </div>
);
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

/**
 * @param {{
 *   currentPage: number,
 *   totalPages: number,
 *   totalItems: number,
 *   itemsPerPage: number,
 *   onPageChange: (page: number) => void,
 *   onItemsPerPageChange?: (itemsPerPage: number) => void,
 *   showItemsPerPage?: boolean
 * }} props
 */
const EnhancedPagination = ({ 
  currentPage, 
  totalPages, 
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  showItemsPerPage = true
}) => {
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mt-8 bg-white p-4 rounded-lg shadow-sm">
      {/* Items Info */}
      <div className="text-sm text-gray-600">
        Showing {startItem}-{endItem} of {totalItems} results
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} className="mr-1" />
          Previous
        </Button>

        <div className="flex items-center space-x-1">
          {getVisiblePages().map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <div className="px-3 py-2">
                  <MoreHorizontal size={16} className="text-gray-400" />
                </div>
              ) : (
                <Button
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPageChange(Number(page))}
                  className="min-w-[40px]"
                >
                  {page}
                </Button>
              )}
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight size={16} className="ml-1" />
        </Button>
      </div>

      {/* Items per page selector */}
      {showItemsPerPage && onItemsPerPageChange && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Show:</span>
          <Select value={itemsPerPage.toString()} onValueChange={(value) => onItemsPerPageChange(parseInt(value))}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default EnhancedPagination;
