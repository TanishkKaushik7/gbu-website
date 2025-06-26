
import React, { useState, useRef } from "react";

// Simple Button component with Tailwind styling
const Button = ({ children, className = "", size = "md", variant = "default", ...props }) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  const variantClasses = {
    default: "bg-gray-100 hover:bg-gray-200 text-gray-900",
    outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900"
  };
  return (
    <button
      className={`rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Popover components
const PopoverContext = React.createContext();

const Popover = ({ children }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  );
};

const PopoverTrigger = ({ asChild, children }) => {
  const { setOpen, triggerRef } = React.useContext(PopoverContext);
  const child = React.Children.only(children);
  const props = {
    ref: triggerRef,
    onClick: (e) => {
      setOpen((o) => !o);
      if (child.props.onClick) child.props.onClick(e);
    }
  };
  return asChild
    ? React.cloneElement(child, props)
    : <button {...props}>{children}</button>;
};

const PopoverContent = ({ children, className = "" }) => {
  const { open, setOpen, triggerRef } = React.useContext(PopoverContext);
  const contentRef = useRef(null);

  // Close popover when clicking outside
  React.useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, setOpen, triggerRef]);

  if (!open) return null;
  return (
    <div
      ref={contentRef}
      className={`absolute z-50 mt-2 right-0 bg-white border border-gray-200 rounded shadow-lg animate-fade-in ${className}`}
      style={{ minWidth: "10rem" }}
    >
      {children}
    </div>
  );
};
import { Share2 } from 'lucide-react';


/**
 * @param {{ url: string, title: string, className?: string }} props
 */
const SocialShare = ({ url, title, className = "" }) => {
  const shareData = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const socialButtons = [
    { name: 'WhatsApp', url: shareData.whatsapp, color: 'bg-green-500 hover:bg-green-600' },
    { name: 'Facebook', url: shareData.facebook, color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Twitter', url: shareData.twitter, color: 'bg-blue-400 hover:bg-blue-500' },
    { name: 'LinkedIn', url: shareData.linkedin, color: 'bg-blue-700 hover:bg-blue-800' }
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className={className}>
          <Share2 size={16} className="mr-2" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="space-y-2">
          {socialButtons.map((social) => (
            <Button
              key={social.name}
              className={`w-full text-white ${social.color}`}
              size="sm"
              onClick={() => window.open(social.url, '_blank')}
            >
              {social.name}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SocialShare;
