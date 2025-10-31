"use client";
import React from "react";

export default function VideoSection() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        )}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
          preload="none"
          poster="/images/video-poster.jpg"
          width="1920"
          height="1080"
          onLoadedData={handleVideoLoad}
        >
          <source src="/videos/clinic-video.webm" type="video/webm" />
          <source src="/videos/clinic-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay (optional for darkening or tint effect) */}
        <div className="absolute inset-0 bg-secondary/50"></div>

        {/* Optional centered text or button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-sm tracking-[0.2em] uppercase text-white font-medium mb-3 inline-block border border-white px-4 py-2 rounded-full backdrop-blur-sm">Advanced Dental Care</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Your Smile, Our Passion
          </h2>
          <p className="text-3xl text-white font-semibold mb-3">Healthy Teeth. Happy Life.</p>
          <p className="text-lg sm:text-xl max-w-2xl">
            From cleanings to cosmetic treatments — we provide expert, gentle
            care that helps you smile with confidence again. Our approach blends
            precision, comfort, and compassion for every patient.
          </p>
        </div>
      </div>
    </section>
  );
}
