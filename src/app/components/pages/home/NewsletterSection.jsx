"use client";
import Image from "next/image";
import { useState } from "react";
import newsletterBg from "../../../../../public/images/newsletter-bg.jpg";
import dentalImg from "../../../../../public/images/implant-image.png";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState({ message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setPopup({ message: "Please enter your email address.", type: "error" });
    } else if (!emailRegex.test(email)) {
      setPopup({ message: "Please enter a valid email address.", type: "error" });
    } else {
      setPopup({ message: "Thank you for subscribing!", type: "success" });
      setEmail("");
    }

    // Hide popup after 3 seconds
    setTimeout(() => {
      setPopup({ message: "", type: "" });
    }, 3000);
  };

  return (
    <section
      className="relative py-10 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${newsletterBg.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Content */}
        <div className="max-w-xl z-10 w-full lg:w-1/2">
          <p className="text-sm tracking-[0.2em] uppercase text-white font-medium mb-3 inline-block border border-white px-4 py-2 rounded-full bg-transparent backdrop-blur-sm">
            Newsletter
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Subscribe To Our Newsletter
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex lg:flex-row flex-col lg:items-center bg-white/30 border border-white py-1 px-2 rounded-2xl overflow-hidden w-full lg:max-w-md"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            className="max-w-xs lg:max-w-md object-contain w-full"
          />
        </div>
      </div>

      {/* Popup Message */}
      {popup.message && (
        <div
          className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg text-white font-medium transition-all duration-500 ${
            popup.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {popup.message}
        </div>
      )}
    </section>
  );
}
