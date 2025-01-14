import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="py-12">
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
              specialized therapy and assessment services for children with
              developmental, behavioral, and learning needs. Our experienced
              team creates personalized solutions to help your child thrive.
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
                <ChevronRight className="ml-2 h-4" />
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
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          src="https://panda-landing.vercel.app/hero.jpg"
          alt="Child playing with therapeutic toys"
          className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
