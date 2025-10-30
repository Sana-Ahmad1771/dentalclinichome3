"use client";
import { useEffect, useRef, useState } from "react";
import { FaTooth, FaUniversity, FaUsers, FaMedal } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    { icon: <FaTooth />, value: 500, label: "Project Done", color: "#001B48" },
    { icon: <FaUniversity />, value: 250, label: "Satisfied Clients", color: "#001B48" },
    { icon: <FaUsers />, value: 120, label: "Active Experts", color: "#001B48" },
    { icon: <FaMedal />, value: 50, label: "Experience Years", color: "#001B48" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 } // triggers when 40% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timers = stats.map((stat, i) => {
      let start = 0;
      const step = Math.ceil(stat.value / 50); // smaller step for smooth counting

      const interval = setInterval(() => {
        start += step;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(interval);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
      }, 40);

      return interval;
    });

    return () => timers.forEach(clearInterval);
  }, [started]);

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center"
          >
            <div
              className="relative w-full h-44 rounded-2xl bg-primary border-2 flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:scale-110 group-hover:bg-secondary group-hover:border-transparent"
              style={{ borderColor: stat.color }}
            >
              <div className="text-4xl transition-all duration-500 text-white">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white transition-all duration-500">
                {counts[index]}+
              </h3>
              <p className="text-white font-medium text-md leading-relaxed transition-all duration-500">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
