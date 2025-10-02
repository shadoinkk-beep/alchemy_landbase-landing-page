"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Principle = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const principles: Principle[] = [
  {
    id: 1,
    title: "Commitment to Transparency",
    description:
      "We believe trust begins with clarity. That’s why every document, title, and approval is shared upfront with our investors. No hidden clauses, no vague promises—only full disclosure at every step.",
    image: "https://picsum.photos/600/400?random=41",
  },
  {
    id: 2,
    title: "Sustainable Development",
    description:
      "Every farmhouse is built with sustainability in mind—from eco-friendly materials to energy-efficient design. We believe in leaving behind not just homes, but a healthier planet.",
    image: "https://picsum.photos/600/400?random=42",
  },
  {
    id: 3,
    title: "Lasting Value",
    description:
      "A farmhouse is not just a property, it’s a legacy. Our developments are designed to appreciate in value, giving families both emotional and financial returns.",
    image: "https://picsum.photos/600/400?random=43",
  },
];

const PrinciplesSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % principles.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + principles.length) % principles.length);

  const current = principles[index];

  // Optional autoplay
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 5000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="container_section">
      <div className="container_content">
        <div className="grid md:grid-cols-2 gap-10 w-full items-center">
          {/* LEFT CONTENT */}
          <motion.div
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-12">Principles of our work</h2>
            <div>
                
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-3">{current.title}</h3>
                <p className="text-gray-700 max-w-lg">{current.description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation */}
            <motion.div
              className="flex items-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              {/* Index */}
              <span className="font-medium">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(principles.length).padStart(2, "0")}
              </span>

              {/* Progress Line */}
              <div className="flex-1 h-[1px] bg-gray-300 relative">
                <motion.div
                  key={index} // re-trigger on index change
                  className="absolute top-0 left-0 h-full bg-black"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((index + 1) / principles.length) * 100}%`,
                  }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Arrows */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={prevSlide}
                  className="cursor-pointer w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  ←
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={nextSlide}
                  className="cursor-pointer w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                  →
                </motion.button>
              </div>
            </motion.div>
            </div>
          </motion.div>


          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.title}
                className="rounded-2xl shadow-lg w-full max-w-[500px] h-[460px] object-cover"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
