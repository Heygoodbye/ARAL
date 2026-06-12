import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto select-none group"
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 transition-opacity duration-1000 rounded-full opacity-60 bg-gradient-to-tr from-brand-bronze/10 via-brand-gold/15 to-transparent blur-3xl group-hover:opacity-100" />

      {/* SVG Luxury Diamond & Tile Logo */}
      <svg
        id="aral-brand-logo"
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:scale-105"
      >
        <defs>
          {/* Chrome/Metal Gradients */}
          <linearGradient id="chrome-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#D2D6DC" />
            <stop offset="50%" stopColor="#8F96A3" />
            <stop offset="70%" stopColor="#F3F4F6" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>

          <linearGradient id="chrome-reflective" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#E5E7EB" />
            <stop offset="45%" stopColor="#9CA3AF" />
            <stop offset="50%" stopColor="#374151" />
            <stop offset="60%" stopColor="#111827" />
            <stop offset="85%" stopColor="#4B5563" />
            <stop offset="100%" stopColor="#F9FAFB" />
          </linearGradient>

          <linearGradient id="chrome-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="50%" stopColor="#1F2937" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="diamond-light" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F3F4F6" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D1D5DB" />
          </linearGradient>

          <linearGradient id="gold-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8C7853" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#5E4E31" />
          </linearGradient>

          <linearGradient id="tile-gradient-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E5E7EB" />
            <stop offset="50%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#1F2937" />
          </linearGradient>

          <linearGradient id="tile-gradient-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D1D5DB" />
            <stop offset="50%" stopColor="#4B5563" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
        </defs>

        {/* ========================================== */}
        {/* RIGHT TOP FACET: Glossy Chrome Plate       */}
        {/* ========================================== */}
        <polygon
          id="facet-top-right"
          points="120,20 175,20 230,80 120,80"
          fill="url(#chrome-reflective)"
        />
        {/* Highlight inner line on right top */}
        <line x1="120" y1="20" x2="120" y2="80" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
        <line x1="175" y1="20" x2="120" y2="80" stroke="#111" strokeWidth="1" opacity="0.3" />

        {/* ========================================== */}
        {/* BOTTOM RIGHT FACET: Brilliant Cuts       */}
        {/* ========================================== */}
        <polygon
          id="facet-bottom-right-outer"
          points="120,80 230,80 120,185"
          fill="url(#chrome-reflective)"
        />
        {/* Inner facet lines on right to give depth */}
        <polygon
          id="facet-bottom-right-inner"
          points="120,80 175,130 120,185"
          fill="url(#chrome-dark)"
          opacity="0.85"
        />
        
        {/* ========================================== */}
        {/* BOTTOM LEFT FACET: Deep Steel Reflections */}
        {/* ========================================== */}
        <polygon
          id="facet-bottom-left-outer"
          points="10,80 120,80 120,185"
          fill="url(#chrome-reflective)"
        />
        {/* Inner facet lines on left to give depth */}
        <polygon
          id="facet-bottom-left-inner"
          points="65,130 120,80 120,185"
          fill="url(#chrome-dark)"
          opacity="0.95"
        />

        {/* Fine gold divider lines for luxury touch */}
        <line x1="120" y1="185" x2="120" y2="80" stroke="url(#gold-stroke)" strokeWidth="1.5" />
        <line x1="10" y1="80" x2="120" y2="80" stroke="url(#gold-stroke)" strokeWidth="1.5" />
        <line x1="120" y1="80" x2="230" y2="80" stroke="url(#gold-stroke)" strokeWidth="1.5" />
        <line x1="120" y1="185" x2="10" y2="80" stroke="url(#gold-stroke)" strokeWidth="1.5" />
        <line x1="120" y1="185" x2="230" y2="80" stroke="url(#gold-stroke)" strokeWidth="1.5" />

        {/* ========================================== */}
        {/* LEFT TOP FACET: Premium Ceramic Grid Tiles */}
        {/* ========================================== */}
        <g id="tile-mosaic-facet">
          {/* Base shape mask */}
          <polygon points="120,20 65,20 10,80 120,80" fill="#111827" />

          {/* Draw individual grid of luxury ceramics as seen in the logo attachment */}
          {/* Row 1 (top) */}
          <polygon points="101,20 120,20 120,40 101,40" fill="url(#tile-gradient-1)" stroke="#111827" strokeWidth="1" />
          <polygon points="83,20 101,20 101,40 83,40" fill="url(#tile-gradient-2)" stroke="#111827" strokeWidth="1" />
          <polygon points="65,20 83,20 83,40 65,40" fill="url(#tile-gradient-1)" stroke="#111827" strokeWidth="1" />

          {/* Row 2 */}
          <polygon points="101,40 120,40 120,60 101,60" fill="url(#tile-gradient-2)" stroke="#111827" strokeWidth="1" />
          <polygon points="83,40 101,40 101,60 83,60" fill="url(#tile-gradient-1)" stroke="#111827" strokeWidth="1" />
          <polygon points="65,40 83,40 83,60 65,60" fill="url(#tile-gradient-2)" stroke="#111827" strokeWidth="1" />
          <polygon points="47,40 65,40 65,60 47,60" fill="url(#tile-gradient-1)" stroke="#111827" strokeWidth="1" />

          {/* Row 3 */}
          <polygon points="101,60 120,60 120,80 101,80" fill="url(#tile-gradient-1)" stroke="#111827" strokeWidth="1" />
          <polygon points="83,60 101,60 101,80 83,80" fill="url(#tile-gradient-2)" stroke="#111827" strokeWidth="1" />
          <polygon points="65,60 83,60 83,80 65,80" fill="url(#tile-gradient-1)" stroke="#111827" strokeWidth="1" />
          <polygon points="47,60 65,60 65,80 47,80" fill="url(#tile-gradient-2)" stroke="#111827" strokeWidth="1" />
          <polygon points="29,60 47,60 47,80 29,80" fill="url(#tile-gradient-1)" stroke="#111827" strokeWidth="1" />
          
          {/* Edge fillers for perfect triangular boundary mapping */}
          <polygon points="65,20 47,40 65,40" fill="url(#tile-gradient-2)" stroke="#111827" strokeWidth="1" />
          <polygon points="47,40 29,60 47,60" fill="url(#tile-gradient-1)" stroke="#111827" strokeWidth="1" />
          <polygon points="29,60 10,80 29,80" fill="url(#tile-gradient-2)" stroke="#111827" strokeWidth="1" />
        </g>

        {/* Outline of top left to keep it perfectly aligned */}
        <polygon points="120,20 65,20 10,80 120,80" fill="none" stroke="url(#gold-stroke)" strokeWidth="1.5" />
        <polygon points="120,20 175,20 230,80 120,80" fill="none" stroke="url(#gold-stroke)" strokeWidth="1.5" />

        {/* Center shining star highlight */}
        <circle cx="120" cy="80" r="3" fill="#FFFFFF" />
        <path d="M 120,70 L 120,90 M 110,80 L 130,80" stroke="#FFFFFF" strokeWidth="1" opacity="0.7" />
        
        {/* Soft elegant branding crest stroke */}
        <path
          d="M 12,86 L 120,192 M 120,192 L 228,86"
          stroke="url(#gold-stroke)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.8"
        />
      </svg>

      {/* Floating light ray effect */}
      <motion.div 
        animate={{ 
          x: [-80, 240],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut"
        }}
        className="absolute h-[150%] w-10 bg-white/10 blur-[8px] transform rotate-45 select-none pointer-events-none z-25"
      />
    </motion.div>
  );
}
