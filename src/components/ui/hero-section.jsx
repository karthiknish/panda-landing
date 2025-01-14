import { ChevronRight, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className=" px-4 md:px-0 md:py-12">
      <div className="overflow-hidden  border-muted ">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 items-center text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-pretty text-4xl font-medium lg:text-8xl"
            >
              <span className="text-brand">Therapy</span> &{" "}
              <span className="text-brand curved">Assessment</span> Services for
              Children
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto max-w-screen-md text-muted-foreground lg:text-xl"
            >
              <span className="text-brand">Panda Puzzle</span> provides
              specialised therapy and assessment services for children with
              developmental, behavioural, and learning needs. Our experienced
              team creates personalised solutions to help your child and the
              family thrive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row"
            >
              <Button
                className="bg-brand hover:bg-brand rounded-full"
                onClick={() => {
                  document
                    .querySelector("#pricing")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book an Assessment
                <Puzzle className="ml-2 h-4" />
              </Button>
              <Button
                variant="ghost"
                className="text-brand hover:bg-brand/10"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
                <ChevronRight className="ml-2 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="relative mt-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: -45 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -top-8 left-1/4 w-12 h-12"
          >
            <Puzzle className="text-brand h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 30 }}
            animate={{ opacity: 1, rotate: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -top-4 right-1/4 w-8 h-8"
          >
            <Puzzle className="text-brand h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 15 }}
            animate={{ opacity: 1, rotate: 15 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-1/3 -left-4 w-10 h-10"
          >
            <Puzzle className="text-brand h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: -20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute top-2/3 -right-6 w-14 h-14"
          >
            <Puzzle className="text-brand h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 45 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="absolute bottom-1/4 -left-8 w-16 h-16"
          >
            <Puzzle className="text-brand h-full w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: -30 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute top-1/4 right-1/3 w-10 h-10"
          >
            <Puzzle className="text-brand h-full w-full" />
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            src="https://panda-landing.vercel.app/hero.jpg"
            alt="Child playing with therapeutic toys"
            className="mx-auto max-h-[700px] w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
