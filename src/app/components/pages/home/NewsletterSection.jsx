"use client";
import Image from "next/image";
import newsletterBg from "../../../../../public/images/newsletter-bg.jpg";
import dentalImg from "../../../../../public/images/implant-image.png";

export default function NewsletterSection() {
  return (
    <section
      className="relative py-10 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${newsletterBg.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl z-10">
          <p className="text-sm tracking-[0.2em] uppercase text-white font-medium mb-3 inline-block border border-white px-4 py-2 rounded-full bg-transparent backdrop-blur-sm">
            Newsletter
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight  mb-6">
            Subscribe To Our Newsletter
          </h2>

          <form className="flex items-center bg-white/30 border border-white py-1 px-2 rounded-2xl overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-5 py-3 rounded-l-full outline-none text-gray-800"
            />
            <button
              type="submit"
              className="inline-block bg-secondary text-white font-semibold px-8 py-3 rounded-2xl shadow-md hover:bg-primary hover:text-white transition-all duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2">
          <Image
            src={dentalImg}
            alt="Dental Implant"
            className="max-w-xs lg:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
