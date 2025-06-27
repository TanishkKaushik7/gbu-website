
import React, { useState } from 'react';
// Minimal custom UI components for Card, Badge, and Button with Tailwind CSS

// Card Component
const Card = ({ className = "", children }) => (
  <div className={`bg-white rounded-xl border border-gray-200 border-solid shadow-sm${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 pt-6 pb-2 border-b border-gray-100 border-solid">{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h2 className={`font-semibold text-lg ${className}`}>{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="px-6 pb-6 pt-4">{children}</div>
);

// Badge Component
const Badge = ({ className = "", variant = "default", children }) => {
  const base =
    "inline-flex items-center px-2 py-0.5 rounded-full font-medium transition-colors duration-150";
  const variants = {
    default: "bg-blue-100 text-blue-800",
    outline: "bg-white border border-blue-300 text-blue-700",
  };
  return (
    <span className={`${base} ${variants[variant] || ""} ${className}`}>
      {children}
    </span>
  );
};

// Button Component
const Button = ({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors";
  const variants = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    outline:
      "bg-white border border-blue-600 text-blue-700 hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { Filter, Calendar, DollarSign, FileText, Download } from 'lucide-react';

export const ResearchProjectsTab = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      title: "AI-Driven Cybersecurity Framework for IoT Networks",
      fundingAgency: "Department of Science & Technology (DST)",
      role: "Principal Investigator",
      duration: "2023 - 2026",
      budget: "₹12,50,000",
      status: "ongoing",
      description: "Development of machine learning algorithms for real-time threat detection and prevention in Internet of Things networks.",
      collaborators: ["Dr. Rajesh Singh", "Dr. Priya Sharma"],
      deliverables: [
        "Novel ML algorithms for IoT security",
        "Research publications in top-tier journals",
        "Patent filing for developed framework",
        "Training of 2 PhD students"
      ]
    },
    {
      title: "Sentiment Analysis for Social Media Mental Health Monitoring",
      fundingAgency: "Indian Council of Medical Research (ICMR)",
      role: "Co-Principal Investigator",
      duration: "2022 - 2024",
      budget: "₹8,75,000",
      status: "ongoing",
      description: "Advanced NLP techniques for early detection of mental health issues through social media content analysis.",
      collaborators: ["Dr. Anita Verma", "Dr. Suresh Kumar"],
      deliverables: [
        "Mental health monitoring system",
        "Dataset of annotated social media posts",
        "Clinical validation studies",
        "Mobile application prototype"
      ]
    },
    {
      title: "Recommendation Systems for E-Learning Platforms",
      fundingAgency: "University Grants Commission (UGC)",
      role: "Principal Investigator",
      duration: "2021 - 2023",
      budget: "₹6,25,000",
      status: "completed",
      description: "Personalized learning path recommendation using collaborative filtering and content-based approaches.",
      collaborators: ["Dr. Neha Gupta"],
      deliverables: [
        "Recommendation engine prototype",
        "Conference proceedings",
        "Industry partnership with EdTech company",
        "Training of 3 M.Tech students"
      ]
    }
  ];

  const filteredProjects = filterStatus === 'all' 
    ? projects 
    : projects.filter(project => project.status === filterStatus);

  const getStatusColor = (status) => {
    return status === 'ongoing' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="text-2xl text-gray-900">Research Projects</CardTitle>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex gap-2">
                {['all', 'ongoing', 'completed'].map((status) => (
                  <Button
                    key={status}
                    variant={filterStatus === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterStatus(status)}
                    className="text-xs"
                  >
                    {status === 'all' ? 'All Projects' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">
                          <span className="font-medium">Funding Agency:</span> {project.fundingAgency}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Role:</span> {project.role}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="font-medium">Duration:</span> {project.duration}
                        </p>
                        <p className="text-gray-600 flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          <span className="font-medium">Budget:</span> {project.budget}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200 border-solid">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Collaborators:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.collaborators.map((collaborator, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {collaborator}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {project.deliverables.slice(0, 2).map((deliverable, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Statistics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Project Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{projects.length}</div>
              <div className="text-sm text-blue-700">Total Projects</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {projects.filter(p => p.status === 'ongoing').length}
              </div>
              <div className="text-sm text-green-700">Ongoing Projects</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">₹27.5L</div>
              <div className="text-sm text-purple-700">Total Funding</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-sm text-orange-700">Collaborators</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
