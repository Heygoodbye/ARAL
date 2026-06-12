import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Phone, ArrowUpLeft } from "lucide-react";
import Logo from "./components/Logo";
import Modal from "./components/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parent animation orchestration container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 95,
        damping: 18,
      }
    },
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-brand-dark/100 bg-grid-pattern py-12 px-4 sm:px-6 md:py-20 lg:py-24 overflow-hidden selection:bg-brand-gold/30 selection:text-white">
      
      {/* Decorative ambient glowing orbs with luxury gentle drifting / floating animation */}
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.93, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] sm:top-1/4 right-[5%] sm:right-[10%] w-[65vw] sm:w-[45vw] h-[65vw] sm:h-[45vw] glow-orb-1 rounded-full pointer-events-none select-none z-0"
      />
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -20, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] sm:bottom-1/4 left-[-10%] sm:left-[5%] w-[70vw] sm:w-[50vw] h-[70vw] sm:h-[50vw] glow-orb-2 rounded-full pointer-events-none select-none z-0"
      />

      {/* Decorative center geometric guideline accent */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-brand-gold/0 via-brand-gold/5 to-brand-gold/0 select-none pointer-events-none z-0 hidden md:block" />

      {/* Main glass-panel cards hero container */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl text-center flex flex-col items-center justify-center px-2 py-4"
      >
        {/* Vector custom brand master logo with integrated glimmer rays */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <Logo />
        </motion.div>

        {/* Brand Farsi typography title - Variable font weight designed to feel expensive */}
        <motion.h1
          variants={itemVariants}
          className="text-[2.25rem] sm:text-5xl md:text-6xl font-black text-white hover:text-brand-gold tracking-wide transition-colors duration-500 mb-4 sm:mb-5 select-text drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
        >
          آرال مبنا سرام
        </motion.h1>

        {/* Corporate specialized subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[0.95rem] sm:text-lg md:text-xl text-gray-200 font-medium px-4 max-w-lg mb-8 sm:mb-12 leading-relaxed text-glow select-text"
        >
          تأمین و فروش تخصصی کاشی و سرامیک
        </motion.p>

        {/* Elegant button layout with responsive padding and high-performance hover states */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md px-2"
        >
          {/* Primary Button: Enter website (ورود به وبسایت) */}
          <a
            href="https://aralmabna.com"
            className="group relative overflow-hidden w-full sm:w-auto min-w-[200px] h-[3.5rem] sm:h-14 rounded-xl flex items-center justify-center gap-2 px-7 bg-gradient-to-r from-brand-gold to-brand-bronze hover:from-white hover:to-white text-[#0a0c10] font-extrabold text-[0.95rem] sm:text-base transition-all duration-300 shadow-[0_12px_24px_rgba(212,175,55,0.18)] hover:shadow-[0_18px_32px_rgba(255,255,255,0.18)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
            id="btn-primary-enter-website"
          >
            {/* Soft inner glow line */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/12 to-transparent pointer-events-none" />
            
            <span>ورود به وبسایت</span>
            <ExternalLink className="w-4 h-4 text-current transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-[-3px]" />
          </a>

          {/* Secondary Button: Contact open modal (تماس با ما) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative overflow-hidden w-full sm:w-auto min-w-[200px] h-[3.5rem] sm:h-14 rounded-xl flex items-center justify-center gap-2.5 px-7 glass-panel text-white border border-white/10 hover:border-brand-gold/40 hover:bg-brand-gold/[0.04] font-bold text-[0.95rem] sm:text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 shadow-sm hover:shadow-[0_12px_24px_rgba(212,175,55,0.06)] cursor-pointer"
            id="btn-secondary-contact-modal"
          >
            <Phone className="w-4 h-4 text-brand-gold transition-colors duration-300 group-hover:text-white" />
            <span>تماس با ما</span>
            <ArrowUpLeft className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover:text-brand-gold group-hover:translate-x-[-1px] group-hover:translate-y-[1px]" />
          </button>
        </motion.div>

        {/* Minimal Architect credits & luxury guidelines */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-20 text-[10px] sm:text-[11px] font-mono tracking-widest text-gray-500/80 uppercase select-none flex items-center gap-2 justify-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 animate-pulse" />
          <span>Luxury Ceramic & Tile Collection</span>
        </motion.div>
      </motion.main>

      {/* Premium Glassmorphic Modal with full Farsi numbers, and tap direct functionality */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
