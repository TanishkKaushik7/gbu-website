import Footer from "../component_home/Footer.jsx";
import Navbar from "../component_home/Navbar.jsx";
import Primarynavbar from "../component_home/Primarynavbar.jsx";
import WelcomePage from "../component_home/Homepage.jsx";
import QuickAccess from "../component_home/Quicklink.jsx";
import AboutSection from "../component_home/Aboutsection.jsx";
import Glance from "../component_home/Glance.jsx";
import VisionaryLeadership from "../component_home/Visionary.jsx";
import LatestUpdates from "../component_home/Latest.jsx";
import CampusGallery from "../component_home/Gallery.jsx";
import ExcellenceSection from "../component_home/Education.jsx";
import CampusLifeSection from "../component_home/Campus.jsx";

function Home() {
 return (
    <div className="min-h-screen flex flex-col">
      <Primarynavbar />
      <Navbar />
      <WelcomePage />
      <QuickAccess />
      <AboutSection />
      <Glance />
      <VisionaryLeadership />
      <LatestUpdates />
      <CampusGallery />
      <ExcellenceSection />
      <CampusLifeSection />
      
      <main className="flex-grow">
      </main>
      
      <Footer />
    </div>
  );
}

export default Home;