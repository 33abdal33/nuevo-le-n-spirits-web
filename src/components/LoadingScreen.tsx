import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 15, 100));
    }, 200);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Ambient glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(43 80% 50% / 0.4), transparent 70%)",
            }}
          />

          {/* Decorative corner lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute top-8 left-6 sm:top-12 sm:left-12 w-12 sm:w-16 h-12 sm:h-16 border-l border-t border-primary/40"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute bottom-8 right-6 sm:bottom-12 sm:right-12 w-12 sm:w-16 h-12 sm:h-16 border-r border-b border-primary/40"
          />

          {/* Top gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-16 sm:w-24 h-[1px] bg-gradient-gold mb-8 sm:mb-10"
          />

          {/* Brand */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-gold tracking-wide text-center px-4"
          >
            Nuevo León
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-3 sm:mt-4 text-[10px] sm:text-xs uppercase text-muted-foreground font-medium"
          >
            Licorería
          </motion.p>

          {/* Bottom gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            className="w-16 sm:w-24 h-[1px] bg-gradient-gold mt-8 sm:mt-10"
          />

          {/* Progress bar */}
          <div className="absolute bottom-16 sm:bottom-20 w-40 sm:w-48">
            <div className="h-[2px] rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-gold rounded-full"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.2 }}
              className="text-[10px] text-muted-foreground text-center mt-3 tracking-widest uppercase"
            >
              Cargando
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
