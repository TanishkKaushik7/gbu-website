import { useEffect, useState, Suspense } from "react";
import { useLocation } from "react-router-dom";
import AppRouter from "./routes/router";
import PreLoad from "../src/components/home/preLoad.jsx";
import Primarynavbar from "../src/components/home/Primarynavbar.jsx";
import Navbar from "../src/components/home/Navbar.jsx";
import Footer from "../src/components/home/Footer.jsx";

function App() {
  const [isPreloadComplete, setIsPreloadComplete] = useState(() => {
    return localStorage.getItem("preloadComplete") === "true";
  });

  useEffect(() => {
    if (isPreloadComplete) {
      localStorage.setItem("preloadComplete", "true");
    }
  }, [isPreloadComplete]);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      {!isPreloadComplete ? (
        <PreLoad onComplete={() => setIsPreloadComplete(true)} />
      ) : (
        <>
          <Primarynavbar />
          <Navbar />
          <div>
          <AppRouter />
          </div>
          <Footer />

        </>
      )}
      </Suspense>
    </div>
  );
}

export default App;
