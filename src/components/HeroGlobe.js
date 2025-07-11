import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

function HeroGlobe() {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          fixed: true,
          width: "100%",
          top: 0,
          left: -10,
          minWidth: "100vw",
          minHeight: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.5, // Adjust for effect
        }}
      >
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

      {/* Plane Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          opacity: 0.8,
          animation: "bounce 2s infinite",
        }}
        onClick={() => {
          document.getElementById("article-section")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {/* Simple SVG plane icon */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M4 24L44 24M24 4L24 44"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <polygon points="24,4 28,16 24,12 20,16" fill="#fff" />
        </svg>
        <span
          style={{
            color: "#fff",
            marginTop: 8,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          Scroll Down
        </span>
      </div>

      {/* Add this to your CSS or in a <style> tag */}
      <style>
        {`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(12px); }
        }
        `}
      </style>
    </div>
  );
}

export default HeroGlobe;