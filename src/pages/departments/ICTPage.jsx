// import React, { useEffect, useState, lazy, Suspense } from "react";

// const componentsMap = {
//   Landing: lazy(() => import("../../components/departments/Landing")),
//   AboutSection: lazy(() => import("../../components/departments/AboutIct")),
//   SchoolStats: lazy(() => import("../../components/departments/SchoolStats")),
//   LeadershipCard: lazy(() => import("../../components/departments/Dean")),
//   DepartmentsSection: lazy(() => import("../../components/departments/Deptcard")),
//   ProgramsShowcase: lazy(() => import("../../components/departments/Program")),
//   FacultyCarousel: lazy(() => import("../../components/departments/faculty_rotating.jsx")),
//   NoticeEvents: lazy(() => import("../../components/departments/Notice.jsx")),
//   PlacementsSection: lazy(() => import("../../components/departments/Placement.jsx")),
//   RecentPlacements: lazy(() => import("../../components/departments/Recent_Placement.jsx")),
//   RecruitersShowcase: lazy(() => import("../../components/departments/Recuritor_showcase")),
//   ClubsAchievements: lazy(() => import("../../components/departments/Clubs_activevment.jsx")),
//   StudentAchievements: lazy(() => import("../../components/departments/Student_achievements.jsx")),
//   StudentStartup: lazy(() => import("../../components/departments/Startup.jsx")),
// };

// // Fallback loader
// const Loader = () => <div className="text-center py-10 text-blue-500">Loading section...</div>;

// export default function DepartmentDynamicPage() {
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     // TODO: Replace with real backend API call
//     const fetchSections = async () => {
//       // Simulated API response
//       const response = [
//         { componentName: "Landing", enabled: true, position: 1 },
//         { componentName: "AboutSection", enabled: true, position: 2 },
//         { componentName: "SchoolStats", enabled: true, position: 3 },
//         { componentName: "LeadershipCard", enabled: true, position: 4 },
//         { componentName: "DepartmentsSection", enabled: true, position: 5 },
//         { componentName: "ProgramsShowcase", enabled: true, position: 6 },
//         { componentName: "FacultyCarousel", enabled: true, position: 7 },
//         { componentName: "NoticeEvents", enabled: true, position: 8 },
//         { componentName: "ClubsAchievements", enabled: true, position: 9 },
//         { componentName: "PlacementsSection", enabled: true, position: 10 },
//         { componentName: "RecentPlacements", enabled: true, position: 11 },
//         { componentName: "RecruitersShowcase", enabled: true, position: 12 },
//         { componentName: "StudentStartup", enabled: true, position: 13 },
//         { componentName: "StudentAchievements", enabled: true, position: 14 },
//       ];

//       const enabledSorted = response
//         .filter((sec) => sec.enabled)
//         .sort((a, b) => a.position - b.position);
//       setSections(enabledSorted);
//     };

//     fetchSections();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       {sections.map((section, idx) => {
//         const Component = componentsMap[section.componentName];
//         if (!Component) return null;
//         return (
//           <Suspense fallback={<Loader />} key={idx}>
//             <Component />
//           </Suspense>
//         );
//       })}
//     </div>
//   );
// }



import React, { useEffect, useState, lazy, Suspense } from "react";
import { Code, Lightbulb, Rocket, Target, Trophy } from "lucide-react";

const componentsMap = {
  Landing: lazy(() => import("../../components/departments/Landing")),
  AboutSection: lazy(() => import("../../components/departments/AboutIct")),
  SchoolStats: lazy(() => import("../../components/departments/SchoolStats")),
  LeadershipCard: lazy(() => import("../../components/departments/Dean")),
  DepartmentsSection: lazy(() =>
    import("../../components/departments/Deptcard")
  ),
  ProgramsShowcase: lazy(() => import("../../components/departments/Program")),
  FacultyCarousel: lazy(() =>
    import("../../components/departments/faculty_rotating.jsx")
  ),
  NoticeEvents: lazy(() => import("../../components/departments/Notice.jsx")),
  PlacementsSection: lazy(() =>
    import("../../components/departments/Placement.jsx")
  ),
  RecentPlacements: lazy(() =>
    import("../../components/departments/Recent_Placement.jsx")
  ),
  RecruitersShowcase: lazy(() =>
    import("../../components/departments/Recuritor_showcase")
  ),
  ClubsAchievements: lazy(() =>
    import("../../components/departments/Clubs_activevment.jsx")
  ),
  StudentAchievements: lazy(() =>
    import("../../components/departments/Student_achievements.jsx")
  ),
  StudentStartup: lazy(() =>
    import("../../components/departments/Startup.jsx")
  ),
};

 
// Fallback loader
const Loader = () => (
  <div className="text-center py-10 text-blue-500">Loading section...</div>
);
 

export default function DepartmentDynamicPage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      const response = [
        { componentName: "Landing", enabled: true, position: 1 },

        {
          componentName: "AboutSection",
          enabled: true,
          position: 2,
          props: {
            data: {
              heading: "About Us",
              subtitle: "School of Information and Communication Technology",
              floatingIcons: [
                { icon: <Code size={40} />, color: "text-blue-400", style: "top-20 left-10" },
                { icon: <Lightbulb size={35} />, color: "text-purple-400", style: "top-32 right-20" },
                { icon: <Rocket size={45} />, color: "text-indigo-400", style: "bottom-20 left-1/4" },
              ],
              cards: [
                {
                  title: "Our Mission",
                  icon: <Target size={28} />,
                  bgGradient: "from-blue-500 to-purple-600",
                  content: (
                    <>
                      The{" "}
                      <span className="font-semibold text-blue-600">
                        School of Information and Communication Technology (SOICT/USICT)
                      </span>{" "}
                      is a premier institution committed to nurturing future-ready technocrats,
                      innovators, and entrepreneurs in the dynamic field of{" "}
                      <span className="font-semibold text-purple-600">
                        ICT (Information and Communication Technology)
                      </span>
                      .
                    </>
                  ),
                  highlight: (
                    <>
                      Guided by our vision of{" "}
                      <span className="font-semibold text-indigo-600">
                        excellence and ethics
                      </span>
                      , we empower students with cutting-edge knowledge, hands-on experience, and a
                      strong value system to thrive in the global digital economy.
                    </>
                  ),
                },
                {
                  title: "Our Commitment",
                  icon: <Trophy size={28} />,
                  bgGradient: "from-purple-500 to-pink-600",
                  content: (
                    <>
                      At SOICT, we don't just teach technology—we inspire{" "}
                      <span className="font-semibold text-purple-600">future pioneers</span>. Through{" "}
                      <span className="font-semibold text-indigo-600">
                        interdisciplinary research, hackathons, and mentorship
                      </span>
                      , we foster a culture of curiosity and excellence.
                    </>
                  ),
                  bullets: [
                    <span className="font-semibold text-gray-800">
                      Skilled, motivated, and ethically grounded professionals
                    </span>,
                    "Ready to tackle global challenges",
                    "Transform the ICT landscape",
                  ],
                },
              ],
            },
          },
        },

        { componentName: "SchoolStats", enabled: true, position: 3 },
        { componentName: "LeadershipCard", enabled: true, position: 4 },
        { componentName: "DepartmentsSection", enabled: true, position: 5 },
        { componentName: "ProgramsShowcase", enabled: true, position: 6 },
        { componentName: "FacultyCarousel", enabled: true, position: 7 },
        { componentName: "NoticeEvents", enabled: true, position: 8 },
        { componentName: "ClubsAchievements", enabled: true, position: 9 },
        {
          componentName: "PlacementsSection",
          enabled: true,
          position: 10,
          props: {
            data: {
              title: "Placements",
              subTitle: "Connecting talent with opportunities",
              heroImage:
                "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=300&fit=crop",
              placementStats: [
                {
                  label: "Placement Rate",
                  value: "85‑90%",
                  color: "bg-green-500",
                },
                {
                  label: "Highest Package",
                  value: "₹51 LPA",
                  color: "bg-blue-500",
                },
                {
                  label: "Average Package",
                  value: "₹6 LPA",
                  color: "bg-purple-500",
                },
                {
                  label: "Companies Visited",
                  value: "150+",
                  color: "bg-yellow-500",
                },
              ],
            },
          },
        },
        {
          componentName: "RecentPlacements",
          enabled: true,
          position: 11,
          props: {
            data: {
              heading: "Recent Placements",
              subheading: "Our students securing positions at top companies",
              sectionTitle: "Success Stories",
              students: [
                 {
      name: "Rahul Sharma",
      company: "TCS",
      package: "₹6.5 LPA",
      department: "B.Tech CSE",
      photo: "https://images.unsplash.com/photo-1644904105846-095e45fca990?w=600&auto=format&fit=crop",
    },
    {
      name: "Priya Verma",
      company: "BlackRock",
      package: "₹16 LPA",
      department: "B.Tech IT",
      photo: "https://media.istockphoto.com/id/485372249/photo/beautiful-university-student-smiling-outside-the-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=LdrapmwsCdcEwRi7G_S5CMaeFQn4L27Yypsi476OfSQ=",
    },
    {
      name: "Amit Kumar",
      company: "Honda",
      package: "₹8.2 LPA",
      department: "B.Tech ME",
      photo: "https://images.unsplash.com/photo-1646415753793-dcfda1dfeee3?w=600&auto=format&fit=crop",
    },
    {
      name: "Neha Singh",
      company: "HDFC Bank",
      package: "₹7.5 LPA",
      department: "MBA Finance",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Aditya Patel",
      company: "Paytm",
      package: "₹12 LPA",
      department: "B.Tech ECE",
      photo: "https://images.unsplash.com/photo-1644904105846-095e45fca990?w=600&auto=format&fit=crop",
    },
    {
      name: "Riya Gupta",
      company: "HCL Technologies",
      package: "₹7.8 LPA",
      department: "MCA",
      photo: "https://media.istockphoto.com/id/1362063465/photo/female-teen-student-with-a-backpack-and-books-smiling-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=wozjDZd9SxxOG6xGIu5Z1ncjPgeZmU_yvnVQMzqaEe8=",
    },
    {
      name: "Mohammed Siddiqui",
      company: "Wipro",
      package: "₹6.8 LPA",
      department: "B.Tech CSE",
      photo: "https://media.istockphoto.com/id/1995982413/photo/happy-black-male-student-with-glasses-and-backpack-on-yellow-background.jpg?s=612x612&w=0&k=20&c=zw5dSM_D91excDPc8QjBOcUE00U0yDpGFRpbNl-9VWM=",
    },
    {
      name: "Ananya Reddy",
      company: "OYO",
      package: "₹9.5 LPA",
      department: "MBA Marketing",
      photo: "https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=gIZZVJ3_oo9pxN0TtTaBCk7G8xBHO6vZWy9cJVt8jWA=",
    }
              ],
            },
          },
        },
        {
          componentName: "RecruitersShowcase",
          enabled: true,
          position: 12,
          props: {
            recruitersData: [
              {
                name: "Samsung",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/samsung.png",
              },
              {
                name: "TCS",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/tcs.png",
              },
              {
                name: "Adobe",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/adobe.png",
              },
              {
                name: "Tech Mahindra",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/tech.png",
              },
              { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
              {
                name: "Metro",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/metro.png",
              },
              {
                name: "HCL",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/hcl.png",
              },
              {
                name: "Byjus",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/byjus.png",
              },
              {
                name: "Nagrro",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/nagrro.png",
              },
              {
                name: "Apple",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/apple.png",
              },
              { name: "Byju's", logo: "https://logo.clearbit.com/byjus.com" },
              {
                name: "White Hat Junior",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/white.png",
              },
              {
                name: "Hexaware",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/hexaware.png",
              },
              {
                name: "Blinkit",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/blink-it-logo.png",
              },
              {
                name: "Toppr",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/Toppr_logo.png",
              },
              {
                name: "Wipro",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/wipro.png",
              },
              {
                name: "Scaler",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/scaler.png",
              },
              {
                name: "Chegg",
                logo: "https://www.gbu.ac.in/USICT/media/img/recute/Chegg-Logo.png",
              },
            ],
          },
        },
        {
          componentName: "StudentStartup",
          enabled: true,
          position: 13,
          props: {
            startupData: {
              startups: [
                {
                  name: "KOYAL FM",
                  founder: "GBU Incubation Team",
                  description:
                    "Campus-based community radio initiative by students",
                  funding: "University Supported",
                  status: "Incubated",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
                  year: "2020",
                },
              ],
              stats: {
                totalFunding: "₹19.3L+",
                totalDepartments: 4,
              },
            },
          },
        },
        {
          componentName: "StudentAchievements",
          enabled: true,
          position: 14,
          props: {
            achievements: [
              {
                title: "Smart India Hackathon 2024 (USICT Internal Round)",
                achievement: "224 Participants",
                year: "2024",
                student: "USICT Students",
                department: "CSE/IT/ECE",
                image:
                  "https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg?w=400&h=250&fit=crop",
                description:
                  "GBU hosted the internal SIH 2024 with 224 participants from USICT solving real-world challenges.",
              },
              {
                title: "Shell Eco-Marathon, Manila",
                achievement: "India Representation",
                year: "2018",
                student: "Sachin Mishra & Team (Mechanical)",
                department: "Mechanical",
                image:
                  "https://www.shellecomarathon.com/_jcr_content/root/main/section/simple_1063219968/promo_copy_copy.shellimg.jpeg/1706575524878/shell-eco-marathon-banner-home.jpeg?imwidth=301&impolicy=amidala-image&imdensity=1.25?w=400&h=250&fit=crop",
                description:
                  "GBU's Mechanical team designed a hydrogen-powered Eco-Kart and represented India.",
              },
              {
                title: "Elite Women's National Boxing Championship 2023",
                achievement: "Hosted Event",
                year: "2023",
                student: "58 States & Club Athletes",
                department: "Sports",
                image:
                  "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w2440/f_auto/primary/cmgu8jns1geqgoyzmvll?w=400&h=250&fit=crop",
                description:
                  "GBU hosted the 7th Elite Women's National Boxing Championship in Dec 2023.",
              },
              {
                title: "AI Centre of Excellence Establishment",
                achievement: "₹50 Cr UP Govt Funding",
                year: "2024",
                student: "USICT Researchers",
                department: "CSE/IT",
                image:
                  "https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/03/future_of_ai.jpg?w=400&h=250&fit=crop",
                description:
                  "UP Govt & industry partners funded AI CoE at GBU to boost advanced tech research.",
              },
            ],
          },
        },
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
            <Component {...(section.props || {})} />
          </Suspense>
        );
      })}
    </div>
  );
}
