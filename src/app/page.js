"use client";

import { motion } from "framer-motion";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
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
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[80vh] flex items-center justify-center bg-gray-50"
      >
        <Particles
          className="absolute inset-0"
          quantity={300}
          ease={10}
          color={color}
          refresh
        />
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-left">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Supporting Growth,{" "}
                <span className="text-[#ff7008]">Embracing</span> Differences
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 "
              >
                At Panda Puzzle, we empower families and children by providing
                specialised support in all life areas. Together, we work to
                discover and nurture your child's unique potential.
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#ff7008] text-white px-8 py-3 rounded-full z-10 text-lg font-semibold hover:bg-[#e66507] transition-colors"
              >
                Get Started
              </motion.button>
            </div>
            <motion.div
              className="md:w-5/12  mt-8 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img
                src="/assets/hero.jpg"
                alt="Children playing with toys"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto space-y-8 text-lg">
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
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
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
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 relative border border-gray-400 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-[#1d4c6b] mb-3">
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
              className="bg-gray-50 p-6 relative border border-gray-400 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-[#1d4c6b] mb-3">
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
      {/* <div className="max-w-7xl mx-auto w-full px-4 py-16">
        <h2 className="text-3xl font-semibold text-center text-[#1d4c6b] mb-12">
          Child-Centered Support Programs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-[#1d4c6b] min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="w-full lg:max-w-xs">
              <h3 className="text-left text-balance text-lg md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Sensory-Informed Assessment & Planning
              </h3>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Our expert team creates personalized support plans based on your
                child's unique sensory profile, emotional needs, and
                communication style. We observe and understand their individual
                triggers and preferences to develop targeted strategies.
              </p>
            </div>
            <Image
              src="/sensory1.jpg"
              width={800}
              height={800}
              alt="Child assessment image"
              className="lg:absolute lg:right-0 lg:sm:right-10 lg:md:right-20 lg:lg:-right-10 lg:bottom-0 lg:top-5 w-full lg:w-[60%] mt-4 lg:mt-0 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#ff7008]">
            <h3 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Online Consultation
            </h3>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              We provide convenient online consultations to support families
              from anywhere. Our virtual sessions offer expert guidance and
              personalized strategies that you can implement at home.
            </p>
            <Image
              src="/sensory2.jpg"
              width={800}
              height={800}
              alt="Online consultation image"
              className="absolute left-1/2 transform -translate-x-1/2  w-[50%] -bottom-20 lg:w-[60%] object-contain rounded-2xl mt-10"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#1d4c6b] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h3 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Family Resources & Support
              </h3>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                We provide families with carefully curated resources, guides,
                and practical strategies to help create supportive home
                environments. Our evidence-based materials emphasize positive
                reinforcement and nurturing relationships to support your
                child's development.
              </p>
            </div>
            <Image
              src="/sensory3.jpg"
              width={500}
              height={500}
              alt="Family resources image"
              className="absolute right-0 lg:right-10 top-5 w-[60%] lg:w-[40%] object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div> */}
      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center text-[#1d4c6b] mb-12"
          >
            Why Choose Panda Puzzle?
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.ul
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <li className="flex items-start">
                <span className="text-[#ff7008] mr-2">✓</span>
                Are delivered by qualified, experienced professionals who
                specialise in autism, sensory processing, and disabilities.
              </li>
              <li className="flex items-start">
                <span className="text-[#ff7008] mr-2">✓</span>
                Follow evidence-based practices that meet NICE standards.
              </li>
            </motion.ul>
            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <li className="flex items-start">
                <span className="text-[#ff7008] mr-2">✓</span>
                Work collaboratively with the team around your child, including
                schools and family members, to ensure seamless support and
                consistency.
              </li>
              <li className="flex items-start">
                <span className="text-[#ff7008] mr-2">✓</span>
                Offer flexible private therapy options with no long waiting
                lists, providing support when you need it most.
              </li>
            </motion.ul>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="services"
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center text-[#1d4c6b] mb-12"
          >
            Our Services
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#ff7008]"
            >
              <h4 className="text-xl font-semibold text-[#ff7008] mb-4">
                Initial Assessment and Action Plan
              </h4>
              <p className="font-semibold mb-4">£300 for a 1.5-hour session</p>
              <p className="mb-4">
                Our tailored service begins with a detailed assessment of your
                child's needs, triggers, and environment. This comprehensive
                evaluation allows us to create a personalised action plan with
                SMART goals to address your immediate concerns.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-[#1d4c6b] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                onClick={() =>
                  window.open(
                    "https://calendly.com/pandapuzzle-info/action-plan",
                    "_blank"
                  )
                }
              >
                Book Now
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#ff7008]"
            >
              <h4 className="text-xl font-semibold text-[#ff7008] mb-4">
                Talking Therapies
              </h4>
              <p className="font-semibold mb-4">£60 for a 1-hour session</p>
              <p className="mb-4">
                Mental health is a crucial aspect of well-being for autistic
                children and young people. We offer adapted talking therapies
                tailored to the unique needs of autistic children and young
                people. Our experienced therapists create a safe, supportive
                environment.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-[#1d4c6b] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                onClick={() =>
                  window.open(
                    "https://calendly.com/pandapuzzle-info/talking-therapies",
                    "_blank"
                  )
                }
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
    </div>
  );
}
