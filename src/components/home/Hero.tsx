"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import SplitText from "../SplitText";
const Hero: React.FC = () => {
  const headingVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
  };

  return (
    <section className="container_section">
      <main className="container_content">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Side Heading */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >

            {/* <SplitText
  text="WHERE  LAND MEETS ALCHEMY"
  className="text-6xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/> */}

            
            <h1 className="text-6xl font-extrabold leading-tight">
              
              <span className="text-black block">WHERE LAND</span>
              <span className="text-black block">MEETS</span>
              <span className="text-yellow-600 block">ALCHEMY</span>
            </h1>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-start gap-6"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-gray-700 text-lg max-w-md">
              From prime land acquisition to world-class development, Alchemy Landbase
              delivers farmhouses built with transparency, trust, and unmatched craftsmanship.
            </p>

            <div className="flex gap-4">
              <motion.button
                className="button_black_bg"
                whileHover={{ scale: 1.05 }}
              >
                Our Legacy
              </motion.button>
              <motion.button
                className="button_white_bg"
                whileHover={{ scale: 1.05 }}
              >
                Our Vision
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.img
          src="/hero_BG_IMG_Large.png"
          alt="Hero background"
          className="mt-8 w-full"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        />
      </main>
    </section>
  );
};

export default Hero;
