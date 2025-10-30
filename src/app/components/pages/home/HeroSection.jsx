"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/hero-slider-1.jpg",
    titleLine1: "BRIGHT SMILES,",
    titleLine2: "LASTING CONFIDENCE",
    desc: "Transform your dental health with expert care, gentle treatments, and advanced technology — for a smile that shines every day.",
    btnText: "Book Appointment",
    btnLink: "/appointment",
    align: "left",
  },
  {
    id: 2,
    image: "/images/hero-slider-2.jpg",
    titleLine1: "MODERN DENTAL CARE",
    titleLine2: "YOU CAN TRUST",
    desc: "Experience pain-free dentistry with cutting-edge techniques and a caring team dedicated to your comfort and confidence.",
    btnText: "Explore Services",
    btnLink: "/services",
    align: "right",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100vh - 120px)" }}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[calc(100vh-120px)] max-h-[1000px] flex items-center overflow-hidden group">
              {/* Background Image */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: activeIndex === index ? 1 : 1.1 }}
                transition={{ duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 ${
                  slide.align === "left"
                    ? "bg-linear-to-r from-primary/95 via-primary/60 to-transparent"
                    : "bg-linear-to-l from-primary/95 via-primary/60 to-transparent"
                }`}
              ></div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex">
                  <div
                    className={`max-w-[900px] ${
                      slide.align === "left"
                        ? "ml-0 mr-auto text-left"
                        : "ml-auto mr-0 text-left"
                    }`}
                  >
                    <motion.h1
                      key={slide.titleLine1}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight uppercase tracking-tight"
                    >
                      <span className="block">{slide.titleLine1}</span>
                      <span className="block text-secondary mt-2">
                        {slide.titleLine2}
                      </span>
                    </motion.h1>

                    <motion.p
                      key={slide.desc}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="text-white/90 mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <Link
                        href={slide.btnLink}
                        className="mt-8 inline-block bg-secondary text-white font-semibold px-8 py-3 rounded-2xl shadow-md hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        {slide.btnText}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows (show on hover) */}
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className="hidden group-hover:flex absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/70 text-primary border border-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <FaAngleLeft size={22} />
              </button>
              <button
                onClick={() => swiperRef.current.slideNext()}
                className="hidden group-hover:flex absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/70 text-primary border border-secondary rounded-full hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <FaAngleRight size={22} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
