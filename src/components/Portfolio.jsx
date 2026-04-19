import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Business Website",
    desc: "Modern responsive websites for companies",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Store",
    desc: "Online store with secure payment integration",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS apps for startups",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Logo Design",
    desc: "Creative branding and logo design",
    img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Content Creation",
    desc: "High-quality content for marketing",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Video Creation",
    desc: "Professional promotional videos",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* SAME BACKGROUND AS PROCESS */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          We deliver high-quality digital solutions across web, mobile,
          branding, and media services.
        </motion.p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative z-10 bg-white rounded-2xl overflow-hidden border border-gray-200 
                         shadow-md transition duration-300 
                         hover:shadow-xl hover:shadow-cyan-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;