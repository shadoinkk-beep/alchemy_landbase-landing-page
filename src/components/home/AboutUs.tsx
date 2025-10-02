"use client";
import React from "react";
import { FaRegMap, FaRegCheckCircle, FaChartLine, FaRegLightbulb } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const AboutUs: React.FC = () => {
  // Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05 },
  };

  const columnVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="container_section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container_content grid gap-8">

        {/* Heading and Intro */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8"
          variants={fadeUp}
        >
          <motion.h2 className="text-3xl font-bold text-black" variants={fadeUp}>
            About Us
          </motion.h2>

          <motion.div className="flex-1 grid justify-end" variants={fadeUp}>
            <motion.p className="text-gray-700 text-lg max-w-2xl" variants={fadeUp}>
              At Alchemy Lanbase, we believe a farmhouse is more than just land—it's a legacy.
              With years of trusted expertise in developing premium farmhouses and gated communities,
              we create spaces that bring together nature, luxury, and security.
            </motion.p>

            <div className="flex gap-4 mt-6">
              <motion.button
                className="button_black_bg"
                variants={buttonVariants}
                whileHover="hover"
              >
                Know More
              </motion.button>
              <motion.button
                className="button_white_bg"
                variants={buttonVariants}
                whileHover="hover"
              >
                Our Projects
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Four Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          <motion.div className="flex flex-col items-start gap-3 border-r md:pr-6 last:border-r-0 py-8" variants={columnVariants}>
            <FaRegMap className="text-yellow-600 text-2xl" />
            <h3 className="text-lg font-semibold">Land Acquisition</h3>
            <p className="text-sm text-gray-600">
              We identify and acquire the most promising land parcels in prime locations, ensuring every project begins with the right foundation.
            </p>
          </motion.div>

          <motion.div className="flex flex-col items-start gap-3 border-r md:pr-6 last:border-r-0 py-8" variants={columnVariants}>
            <FaRegCheckCircle className="text-yellow-600 text-2xl" />
            <h3 className="text-lg font-semibold">Due Diligence</h3>
            <p className="text-sm text-gray-600">
              Transparency drives our process. Through legal verifications and compliance checks, we ensure every project is secure, risk-free, and built on credibility.
            </p>
          </motion.div>

          <motion.div className="flex flex-col items-start gap-3 border-r md:pr-6 last:border-r-0 py-8" variants={columnVariants}>
            <FaChartLine className="text-yellow-600 text-2xl" />
            <h3 className="text-lg font-semibold">Sales Strategy</h3>
            <p className="text-sm text-gray-600">
              With market insights, we craft sales strategies that highlight each project's value ensuring visibility, strong positioning, and lasting demand.
            </p>
          </motion.div>

          <motion.div className="flex flex-col items-start gap-3 py-8" variants={columnVariants}>
            <FaRegLightbulb className="text-yellow-600 text-2xl" />
            <h3 className="text-lg font-semibold">Project Conceptualization</h3>
            <p className="text-sm text-gray-600">
              From vision to blueprint, we shape projects with creativity and precision—blending nature, modern comforts, and exclusivity into every development.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutUs;
