import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RecruitmentContent from './RecruitmentContent';

const RecruitmentBlock = ({ title, type, icon }) => {
  const [activeTab, setActiveTab] = useState('professors');

  const getTabsForType = () => {
    switch (type) {
      case 'teaching':
        return [
          { id: 'professors', label: "Professor's" },
          { id: 'retired', label: "Professor's (Retired)" },
          { id: 'associate', label: "Associate Professor's" },
          { id: 'assistant', label: "Assistant Professor's" }
        ];
      case 'non-teaching':
        return [{ id: 'assistants', label: "Assistants" }];
      case 'project-research':
        return [{ id: 'interns', label: "Interns" }];
      case 'others':
        return [{ id: 'workers', label: "Workers" }];
      default:
        return [{ id: 'professors', label: "Professor's" }];
    }
  };

  const tabs = getTabsForType();

  useEffect(() => {
    setActiveTab(tabs[0].id);
  }, [type]);

  return (
    <motion.div
  className="relative z-10 bg-white rounded-2xl border-none shadow-2xl transition-all duration-300 overflow-hidden "
  whileHover={{ scale: 1.02 }}
>

      <div className="bg-gradient-to-r from-sky-400 to-sky-600 px-6 py-4 border-b text-white border-border">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-xl font-bold tracking-wide">{title}</h2>
        </div>
      </div>

      <div className="p-6">
        {tabs.length > 1 ? (
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                Advertisement of {tab.label}
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="mb-6">
            <div className="px-4 py-2 rounded-full text-sm font-medium bg-sky-600 text-white shadow-md inline-block">
              Advertisement for {tabs[0].label}
            </div>
          </div>
        )}

        <RecruitmentContent tabId={activeTab} blockType={type} />
      </div>
    </motion.div>
  );
};

export default RecruitmentBlock;
