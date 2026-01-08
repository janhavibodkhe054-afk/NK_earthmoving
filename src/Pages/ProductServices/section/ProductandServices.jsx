import React from "react";

const products = [
  { title: "Excavator Buckets", desc: "Heavy-duty buckets for all excavator models" },
  { title: "Loader Buckets", desc: "Durable loader buckets for efficient material handling" },
  { title: "Rock Buckets", desc: "Specialized buckets for rocky terrain" },
  { title: "Heavy Duty Buckets", desc: "Extra-strength buckets for demanding jobs" },
  { title: "Customized Buckets", desc: "Tailored solutions for specific requirements" },
];

const ProductServices = () => {
  return (
    <section className="bg-white overflow-hidden">

      {/* Heading (Blue Area) */}
      <div className="bg-[#1b1f3b] text-white text-center
                      py-16 sm:py-20
                      opacity-0 animate-fadeInUp">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          OUR PRODUCTS & SERVICES
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg">
          Comprehensive earthmoving solutions for every need
        </p>
      </div>

      {/* Buckets & Attachments Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="text-[#1b1f3b] font-bold
                     text-xl sm:text-2xl md:text-3xl
                     mb-4
                     pt-12 sm:pt-16 md:pt-20
                     text-left
                     relative inline-block
                     opacity-0 animate-fadeInUp animation-delay-200"
        >
          🪣 Buckets & Attachments
          <span className="block w-12 sm:w-16 h-1 bg-orange-400 mt-3 sm:mt-4"></span>
        </div>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto
                      px-4 sm:px-6
                      py-10 sm:py-12
                      grid gap-6 sm:gap-7
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 sm:p-6
                       rounded-lg shadow
                       hover:shadow-lg transition
                       opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${0.3 + index * 0.2}s` }}
          >
            <h3 className="font-bold text-base sm:text-lg mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {product.desc}
            </p>
          </div>
        ))}
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
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
};

export default ProductServices;
