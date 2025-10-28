"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending your message...");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("We’ll connect with you soon 🤝", { id: toastId });
      setFormData({ name: "", email: "", phone: "", purpose: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container_section">
      <div className="container_content">
        <div className="grid md:grid-cols-2 w-full justify-center rounded-2xl overflow-hidden">
          {/* Left Section */}
          <div
            style={{ background: `url("/contact_bg.jpg")`, backgroundSize: "cover" }}
            className="flex items-start justify-start bg-black text-white p-10"
          >
            <h2 className="text-3xl font-semibold leading-snug max-w-xs">
              Turn open land into a timeless retreat for your family.
            </h2>
          </div>

          {/* Right Section */}
          <div className="p-10">
            {/* Logo */}
            <div className="flex justify-center md:justify-start mb-4">
              <img src="/Alchemy_logo.png" alt="logo" className="w-14 h-14" />
            </div>

            <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-4">
              Let’s turn your dream farmhouse into a lasting legacy—get in touch today.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <input
                type="text"
                name="purpose"
                placeholder="Purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />

              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? "bg-gray-500" : "bg-[#B47F2B] hover:bg-yellow-800"
                } cursor-pointer text-white py-2 px-4 rounded-md font-medium transition-colors`}
              >
                {loading ? "Sending..." : "Submit Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
