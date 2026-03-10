import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsComponent from './components/ProjectsComponent';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkeletonLoader from './components/SkeletonLoader';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <AnimatePresence mode="wait">
        {loading ? (
          <SkeletonLoader key="skeleton" />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
            <About />
            <Skills />
            <ProjectsComponent />
            <CodingProfiles />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
