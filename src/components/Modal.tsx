import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, X, Check, Copy, PhoneCall, Building, Clock } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Copy to clipboard helper
  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2500);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const contactNumbers = [
    {
      number: "02176901855",
      label: "دفتر مرکزی",
      tel: "tel:02176901855"
    },
    {
      number: "02176901973",
      label: "دفتر مرکزی",
      tel: "tel:02176901973"
    },
    {
      number: "09128434389",
      label: "مدیریت فروش",
      tel: "tel:09128434389",
      isWhatsapp: true,
      whatsappUrl: "https://wa.me/+989128434389"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Panel - Luxury Glassmorphic Design */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-md overflow-hidden glass-modal rounded-3xl p-5 sm:p-7 md:p-8 text-right shadow-[0_25px_60px_-15px_rgba(212,175,55,0.2)]"
          >
            {/* Subtle decorative top golden edge bar */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-white/10">
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 active:scale-95 transition-all focus:outline-none cursor-pointer h-10 w-10 flex items-center justify-center"
                aria-label="بستن پنجره"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-white tracking-wide flex items-center gap-2">
                <span className="text-brand-gold">تماس با</span> آرال مبنا سرام
              </h2>
            </div>

            {/* Working Hours - Corporate Section */}
            <div className="mb-5 bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-brand-gold tracking-wide">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>ساعات کاری رسمی</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 divide-x divide-white/5 divide-rtl">
                {/* Weekdays */}
                <div className="pl-3 flex flex-col gap-1 text-right">
                  <span className="text-[11px] text-gray-400 font-semibold">شنبه تا چهارشنبه</span>
                  <div className="flex items-center gap-1.5 justify-end w-full" dir="rtl">
                    <span className="font-mono text-xs sm:text-sm font-bold text-white">8:00</span>
                    <span className="font-sans text-[11px] text-gray-400 px-0.5">الی</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-white">15:00</span>
                  </div>
                </div>
                
                {/* Thursday */}
                <div className="pr-3 flex flex-col gap-1 text-right">
                  <span className="text-[11px] text-gray-400 font-semibold">پنجشنبه</span>
                  <div className="flex items-center gap-1.5 justify-end w-full" dir="rtl">
                    <span className="font-mono text-xs sm:text-sm font-bold text-white">8:00</span>
                    <span className="font-sans text-[11px] text-gray-400 px-0.5">الی</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-white">13:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Action Prompt with Proper Persian Spacing */}
            <p className="text-xs sm:text-sm text-gray-300 mb-5 leading-relaxed font-normal text-right">
              جهت هماهنگی سفارش کالا و دریافت کاتالوگ با یکی از شماره‌های زیر تماس حاصل فرمایید.
            </p>

            {/* Contact Items - Central Office and Sales */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-gray-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-brand-gold/70" />
                  درگاه‌های ارتباطی
                </span>
                <span className="h-[1px] flex-grow bg-white/5 mx-3" />
                <span className="text-[9px] text-brand-gold/60 uppercase tracking-widest font-mono select-none">COMMUNICATION</span>
              </div>

              {contactNumbers.map((item, idx) => {
                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="relative overflow-hidden group flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl border border-white/5 bg-gradient-to-l from-brand-slate to-brand-dark/30 hover:border-brand-gold/30 hover:bg-brand-gold/[0.01] transition-all duration-300"
                  >
                    {/* Phone Number details */}
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:scale-105 group-hover:bg-brand-gold/10 transition-all duration-300 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-right min-w-0">
                        <span className="text-[10px] text-gray-500 font-semibold tracking-wide">
                          {item.label}
                        </span>
                        <a
                          href={item.tel}
                          className="font-mono text-sm sm:text-base md:text-lg font-extrabold text-gray-100 hover:text-brand-gold transition-colors tracking-wide whitespace-nowrap"
                          dir="ltr"
                        >
                          {item.number}
                        </a>
                      </div>
                    </div>

                    {/* Quick Call & Copy/WhatsApp Actions */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Actions */}
                      {item.isWhatsapp ? (
                        <a
                          href={item.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] hover:scale-105 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all flex items-center justify-center relative cursor-pointer"
                          title="ارسال پیام در واتساپ"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-5.5 h-5.5 fill-current"
                          >
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.588 1.455 5.416 1.456 5.4 0 9.794-4.392 9.797-9.794.001-2.618-1.01-5.08-2.863-6.934C17.132 2.025 14.673.99 12.01.99a9.78 9.78 0 0 0-9.805 9.8c-.001 1.947.5 3.849 1.45 5.518l-.999 3.644 3.73-.978h-.033zm11.302-6.818c-.31-.156-1.838-.908-2.126-1.012-.288-.105-.499-.156-.708.157-.21.314-.812 1.012-.996 1.218-.184.205-.367.23-.677.075-.309-.156-1.305-.48-2.486-1.533-.918-.818-1.538-1.829-1.719-2.143-.18-.314-.019-.484.135-.638.14-.139.31-.361.464-.541.154-.18.206-.31.309-.52.103-.21.052-.394-.026-.551-.077-.157-.708-1.705-.97-2.332-.255-.612-.513-.53-.708-.541-.182-.01-.392-.01-.601-.01-.208 0-.547.078-.833.391-.286.313-1.093 1.07-1.093 2.613 0 1.543 1.123 3.033 1.278 3.242.156.209 2.208 3.371 5.352 4.73.748.323 1.332.516 1.787.66.75.238 1.433.205 1.974.124.602-.09 1.838-.75 2.094-1.438.256-.688.256-1.278.18-1.438-.076-.16-.282-.255-.591-.411z" />
                          </svg>
                        </a>
                      ) : (
                        <button
                          onClick={() => handleCopy(item.number, idx)}
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all flex items-center justify-center relative cursor-pointer"
                          title="کپی شماره"
                        >
                          {copiedIndex === idx ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          <AnimatePresence>
                            {copiedIndex === idx && (
                              <motion.span
                                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-emerald-500 text-white text-[9px] rounded font-sans whitespace-nowrap z-30"
                              >
                                کپی شد
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </button>
                      )}

                      {/* Direct Click-to-Call Action */}
                      <a
                        href={item.tel}
                        className="flex items-center justify-center gap-1.5 h-10 w-10 sm:h-11 sm:w-auto sm:px-4 text-xs font-bold text-black bg-brand-gold rounded-lg shadow-lg shadow-brand-gold/10 hover:bg-white hover:text-black hover:shadow-white/10 active:scale-95 transition-all"
                      >
                        <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                        <span className="hidden sm:inline">تماس</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer details */}
            <div className="mt-6 text-center text-[11px] text-gray-500 border-t border-white/5 pt-4 flex justify-between items-center select-none">
              <span className="font-medium">آرال مبنا سرام | عرضه تخصصی کاشی و سرامیک</span>
              <span className="text-brand-gold/70 font-semibold font-mono text-[9px]">VERIFIED</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
