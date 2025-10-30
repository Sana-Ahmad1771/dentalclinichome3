"use client";
import React from "react";

export default function VideoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/clinic-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay (optional for darkening or tint effect) */}
        <div className="absolute inset-0 bg-secondary/50"></div>

        {/* Optional centered text or button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Experience Modern Dental Care
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl">
            Where technology meets gentle expertise — your smile deserves the best.
          </p>
        </div>
      </div>
    </section>
  );
}
