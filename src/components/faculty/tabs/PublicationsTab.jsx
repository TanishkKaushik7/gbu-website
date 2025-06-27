
import React, { useState } from 'react';
// Card Components
const Card = ({ className = '', children }) => (
  <div className={`rounded-xl bg-white border shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children }) => (
  <div className="border-b px-6 py-4 bg-gradient-to-r from-gray-50 to-white rounded-t-xl">{children}</div>
);
const CardTitle = ({ className = '', children }) => (
  <h2 className={`font-semibold text-lg ${className}`}>{children}</h2>
);
const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

// Badge Component
const Badge = ({ className = '', variant = '', children }) => {
  const base =
    'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium transition-colors duration-200';
  const variants = {
    outline: 'border border-gray-300 bg-white text-gray-700',
    solid: 'bg-gray-100 text-gray-800',
  };
  return (
    <span className={`${base} ${variants[variant] || ''} ${className}`}>
      {children}
    </span>
  );
};

// Button Component
const Button = ({
  className = '',
  variant = 'default',
  size = 'md',
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline:
      'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-400',
  };
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  return (
    <button
      className={`${base} ${variants[variant] || ''} ${sizes[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
import { Filter, Calendar, ExternalLink, Download, FileText } from 'lucide-react';

export const PublicationsTab = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const publications = [
    {
      title: "Deep Learning Approaches for Cybersecurity in IoT Networks: A Comprehensive Survey",
      authors: "G. Kumar, P. Sharma, R. Singh",
      venue: "IEEE Transactions on Network and Service Management",
      year: 2024,
      type: "journal",
      doi: "10.1109/TNSM.2024.1234567",
      citations: 45,
      quartile: "Q1",
      impactFactor: 4.682
    },
    {
      title: "Sentiment Analysis for Mental Health Monitoring: A Multi-Modal Deep Learning Framework",
      authors: "G. Kumar, A. Verma, S. Patel",
      venue: "Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing",
      year: 2024,
      type: "conference",
      doi: "10.18653/v1/2024.emnlp-main.123",
      citations: 23,
      ranking: "A*"
    },
    {
      title: "Context-Aware Recommendation Systems for Personalized E-Learning",
      authors: "G. Kumar, N. Gupta, R. Kumar",
      venue: "Computers & Education",
      year: 2023,
      type: "journal",
      doi: "10.1016/j.compedu.2023.104567",
      citations: 67,
      quartile: "Q1",
      impactFactor: 6.757
    },
    {
      title: "Machine Learning-Based Intrusion Detection for Smart Home IoT Devices",
      authors: "G. Kumar, P. Sharma",
      venue: "2023 IEEE International Conference on Communications",
      year: 2023,
      type: "conference",
      doi: "10.1109/ICC45041.2023.9234567",
      citations: 34,
      ranking: "A"
    },
    {
      title: "Federated Learning for Privacy-Preserving Recommendation Systems",
      authors: "G. Kumar, A. Verma, S. Singh",
      venue: "ACM Transactions on Intelligent Systems and Technology",
      year: 2023,
      type: "journal",
      doi: "10.1145/3567890.1234567",
      citations: 89,
      quartile: "Q1",
      impactFactor: 3.971
    },
    {
      title: "Explainable AI for Cybersecurity: A Systematic Literature Review",
      authors: "G. Kumar, R. Singh, P. Sharma",
      venue: "IEEE Security & Privacy",
      year: 2022,
      type: "journal",
      doi: "10.1109/MSEC.2022.1234567",
      citations: 156,
      quartile: "Q1",
      impactFactor: 2.293
    }
  ];

  const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
  const types = [...new Set(publications.map(p => p.type))];

  const filteredPublications = publications.filter(pub => {
    const yearMatch = selectedYear === 'all' || pub.year.toString() === selectedYear;
    const typeMatch = selectedType === 'all' || pub.type === selectedType;
    return yearMatch && typeMatch;
  });

  const getTypeColor = (type) => {
    return type === 'journal' 
      ? 'bg-blue-100 text-blue-800' 
      : 'bg-green-100 text-green-800';
  };

  const getQuartileColor = (quartile) => {
    switch (quartile) {
      case 'Q1': return 'bg-purple-100 text-purple-800';
      case 'Q2': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRankingColor = (ranking) => {
    switch (ranking) {
      case 'A*': return 'bg-red-100 text-red-800';
      case 'A': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="text-2xl text-gray-900 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-blue-600" />
              Publications
            </CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="border border-gray-300 border-solid rounded px-3 py-1 text-sm"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="border border-gray-300 border-solid rounded px-3 py-1 text-sm"
                >
                  <option value="all">All Types</option>
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPublications.map((publication, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 border-solid hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                      {publication.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-2">{publication.authors}</p>
                    <p className="text-blue-600 font-medium mb-3">{publication.venue}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className={getTypeColor(publication.type)}>
                        {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                      </Badge>
                      
                      {publication.quartile && (
                        <Badge className={getQuartileColor(publication.quartile)}>
                          {publication.quartile}
                        </Badge>
                      )}
                      
                      {publication.ranking && (
                        <Badge className={getRankingColor(publication.ranking)}>
                          {publication.ranking}
                        </Badge>
                      )}
                      
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {publication.year}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span><strong>Citations:</strong> {publication.citations}</span>
                      {publication.impactFactor && (
                        <span><strong>Impact Factor:</strong> {publication.impactFactor}</span>
                      )}
                      <span><strong>DOI:</strong> {publication.doi}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Paper
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Publication Statistics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Publication Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{publications.length}</div>
              <div className="text-sm text-blue-700">Total Publications</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200 border-solid">
              <div className="text-2xl font-bold text-green-600">
                {publications.filter(p => p.type === 'journal').length}
              </div>
              <div className="text-sm text-green-700">Journal Papers</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center border border-purple-200 border-solid">
              <div className="text-2xl font-bold text-purple-600">
                {publications.reduce((sum, pub) => sum + pub.citations, 0)}
              </div>
              <div className="text-sm text-purple-700">Total Citations</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200 border-solid">
              <div className="text-2xl font-bold text-orange-600">
                {(publications.reduce((sum, pub) => sum + pub.citations, 0) / publications.length).toFixed(1)}
              </div>
              <div className="text-sm text-orange-700">Citations per Paper</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
