"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Project" },
    { href: "/about", label: "About us" },
  ];

  return (
    <header className="border-b fixed bg-[#F3EDE1] left-0 right-0 border-black text-black z-20">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/Alchemy_logo_text.png"
            alt="Alchemy Landbase"
            className="w-24"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors ${
                  isActive
                    ? "text-yellow-600 font-medium after:content-[''] after:block after:h-[2px] after:bg-yellow-600 after:scale-x-100"
                    : "text-black hover:text-yellow-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-[#EFCC6E] hover:bg-yellow-500 text-sm text-black px-4 py-2 rounded-full"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#F3EDE1] flex flex-col items-center justify-center gap-8 z-50"
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>

            {links.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-semibold transition-colors ${
                      isActive
                        ? "text-yellow-600"
                        : "text-black hover:text-yellow-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-[#EFCC6E] hover:bg-yellow-500 text-lg text-black px-6 py-2 rounded-full"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
