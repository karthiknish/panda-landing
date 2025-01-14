import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      title: "Book Your Session",
      description:
        "Choose your preferred service and select an available time slot through our Calendly booking system.",
      delay: 0.2,
    },
    {
      title: "Secure Your Booking",
      description:
        "Complete the payment through our secure payment gateway to confirm your appointment.",
      delay: 0.4,
    },
    {
      title: "Initial Assessment",
      description:
        "Meet with our specialist for a comprehensive assessment of your child's needs and goals.",
      delay: 0.6,
    },
    {
      title: "Regular Sessions",
      description:
        "Begin your journey with regular therapy sessions tailored to your child's personalized action plan.",
      delay: 0.8,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-black"
        >
          Our Process
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line connecting steps */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E66507]/20 -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
              viewport={{ once: true }}
              className={`relative flex items-center gap-8 mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Step number circle */}
              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#E66507] rounded-full flex items-center justify-center text-white font-bold z-10">
                {index + 1}
              </div>

              {/* Content box */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg border border-[#E66507]/10">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-black">{step.description}</p>
                </div>
              </div>

              {/* Empty flex-1 for spacing */}
              <div className="flex-1" />
            </motion.div>
          ))}

          {/* Final arrow */}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
