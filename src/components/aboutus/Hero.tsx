"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// --- Interface for Stat Cards ---
interface StatCardProps {
  number: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

// --- Animation Variants ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      when: "beforeChildren",
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      staggerChildren: 0.2,
    },
  },
};

// --- Stat Card Component ---
const StatCard: React.FC<StatCardProps> = ({
  number,
  description,
  imageSrc,
  imageAlt,
}) => (
  <motion.div
    className="h-56 border border-black p-6 rounded-lg shadow-xl flex flex-col justify-end space-y-4 relative "
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
  >
    {/* Circular Image */}
    <div className="flex justify-start absolute top-0 left-4 translate-y-[-50%]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
      />
    </div>

    {/* Number and Description */}
    <motion.div variants={textVariants}>
      <h3 className="text-4xl text-gray-800 mb-1">{number}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  </motion.div>
);

// --- Main Component ---
const FarmhouseDevelopmentSection: React.FC = () => {
  return (
    <motion.section
      className="container_section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={headerVariants}
    >
      <div className="container_content">
        {/* Main Content Grid: Left Text/Stats, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={headerVariants}
          >
            {/* Heading */}
            <motion.h2
              className="text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 leading-tight mb-6"
              variants={textVariants}
            >
              Transparent, Legally Clean Farmhouse <br /> Community Development
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={textVariants}
            >
              At Alchemy Landbase, every farmhouse begins with clean land records,
              rigorous legal checks, and approvals in place — ensuring your investment
              is not just lifestyle-ready but also future-proof.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex space-x-4 mb-12"
              variants={textVariants}
            >
              <Link href={"/projects"} >
              <motion.button
                className="button_black_bg"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                Our Projects
              </motion.button>
                </Link>
                <Link href={"#our-principles"}>
              <motion.button
                className="button_white_bg"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                Our Vision
              </motion.button>
                </Link>
            </motion.div>

            {/* Stat Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={headerVariants}
            >
              <StatCard
                number="500+"
                description="Acres Developed"
                imageSrc="/stats/1.jpg"
                imageAlt="Green field"
              />
              <StatCard
                number="60%"
                description="Nature Preservation"
                imageSrc="/stats/2.jpg"
                imageAlt="Waterfall"
              />
              <StatCard
                number="20+"
                description="Years of Legacy"
                imageSrc="/stats/3.jpg"
                imageAlt="Sunset over land"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Feature Image */}
          <motion.div
            className="relative h-full min-h-[400px] lg:min-h-[400px] rounded-lg overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/AboutPage_Hero.png"
              alt="Beautiful farmhouse in a serene landscape"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FarmhouseDevelopmentSection;
