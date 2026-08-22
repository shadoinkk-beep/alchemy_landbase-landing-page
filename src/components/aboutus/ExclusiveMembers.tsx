"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface MemberCardProps {
  imageSrc?: string;
  imageAlt: string;
  initials: string;
  name: string;
  title: string;
  description: string;
  featured?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const members: MemberCardProps[] = [
  {
    imageSrc: "/Ishmeet Singh Rana.jpg",
    imageAlt: "Ishmeet Singh Raina",
    initials: "IR",
    name: "Ishmeet Singh Raina",
    title: "Founder",
    description:
      "Ishmeet Singh Raina, Founder of Alchemy Landbase, brings deep expertise in land acquisition and farmhouse development. His vision centers on transparency, legal integrity, and creating long-term value for investors. With a leadership approach grounded in due diligence and customer clarity, he guides each project from opportunity identification through development planning. His work focuses on shaping carefully selected land into secure, sustainable communities that can become lasting family legacies.",
    featured: true,
  },
  {
    imageAlt: "Photo placeholder for Prateek Joshi",
    initials: "PJ",
    name: "Prateek Joshi",
    title: "Senior Director",
    description:
      "As Senior Director, Prateek Joshi supports Alchemy Landbase's strategic growth and the execution of transparent, future-ready land communities.",
  },
  {
    imageAlt: "Photo placeholder for Harshit Bhardwaj",
    initials: "HB",
    name: "Harshit Bhardwaj",
    title: "Senior Manager, Sales",
    description:
      "As Senior Manager - Sales, Harshit Bhardwaj helps clients understand each opportunity clearly and guides them through a transparent, considered buying journey.",
  },
];

function MemberCard({
  imageSrc,
  imageAlt,
  initials,
  name,
  title,
  description,
  featured = false,
}: MemberCardProps) {
  return (
    <motion.article
      className={`group overflow-hidden rounded-2xl border border-black/10 bg-white/75 shadow-[0_18px_50px_rgba(75,61,26,0.08)] ${
        featured ? "lg:col-span-2" : ""
      }`}
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`grid h-full grid-cols-1 sm:grid-cols-[minmax(220px,0.85fr)_1.15fr] ${
          featured ? "lg:grid-cols-[minmax(320px,0.58fr)_1.42fr]" : ""
        }`}
      >
        <div
          className={`relative min-h-72 overflow-hidden bg-black ${
            featured ? "sm:min-h-[540px]" : "sm:min-h-[340px]"
          }`}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes={
                featured ? "(min-width: 1024px) 38vw, 50vw" : "(min-width: 1024px) 22vw, 50vw"
              }
              className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div
              className={`flex h-full min-h-72 flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_25%,#4B3D1A_0%,#19160f_45%,#050505_100%)] px-6 text-center text-[#EFCC6E] ${
                featured ? "sm:min-h-[540px]" : "sm:min-h-[340px]"
              }`}
              role="img"
              aria-label={imageAlt}
            >
              <span className="text-6xl font-light tracking-[0.08em]" aria-hidden="true">
                {initials}
              </span>
              <span className="mt-5 border-t border-[#EFCC6E]/50 pt-4 text-xs uppercase tracking-[0.24em] text-white/65">
                Photo coming soon
              </span>
            </div>
          )}
        </div>

        <div className="flex min-h-[300px] flex-col justify-between p-7 sm:p-9 lg:p-10">
          <p className="max-w-2xl text-[0.95rem] leading-7 text-gray-600 sm:text-base">
            {description}
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ExclusiveMembersSection() {
  return (
    <motion.section
      className="container_section !py-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={containerVariants}
    >
      <div className="container_content !py-12 md:!py-16 lg:!py-20">
        <motion.div className="mb-10 max-w-3xl lg:mb-14" variants={fadeUp}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9A6A1D]">
            The people behind Alchemy
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 lg:text-5xl">
            Our leadership team
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Every project is shaped by experienced leadership, transparent guidance, and a shared
            commitment to building secure, future-ready land communities.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8" variants={containerVariants}>
          {members.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
