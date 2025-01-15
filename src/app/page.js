"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/ui/hero-section";
import FeatureSection from "@/components/ui/feature";
import PricingSection from "@/components/ui/pricing";
import ProcessSection from "@/components/ui/process";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    // Randomly select a color from an array of pastel colors
    const colors = [
      "#FFB6C1",
      "#87CEEB",
      "#98FB98",
      "#DDA0DD",
      "#F0E68C",
      "#E6E6FA",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }, [resolvedTheme]);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto space-y-8 text-lg">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            At Panda Puzzle, we understand that every child experiences the
            world in their own unique way. For children with autism, sensory
            processing challenges and/or learning disabilities, navigating daily
            life can sometimes feel overwhelming. That's why we offer a range of
            private therapy and assessment options designed to support your
            child's growth, development, and independence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl mx-auto mb-8"
          >
            <motion.img
              src="/assets/diagnosis1.jpg"
              alt="Child therapy session"
              className="w-full h-auto rounded-[1rem] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="puzzle-piece bg-gray-50 p-6"
            >
              <h4 className="text-xl font-semibold text-black mb-3">
                Evidence-Based Care
              </h4>
              <p>
                All our therapies are evidence-based and delivered in accordance
                with NICE (National Institute for Health and Care Excellence)
                guidance, ensuring the highest standards of care.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="puzzle-piece bg-gray-50 p-6"
            >
              <h4 className="text-xl font-semibold text-black mb-3">
                Personalised Approach
              </h4>
              <p>
                Our holistic approach is tailored to your child's unique needs,
                empowering families with practical solutions, tools, and
                strategies for success.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-20 px-4"
      >
        <FeatureSection />
      </motion.section>

      {/* Services Section */}
      <ProcessSection />
      <PricingSection id="pricing" />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#1d4c6b] text-white py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-6"
          >
            Let's Work Together
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            We aim to empower families by offering expert guidance and
            actionable plans that foster your child's growth and well-being.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#ff7008] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e66507] transition-colors"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.section>

      <Analytics />
    </div>
  );
}
