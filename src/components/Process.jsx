import { motion } from "framer-motion";

const steps = [
  {
    title: "Requirement Analysis",
    desc: "We understand your business needs and project goals.",
    icon: "🧠",
  },
  {
    title: "Planning & Strategy",
    desc: "We create a clear roadmap and choose the right technologies.",
    icon: "📊",
  },
  {
    title: "Design & Development",
    desc: "We design UI/UX and develop high-quality applications.",
    icon: "💻",
  },
  {
    title: "Testing & Launch",
    desc: "We test thoroughly and deploy your product smoothly.",
    icon: "🚀",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative py-20 bg-white text-gray-900 overflow-hidden"
    >
      {/* 🔥 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* 🔥 Glow Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-200 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Our <span className="text-cyan-600">Process</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          We follow a structured and efficient process to deliver the best results.
        </motion.p>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-cyan-200 transition"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>

              {/* Step Number */}
              <div className="mt-4 text-cyan-600 font-bold text-lg">
                Step {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;