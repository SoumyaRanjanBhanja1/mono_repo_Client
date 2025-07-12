import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "https://www.linkedin.com/in/soumya-ranjan-bhanja-270644247", external: true },
  { name: "Skills", href: "/Skills", external: false },
  { name: "Contact", href: "/Contact", external: true }, // replace with actual contact URL
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-indigo-900 to-black text-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Clickable Brand Name */}
        <a
          href="/Contact"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-yellow-400 tracking-tight animate-pulse"
        >
          Bijay Kumar Bhanja
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-lg">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, color: "#facc15" }}
              className="hover:text-yellow-300 transition duration-200"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center py-4 space-y-4"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : undefined}
              whileTap={{ scale: 0.95 }}
              className="text-lg text-white hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
