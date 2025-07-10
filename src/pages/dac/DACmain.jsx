import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// === Utility ===
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// === Local Card ===
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{
      scale: 1.04,
      y: -4,
      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className={cn(
      "relative overflow-hidden rounded-xl border bg-white text-gray-900 shadow transition-all duration-300",
      className
    )}
    {...props}
  >
    {/* Optional: gradient overlay on hover */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.05 }}
      transition={{ duration: 0.4 }}
      style={{
        background:
          "radial-gradient(circle at center, rgba(99,102,241,0.4), transparent 70%)",
      }}
    />
    {props.children}
  </motion.div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-2 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-tight tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base text-gray-600", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// === Local Button ===
function Button({
  children,
  className = "",
  size = "md",
  variant = "default",
  asChild = false,
  ...props
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    
    outline:
      "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-md",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    "hover:-translate-y-1",
    sizes[size],
    variants[variant],
    className
  );

  if (asChild) {
    return React.cloneElement(children, {
      className: cn(children.props.className, classes),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// === Page Motion Variants ===
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const DACmain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-x-hidden">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            GBU Smart Campus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Transforming Education Through Innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-800 hover:text-white">
              <Link to="/dac">Explore DAC</Link>
            </Button>
            <Button size="lg" className="bg-gray-400 text-white hover:bg-white hover:text-gray-600">
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "🎓",
              title: "Academic Excellence",
              desc: "Innovative academic programs designed for the future of education",
            },
            {
              icon: "🚀",
              title: "Innovation Hub",
              desc: "Cutting-edge research and development facilities",
            },
            {
              icon: "🌱",
              title: "Sustainable Campus",
              desc: "Environmentally conscious infrastructure and practices",
            },
          ].map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl p-6 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Optional background gradient glow on hover */}
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(99,102,241,0.4), transparent 70%)",
                  }}
                />
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="text-2xl font-bold flex items-center gap-3 mb-2">
                      <span className="text-3xl">{item.icon}</span>
                      {item.title}
                    </h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <p className="text-gray-700 text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-200 shadow-1xl">
            <CardContent className="p-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl pt-10 font-bold text-indigo-800 mb-4"
              >
                Digital Automation Cell (DAC)
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
              >
                Discover how DAC is revolutionizing the GBU experience through
                intelligent automation, AI-powered solutions, and
                human-centered design.
              </motion.p>
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link to="/dac">Learn About DAC</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DACmain;
