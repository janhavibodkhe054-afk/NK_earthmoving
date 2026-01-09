import React from "react";

const industries = [
  { icon: "🏗️", name: "Construction" },
  { icon: "🛣️", name: "Infrastructure" },
  { icon: "⛏️", name: "Mining" },
  { icon: "📦", name: "Material Handling" },
  { icon: "👷", name: "Earthmoving Contractors" },
];

const CTA = () => {
  return (
    <div>
      {/* Industries Served */}
      <section className="bg-gray-50 sm:py-16 px-4 sm:px-6 opacity-0 animate-fadeInUp">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3">
            Industries We Serve
          </h3>
          <div className="h-1 w-12 sm:w-16 bg-orange-500 mx-auto mb-8"></div>

          {/* Industries Cards */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white px-4 sm:px-6 py-3 sm:py-4
                           rounded-lg shadow hover:shadow-lg
                           flex items-center gap-2 sm:gap-3
                           opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <span className="text-xl sm:text-2xl">{industry.icon}</span>
                <span className="font-medium text-sm sm:text-base">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 text-center opacity-0 animate-fadeInUp animation-delay-200">
        <div className="max-w-xl mx-auto">
          <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-gray-500 text-base sm:text-lg mb-8">
            Contact us today for the best bucket & fork solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              className="bg-orange-400 text-white font-bold text-base sm:text-lg
               px-6 sm:px-10 py-3 sm:py-4 rounded-lg hover:shadow-lg transition
               w-full sm:w-auto max-w-[200px] sm:max-w-[200px] sm:mx-0 mx-auto"
            >
              Get Started
            </button>

            <button
              className="bg-green-400 text-white font-bold text-base sm:text-lg
               px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2
               hover:shadow-lg transition
               w-full sm:w-auto max-w-[200px] sm:max-w-[200px] sm:mx-0 mx-auto"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Animations */}
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
    </div>
  );
};

export default CTA;
