"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#1d4c6b] to-[#80d0c6]">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Panda Puzzle
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Therapy and Assessment Options for Children with Autism, Sensory
            Processing Challenges, and Disabilities
          </h2>
          <button
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#ff7008] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e66507] transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8 text-lg">
          <p className="text-center">
            At Panda Puzzle, we understand that every child experiences the
            world in their own unique way. For children with autism, sensory
            processing challenges and/or learning disabilities, navigating daily
            life can sometimes feel overwhelming. That's why we offer a range of
            private therapy and assessment options designed to support your
            child's growth, development, and independence.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>
                All our therapies are evidence-based and delivered in accordance
                with NICE (National Institute for Health and Care Excellence)
                guidance, ensuring the highest standards of care.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>
                Our holistic approach is tailored to your child's unique needs,
                empowering families with practical solutions, tools, and
                strategies for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-center text-[#1d4c6b] mb-12">
            Why Choose Panda Puzzle?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#ff7008] mr-2">✓</span>
                Are delivered by qualified, experienced professionals who
                specialise in autism, sensory processing, and disabilities.
              </li>
              <li className="flex items-start">
                <span className="text-[#ff7008] mr-2">✓</span>
                Follow evidence-based practices that meet NICE standards.
              </li>
            </ul>
            <ul className="space-y-4">
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
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-center text-[#1d4c6b] mb-12">
            Our Services
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#ff7008]">
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
              <button className="w-full bg-[#1d4c6b] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#ff7008]">
              <h4 className="text-xl font-semibold text-[#ff7008] mb-4">
                Talking Therapies
              </h4>
              <p className="font-semibold mb-4">£60 for a 1-hour session</p>
              <p className="mb-4">
                Mental health is a crucial aspect of well-being for autistic
                children and young people. We offer adapted talking therapies
                tailored to the unique needs of autistic children and young
                people.
              </p>
              <button className="w-full bg-[#1d4c6b] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1d4c6b] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Let's Work Together</h3>
          <p className="mb-8">
            We aim to empower families by offering expert guidance and
            actionable plans that foster your child's growth and well-being.
          </p>
          <button className="bg-[#ff7008] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e66507] transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
