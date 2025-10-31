"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  FaMagic,
  FaCalendarCheck,
  FaTooth,
  FaAward,
  FaDollarSign,
  FaSpa,
} from "react-icons/fa";

// ================= Image Slider Component =================
function ImageSlider({ images, scrollDirection, speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setDistance(containerRef.current.scrollWidth / 2);
    }
  }, [images]);

  useEffect(() => {
    if (scrollDirection === "down") {
      controls.start({
        x: [0, -distance],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      });
    } else {
      controls.start({
        x: [-distance, 0],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      });
    }
  }, [scrollDirection, distance, controls, speed]);

  const imageList = [...images, ...images]; // duplicate for seamless scroll

  return (
    <div className="relative overflow-hidden w-full py-6">
      <motion.div
        ref={containerRef}
        className="flex items-center gap-3"
        style={{ willChange: "transform" }}
        animate={controls}
      >
        {imageList.map((image, idx) => (
          <div
            key={idx}
            className="relative shrink-0 max-w-full h-[170px] sm:h-[180px] md:h-[190px] lg:h-[250px] w-60 sm:w-[320px] md:w-[370px] xl:w-[400px] flex items-center justify-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 370px, 400px"
              quality={75}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                '<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="250" fill="#f0f0f0"/></svg>'
              ).toString('base64')}`}
              className="max-w-full rounded-2xl h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Main Section =================
export default function ExperienceDentalSection() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  const features = [
    {
      id: 1,
      icon: <FaMagic className="text-[28px] text-secondary" />,
      title: "INSTANT RESULTS",
      description:
        "State-of-the-art technology delivering faster, more precise results.",
    },
    {
      id: 2,
      icon: <FaAward className="text-[28px] text-secondary" />,
      title: "DECADES OF EXPERIENCE",
      description: "Our team is led by renowned clinicians.",
    },
    {
      id: 3,
      icon: <FaCalendarCheck className="text-[28px] text-secondary" />,
      title: "ONE-CLICK BOOKING",
      description: "Open evenings/weekends, same/next day.",
    },
    {
      id: 4,
      icon: <FaDollarSign className="text-[28px] text-secondary" />,
      title: "TRANSPARENT PRICING",
      description:
        "Straightforward pricing, insurance eligible, no surprises or up-sells.",
    },
    {
      id: 5,
      icon: <FaTooth className="text-[28px] text-secondary" />,
      title: "PAIN-FREE TREATMENTS",
      description: "No needles. No drills. Just comfort-first dentistry.",
    },
    {
      id: 6,
      icon: <FaSpa className="text-[28px] text-secondary" />,
      title: "COMPLIMENTARY COMFORTS",
      description:
        "Unwind with eye masks, meditations, and massage boots—all on the house.",
    },
  ];

  const gallery = [
    {
      alt: "Dental Room 1",
      src: "/images/dental-room-11.jpg",
      width: 400,
      height: 250
    },
    {
      alt: "Dental Room 2",
      src: "/images/dental-room-22.jpg",
      width: 400,
      height: 250
    },
    {
      alt: "Dental Room 3",
      src: "/images/dental-room-33.jpg",
      width: 400,
      height: 250
    },
    {
      alt: "Smiling Patient",
      src: "/images/smillingpatient.jpg",
      width: 400,
      height: 250
    },
    {
      alt: "Dental Sink Area",
      src: "/images/dental-room-44.jpg",
      width: 400,
      height: 250
    },
  ];

  // Track scroll direction + visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);

        if (isVisible) {
          if (currentScrollY > lastScrollY.current) {
            setScrollDirection("down");
          } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection("up");
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-30 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header + Features */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight ">
            Experience Dental Done <br className="hidden md:block" /> <span className="text-primary">Differently</span> 
          </h2>

          <div className="grid sm:grid-cols-2 gap-10">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="bg-white border border-secondary text-white rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-paragraph text-sm leading-relaxed mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Auto-scrolling image slider */}
      <ImageSlider
        images={gallery}
        scrollDirection={isInView ? scrollDirection : "down"}
        speed={35}
      />

        {/* Soft Bottom Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44C181.46,86.72,91.12,66.37,0,49.77V120H1200V16.48c-91.12,17.21-181.46,37.79-321.39,68.06C734.42,123.83,611.79,136.21,478.56,99.88,413.14,81.78,372.42,67.14,321.39,56.44Z"
            className="fill-primary"
          ></path>
        </svg>
      </div>
    </section>
  );
}
