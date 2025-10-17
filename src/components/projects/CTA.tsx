"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ExperienceSection: React.FC = () => {
  return (
    <section className="container_section">
      <div className="container_content grid justify-center justify-items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-normal text-gray-900 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Ready to Experience the
          <br /> Alchemy Difference?
        </motion.h2>

        <motion.p
          className="text-black mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Your dream farmhouse begins with the right foundation — secure land,
          timeless design, and a trusted team behind it.
          <br />
          Explore our ongoing and upcoming projects to find a space that
          reflects your vision of nature-led living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <Link href="#contact" className="button-grn mt-8 inline-block">
            Enquire For Farmhouse Request
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
