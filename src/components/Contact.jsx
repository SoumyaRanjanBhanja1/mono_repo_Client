import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>{
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  const API="https://mono-repo-server-1.onrender.com"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/contact`, form);
      toast.success("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("❌ Failed to send message. Please try again.");
    }
  };

  // Particle config loader
  const particlesInit = async (main) => {
    await loadStarsPreset(main);
  };

  const particlesOptions = {
    preset: "stars",
    background: { color: "#0f0c29" },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 text-white overflow-hidden">
      {/* 3D Stars Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Contact Form Content */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-2xl z-10">
        {/* Left Info */}
        <div className="flex flex-col justify-center space-y-6 animate-fade-in-left">
          <h2 className="text-5xl font-extrabold leading-tight tracking-tight">
            Let’s Talk 👋
          </h2>
          <p className="text-lg text-gray-300">
            Got a project or collaboration in mind? Drop a message and I’ll respond quickly.
          </p>
          <div className="space-y-5 text-base text-gray-400">
            <div>
              <p className="font-semibold text-white">📧 Email</p>
              <p>soumyabhanja113@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-white">📱 Phone</p>
              <p>+91-6304199322 / +91-8144818637</p>
            </div>
            <div>
              <p className="font-semibold text-white">📍 Location</p>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 animate-fade-in-right"
        >
          {/* Name */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full bg-transparent border border-gray-500 rounded-xl px-4 pt-6 pb-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 transition-all duration-300"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-gray-400 text-sm bg-[#24243e] px-1 transition-all duration-300 
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400 peer-focus:bg-[#24243e]"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full bg-transparent border border-gray-500 rounded-xl px-4 pt-6 pb-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 transition-all duration-300"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 text-sm bg-[#24243e] px-1 transition-all duration-300 
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400 peer-focus:bg-[#24243e]"
            >
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative group">
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full bg-transparent border border-gray-500 rounded-xl px-4 pt-6 pb-3 text-white placeholder-transparent focus:outline-none focus:border-yellow-400 resize-none transition-all duration-300"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-400 text-sm bg-[#24243e] px-1 transition-all duration-300 
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-400 peer-focus:bg-[#24243e]"
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-bold rounded-xl transition duration-300 hover:bg-yellow-500 shadow-md"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
