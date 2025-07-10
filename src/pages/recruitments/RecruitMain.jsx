import React, { useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import RecruitmentBlock from "../../components/recruitments/RecruitmentBlock";
import RecruitmentContent from "../../components/recruitments/RecruitmentContent";

// ✅ Utility
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ✅ Tabs Context
const TabsContext = createContext();

const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-full bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(
  ({ value, className, children, ...props }, ref) => {
    const { activeTab, setActiveTab } = useContext(TabsContext);
    const isActive = activeTab === value;

    return (
      <button
        ref={ref}
        onClick={() => setActiveTab(value)}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-2 text-sm font-medium ring-offset-background transition-all duration-300",
          isActive
            ? "bg-black text-white shadow-md scale-105"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(
  ({ value, className, children, ...props }, ref) => {
    const { activeTab } = useContext(TabsContext);
    return activeTab === value ? (
      <motion.div
        ref={ref}
        className={cn("mt-4", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        {...props}
      >
        {children}
      </motion.div>
    ) : null;
  }
);
TabsContent.displayName = "TabsContent";

const RecruitMain = () => {
  const [activeArchiveTab, setActiveArchiveTab] = useState("archived2023");

  return (
    <motion.div
      className="min-h-screen mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ✅ Fixed background image */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-white bg-center bg-no-repeat bg-cover" />

      <div className="bg-gradient-to-r from-sky-400 to-sky-600 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-foreground mb-5 tracking-tight">
            RECRUITMENTS
          </h1>
          <p className="text-xl font-semibold text-muted-foreground">
            Faculty/Staff Recruitment
          </p>
        </div>
      </div>

      <div className="container w-8/10 mx-auto px-4 py-12">
        <Tabs defaultValue="current">
          <div className="flex justify-center mb-10">
            <TabsList>
              <TabsTrigger value="current">Current Opportunities</TabsTrigger>
              <TabsTrigger value="archived">Archived Opportunities</TabsTrigger>
            </TabsList>
          </div>

          {/* ✅ Current Opportunities */}
          <TabsContent value="current">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecruitmentBlock title="TEACHING" type="teaching" icon="👨‍🏫" />
              <RecruitmentBlock
                title="NON-TEACHING"
                type="non-teaching"
                icon="👥"
              />
              <RecruitmentBlock
                title="PROJECT / RESEARCH"
                type="project-research"
                icon="🔬"
              />
              <RecruitmentBlock title="OTHERS" type="others" icon="⚙️" />
            </div>
          </TabsContent>

          {/* ✅ Archived Opportunities */}
          <TabsContent value="archived">
            <div className="flex justify-center mb-6 gap-4 flex-wrap">
              {["archived2023", "archived2022", "archived2021"].map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveArchiveTab(year)}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    activeArchiveTab === year
                      ? "bg-black text-white shadow-md scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/70"
                  )}
                >
                  {year.replace("archived", "")}
                </button>
              ))}
            </div>

            <RecruitmentContent tabId={activeArchiveTab} />
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default RecruitMain;
