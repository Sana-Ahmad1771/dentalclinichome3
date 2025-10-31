"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutClinic() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left Image Section */}
        <div className="relative flex-1 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[650px]"
          >
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px] relative z-10">
              <Image
                src="/images/about-111.jpg"
                alt="Dental team"
                width={550}
                height={450}
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>

            {/* Floating Image - Bottom Center Overlap */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-1/2 bottom-[-60px] -translate-x-1/2 w-[250px] md:w-[300px] border-[6px] border-light rounded-3xl overflow-hidden shadow-2xl bg-light z-20"
            >
              <Image
                src="/images/about-22.jpg"
                alt="Dentist working"
                width={300}
                height={250}
                className="object-cover w-full h-full rounded-3xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3 inline-block border border-primary/20 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm">
            Welcome to Our Dental Clinic
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6">
            Bright Smiles, <br />
            <span className="text-primary">Gentle Hands</span>
          </h2>

          <p className="text-paragraph text-base md:text-lg leading-relaxed mb-6 max-w-[600px]">
            Our dental clinic blends state-of-the-art technology with a warm,
            personalized approach. We ensure every treatment — from cleanings to
            smile makeovers — feels comfortable, precise, and caring.
          </p>

          <p className="text-paragraph text-base md:text-lg leading-relaxed mb-10 max-w-[580px]">
            Experience the joy of pain-free dentistry in a welcoming atmosphere
            built around your smile.
          </p>

          <Link
            href="/about"
            className="inline-block bg-secondary text-white font-semibold px-8 py-3 rounded-2xl shadow-md hover:bg-primary hover:text-white transition-all duration-300"
          >
            Get to know us →
          </Link>
        </motion.div>
      </div>

    
    </section>
  );
}
