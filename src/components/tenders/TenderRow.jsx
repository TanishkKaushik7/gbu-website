import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

// Refined Button component with subtle animations & accessible focus
const Button = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 active:scale-[0.97]';
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline:
      'border border-border text-foreground hover:bg-muted hover:text-foreground',
  };
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

const TenderRow = ({ tender }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const isClosingSoon = (dateString) => {
    const closingDate = new Date(dateString);
    const today = new Date();
    const diffTime = closingDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  };

  const isPastDue = (dateString) => {
    return new Date(dateString) < new Date();
  };

  const statusBadge = () => {
    if (isPastDue(tender.closingDate)) {
      return (
        <span className="ml-2 inline-block rounded-full bg-destructive/20 px-2 py-0.5 text-xs font-semibold text-destructive">
          Closed
        </span>
      );
    }
    if (isClosingSoon(tender.closingDate)) {
      return (
        <span className="ml-2 inline-block rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-600">
          Closing Soon
        </span>
      );
    }
    return null;
  };

  return (
    <tr className="hover:bg-muted/40 transition-colors">
      <td className="px-6 py-4 text-sm text-muted-foreground">
        #{String(tender.id).padStart(3, '0')}
      </td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded-sm"
        >
          {tender.title}
          <ExternalLink className="h-4 w-4" />
        </a>
      </td>
      <td className="px-6 py-4 text-sm text-muted-foreground max-w-md">
        {tender.description}
      </td>
      <td className="px-6 py-4">
        <span className="text-sm font-medium text-foreground">
          {formatDate(tender.closingDate)}
        </span>
        {statusBadge()}
      </td>
      <td className="px-6 py-4">
        <Button
          variant="outline"
          size="sm"
          className="gap-1"
          onClick={() => window.open(tender.documentUrl, '_blank')}
        >
          <Download className="h-4 w-4" />
          PDF
        </Button>
      </td>
    </tr>
  );
};

export default TenderRow;
