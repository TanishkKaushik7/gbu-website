
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SocialShare from '../../components/announcement/SocialShare';
// Button component
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-blue-500",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
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

// Badge component
const Badge = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-200 text-gray-700",
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
import { ArrowLeft } from 'lucide-react';
// Mock news data
const mockNews = [
  {
    id: "1",
    title: "University Launches New Research Center",
    date: "2024-06-01",
    author: "Admin",
    image: "https://source.unsplash.com/random/800x400?university",
    tags: ["Research", "Innovation"],
    content: "The university has inaugurated a state-of-the-art research center focused on interdisciplinary studies and innovation.",
  },
  {
    id: "2",
    title: "Annual Sports Meet Concludes Successfully",
    date: "2024-05-20",
    author: "Sports Desk",
    image: "https://source.unsplash.com/random/800x400?sports",
    tags: ["Sports", "Events"],
    content: "The annual sports meet witnessed enthusiastic participation from students and faculty, making it a grand success.",
  },
  {
    id: "3",
    title: "Guest Lecture on Artificial Intelligence",
    date: "2024-05-10",
    author: "Faculty",
    image: "https://source.unsplash.com/random/800x400?ai",
    tags: ["AI", "Lecture"],
    content: "A renowned expert delivered an insightful lecture on the latest trends in Artificial Intelligence.",
  },
];

// Simple date formatting function (similar to date-fns format)
function format(date, formatStr) {
  const d = new Date(date);
  const options = {};
  if (formatStr.includes('MMMM')) options.month = 'long';
  if (formatStr.includes('MMM')) options.month = 'short';
  if (formatStr.includes('dd')) options.day = '2-digit';
  if (formatStr.includes('yyyy')) options.year = 'numeric';
  return d.toLocaleDateString(undefined, options);
}

const NewsDetail = () => {
  const { id } = useParams();
  const news = mockNews.find(item => item.id === id);

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">News not found</h1>
          <Link to="/news">
            <Button>Back to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = mockNews.findIndex(item => item.id === id);
  const previousNews = currentIndex > 0 ? mockNews[currentIndex - 1] : null;
  const nextNews = currentIndex < mockNews.length - 1 ? mockNews[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/news">
            <Button variant="outline" size="sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to News
            </Button>
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {news.image && (
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {news.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {news.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-gray-600">
              <div className="mb-2 sm:mb-0">
                <p>{format(new Date(news.date), 'MMMM dd, yyyy')} • By {news.author}</p>
              </div>
              <SocialShare 
                url={window.location.href}
                title={news.title}
              />
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {news.content}
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 gap-4">
          {previousNews ? (
            <Link to={`/news/${previousNews.id}`} className="flex-1">
              <Button variant="outline" className="w-full text-left">
                <ArrowLeft size={16} className="mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Previous</div>
                  <div className="line-clamp-1">{previousNews.title}</div>
                </div>
              </Button>
            </Link>
          ) : <div className="flex-1" />}
          
          {nextNews ? (
            <Link to={`/news/${nextNews.id}`} className="flex-1">
              <Button variant="outline" className="w-full text-right">
                <div>
                  <div className="text-xs text-gray-500">Next</div>
                  <div className="line-clamp-1">{nextNews.title}</div>
                </div>
                <ArrowLeft size={16} className="ml-2 rotate-180" />
              </Button>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
