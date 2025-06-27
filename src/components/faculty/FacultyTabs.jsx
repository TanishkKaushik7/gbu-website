// import React from 'react';
// import PropTypes from 'prop-types';

// const FacultyTabs = ({ tabItems, activeTab, onTabChange }) => {
//   return (
//     <section className="bg-blue-900 text-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-wrap">
//             {tabItems.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => onTabChange(tab.id)}
//                 className={`px-4 py-4 text-xs font-medium transition-colors border-b-2 ${
//                   activeTab === tab.id
//                     ? 'border-white border-[1px] border-solid bg-blue-800'
//                     : 'border-transparent hover:bg-blue-800'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// FacultyTabs.propTypes = {
//   tabItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   activeTab: PropTypes.string.isRequired,
//   onTabChange: PropTypes.func.isRequired,
// };

// export default FacultyTabs;



import React from 'react';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Settings, 
  Beaker, 
  Users, 
  FileText, 
  Award, 
  Badge, 
  Mic,
  Trophy,
  Heart
} from 'lucide-react';

// Simple `cn` helper if you're not using a library
const cn = (...classes) => classes.filter(Boolean).join(' ');

const tabs = [
  { id: 'overview', label: 'Overview', icon: User },
  { id: 'qualifications', label: 'Qualifications', icon: GraduationCap },
  { id: 'teaching', label: 'Teaching', icon: BookOpen },
  { id: 'administration', label: 'Administration', icon: Settings },
  { id: 'research-projects', label: 'Research Projects', icon: Beaker },
  { id: 'research-group', label: 'Research Group', icon: Users },
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'patents', label: 'Patents', icon: Award },
  { id: 'certifications', label: 'Certifications', icon: Badge },
  { id: 'talks', label: 'Invited Talks', icon: Mic },
  { id: 'awards', label: 'Awards', icon: Trophy },
  { id: 'social-impact', label: 'Social Impact', icon: Heart },
];

// ✅ Proper functional component with props
const FacultyTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="sticky w-5/6 mx-auto top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200 border-solid mb-8">
      <div className="overflow-x-auto">
        <div className="flex space-x-1 min-w-max p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap",
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-102"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FacultyTabs;
