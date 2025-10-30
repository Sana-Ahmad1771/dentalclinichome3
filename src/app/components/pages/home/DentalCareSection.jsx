"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DentalCareSection() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-white to-white z-0"></div>

      {/* Top Right Decorative Image - More Professional */}
      <div className="absolute top-0 right-0 opacity-80">
        <div className="relative w-[160px] sm:w-[220px] md:w-[280px] lg:w-[360px]">
          <Image
            src="/images/hero-1.jpg"
            alt="Smiling patient"
            width={500}
            height={350}
            className="rounded-bl-[80px] rounded-tr-[40px] object-cover brightness-95 contrast-105 saturate-[0.85]"
          />
          {/* Clean gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-white/60 via-transparent to-transparent rounded-bl-[80px] rounded-tr-[40px]" />
        </div>
      </div>

      {/* Bottom Left Decorative Image */}
      <div className="absolute bottom-0 left-0 opacity-80">
        <div className="relative w-40 sm:w-[220px] md:w-[280px] lg:w-[360px]">
          <Image
            src="/images/hero-slider-2.jpg"
            alt="Dental tools"
            width={500}
            height={350}
            className="rounded-br-[80px] rounded-tl-[40px] object-cover brightness-95 contrast-105 saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-linear-to-bl from-white/60 via-transparent to-transparent rounded-br-[80px] rounded-tl-[40px]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-6 inline-block border border-primary/20 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm"
        >
          Premium Dental Care
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          Your Smile,{" "}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Priority
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mb-8"
        >
          Exceptional Care for Healthy, Beautiful Smiles
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Experience comprehensive dental care with our modern approach. From routine cleanings 
          to advanced cosmetic treatments, we provide personalized care in a comfortable environment 
          where your smile and wellbeing come first.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-block bg-secondary text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}