import React from "react";

/* Forks Data */
const forks = [
  { title: "Pallet Forks", desc: "Standard and custom pallet handling forks" },
  { title: "Industrial Forks", desc: "Heavy-duty forks for industrial applications" },
  { title: "Custom Fork Solutions", desc: "Specialized fork designs as per your needs" },
];

/* Spare Parts Data */
const spareParts = [
  { title: "Hydraulic Cylinders & Parts", desc: "Quality hydraulic components" },
  { title: "Electrical Components", desc: "Reliable electrical and control parts" },
  { title: "Undercarriage Parts", desc: "Durable undercarriage components" },
  { title: "Wear & Tear Parts", desc: "Replacement parts for maintenance" },
];

/* Workshop Services Data */
const workshopServices = [
  { title: "Bucket & Fork Repair", desc: "Expert repair and restoration services" },
  { title: "Fabrication & Welding", desc: "Precision fabrication work" },
  { title: "Equipment Maintenance", desc: "Regular maintenance and servicing" },
  { title: "Custom Modification", desc: "Specialized modification work" },
];

/* Reusable SectionCard */
const SectionCard = ({ title, items }) => {
  return (
    <div className="mb-14 px-4 sm:px-6 md:px-10 opacity-0 animate-fadeInUp">
      
      {/* Section Heading */}
      <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl
                     text-gray-900 mb-2 tracking-wide">
        {title}
      </h3>

      <div className="h-1 w-12 sm:w-16 bg-orange-500 mb-6 rounded-full"></div>

      {/* Cards Grid */}
      <div
        className="grid gap-5
                   grid-cols-1
                   sm:grid-cols-2
                   md:grid-cols-3
                   lg:grid-cols-4"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-5 md:p-6
                       rounded-lg shadow
                       hover:shadow-lg transition
                       opacity-0 animate-fadeInUp mb-4"
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 text-gray-900 tracking-tight">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Main Component */
const ProductTwo = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto">

        <SectionCard title="🍴 Forks & Handling Equipment" items={forks} />
        <SectionCard title="🔩 Earthmoving Spare Parts" items={spareParts} />
        <SectionCard title="🔧 Workshop Services" items={workshopServices} />

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
        `}
      </style>
    </section>
  );
};

export default ProductTwo;
