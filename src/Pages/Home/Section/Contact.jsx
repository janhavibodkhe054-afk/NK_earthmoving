import React from "react";

const Contact = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl
                       font-bold text-center text-[#0b173f]
                       opacity-0 animate-fadeInUp"
        >
          CONTACT US
        </h2>

        <div
          className="w-12 sm:w-16 h-1 bg-orange-500
                        mx-auto mt-2 mb-8 sm:mb-12 rounded
                        opacity-0 animate-fadeInUp animation-delay-200"
        ></div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Get In Touch */}
          <div
            className="bg-[#f9f8f8]
                          p-6 sm:p-8
                          rounded-lg shadow
                          opacity-0 animate-fadeInUp animation-delay-400"
          >
            <h3
              className="text-lg sm:text-xl
                           font-semibold mb-4 sm:mb-6
                           text-[#0b173f]"
            >
              Get In Touch
            </h3>

            <div className="mb-4">
              <p className="flex items-center text-[#f28c28] font-semibold">
                <span className="mr-2">📍</span> Address:
              </p>
              <p className="text-[#0b173f] mt-1 text-sm sm:text-base">
                Plot No. 144, G.I.D.C Area, Oslo Area, Gandhidham, (Kutch)
                Gujarat – 370201, India
              </p>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-[#f28c28] font-semibold">
                <span className="mr-2">📞</span> Phone:
              </p>
              <p className="text-[#0b173f] mt-1 text-sm sm:text-base">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div>
              <p className="flex items-center text-[#f28c28] font-semibold">
                <span className="mr-2">📧</span> Email:
              </p>
              <p className="text-[#0b173f] mt-1 text-sm sm:text-base">
                sales.nkec@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div
            className="bg-[#fdf8f9]
                          p-6 sm:p-8
                          rounded-lg shadow
                          opacity-0 animate-fadeInUp animation-delay-600"
          >
            <h3
              className="text-lg sm:text-xl
                           font-semibold mb-4 sm:mb-6
                           text-[#0b173f]"
            >
              Quick Enquiry
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded
                           px-4 py-2.5
                           text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 rounded
                           px-4 py-2.5
                           text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                placeholder="Your Requirement"
                rows="4"
                className="w-full border border-gray-300 rounded
                           px-4 py-2.5
                           text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-400 text-white
                           font-semibold py-3 rounded
                           hover:bg-orange-500 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>

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

          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </section>
  );
};

export default Contact;
