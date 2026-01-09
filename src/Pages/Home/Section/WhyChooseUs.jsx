import React from "react";

const features = [
  {
    title: "Bucket & Fork Specialists",
    description: "Expert solutions for all earthmoving needs",
    icon: "🏗️",
    image: "/image2.png",
  },
  {
    title: "Quality Materials",
    description: "High-quality materials & superior workmanship",
    icon: "⚙️",
    image: "/image3.png",
  },
  {
    title: "Custom Fabrication",
    description: "Tailored solutions as per your requirements",
    icon: "🔧",
    image: "/image4.png",
  },
  {
    title: "Expert Team",
    description: "Experienced technical professionals",
    icon: "👷",
    image: "/image5.jpeg",
  },
  {
    title: "Reliable Service",
    description: "Dependable service & timely delivery",
    icon: "✅",
    image: "/image6.png",
  },
  {
    title: "New Workshop",
    description: "State-of-the-art facility for precision work",
    icon: "🏭",
    image: "/image7.jpeg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f9f8f8] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl
                     font-bold text-[#12142e] mb-2
                     opacity-0 animate-fadeInUp"
        >
          WHY CHOOSE US
        </h2>

        <div
          className="w-12 sm:w-16 h-1 bg-orange-500
                     mx-auto mb-8 sm:mb-12 rounded-full
                     opacity-0 animate-fadeInUp animation-delay-200"
        ></div>

        <div
          className="grid grid-cols-1
                     sm:grid-cols-2
                     md:grid-cols-3
                     gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white
                         p-6 sm:p-7 md:p-8
                         rounded-lg shadow-md
                         hover:shadow-xl transition
                         hover:-translate-y-1
                         opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15 + 0.4}s` }}
            >
              {/* Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-2">
                {feature.icon}
              </div>

              <h3
                className="text-lg sm:text-xl
                           font-semibold mb-2
                           text-[#12142e]"
              >
                {feature.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
};

export default WhyChooseUs;
