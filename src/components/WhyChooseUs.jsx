import { motion } from "framer-motion";

const features = [
  {
    title: "Lightning Fast",
    desc: "Optimized performance with blazing fast load speeds.",
    icon: "⚡",
  },
  {
    title: "Creative Design",
    desc: "Modern UI/UX with stunning visual experience.",
    icon: "🎨",
  },
  {
    title: "Secure Systems",
    desc: "Top-level security for safe and reliable applications.",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    desc: "Always available to assist and support clients.",
    icon: "📞",
  },
  {
    title: "Affordable Pricing",
    desc: "Best pricing plans for startups and businesses.",
    icon: "💰",
  },
  {
    title: "Latest Technology",
    desc: "Built with cutting-edge tools and frameworks.",
    icon: "🚀",
  },
];

const WhyChoose = () => {
  return (
    <section
      id="whychooseus"
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mahion Tech Solutions?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          We combine innovation, design, and technology to deliver exceptional
          digital solutions that drive success.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 bg-white border border-gray-200 p-6 rounded-2xl 
                         shadow-md transition duration-300 
                         hover:shadow-xl hover:shadow-cyan-200"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;