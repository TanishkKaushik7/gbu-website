
import React, { useState } from 'react';
// Card Components
const Card = ({ className = '', children }) => (
  <div className={`rounded-xl border bg-white ${className} shadow-sm`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 pt-6 pb-2 border-b border-gray-100 border-solid">{children}</div>
);

const CardTitle = ({ className = '', children }) => (
  <h2 className={`font-bold ${className}`}>{children}</h2>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

// Button Component
const Button = ({
  variant = 'solid',
  className = '',
  children,
  onClick,
  ...props
}) => {
  let base =
    'inline-flex items-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition';
  let variants = {
    solid:
      'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    outline:
      'bg-transparent border border-gray-300 text-gray-900 hover:bg-gray-50',
    ghost:
      'bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100',
  };
  let padding = 'px-4 py-2';
  let style = variants[variant] || variants.solid;
  return (
    <button
      className={`${base} ${style} ${padding} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export const OverviewTab = () => {
  const [expanded, setExpanded] = useState(false);

  const shortBio = "Dr. Gaurav Kumar is a distinguished Professor specializing in Machine Learning, Recommendation Systems, and Cyber Security. With over 3 years of academic experience, he has made significant contributions to the field of computer science and artificial intelligence.";
  
  const fullBio = `${shortBio} His research focuses on developing innovative algorithms for decision support systems and sentiment analysis. Dr. Kumar has published extensively in top-tier conferences and journals, contributing to the advancement of machine learning techniques and their practical applications.

He is passionate about bridging the gap between theoretical research and real-world applications, particularly in the areas of cybersecurity and data analytics. His interdisciplinary approach combines computer science with domain-specific knowledge to create impactful solutions for contemporary challenges.

Dr. Kumar is also actively involved in academic administration and student mentorship, guiding the next generation of researchers and practitioners in the field of computer science.`;

  return (
    <div className="space-y-6">
      {/* Bio Section */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900">About Dr. Gaurav Kumar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {expanded ? fullBio : shortBio}
            </p>
            <Button
              variant="ghost"
              onClick={() => setExpanded(!expanded)}
              className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Read Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Read More
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Research Areas */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Research Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Machine Learning",
                description: "Advanced algorithms and deep learning techniques for complex problem solving"
              },
              {
                title: "Recommendation Systems",
                description: "Intelligent systems for personalized content and product recommendations"
              },
              {
                title: "Decision Support Systems",
                description: "AI-powered tools for strategic decision making in various domains"
              },
              {
                title: "Sentiment Analysis",
                description: "Natural language processing for emotion and opinion mining"
              },
              {
                title: "Cyber Security",
                description: "Machine learning approaches to threat detection and prevention"
              }
            ].map((area, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-2">{area.title}</h3>
                <p className="text-sm text-blue-700">{area.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Curriculum Vitae", icon: ExternalLink, color: "blue" },
              { label: "Google Scholar", icon: ExternalLink, color: "green" },
              { label: "ORCID Profile", icon: ExternalLink, color: "purple" },
              { label: "LinkedIn", icon: ExternalLink, color: "indigo" }
            ].map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className={`h-auto p-4 justify-start bg-gradient-to-br from-${link.color}-50 to-${link.color}-100 border-${link.color}-200 hover:from-${link.color}-100 hover:to-${link.color}-150 transition-all duration-200`}
              >
                <link.icon className="w-4 h-4 mr-2" />
                <span className="text-sm">{link.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
