"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function MediaCarouselSmooth({ images = [], interval = 3500 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // auto slide
  useEffect(() => {
    if (!images.length) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [images.length, interval]);


  const prev = (index - 1 + images.length) % images.length;
  const next = (index + 1) % images.length;


  function handleMouseEnter() {
    clearInterval(timerRef.current);
  }
  function handleMouseLeave() {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
  }

  const centerVariants = {
    enter: { x: 100, opacity: 0, scale: 0.95 },
    center: { x: 0, opacity: 1, scale: 1 },
    exit: { x: -100, opacity: 0, scale: 0.95 },
  };


  const sideAnim = {
    left: { x: -260, scale: 0.78, opacity: 0.6, filter: "blur(1px)" },
    midLeft: { x: -120, scale: 0.9, opacity: 0.85, filter: "blur(0.3px)" },
    midRight: { x: 120, scale: 0.9, opacity: 0.85, filter: "blur(0.3px)" },
    right: { x: 260, scale: 0.78, opacity: 0.6, filter: "blur(1px)" },
  };


  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">Media</h2>
      <p className="text-gray-600 mb-6">Foto suasana di Desa Pundungsari</p>

 
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden md:flex relative items-center justify-center w-[860px] h-[420px] overflow-hidden"
      >

        <motion.img
          src={images[(index - 2 + images.length) % images.length]}
          alt=""
          initial={false}
          animate={sideAnim.left}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute rounded-xl object-cover shadow-sm"
          style={{ width: 260, height: 170 }}
        />

  
        <motion.img
          src={images[prev]}
          alt=""
          initial={false}
          animate={sideAnim.midLeft}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute rounded-xl object-cover shadow-sm"
          style={{ width: 320, height: 210 }}
        />

    
        <div className="absolute">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt=""
              className="rounded-2xl object-cover shadow-2xl"
              initial="enter"
              animate="center"
              exit="exit"
              variants={centerVariants}
              transition={{ duration: 1.0, ease: "easeInOut" }}
              style={{ width: 520, height: 340 }}
            />
          </AnimatePresence>
        </div>

        
        <motion.img
          src={images[next]}
          alt=""
          initial={false}
          animate={sideAnim.midRight}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute rounded-xl object-cover shadow-sm"
          style={{ width: 320, height: 210 }}
        />

        
        <motion.img
          src={images[(index + 2) % images.length]}
          alt=""
          initial={false}
          animate={sideAnim.right}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute rounded-xl object-cover shadow-sm"
          style={{ width: 260, height: 170 }}
        />

        
        <button
          aria-label="prev"
          onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-teal-900 rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          ‹
        </button>
        <button
          aria-label="next"
          onClick={() => setIndex((i) => (i + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-teal-900 rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          ›
        </button>
      </div>

  
<div className="md:hidden w-full overflow-hidden relative">
  <AnimatePresence initial={false} mode="wait">
    <motion.img
      key={index}
      src={images[index]}
      className="w-full h-48 object-cover rounded-lg"
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -80, opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    />
  </AnimatePresence>
</div>

    </div>
  );
}
