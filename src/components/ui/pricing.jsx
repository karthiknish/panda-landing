"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const PricingSection = ({ className, id }) => {
  const services = [
    {
      name: "Initial Assessment and Action Plan",
      price: "£300",
      duration: "1.5-hour session",
      description: [
        "Detailed assessment of your child's needs, triggers, and environment",
        "Comprehensive evaluation of current situation",
        "Creation of personalised action plan",
        "Development of SMART goals to address immediate concerns",
      ],
      bookingUrl: "https://calendly.com/pandapuzzle-info/action-plan",
      highlight: true,
    },
    {
      name: "Talking Therapies",
      price: "£75",
      duration: "1-hour session",
      description: [
        "Mental health support focused on autistic children and young people",
        "Adapted talking therapies tailored to unique needs",
        "Experienced therapists providing support",
        "Safe and supportive environment",
      ],
      bookingUrl: "https://calendly.com/pandapuzzle-info/talking-therapies",
      highlight: false,
    },
  ];

  const buttonStyles = {
    default: cn(
      "h-12 bg-white dark:bg-accent",
      "hover:bg-accent-foreground/10 dark:hover:bg-accent-foreground/10",
      "text-accent dark:text-accent-foreground",
      "border border-accent/20 dark:border-accent/20",
      "hover:border-accent/30 dark:hover:border-accent/30",
      "shadow-sm hover:shadow-md",
      "text-sm font-medium"
    ),
    highlight: cn(
      "h-12 bg-accent dark:bg-accent-foreground",
      "hover:bg-accent/90 dark:hover:bg-accent-foreground/90",
      "text-accent-foreground dark:text-accent",
      "shadow-[0_1px_15px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_1px_20px_rgba(0,0,0,0.15)]",
      "font-semibold text-base"
    ),
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={cn(
        "relative bg-background text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        className
      )}
    >
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <h2 className="text-3xl font-bold text-accent-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={service.name}
              className={cn(
                "relative group backdrop-blur-sm",
                "rounded-3xl transition-all duration-300",
                "flex flex-col",
                service.highlight
                  ? "bg-gradient-to-b from-accent/10 to-transparent dark:from-accent/5"
                  : "bg-white dark:bg-accent/5",
                "border",
                service.highlight
                  ? "border-accent/30 dark:border-accent/20 shadow-xl"
                  : "border-accent/20 dark:border-accent/10 shadow-md",
                "hover:translate-y-0 hover:shadow-lg"
              )}
            >
              <div className="p-8 flex-1">
                <h3 className="text-xl font-semibold text-accent-foreground mb-4">
                  {service.name}
                </h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent-foreground">
                      {service.price}
                    </span>
                    <span className="text-sm text-accent-foreground/60">
                      per {service.duration}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {service.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-accent-foreground/80"
                      >
                        <CheckIcon className="mt-1 size-4 shrink-0 text-accent-foreground/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <Button
                  className={cn(
                    "w-full relative transition-all duration-300 rounded-full",
                    "bg-[#E66507] text-white hover:bg-[#1D4C6B]"
                  )}
                  onClick={() => window.open(service.bookingUrl, "_blank")}
                >
                  <span className="relative z-10 flex items-center text-white justify-center gap-2 text-current">
                    Book Now
                    <ArrowRightIcon className="w-4 h-4 text-current" />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
