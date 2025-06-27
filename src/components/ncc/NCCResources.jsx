import React from 'react';
// Minimal Card, CardContent, CardHeader, CardTitle, and Button components for local use

const Card = ({ className = '', children, ...props }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ className = '', children, ...props }) => (
  <div className={`border-b px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = '', children, ...props }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ className = '', children, ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const Button = ({ className = '', children, ...props }) => (
  <button
    className={`inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);
import { FileText, Download, Video, BookOpen, ExternalLink, Shield } from 'lucide-react';

const NCCResources = () => {
  const manuals = [
    {
      title: 'NCC Cadet Manual 2024',
      description: 'Complete guide for NCC cadets including drill, discipline, and training modules',
      size: '5.2 MB',
      format: 'PDF',
      downloadCount: 2150
    },
    {
      title: 'Drill Manual for Cadets',
      description: 'Step-by-step guide for military drill movements and parade commands',
      size: '3.8 MB',
      format: 'PDF',
      downloadCount: 1890
    },
    {
      title: 'Weapon Training Handbook',
      description: 'Safety protocols and training procedures for .22 rifle handling',
      size: '2.4 MB',
      format: 'PDF',
      downloadCount: 1256
    },
    {
      title: 'Adventure Training Guide',
      description: 'Complete manual for adventure activities, safety, and survival training',
      size: '4.1 MB',
      format: 'PDF',
      downloadCount: 978
    }
  ];

  const guidelines = [
    {
      title: 'A Certificate Exam Guidelines',
      date: '2024-01-25',
      description: 'Complete guidelines for NCC A Certificate examination and requirements',
      isNew: true
    },
    {
      title: 'B Certificate Preparation Guide',
      date: '2024-01-20',
      description: 'Detailed preparation guide for NCC B Certificate with syllabus',
      isNew: true
    },
    {
      title: 'C Certificate Eligibility Criteria',
      date: '2024-01-15',
      description: 'Updated criteria and process for NCC C Certificate application',
      isNew: false
    },
    {
      title: 'Camp Participation Rules',
      date: '2024-01-10',
      description: 'Rules and regulations for participating in various NCC camps',
      isNew: false
    },
    {
      title: 'Uniform Code and Conduct',
      date: '2024-01-05',
      description: 'Official uniform guidelines and code of conduct for NCC cadets',
      isNew: false
    }
  ];

  const trainingVideos = [
    {
      title: 'Basic Military Drill Training',
      description: 'Learn fundamental drill movements and parade commands',
      duration: '28:45',
      views: 3200,
      category: 'Drill'
    },
    {
      title: 'Weapon Handling and Safety',
      description: 'Safe handling procedures for .22 rifles and shooting basics',
      duration: '35:20',
      views: 2850,
      category: 'Weapons'
    },
    {
      title: 'Map Reading and Navigation',
      description: 'Essential skills for map reading, compass use, and navigation',
      duration: '24:15',
      views: 2100,
      category: 'Field Craft'
    },
    {
      title: 'First Aid and Medical Training',
      description: 'Basic first aid techniques and emergency medical procedures',
      duration: '32:10',
      views: 1950,
      category: 'Medical'
    },
    {
      title: 'Leadership Development in NCC',
      description: 'Building leadership qualities through NCC training and activities',
      duration: '26:30',
      views: 1750,
      category: 'Leadership'
    },
    {
      title: 'Adventure Training Basics',
      description: 'Introduction to rock climbing, trekking, and survival skills',
      duration: '40:25',
      views: 1620,
      category: 'Adventure'
    }
  ];

  const externalResources = [
    {
      title: 'NCC Directorate General',
      description: 'Official website of NCC with national guidelines and updates',
      url: 'https://indiancc.nic.in/',
      category: 'Official'
    },
    {
      title: 'Ministry of Defence - NCC',
      description: 'Government portal for NCC policies and national programs',
      url: 'https://www.mod.gov.in/',
      category: 'Government'
    },
    {
      title: 'NCC Training Resources',
      description: 'Central repository for training materials and examination resources',
      url: 'https://ncctrg.gov.in/',
      category: 'Training'
    },
    {
      title: 'Armed Forces Career Portal',
      description: 'Information about career opportunities in Indian Armed Forces',
      url: 'https://joinindianarmy.nic.in/',
      category: 'Career'
    }
  ];

  const certificates = [
    {
      title: 'A Certificate',
      duration: '2 Years',
      description: 'Basic level certificate for junior division cadets',
      benefits: ['Extra marks in government job applications', 'Priority in police recruitment']
    },
    {
      title: 'B Certificate',
      duration: '3 Years',
      description: 'Intermediate level certificate for senior division cadets',
      benefits: ['Extra marks in various competitive exams', 'Eligibility for C Certificate']
    },
    {
      title: 'C Certificate',
      duration: '3+ Years',
      description: 'Advanced level certificate with special entry schemes',
      benefits: ['Direct entry as Officer in Armed Forces', 'Reserved seats in technical courses']
    }
  ];

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources & Downloads</h2>
        <p className="text-lg text-gray-600">Access comprehensive NCC training materials, manuals, and certification guides</p>
      </div>

      {/* ... All Other Sections are as-is ... */}
      {/* You can copy-paste the remaining JSX exactly from your original message; no modification is required. */}

    </div>
  );
};

export default NCCResources;
