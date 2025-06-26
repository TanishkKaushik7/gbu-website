import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WelcomePage() {
  const [bannerData, setBannerData] = useState(null);

  const BANNER = import.meta.env.VITE_HOST;
  const BASE = (BANNER || "").replace(/\/$/, "");

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const res = await axios.get(`${BASE}/landing/banner/`);
        const data = res.data;
        if (Array.isArray(data) && data.length > 0) {
          setBannerData(data[0]);
        }
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, [BASE]);

  if (!bannerData)
    return <div className="text-center py-20">Loading...</div>;

  const videoSrc = bannerData.video?.includes("http")
    ? bannerData.video
    : `${BASE}/${bannerData.video.startsWith("media") ? "" : "media/"}${bannerData.video}`;

  return (
    <>
      {/* Main welcome section */}
      <div className="relative h-screen flex flex-col justify-center overflow-hidden">
        {/* Background video or image */}
        {bannerData.video?.endsWith(".mp4") ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={videoSrc}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 text-white max-w-3xl px-4 sm:pl-10 pb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-left capitalize">
            {bannerData.title}
          </h1>
          <p className="text-lg md:text-xl mb-8">{bannerData.content}</p>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <a
              href={bannerData.button1_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {bannerData.button1_text}
            </a>
            <a
              href={bannerData.button2_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-6 rounded shadow focus:outline-none focus:ring-2 focus:ring-lime-400"
            >
              {bannerData.button2_text}
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div
        role="region"
        aria-label="Latest announcements"
        style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "relative",
          padding: "10px 0",
          height: "40px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            animation: "scrollText 10s linear infinite",
            whiteSpace: "nowrap",
            zIndex: 0 ,
          }}
        >
          📢 Admissions open for 2025-26 academic session | Admissions open for 2025-26 academic session | Admissions open for 2025-26 academic session
        </div>
      </div>

      <style>{`
        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
}
