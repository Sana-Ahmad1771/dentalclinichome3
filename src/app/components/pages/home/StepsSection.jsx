"use client";
import Image from "next/image";

export default function StepsSection() {
  const steps = [
    {
      id: 1,
      image: "/images/step11.jpg",
      title: "Book in Seconds",
      desc: "Reserve your desired service online in real time, no delays. Your goals and lifestyle shape everything we do next.",
    },
    {
      id: 2,
      image: "/images/about-11.png",
      title: "Meet Your Smile Strategist",
      desc: "We begin with conversation, not a clipboard. Your goals, lifestyle, and preferences shape everything we do next.",
    },
    {
      id: 3,
      image: "/images/step3.jpg",
      title: "Complimentary Comforts",
      desc: "Therabody massage, aromatherapy, and noise-canceling headphones—built in, not billed extra.",
    },
    {
      id: 4,
      image: "/images/step4.jpg",
      title: "See the Results, Feel the Shift",
      desc: "It’s not just about your smile. It’s about how you carry yourself when you leave. Lighter. Brighter. Fully cared for.",
    },
  ];

  return (
    <section className="bg-primary py-24 text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Designed Around You,
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-14">
          Down to the Details
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col border-2 border-secondary p-2 rounded-2xl  items-center text-center space-y-4"
            >
              {/* Image Box */}
              <div className="w-full h-[430px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step Text */}
              <h3 className="text-white text-lg font-semibold mt-2">
                Step {step.id}
              </h3>
              <h4 className="text-secondary text-xl font-semibold">{step.title}</h4>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-[250px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="inline-block bg-secondary text-white font-semibold px-8 py-3 rounded-2xl shadow-md hover:bg-white hover:text-primary transition-all duration-300">
          BOOK NOW
        </button>
      </div>
    </section>
  );
}
