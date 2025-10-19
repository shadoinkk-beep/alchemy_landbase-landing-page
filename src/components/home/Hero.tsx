"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Textfit } from "@outofaxis/react-textfit";

const Hero: React.FC = () => {
  const headingVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" as const, delay: 0.4 } },
  };

  return (
    <section className="container_section">
      <main className="container_content">
        <div className="flex flex-col md:flex-row  justify-between items-end ">
          {/* Left Side Heading */}
          <motion.div
            className="w-full md:w-3/5  text-center md:text-left"
            variants={headingVariants}
            initial="hidden"
            animate="visible" // 👈 immediate animation on load
          >
            <h1 className="text-6xl font-normal leading-tight impact-font">
              <Textfit mode="single" className="w-[70%] sm:w-[55%]"   max={200}>

              <span className="text-black block">WHERE LAND</span>
              </Textfit>
              {/* <div className="sm:whitespace-nowrap">

              <span className="text-black ">MEETS </span>
              <span className="text-yellow-600">ALCHEMY</span>
              </div> */}
              <Textfit className="w-[100%] sm:w-[80%]" mode="single"    max={200}>

              <span className="text-black ">MEETS </span>
              <span className="text-yellow-600">ALCHEMY</span>
              </Textfit>
            </h1>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="w-full md:w-2/5  mt-8 md:mt-0 flex flex-col items-start gap-6 mb-8"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-gray-700 text-lg max-w-md">
              From prime land acquisition to world-class development, Alchemy Landbase
              delivers farmhouses built with transparency, trust, and unmatched craftsmanship.
            </p>

            <div className="flex gap-4 ">
              <Link href={"#stats"}>
              <motion.button className="button_black_bg" whileHover={{ scale: 1.05 }}>
                Our Legacy
              </motion.button>
              </Link>
              <Link href={"#our-vision"} >
              <motion.button className="button_white_bg" whileHover={{ scale: 1.05 }}>
                Our Vision
              </motion.button>
              </Link>
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
          animate="visible" // 👈 ensures immediate animation too
        />
      </main>
    </section>
  );
};

export default Hero;
