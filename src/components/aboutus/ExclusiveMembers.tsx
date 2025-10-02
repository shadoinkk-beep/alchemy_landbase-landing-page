"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// --- Interface for Member Card Props ---
interface MemberCardProps {
  imageSrc?: string; 
  imageAlt: string;
  name: string;
  title: string;
  description: string;
}

// --- Motion Variants ---
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Member Card Component ---
const MemberCard: React.FC<MemberCardProps> = ({
  imageSrc,
  imageAlt,
  name,
  title,
  description,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Half: Image or Placeholder */}
        <div className="bg-black flex items-center justify-center p-4">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-full bg-black"></div>
          )}
        </div>

        {/* Right Half: Text Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">{description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-600 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const ExclusiveMembersSection: React.FC = () => {
  return (
    <motion.section
      className="container_section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container_content">
        {/* Section Heading and Subtext */}
        <motion.div className="mb-12 lg:mb-16" variants={fadeUp}>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
            Our exclusive members
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Behind every project is a vision shaped by experience and integrity. Our promoters bring
            decades of expertise, credibility, and commitment to building secure, future-ready
            communities.
          </p>
        </motion.div>

        {/* Member Cards Grid */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={containerVariants}>
          <MemberCard
            imageSrc="/Ishmeet Singh Rana.png"
            imageAlt="Ishmeet Singh Raina"
            name="Ishmeet Singh Raina"
            title="Co-Founder of Alchemy Landbase"
            description="Ishmeet Singh Raina, Co-Founder of Alchemy Landbase, brings deep expertise in land acquisition and farmhouse development. His vision centers on transparency, legal integrity, and creating long-term value for investors."
          />
          <MemberCard
            imageSrc="/Ishmeet Singh Rana.png"
            imageAlt="Charu Verma"
            name="Charu Verma"
            title="Co-Founder of Alchemy Landbase"
            description="Charu Verma, Co-Founder of Alchemy Landbase, brings deep expertise in land acquisition and farmhouse development. Her vision centers on transparency, legal integrity, and creating long-term value for investors."
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExclusiveMembersSection;
