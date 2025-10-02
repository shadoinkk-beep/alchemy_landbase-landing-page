"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import CircularText from "../CircularText";
import { Variants } from "framer-motion";

interface StatCardProps {
  number: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  heightClass: string;
}

// Fade-up variant for header
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

// Card container variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 0, scale: 1 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut", 
      when: "beforeChildren", 
      staggerChildren: 0.1 
    } 
  },
};

// Text variants inside card
const numberVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut",delay:0.3 } 
  },
};

const descVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut", delay: 0.5} 
  },
};


const StatCard: React.FC<StatCardProps> = ({
  number,
  description,
  imageSrc,
  imageAlt,
  heightClass,
}) => {
  return (
    <motion.div
      className={`relative w-full ${heightClass} overflow-hidden shadow-lg group block`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Card content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white w-full">
        <motion.h3
          className="text-5xl md:text-6xl font-normal mb-4 leading-none"
          variants={numberVariants}
        >
          {number}
        </motion.h3>
        <motion.p
          className="text-lg font-light flex items-center space-x-2"
          variants={descVariants}
        >
          <FaCircle className="w-2 h-2 text-white/80" />
          <span>{description}</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

const FarmhouseStatsSection: React.FC = () => {
  const cards = [
    {
      number: "500+",
      description: "Acres Developed",
      imageSrc: "/Stats/1.jpg",
      imageAlt: "Lush green hillside under a cloudy sky",
      heightClass: "h-[450px]",
    },
    {
      number: "60%",
      description: "Nature Preservation",
      imageSrc: "/Stats/2.jpg",
      imageAlt: "Tropical waterfall cascading into a pool",
      heightClass: "h-[350px]",
    },
    {
      number: "20+",
      description: "Years of Legacy",
      imageSrc: "/Stats/3.jpg",
      imageAlt: "Sunset over a distant horizon",
      heightClass: "h-[480px]",
    },
    {
      number: "200+",
      description: "Families Living",
      imageSrc: "/Stats/4.jpg",
      imageAlt: "Family enjoying time in an orchard",
      heightClass: "h-[380px]",
    },
  ];



  return (
    <motion.section
      className="container_section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container_content">
        {/* Header Section */}


        {/* Grid of cards with staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-end"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {cards.map((card, idx) => (
            <StatCard
              key={idx}
              number={card.number}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              heightClass={card.heightClass}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FarmhouseStatsSection;
