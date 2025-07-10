import React, { useState, useRef } from "react";
import { Share2, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

// Button component
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

// Popover system
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
      className={`absolute right-0 z-50 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-4 ${className}`}
      style={{ minWidth: "10rem" }}
    >
      {children}
    </div>
  );
};

// ✅ Correct brand colors
const SocialShare = ({ url, title, className = "" }) => {
  const shareData = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const socialButtons = [
    {
      name: 'WhatsApp',
      url: shareData.whatsapp,
      color: 'bg-[#25D366] hover:bg-[#1DA851]', // WhatsApp green
      icon: <MessageCircle size={16} />
    },
    {
      name: 'Facebook',
      url: shareData.facebook,
      color: 'bg-[#1877F2] hover:bg-[#155DBF]', // Facebook blue
      icon: <Facebook size={16} />
    },
    {
      name: 'Twitter',
      url: shareData.twitter,
      color: 'bg-[#1DA1F2] hover:bg-[#0d8ddb]', // Twitter blue
      icon: <Twitter size={16} />
    },
    {
      name: 'LinkedIn',
      url: shareData.linkedin,
      color: 'bg-[#0A66C2] hover:bg-[#004182]', // LinkedIn blue
      icon: <Linkedin size={16} />
    }
  ];

  return (
    <SearchableWrapper>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className={`flex items-center gap-2 ${className}`}>
          <Share2 size={16} />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="space-y-2">
          {socialButtons.map((social) => (
            <Button
              key={social.name}
              className={`w-full  flex items-center gap-2 justify-center ${social.color} transition-transform hover:scale-[1.02] active:scale-[0.98]`}
              size="sm"
              onClick={() => window.open(social.url, '_blank')}
            >
              {social.icon}
              {social.name}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
    </SearchableWrapper>
  );
};

export default SocialShare;
