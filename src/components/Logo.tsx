import { motion } from "motion/react";
// @ts-ignore
import brandLogoPng from "../images/brand-logo.png";
export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center max-w-full select-none group px-2 py-2"
    >
      <div className="absolute inset-0 transition-opacity duration-1000 rounded-full opacity-20 bg-gradient-to-r from-white/10 via-zinc-400/5 to-transparent blur-2xl group-hover:opacity-40 pointer-events-none" />

      <div className="relative z-10 p-1 transition-all duration-700 hover:scale-102">
        <img
          src={brandLogoPng}
          alt="رایموت آرال مبنا سرام"
          className="h-24 sm:h-32 md:h-36 w-auto max-w-full object-contain select-none filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent opacity-30 select-none pointer-events-none" />
    </motion.div>
  );
}
