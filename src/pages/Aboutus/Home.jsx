import Footer from "../../components/home/Footer.jsx";
import Navbar from "../../components/home/Navbar.jsx";
import Primarynavbar from "../../components/home/Primarynavbar.jsx";
import WelcomePage from "../../components/home/Homepage.jsx";
import QuickAccess from "../../components/home/Quicklink.jsx"
import AboutSection from "../../components/home/Aboutsection.jsx";
import Glance from "../../components/home/Glance.jsx";
import VisionaryLeadership from "../../components/home/Visionary.jsx";
import LatestUpdates from "../../components/home/Latest.jsx";
import CampusGallery from "../../components/home/Gallery.jsx";
import ExcellenceSection from "../../components/home/Education.jsx";
import CampusLifeSection from "../../components/home/Campus.jsx";
import HiringSection from "../../components/home/Placement.jsx";
import VirtualTour from "../../components/home/VirtualTour.jsx";
function Home() {
 return (
    <div className="min-h-screen flex flex-col">

      <WelcomePage />
    <QuickAccess />
      <AboutSection />
      <Glance />
      <VisionaryLeadership />
      <LatestUpdates />
      <CampusGallery />
      <ExcellenceSection />
      <CampusLifeSection />

      <HiringSection/>
      <VirtualTour/>

    </div>
  );
}

export default Home;
