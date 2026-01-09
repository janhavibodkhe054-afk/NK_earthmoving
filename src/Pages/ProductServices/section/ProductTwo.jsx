import React from "react";

/* Forks Data */
const forks = [
  {
    title: "Pallet Forks",
    desc: "Standard and custom pallet handling forks",
    image: "service1.png",
  },
  {
    title: "Industrial Forks",
    desc: "Heavy-duty forks for industrial applications",
    image: "/service2.webp",
  },
  {
    title: "Custom Fork Solutions",
    desc: "Specialized fork designs as per your needs",
    image: "/service3.jpg",
  },
];

/* Spare Parts Data */
const spareParts = [
  {
    title: "Hydraulic Cylinders & Parts",
    desc: "Quality hydraulic components",
    image: "/service4.webp",
  },
  {
    title: "Electrical Components",
    desc: "Reliable electrical and control parts",
    image: "/service5.webp",
  },
  {
    title: "Undercarriage Parts",
    desc: "Durable undercarriage components",
    image: "/service6.jpg",
  },
  {
    title: "Wear & Tear Parts",
    desc: "Replacement parts for maintenance",
    image: "/service7.avif",
  },
];

/* Workshop Services Data */
const workshopServices = [
  {
    title: "Bucket & Fork Repair",
    desc: "Expert repair and restoration services",
    image: "/product1.jpg",
  },
  {
    title: "Fabrication & Welding",
    desc: "Precision fabrication work",
    image: "/product2.webp",
  },
  {
    title: "Equipment Maintenance",
    desc: "Regular maintenance and servicing",
    image: "/product3.jpg",
  },
  {
    title: "Custom Modification",
    desc: "Specialized modification work",
    image: "/product4.avif",
  },
];

/* Reusable SectionCard */
const SectionCard = ({ title, items }) => {
  return (
    <div className="mb-14 px-4 sm:px-6 md:px-10 opacity-0 animate-fadeInUp">
      {/* Section Heading */}
      <h3
        className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl
                   text-gray-900 mb-2 tracking-wide"
      >
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
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 text-gray-900 tracking-tight">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
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
