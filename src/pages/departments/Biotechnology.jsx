import React, { useEffect, useState, lazy, Suspense } from "react";

// Component Map for dynamic rendering
const componentsMap = {
  Landing: lazy(() => import("../../components/departments/Landing.jsx")),
  AboutSection: lazy(() => import("../../components/departments/AboutIct.jsx")),
  SchoolStats: lazy(() => import("../../components/departments/SchoolStats.jsx")),
  LeadershipCard: lazy(() => import("../../components/departments/Dean.jsx")),
  DepartmentsSection: lazy(() => import("../../components/departments/Deptcard.jsx")),
  ProgramsShowcase: lazy(() => import("../../components/departments/Program.jsx")),
  FacultyCarousel: lazy(() => import("../../components/departments/faculty_rotating.jsx")),
  NoticeEvents: lazy(() => import("../../components/departments/Notice.jsx")),
  PlacementsSection: lazy(() => import("../../components/departments/Placement.jsx")),
  RecentPlacements: lazy(() => import("../../components/departments/Recent_Placement.jsx")),
  RecruitersShowcase: lazy(() => import("../../components/departments/Recuritor_showcase.jsx")),
  ClubsAchievements: lazy(() => import("../../components/departments/Clubs_activevment.jsx")),
  StudentAchievements: lazy(() => import("../../components/departments/Student_achievements.jsx")),
  StudentStartup: lazy(() => import("../../components/departments/Startup.jsx")),
};

// Fallback loader
const Loader = () => <div className="text-center py-10 text-blue-500">Loading section...</div>;

export default function DepartmentDynamicPage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // TODO: Replace with real backend API call
    const fetchSections = async () => {
      // Simulated API response
      const response = [
        { componentName: "Landing", enabled: true, position: 1 },
        { componentName: "AboutSection", enabled: true, position: 2 },
        { componentName: "SchoolStats", enabled: true, position: 3 },
        { componentName: "LeadershipCard", enabled: true, position: 4 },
        { componentName: "DepartmentsSection", enabled: true, position: 5 },
        { componentName: "ProgramsShowcase", enabled: true, position: 6 },
        { componentName: "FacultyCarousel", enabled: true, position: 7 },
        { componentName: "NoticeEvents", enabled: true, position: 8 },
        { componentName: "ClubsAchievements", enabled: true, position: 9 },
        { componentName: "PlacementsSection", enabled: true, position: 10 },
        { componentName: "RecentPlacements", enabled: true, position: 11 },
        { componentName: "RecruitersShowcase", enabled: true, position: 12 },
        { componentName: "StudentStartup", enabled: true, position: 13 },
        { componentName: "StudentAchievements", enabled: true, position: 14 },
      ];

      const enabledSorted = response
        .filter((sec) => sec.enabled)
        .sort((a, b) => a.position - b.position);
      setSections(enabledSorted);
    };

    fetchSections();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {sections.map((section, idx) => {
        const Component = componentsMap[section.componentName];
        if (!Component) return null;
        return (
          <Suspense fallback={<Loader />} key={idx}>
            <Component />
          </Suspense>
        );
      })}
    </div>
  );
}
