"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function BeforeAfterSection() {
  const [dividerPosition, setDividerPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setDividerPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length > 0) handleMove(e.touches[0].clientX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-sm tracking-[0.2em] uppercase text-white font-medium mb-3 inline-block border border-white px-4 py-2 rounded-full bg-transparent backdrop-blur-sm">
            Smile Transformations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Real Patients, <br />
            Real Smiles
          </h2>

          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            See the visible results of our advanced dental care — from teeth
            whitening and alignment correction to full smile makeovers. Each
            transformation brings back confidence and a radiant smile.
          </p>

          <ul className="space-y-3 text-base md:text-md">
            {[
              "Professional Teeth Whitening",
              "Cosmetic Smile Design",
              "Orthodontic Alignments",
              "Restorative Treatments",
              "Long-lasting Results",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-white font-medium"
              >
                <CheckCircle size={20} className="text-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE COMPARISON */}
        <div
          ref={containerRef}
          className="lg:w-1/2 relative w-full max-w-[900px] h-[460px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)] select-none border border-primary/20"
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* BEFORE IMAGE */}
          <Image
            src="/images/before-image.jpg"
            alt="Before dental treatment"
            fill
            className="object-cover"
            priority
          />

          {/* AFTER IMAGE */}
          <div
            className="absolute inset-0 transition-all duration-200 ease-linear"
            style={{
              backgroundImage: `url('/images/after-image.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage: `linear-gradient(to left, black ${dividerPosition}%, transparent ${dividerPosition + 10}%)`,
              WebkitMaskImage: `linear-gradient(to left, black ${dividerPosition}%, transparent ${dividerPosition + 10}%)`,
            }}
          ></div>

          {/* DIVIDER LINE */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-primary z-20 shadow-[0_0_10px_rgba(0,0,0,0.4)]"
            style={{ left: `${dividerPosition}%` }}
          ></div>

          {/* HANDLE BUTTON */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white border-2 border-white flex items-center justify-center z-30 shadow-lg cursor-grab active:cursor-grabbing transition-transform duration-200"
            style={{ left: `calc(${dividerPosition}% - 20px)` }}
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="text-white font-bold">|||</div>
          </div>

          {/* LABELS */}
          <div className="absolute top-4 left-4 bg-secondary/90 text-white text-sm font-semibold px-3 py-1 rounded shadow-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-primary/90 text-white text-sm font-semibold px-3 py-1 rounded shadow-sm">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
