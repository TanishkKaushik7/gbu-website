import React from 'react';
import { motion } from 'framer-motion';
import { Slot } from "@radix-ui/react-slot";
import { Download, FileText, Newspaper, Calendar, File, Archive } from 'lucide-react';

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

function cva(base, config) {
  return ({ variant, size, className }) => {
    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }[variant || config.defaultVariants.variant];

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }[size || config.defaultVariants.size];

    return cn(base, variantClasses, sizeClasses, className);
  };
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

const RecruitmentContent = ({ tabId }) => {
  const baseData = {
    professors: { ref: 'GBU/Admn/2025/01', date: '15 May 2025', title: "Advertisement of Professor's" },
    retired: { ref: 'GBU/Admn/2025/02', date: '15 May 2025', title: "Advertisement of Professor's (Retired)" },
    associate: { ref: 'GBU/Admn/2025/03', date: '20 May 2025', title: "Advertisement of Associate Professor's" },
    assistant: { ref: 'GBU/Admn/2025/04', date: '22 May 2025', title: "Advertisement of Assistant Professor's" },
    assistants: { ref: 'GBU/Admn/2025/05', date: '15 May 2025', title: "Advertisement for Assistants" },
    interns: { ref: 'GBU/Admn/2025/06', date: '15 May 2025', title: "Advertisement for Interns" },
    workers: { ref: 'GBU/Admn/2025/07', date: '15 May 2025', title: "Advertisement of Workers" },
  };

  const archivedData = {
    archived2023: { ref: 'GBU/Admn/2023/01', date: '10 Jan 2023', title: "Archived Professor Recruitment 2023" },
    archived2022: { ref: 'GBU/Admn/2022/05', date: '12 Aug 2022', title: "Archived Associate Recruitment 2022" },
    archived2021: { ref: 'GBU/Admn/2021/12', date: '05 Dec 2021', title: "Archived Staff Recruitment 2021" },
  };

  const isArchived = tabId.startsWith('archived');
  const tabData = isArchived ? archivedData[tabId] || archivedData.archived2023 : baseData[tabId] || baseData.professors;

  const documents = [
    { name: "Extension Notice", icon: <Calendar className="w-4 h-4" /> },
    { name: "Detailed Advertisement", icon: <FileText className="w-4 h-4" /> },
    { name: "Newspaper Publication", icon: <Newspaper className="w-4 h-4" /> },
    { name: "Application Form (PDF)", icon: <File className="w-4 h-4" /> },
    { name: "Application Form (Word)", icon: <Download className="w-4 h-4" /> },
  ];

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-muted/30 rounded-lg px-4 py-3">
        <h3 className="text-lg font-semibold mb-1">{tabData.title}</h3>
        <p className="text-sm text-muted-foreground">{tabData.ref} | Dt: {tabData.date}</p>
      </div>

      <div className="overflow-hidden rounded-lg shadow-2xl border-2 border-gray-300 bg-card">
        <div className="bg-gradient-to-r from-muted/60 to-muted/40 px-4 py-3 border-b-2 border-b-gray-300  grid grid-cols-2 gap-4">
          <h4 className="font-semibold text-sm">Description</h4>
          <h4 className="font-semibold text-sm text-center">Download Link</h4>
        </div>
        <div className="divide-y divide-border-gray">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-2 gap-4 px-4 py-3 border-b-2 border-b-gray-300 hover:bg-gray-400 hover:text-white ${
                index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
              } hover:bg-muted/20`}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-primary">{doc.icon}</span>
                <span className="text-sm font-medium">{doc.name}</span>
              </div>
              <div className="flex justify-center">
                <Button
                  size="sm"
                  className={`${
                    isArchived
                      ? 'bg-gray-500 hover:bg-gray-600'
                      : 'bg-sky-500 hover:bg-sky-600'
                  } text-white rounded-full px-4 py-1 text-xs font-medium`}
                >
                  {isArchived ? 'View Archive' : 'View Details'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RecruitmentContent;
