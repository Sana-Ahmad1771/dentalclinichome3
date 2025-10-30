"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can book an appointment through our online form or by calling our front desk. We’ll help you find a time that fits your schedule.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we work with most major insurance providers. Our team can assist you with insurance claims and benefit verification.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "During your first visit, we’ll conduct a full dental exam, take X-rays if needed, and discuss a personalized treatment plan for your oral health.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Absolutely! We provide same-day emergency appointments to relieve pain and treat urgent dental issues quickly.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="bg-primary/90 text-light py-24 rounded-3xl relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase text-xs tracking-[0.25em] mb-3 font-medium text-light/80">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-snug">
            Your Questions <br /> Answered
          </h2>
          <p className="text-light/90 text-base md:text-lg leading-relaxed max-w-[550px]">
            We know that navigating dental care can sometimes be confusing,
            which is why we’ve compiled a list of frequently asked questions to
            help you get the information you need.
          </p>
        </div>

        {/* RIGHT FAQ ACCORDION */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-secondary hover:text-primary transition-colors"
              >
                {faq.question}
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-primary" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-dark/80 leading-relaxed border-t border-gray-200"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
