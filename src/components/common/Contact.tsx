// src/components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call logic here
  };

  return (
    <section id="contact" className="container_section">

    <div className="container_content">
      <div className="grid md:grid-cols-2 w-full justify-center rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div style={{background:`url("/contact_bg.jpg")`,backgroundSize:"cover"}} className="flex items-start justify-start bg-black text-white p-10 ">
          <h2 className="text-3xl font-semibold leading-snug max-w-xs">
            Turn open land into a timeless retreat for your family.
          </h2>
        </div>

        {/* Right Section */}
        <div className="p-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-4">
            <img
              src="/Alchemy_logo.png"
              alt="logo"
              className="w-14 h-14"
            />
          </div>

          {/* Contact Heading */}
          <h3 className="text-xl font-bold text-gray-800">
            Contact Us
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Let’s turn your dream farmhouse into a lasting legacy—get in
            touch today.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <input
              type="text"
              name="purpose"
              placeholder="Purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />

            <button
              type="submit"
              className="bg-[#B47F2B] cursor-pointer hover:bg-yellow-800 text-white py-2 px-4 rounded-md font-medium transition-colors"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>

  );
}
