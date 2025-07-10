import React from "react";
import { CircleCheck } from "lucide-react";
import TeamSection from "../../components/dac/TeamSection";
import DevelopmentGlimpses from "../../components/dac/DevelopmentGlimpses";
import ApplicationForm from "../../components/dac/ApplicationForm";
import RoadmapTimeline from "../../components/dac/RoadmapTimeline";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// === Utility ===
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// === Local Card with motion ===
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{
      scale: 1.02,
      y: -2,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    }}

    transition={{
      type: "spring",
      stiffness: 800,
      damping: 20,
      mass: 0.3
    }}
    className={cn(
      "relative rounded-2xl bg-white text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer",
      className
    )}
    {...props}
  >
    {props.children}
  </motion.div>

));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

// === Local Badge ===
function Badge({ className, children }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-blue-600 text-white px-2.5 py-0.5 text-xs font-semibold",
        className
      )}
    >
      {children}
    </div>
  );
}

// === Framer Motion fadeUp ===
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const DAC = () => {
  React.useEffect(() => {
    document.title = "Digital Automation Cell – MyGBU Smart Campus";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the initiatives, team, and progress of GBU's Digital Automation Cell transforming university operations through AI and automation."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore the initiatives, team, and progress of GBU's Digital Automation Cell transforming university operations through AI and automation.";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }, []);

  const corePillars = [
    {
      title: "Automation Across Departments",
      description: "Streamlining processes across all university departments with intelligent automation",
      icon: "⚙️",
    },
    {
      title: "Personalized Student Learning",
      description: "AI-driven personalized learning experiences tailored to each student's needs",
      icon: "🎓",
    },
    {
      title: "Emotionally Intelligent Experience",
      description: "Human-centered design that understands and responds to user emotions",
      icon: "🧠",
    },
    {
      title: "Environmental Intelligence",
      description: "Smart environmental monitoring and sustainable campus management",
      icon: "🌱",
    },
    {
      title: "Smart Detection & Campus Security",
      description: "Advanced security systems with intelligent threat detection",
      icon: "🔒",
    },
  ];

  const currentProgress = [
    {
      title: "Registration Portal",
      status: "Completed",
      description: "Smart Campus registration system with automated workflows",
      progress: 100,
    },
    {
      title: "Class Attendance Testing",
      status: "In Progress",
      description: "Automated attendance tracking system for classes",
      progress: 75,
    },
    {
      title: "Complaint/Feedback Module",
      status: "In Progress",
      description: "Centralized system for campus complaints and feedback",
      progress: 60,
    },
    {
      title: "Exam Attendance Prototype",
      status: "Completed",
      description: "Prototype for automated exam attendance management",
      progress: 100,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Digital Automation Cell (DAC)
          </motion.h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Driving the Future of Smart GBU
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg opacity-80">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Innovation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Automation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Human-Centric Intelligence
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Vision & Mission */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-400 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 leading-relaxed">
                "To digitally transform GBU by automating key processes, improving transparency,
                and enhancing user experience through scalable, secure, and smart solutions."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-400 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <span className="text-3xl">🚀</span>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900 leading-relaxed">
                "To create an emotionally intelligent, AI-powered, and sustainable smart campus."
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* What is DAC */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="mb-16 p-5 bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-400 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-indigo-800 mb-4">What is DAC?</CardTitle>
              <CardDescription className="text-lg text-gray-800 max-w-4xl mx-auto">
                The Digital Automation Cell (DAC) is GBU's dedicated innovation hub focused on transforming
                the university experience through cutting-edge technology and human-centered design.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-8">
                <blockquote className="text-xl italic text-indigo-700 font-medium">
                  "We are not just building tools, we are transforming how a university works, lives, and evolves."
                </blockquote>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["💻", "📚", "🤖", "🌿"].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center"
                  >
                    <div className="text-4xl mb-2 hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      {idx === 0 && "Digital GBU"}
                      {idx === 1 && "NEP 2020 Alignment"}
                      {idx === 2 && "AI + Human Design"}
                      {idx === 3 && "Green Campus"}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Roadmap Timeline */}
        <RoadmapTimeline />

        {/* Core Pillars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Core Pillars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 leading-snug text-lg">
                    <span className="text-2xl">{pillar.icon}</span>
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Current Progress */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Current Progress
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentProgress.map((item, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    {item.status === "Completed" ? (
                      <CircleCheck className="w-6 h-6 text-green-500" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-orange-500 border-t-transparent animate-spin"></div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-3">{item.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.progress === 100 ? "bg-green-500" : "bg-blue-500"
                        }`}
                      style={{
                        width: `${item.progress}%`,
                        transition: "width 0.6s ease-in-out",
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.progress}% Complete
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Development Glimpses */}
        <DevelopmentGlimpses />

        {/* Team Members */}
        <TeamSection />

        {/* Join Us Section */}
        
        <Card className="relative overflow-hidden mt-16 rounded-2xl shadow-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
          />
          <CardContent className="relative py-16 px-6 text-center text-white z-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-4xl pt-10 font-bold mb-4"
            >
              Join the DAC Team
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-xl mb-5 opacity-90"
            >
              Interested in contributing as an intern, developer, designer, or volunteer?
            </motion.p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            >
              <ApplicationForm />
            </motion.div>
          </CardContent>
        </Card>
      </div>

   <section className="relative overflow-hidden py-32 px-6">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#32408f] via-[#080420] to-[#7a25ca]" />

  {/* Blurred blobs */}
  <div className="absolute top-10 left-1/3 w-80 h-80 bg-purple-500 opacity-30 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-20 blur-[160px] rounded-full"></div>

  {/* Frosted glass panel */}
  <div className="relative max-w-4xl mx-auto text-center py-24 px-8 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-white mb-4"
    >
      Let’s Connect and Collaborate
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-lg text-gray-200 max-w-2xl mx-auto mb-8"
    >
      Reach out to Dr. Gaurav Kumar — Convener, Digital Automation Cell — and be part of our smart campus journey.
    </motion.p>
    <motion.a
      href="mailto:gaurav.kumar@gbu.ac.in"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg overflow-hidden group"
    >
      <Mail className="w-5 h-5" /> gaurav.kumar@gbu.ac.in
      <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"></span>
    </motion.a>
  </div>
</section>



    </div>
  );
};

export default DAC;
