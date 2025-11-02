import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const reasons = [
  {
    title: "Expertise",
    description:
      "We bring years of industry experience and expertise to deliver top-notch solutions",
    icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning bolt icon path
  },
  {
    title: "Innovation",
    description:
      "We stay on the cutting edge of technology, ensuring your website is modern and future-ready",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", // Lightbulb icon path
  },
  {
    title: "Solutions",
    description:
      "We customize every project to fit your unique needs and goals",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", // Code icon path
  },
  {
    title: "Timely Delivery",
    description:
      "We are committed to delivering projects on time and within budget",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", // Clock icon path
  },
  {
    title: "Quality Assurance",
    description:
      "Our rigorous testing and quality control guarantee a flawless end product",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", // Check circle icon path
  },
  {
    title: "Affordability",
    description: "We offer competitive pricing without compromising on quality",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", // Currency dollar icon path
  },
];

function WhyUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="pb-10 bg-gray-50 lg:pt-10">
      <div className="container px-4 mx-auto">
        <h2 className="pt-4 mb-4 text-2xl font-bold text-center text-blueColor md:text-3xl">
          Why Choose Us?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-center text-gray-600">
          Choose us as your digital partner for unmatched innovation,
          reliability, and transformative solutions
        </p>
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="p-4 overflow-hidden transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg sm:p-5 md:p-6 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col items-center justify-center gap-2 mb-4">
                    <svg
                      className="flex-shrink-0 w-8 h-8 text-orangeColor"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={reason.icon}
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-center text-gray-800 sm:text-xl">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-sm text-center text-gray-600 line-clamp-4">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
