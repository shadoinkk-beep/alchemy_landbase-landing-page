"use client";

import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const LandbaseIntro: React.FC = () => {
  // Animation variants
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="container_section">
      {/* ✅ Top content animates on load immediately */}
      <motion.div
        className="container_content"
        variants={container}
        initial="hidden"
        animate="visible" // 👈 changed from whileInView to animate for instant load animation
      >
        {/* Headings */}
        <motion.h1
          variants={fadeUp}
          className="text-2xl sm:text-5xl text-left font-light text-black leading-tight"
        >
          Secure Land. Beautiful Living.
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-6xl text-center md:text-[3.5rem] font-semibold text-black leading-tight mt-2"
        >
          Nature, Design, and Trust.
        </motion.h2>

        <motion.h3
          variants={fadeUp}
          className="text-2xl sm:text-5xl text-right font-light text-black leading-tight mt-2"
        >
          Inspiring Living.
        </motion.h3>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-[0.95rem] md:text-[1rem] text-black/80 leading-relaxed mt-8"
        >
          Each Alchemy Landbase project represents more than just development — it’s the
          embodiment of our philosophy: to create farmhouses that are secure, beautiful,
          and built to last generations. Every community we build begins with one
          non-negotiable: clarity of land. From ownership verification and zoning
          compliance to environmental approvals, every parcel undergoes rigorous due
          diligence before it ever becomes an Alchemy project. This legal foundation
          ensures that our clients don’t just buy land; they own peace of mind.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex justify-between items-center mt-10">
          <Link href={"#contact"} className="button-grn">Contact Us</Link>
          <Link href={"./#Why-Us"}className="button-grn">Why Alchemy Landbase</Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-between text-base text-black mt-8"
        >
          <hr className="w-full bg-black" />
        </motion.div>
      </motion.div>

      {/* ✅ Lower content (projects) animates on scroll */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="container_content mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-black"
      >
        {/* Project Card 1 */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden text-black grid gap-4"
        >
          <Image
            src="/Ananta-farms.png"
            alt="Ananta Farms"
            width={800}
            height={500}
            className="object-cover w-full h-72 rounded-lg"
          />
          <div className="flex justify-between items-center">
            <span>Ananta Farms</span>
            <Link href="https://www.tribegroup.in/projects/ananta">
              <button className="button_explore !rounded-none">Explore</button>
            </Link>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden text-black grid gap-4"
        >
          <Image
            src="/WhisperingWoods.png"
            alt="Whispering Woods"
            width={800}
            height={500}
            className="object-cover w-full h-72 rounded-lg"
          />
          <div className="flex justify-between items-center">
            <span>Whispering Woods</span>
            <Link href="https://www.tribegroup.in/projects/whisperingwoods">
              <button className="button_explore !rounded-none">Explore</button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LandbaseIntro;
