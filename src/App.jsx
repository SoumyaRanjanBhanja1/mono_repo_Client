import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loader1 from "./components/Loader1";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true); // track fade-out completion

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Wait for fade-out animation before unmounting loader
      setTimeout(() => setShowLoader(false), 800); // match fade-out duration
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {showLoader && <Loader1 isFadingOut={!isLoading} />}

      {!isLoading && (
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  key="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Hero />
                </motion.div>
              } />
               <Route path="/Skills" element={
                <motion.div
                  key="experience"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Skills/>
                </motion.div>
              } />
              <Route path="/experience" element={
                <motion.div
                  key="experience"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Experience />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  key="contact"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <Contact />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
