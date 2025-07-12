import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Footer = () => {
  const year = new Date().getFullYear(); // ✅ Simplified (no unused setYear)
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative bg-black text-white mt-24 overflow-hidden"
    >
      {/* 🌌 3D Star Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-black opacity-60" />
      </div>

      {/* 🧠 Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center space-y-6 z-10 relative">
        <motion.h3
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400 animate-text"
        >
          Let's connect and build something impactful.
        </motion.h3>

        <div className="flex justify-center gap-6 text-xl">
          <motion.a
            href="https://linkedin.com/in/bijay-bhanja"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/bijaybhanja"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-green-400 transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:bijaybhanja113@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        <p className="text-sm md:text-base text-gray-300">
          &copy; {year} <span className="font-semibold text-white">Bijay Kumar Bhanja</span>. All rights reserved.
        </p>
      </div>

      {/* 🔝 Scroll-to-top button */}
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-full shadow-lg hover:scale-110 text-black z-50"
          title="Back to Top"
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </motion.footer>
  );
};

export default Footer;
