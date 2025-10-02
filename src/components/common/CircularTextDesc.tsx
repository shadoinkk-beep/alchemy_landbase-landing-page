"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import CircularText from "../CircularText";
import { Variants } from "framer-motion";


// Fade-up variant for header
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};










const  CircularTextDesc: React.FC = () => {




  return (
    <motion.section
      className="container_section "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container_content !py-0">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row flex-nowrap lg:items-center content-between justify-center md:justify-between lg:space-x-12 "
          variants={fadeUp}
        >
          <motion.div className="flex-shrink-0 mb-6 lg:mb-0" variants={fadeUp}>
            <CircularText
              text="ALCHEMY.LANDBASE."
              onHover="speedUp"
              spinDuration={20}
              className="custom-class text-black"
            />
          </motion.div>

          <motion.div
            className="md:w-[10%] lg:w-[12%] xl:w-[15%] hidden lg:block h-[1px] bg-black"
          ></motion.div>

          <motion.div className="flex flex-col space-y-4 text-right" variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-thin tracking-tight text-gray-900 leading-snug max-w-3xl">
              DISCOVER THE TIMELESS RETREATS <br />
              <div className="font-semibold">
                AND EVERY FARMHOUSE TELLS A STORY OF LEGACY <br />
              </div>
              <div className="text-left">ROOTED IN NATURE, RICH IN PEACE.</div>
            </h2>
          </motion.div>
        </motion.div>


      </div>
    </motion.section>
  );
};

export default CircularTextDesc;
