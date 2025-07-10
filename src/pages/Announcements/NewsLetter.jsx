import { useState, useMemo } from 'react';
import SearchFilter from '../../components/announcement/SearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import Pagination from '../../components/announcement/Pagination';
import { Download, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '../../hooks/use-toast';

// Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 border-solid hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-5 border-b border-gray-100 border-solid bg-gradient-to-r from-blue-50/60 to-white">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-gray-800 tracking-tight ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 ${className}`}>{children}</p>
);

const CardContent = ({ children }) => (
  <div className="p-5 flex flex-col flex-grow">{children}</div>
);

// Button
const Button = ({ children, type = "button", variant = "primary", size = "md", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl transition focus:outline-none focus:ring-2 focus:ring-blue-500";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 shadow",
    outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 shadow",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Input
const Input = ({ className = "", ...props }) => (
  <input className={`block w-full rounded-xl border border-gray-300 border-solid px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 shadow-inner${className}`} {...props} />
);

// Badge
const Badge = ({ children, variant = "outline", className = "" }) => {
  const variants = {
    outline: "border border-blue-600 text-blue-600 bg-white",
    new: "bg-gradient-to-r from-green-400 to-green-600 text-white animate-pulse shadow-lg",
  };
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide ${variants[variant] || ""} ${className}`}>
      {children}
    </span>
  );
};

// === ✅ Realistic mock newsletters ===
const mockNewsletters = [
  {
    id: 1,
    title: "GBU Spring Fest 2025",
    issueNumber: "Vol. 15, Issue 1",
    date: "2025-03-15",
    coverImage: "https://images.unsplash.com/photo-1559767940-9c3ee07f09b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Highlights of GBU's Spring Fest 2025 — cultural nights, inter-university competitions, and student showcases.",
    pdfLink: "/newsletters/spring-fest-2025.pdf"
  },
  {
    id: 2,
    title: "Annual Convocation 2024",
    issueNumber: "Vol. 14, Issue 4",
    date: "2024-12-10",
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "A glimpse into GBU's 14th Convocation ceremony with honored guests, awardees, and graduate stories.",
    pdfLink: "/newsletters/convocation-2024.pdf"
  },
  {
    id: 3,
    title: "Research & Innovation Summit",
    issueNumber: "Vol. 14, Issue 3",
    date: "2024-09-20",
    coverImage: "https://images.unsplash.com/photo-1581093588401-22a6ae88e367?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Updates from the annual summit: research breakthroughs, industry collaborations, and student-led innovations.",
    pdfLink: "/newsletters/research-summit-2024.pdf"
  },
  {
    id: 4,
    title: "Sports Meet Highlights",
    issueNumber: "Vol. 14, Issue 2",
    date: "2024-06-15",
    coverImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "National Sports Meet 2024 hosted by GBU: winners, records, and moments of sportsmanship.",
    pdfLink: "/newsletters/sports-meet-2024.pdf"
  },
];

// === Main ===
const NewsLetter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const itemsPerPage = 4;

  const totalPages = Math.ceil(mockNewsletters.length / itemsPerPage);
  const currentNewsletters = mockNewsletters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll receive our latest newsletters.",
      });
      setEmail('');
    }
  };

  const latestId = mockNewsletters[0].id;

  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">GBU Newsletter</h1>
        <p className="text-xl">Stay updated with the latest campus highlights</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-10">
        {currentNewsletters.map((n) => (
          <Card key={n.id}>
            {n.id === latestId && (
              <Badge variant="new" className="absolute top-4 right-4">New</Badge>
            )}
            <img src={n.coverImage} alt={n.title} className="w-full h-60 object-cover" />
            <CardHeader>
              <div className="flex justify-between mb-2">
                <Badge>{n.issueNumber}</Badge>
                <span className="text-sm text-gray-500">{format(new Date(n.date), 'MMM yyyy')}</span>
              </div>
              <CardTitle>{n.title}</CardTitle>
              <CardDescription>Published {format(new Date(n.date), 'MMMM dd, yyyy')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-5">{n.excerpt}</p>
              <div className="mt-auto flex flex-col gap-2">
                <Button
                  size="sm"
                  onClick={() => window.open(n.pdfLink, "_blank")}
                >
                  <FileText size={18} className="mr-2" />
                  Read Online
                </Button>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download size={16} className="mr-2" />
                    Download PDF
                  </Button>
                  <SocialShare url={n.pdfLink} title={n.title} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      <div className="bg-blue-600 text-white py-10 px-6 rounded-3xl mx-10 text-center mt-12">
        <h2 className="text-3xl font-bold mb-3">Subscribe for Updates</h2>
        <p className="mb-5">Never miss out on important events and announcements.</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="secondary">Subscribe</Button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
