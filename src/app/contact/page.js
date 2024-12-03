"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl text-center font-bold mb-8"
      >
        Contact Us
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full relative"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="w-12 h-12 border-4 border-[#1d4c6b] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <iframe
          src="//profici.co.uk/gfembed/?f=12"
          width="100%"
          height="1000"
          frameBorder="0"
          className="gfiframe"
          title="Contact Form"
          onLoad={() => setIsLoading(false)}
        />
      </motion.div>
    </motion.main>
  );
}
