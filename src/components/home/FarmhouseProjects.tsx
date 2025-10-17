"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Project = {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  images: string[];
  url:string,
};

const projects: Project[] = [
  {
    id: 1,
    name: "Whispering Woods",
    subtitle: "Naogaon, Delhi - Mumbai Expressway",
    description:
      "Experience the pinnacle of luxury living at Whispering Woods Luxury Micro Farmhouses by Ram Rattan Group",
    images: [
      "/WhisperingWoods/1.jpg",
      "/WhisperingWoods/2.webp",
      "/WhisperingWoods/3.png",
    ],
    url:"https://www.tribegroup.in/projects/whisperingwoods",
  },
  {
    id: 2,
    name: "Ananta",
    subtitle: "Off Delhi - Jaipur Expressway",
    description:
      "The rustic blue beautifully contrasting with porcelain white overlooking a vista of greens and a cool blue pool, the farmhouse design is inspired by the Greek island houses in Santorini.",
    images: [
      "/Ananta/1.webp",
      "/Ananta/2.webp",
      "/Ananta/3.webp",
    ],
    url:"https://www.tribegroup.in/projects/ananta"
  },
];

const FarmhouseProjects: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const project = projects[index];

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
    setImageIndex(0);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setImageIndex(0);
  };

  return (
    <section id="our-projects" className="container_section">
      <div className="container_content">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-normal text-left max-w-3xl mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Your farmhouse isn’t just an escape, it’s the legacy your family will
          thank you for.
        </motion.h2>

        {/* Main Layout */}
        <motion.div
          className="grid md:grid-cols-5 gap-2 w-full justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* LEFT SIDE: Main image + thumbnails */}
          <div className="col-span-3 sm:col-span-2 relative w-full sm:max-w-[450px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.id + "-" + imageIndex}
                src={project.images[imageIndex]}
                alt={project.name}
                className="rounded-2xl shadow-lg w-full h-full object-cover"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>

            {/* Thumbnails */}
            <div className="absolute bottom-4 left-4 flex gap-3 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
                    i === imageIndex ? "border-black" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Cards + bottom row */}
          <div className="col-span-3 flex flex-col justify-between h-full">
            <div className="grid  sm:flex gap-6 mb-6">
              {/* First Card */}
              <motion.div
                key={project.id + "-middle"}
                className="bg-white rounded-2xl p-6 flex-[0.9] shadow-md grid content-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Big dreams deserve bigger landscapes.
                  </h3>
                  <p>
                    With Alchemy Lanbase, your farmhouse isn’t just space—it’s freedom,
                    serenity, and legacy combined.
                  </p>
                </div>
                <Link href={"/projects"} className="px-6 py-2 mt-2 cursor-pointer rounded-full w-fit border border-black hover:bg-black hover:text-white transition">
                  Discover More
                </Link>
              </motion.div>

              {/* Second Card */}
              <motion.div
                key={project.id + "-right"}
                className="bg-white rounded-2xl shadow-md flex-[1.2] overflow-hidden"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <div className="p-4">
                  <img
                    src={project.images[1]}
                    alt={project.name}
                    className="w-full h-[140px] object-cover rounded-xl"
                  />
                </div>
                <div className="px-6 pb-6">
                  <h4 className="text-2xl font-semibold">{project.name}</h4>
                  <p className="text-gray-500 mb-4">{project.subtitle}</p>
                  <Link target="_blank" href={project.url} className="px-6 py-2 cursor-pointer rounded-full border border-black hover:bg-black hover:text-white transition">
                    Explore Project →
                  </Link >
                </div>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <p className="text-gray-700 max-w-md">{project.description}</p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={prevProject}
                  className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition"
                >
                  ←
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={nextProject}
                  className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition"
                >
                  →
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FarmhouseProjects;
