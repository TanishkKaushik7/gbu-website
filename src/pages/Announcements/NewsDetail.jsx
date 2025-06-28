import { useParams, Link } from 'react-router-dom';
import Header from '../../components/announcement/Header';
import SocialShare from '../../components/announcement/SocialShare';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';

// Button component
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "bg-transparent border border-blue-200 text-blue-700 hover:bg-blue-50 focus:ring-blue-500",
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
    accent: "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow",
  };
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// Mock news data
const mockNews = [
  {
    id: 1,
    title: "University Launches New Research Center",
    date: "2024-06-01",
    author: "Admin",
    image: "https://source.unsplash.com/random/800x400?university",
    tags: ["Research", "Innovation"],
    content: "The university has inaugurated a state-of-the-art research center focused on interdisciplinary studies and innovation.",
  },
  {
    id: 2,
    title: "Annual Sports Meet Concludes Successfully",
    date: "2024-05-20",
    author: "Sports Desk",
    image: "https://source.unsplash.com/random/800x400?sports",
    tags: ["Sports", "Events"],
    content: "The annual sports meet witnessed enthusiastic participation from students and faculty, making it a grand success.",
  },
  {
    id: 3,
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
const news = mockNews.find(item => item.id === Number(id));




  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* <Header /> */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-extrabold text-blue-800 mb-4">News not found</h1>
          <Link to="/announcements/news-notifications">
            <Button size="lg" variant="primary" className="mt-4">
              <ArrowLeft size={18} className="mr-2" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

 
const currentIndex = mockNews.findIndex(item => item.id === Number(id));
const previousNews = currentIndex > 0 ? mockNews[currentIndex - 1] : null;
const nextNews = currentIndex < mockNews.length - 1 ? mockNews[currentIndex + 1] : null;


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* <Header />/ */}

      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="mb-8">
          <Link to="/announcements/news-notifications">
            <Button variant="outline" size="sm" className="group">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition" />
              Back to News
            </Button>
          </Link>
        </div>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 transition hover:shadow-blue-200">
          {news.image && (
            <div className="relative aspect-video w-full overflow-hidden group">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
          )}

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-5">
              {news.tags.map((tag) => (
                <Badge key={tag} variant="accent">
                  #{tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow">
              {news.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 text-blue-700/80 gap-2">
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar size={16} className="text-blue-400" />
                  {format(new Date(news.date), 'MMMM dd, yyyy')}
                </span>
                <span className="hidden sm:inline-block h-4 w-px bg-blue-200 mx-2" />
                <span className="flex items-center gap-1">
                  <User size={16} className="text-blue-400" />
                  {news.author}
                </span>
              </div>
              <SocialShare
                url={window.location.href}
                title={news.title}
              />
            </div>

            <div className="prose max-w-none text-blue-900 prose-lg">
              <p className="text-lg leading-relaxed font-medium">
                {news.content}
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch mt-10 gap-4">
          {previousNews ? (
            <Link to={`/announcements/news-notifications/${previousNews.id}`} className='flex-1'>


              <Button
                variant="outline"
                className="w-full text-left flex items-center gap-3 border-blue-200 hover:border-blue-400 group"
              >
                <ArrowLeft size={18} className="mr-2 text-blue-400 group-hover:-translate-x-1 transition" />
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Previous</div>
                  <div className="line-clamp-1 font-medium text-blue-800">{previousNews.title}</div>
                </div>
              </Button>
            </Link>
          ) : <div className="flex-1" />}

          {nextNews ? (
            <Link to={`/announcements/news-notifications/${nextNews.id}`} className="flex-1">
              <Button
                variant="outline"
                className="w-full text-right flex items-center gap-3 justify-end border-blue-200 hover:border-blue-400 group"
              >
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Next</div>
                  <div className="line-clamp-1 font-medium text-blue-800">{nextNews.title}</div>
                </div>
                <ArrowRight size={18} className="ml-2 text-blue-400 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
