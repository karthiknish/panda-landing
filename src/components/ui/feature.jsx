import { GraduationCap, ClipboardCheck, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const reasons = [
  {
    title: "Qualified Specialists",
    description:
      "Our team consists of qualified, experienced professionals who specialise in autism, sensory processing, and disabilities, ensuring expert care for your child.",
    icon: <GraduationCap className="size-6" />,
    gradient: "from-[#FA700B]/10 to-[#FA700B]/40",
  },
  {
    title: "Evidence-Based Practices",
    description:
      "We follow evidence-based practices that meet NICE standards, providing proven therapeutic approaches backed by research and clinical expertise.",
    icon: <ClipboardCheck className="size-6" />,
    gradient: "from-[#FA700B]/10 to-[#FA700B]/40",
  },
  {
    title: "Collaborative Approach",
    description:
      "We work collaboratively with the team around your child, including schools and family members, to ensure seamless support and consistency across all environments.",
    icon: <Users className="size-6" />,
    gradient: "from-[#FA700B]/10 to-[#FA700B]/40",
  },
  {
    title: "Flexible Support",
    description:
      "Offering flexible private therapy options with no long waiting lists, we provide support when you need it most, ensuring timely access to care.",
    icon: <Clock className="size-6" />,
    gradient: "from-[#FA700B]/10 to-[#FA700B]/40",
  },
];

const FeatureSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1),transparent)]" />
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="mb-4 text-center text-4xl font-bold bg-gradient-to-r from-[#FA700B] to-[#FA700B] bg-clip-text lg:text-6xl">
            Why Choose Panda Puzzle?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering children through expertise, evidence, and empathy
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-2xl p-8",
                "bg-gradient-to-br",
                reason.gradient,
                "backdrop-blur-sm border border-[#FA700B]/10"
              )}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex size-16 items-center justify-center bg-[#FA700B]/80 text-white shadow-lg group-hover:shadow-xl transition-shadow rounded-lg"
                >
                  {reason.icon}
                </motion.div>
                <div className="text-left">
                  <h3 className="mb-3 text-2xl font-bold tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
