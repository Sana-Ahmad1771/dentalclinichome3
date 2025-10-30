"use client";
import { motion } from "framer-motion";
import {
  FaHeartPulse,
  FaTooth,
  FaBolt,
  FaUserDoctor,
} from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: <FaHeartPulse className="text-4xl text-white" />,
    title: "Cardiac Care",
    description: "Comprehensive heart checkups and treatments.",
  },
  {
    id: 2,
    icon: <FaTooth className="text-4xl text-white" />,
    title: "Dental Care",
    description: "Advanced dental treatments and hygiene services.",
  },
  {
    id: 3,
    icon: <FaBolt className="text-4xl text-white" />,
    title: "Emergency",
    description: "24/7 emergency services available anytime.",
  },
  {
    id: 4,
    icon: <FaUserDoctor className="text-4xl text-white" />,
    title: "Expert Doctors",
    description: "Experienced doctors with international expertise.",
  },
];

const InforSection = () => {
  return (
    <section className="py-16 relative bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-primary shadow-lg rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-white text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
       
        {/* Soft Bottom Wave Divider */}
      <div className="absolute top-0 left-0 flex w-full overflow-hidden leading-none rotate-180">
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
};

export default InforSection;
