"use client";
import React, { useState } from "react";
import { FaShieldAlt, FaUsers, FaMapMarkerAlt, FaChartLine } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  knowMoreLink: string;
  isActive: boolean;
  onHover: () => void;
}

// Card animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 } },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, knowMoreLink, isActive, onHover }) => (
  <motion.div
    onMouseEnter={onHover}
    onMouseLeave={() => {}}
    className={`flex flex-col p-8 md:p-10 pb-6 rounded-lg h-full cursor-pointer transition duration-300 ease-in-out ${
      isActive ? "bg-[#b89547] text-white" : "bg-white text-[#4a4a4a] border border-gray-100 shadow-md"
    }`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div className="mb-6 flex flex-col" variants={textVariants}>
      <div className={`text-4xl mb-4 ${isActive ? "text-white" : "text-[#b89547]"}`}>{icon}</div>
      <h3 className={`text-2xl lg:text-3xl ${isActive ? "text-white" : "text-gray-800"}`}>{title}</h3>
    </motion.div>

    <motion.p className={`mb-8 text-sm leading-relaxed ${isActive ? "font-light text-white" : "text-gray-600"}`} variants={textVariants}>
      {description}
    </motion.p>

    <motion.div className="mt-auto" variants={textVariants}>
      <a
        href={knowMoreLink}
        className={`inline-block px-6 py-2 text-center rounded-full transition duration-300 ${
          isActive ? "text-white border border-white" : "text-[#C59C40] border border-[#C59C40] hover:bg-gray-50"
        }`}
      >
        Know More
      </a>
    </motion.div>
  </motion.div>
);

const WhyUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Legacy of Trust",
      description:
        "With years of proven excellence, Alchemy Landbase has earned a reputation for integrity, reliability, and unmatched quality. Our track record speaks for itself, making us a trusted choice for families who want more than just land—they want lasting assurance.",
      link: "#",
    },
    {
      icon: <FaUsers />,
      title: "Gated Communities",
      description:
        "Safety and exclusivity define our communities. From 24/7 security to controlled access, we create environments where your family can live without worry, enjoy complete privacy, and experience the prestige of belonging to a select community.",
      link: "#",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Locations",
      description:
        "Every project is handpicked with precision, ensuring proximity to urban convenience while being surrounded by the calm of nature. Our farmhouses are located where peace meets potential, promising both lifestyle serenity and strong future appreciation.",
      link: "#",
    },
    {
      icon: <FaChartLine />,
      title: "Long-Term Value",
      description:
        "A farmhouse with Alchemy Landbase isn't just a purchase—it's a generational investment. Beyond offering you a lifestyle upgrade today, it grows into a legacy asset that your family will cherish for decades to come.",
      link: "#",
    },
  ];

  // Header animation variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
  };

  return (
    <motion.section className="container_section" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={headerVariants}>
      <div className="container_content">
        <div className="px-4">
          {/* Header */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 lg:mb-20" variants={headerVariants}>
            <motion.div variants={headerVariants}>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 leading-snug">
                Why Alchemy <br />
                Landbase?
              </h2>
            </motion.div>
            <motion.div variants={headerVariants}>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Alchemy Landbase, we don’t just create farmhouses—we craft
                legacies. With decades of trust, expertise, and a vision for
                timeless living, we bring together luxury, security, and nature
                in every project.
              </p>
              <div className="flex space-x-4">
                <motion.button className="button_black_bg" whileHover={{ scale: 1.05 }}>
                  Know More
                </motion.button>
                <motion.button className="button_white_bg" whileHover={{ scale: 1.05 }}>
                  Our Projects
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, idx) => (
              <FeatureCard
                key={idx}
                icon={f.icon}
                title={f.title}
                description={f.description}
                knowMoreLink={f.link}
                isActive={activeIndex === idx}
                onHover={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
