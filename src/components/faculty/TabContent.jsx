
// import React from 'react';
// import { 
//   GraduationCap, 
//   Briefcase, 
//   Users, 
//   FileText, 
//   Award, 
//   Globe, 
//   Trophy, 
//   Heart 
// } from 'lucide-react';

// /**
//  * @typedef {Object} Faculty
//  * @property {string} bio
//  * @property {string[]} qualifications
//  * @property {string[]} experiences
//  * @property {string[]} courses
//  * @property {string[]} administrations
//  * @property {string[]} researchInterests
//  * @property {string[]} projects
//  * @property {string[]} researchGroup
//  * @property {Array<{title: string, journal: string, year: number}>} recentPublications
//  * @property {string[]} patents
//  * @property {string[]} certifications
//  * @property {string[]} invitedTalks
//  * @property {string[]} achievements
//  * @property {string[]} socialImpact
//  */

// /**
//  * @typedef {Object} TabContentProps
//  * @property {string} activeTab
//  * @property {Faculty} faculty
//  */

// const TabContent = ({ activeTab, faculty }) => {
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'overview':
//         return (
//           <div className="space-y-8">
//             <div className="bg-white rounded-lg p-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">ABOUT THE FACULTY</h2>
//               <div className="prose max-w-none text-gray-600 leading-relaxed">
//                 {faculty.bio.split('\n\n').map((paragraph, index) => (
//                   <p key={index} className="mb-4">{paragraph}</p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       case 'qualifications':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">QUALIFICATIONS</h2>
//             <div className="space-y-4">
//               {faculty.qualifications.map((qualification, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                   <span className="text-gray-700">{qualification}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'experiences':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">PROFESSIONAL EXPERIENCE</h2>
//             <div className="space-y-4">
//               {faculty.experiences.map((experience, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <Briefcase className="w-5 h-5 text-green-600 flex-shrink-0" />
//                   <span className="text-gray-700">{experience}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'teaching':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">COURSES TAUGHT</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {faculty.courses.map((course, index) => (
//                 <div key={index} className="bg-gray-50 rounded-lg p-4">
//                   <span className="text-gray-700 font-medium">{course}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'administrations':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">ADMINISTRATIVE ROLES</h2>
//             <div className="space-y-4">
//               {faculty.administrations.map((admin, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
//                   <span className="text-gray-700">{admin}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'research':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-lg p-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">RESEARCH INTERESTS</h2>
//               <div className="flex flex-wrap gap-3">
//                 {faculty.researchInterests.map((interest, index) => (
//                   <span key={index} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
//                     {interest}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-white rounded-lg p-8 shadow-sm">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">CURRENT RESEARCH PROJECTS</h2>
//               <div className="space-y-4">
//                 {faculty.projects.map((project, index) => (
//                   <div key={index} className="border-l-4 border-blue-600 pl-6">
//                     <span className="text-gray-700">{project}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       case 'researchGroup':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">RESEARCH GROUP</h2>
//             <div className="space-y-4">
//               {faculty.researchGroup.map((member, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                   <span className="text-gray-700">{member}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'publications':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">RECENT PUBLICATIONS</h2>
//             <div className="space-y-6">
//               {faculty.recentPublications.map((pub, index) => (
//                 <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
//                   <h3 className="font-semibold text-gray-800 mb-2">{pub.title}</h3>
//                   <p className="text-gray-600">{pub.journal}, {pub.year}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'patents':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">PATENTS</h2>
//             <div className="space-y-4">
//               {faculty.patents.map((patent, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <FileText className="w-5 h-5 text-orange-600 flex-shrink-0" />
//                   <span className="text-gray-700">{patent}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'certifications':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">CERTIFICATIONS</h2>
//             <div className="space-y-4">
//               {faculty.certifications.map((cert, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
//                   <span className="text-gray-700">{cert}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'invitedTalks':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">INVITED TALKS</h2>
//             <div className="space-y-4">
//               {faculty.invitedTalks.map((talk, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <Globe className="w-5 h-5 text-indigo-600 flex-shrink-0" />
//                   <span className="text-gray-700">{talk}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'achievements':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">AWARDS & ACHIEVEMENTS</h2>
//             <div className="space-y-4">
//               {faculty.achievements.map((achievement, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <Trophy className="w-5 h-5 text-yellow-600 flex-shrink-0" />
//                   <span className="text-gray-700">{achievement}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       case 'socialImpact':
//         return (
//           <div className="bg-white rounded-lg p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">SOCIAL IMPACT</h2>
//             <div className="space-y-4">
//               {faculty.socialImpact.map((impact, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <Heart className="w-5 h-5 text-red-600 flex-shrink-0" />
//                   <span className="text-gray-700">{impact}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section className="py-12 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {renderTabContent()}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TabContent;



import React from 'react';
import  OverviewTab  from './tabs/OverviewTab';
import { QualificationsTab } from './tabs/QualificationsTab';
import { TeachingTab } from './tabs/TeachingTab';
import { AdministrationTab } from './tabs/AdministrationTab';
import { ResearchProjectsTab } from './tabs/ResearchProjectsTab';
import { ResearchGroupTab } from './tabs/ResearchGroupTab';
import { PublicationsTab } from './tabs/PublicationsTab';
import { PatentsTab } from './tabs/PatentsTab';
import { CertificationsTab } from './tabs/CertificationsTab';
import { TalksTab } from './tabs/TalksTab';
import { AwardsTab } from './tabs/AwardsTab';
import { SocialImpactTab } from './tabs/SocialImpactTab';


const TabContent = ({ activeTab , profile}) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab profile={profile}/>;
      case 'qualifications':
        return <QualificationsTab />;
      case 'teaching':
        return <TeachingTab />;
      case 'administration':
        return <AdministrationTab />;
      case 'research-projects':
        return <ResearchProjectsTab />;
      case 'research-group':
        return <ResearchGroupTab />;
      case 'publications':
        return <PublicationsTab />;
      case 'patents':
        return <PatentsTab />;
      case 'certifications':
        return <CertificationsTab />;
      case 'talks':
        return <TalksTab />;
      case 'awards':
        return <AwardsTab />;
      case 'social-impact':
        return <SocialImpactTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="animate-fade-in w-5/6 mx-auto">
      {renderContent()}
    </div>
  );
};

export default TabContent;
