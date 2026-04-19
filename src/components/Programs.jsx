import React, { useState } from "react";
import { motion } from "framer-motion";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("internship");

  const cardClass =
    "relative z-10 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:shadow-cyan-200";

  return (
    <section className="min-h-screen py-20 bg-white relative overflow-hidden" id="programs">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Programs
          </span>
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Gain real-world skills through industry-focused internships and
          technical training programs designed for career growth.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab("internship")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "internship"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                : "bg-gray-100 text-slate-700 hover:bg-gray-200"
            }`}
          >
            Internships
          </button>

          <button
            onClick={() => setActiveTab("training")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "training"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                : "bg-gray-100 text-slate-700 hover:bg-gray-200"
            }`}
          >
            Training
          </button>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {(activeTab === "internship"
            ? [
                {
                  title: "Java Full Stack Internship",
                  img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
                  desc: "Java, Spring Boot, React with real-time projects",
                },
                {
                  title: "Android Development Internship",
                  img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
                  desc: "Build Android apps using Kotlin, Firebase",
                },
                {
                  title: "Web Development Internship",
                  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                  desc: "Frontend + backend development projects",
                },
                {
                  title: "Python & AI Internship",
                  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
                  desc: "Machine learning and AI-based projects",
                },
                {
                  title: "UI/UX Design Internship",
                  img: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
                  desc: "Design modern UI with Figma & tools",
                },
                {
                  title: "Digital Marketing Internship",
                  img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
                  desc: "SEO, Ads, Social media marketing",
                },
              ]
            : [
                {
                  title: "Full Stack Development",
                  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                  desc: "HTML, CSS, JS, React, Node.js",
                },
                {
                  title: "Android App Development",
                  img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
                  desc: "Kotlin, Java, Firebase apps",
                },
                {
                  title: "Data Science & AI",
                  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
                  desc: "Python, ML, AI concepts",
                },
                {
                  title: "UI/UX Design",
                  img: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
                  desc: "Figma, Adobe XD design training",
                },
                {
                  title: "Cloud & DevOps",
                  img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                  desc: "AWS, Docker, deployment",
                },
                {
                  title: "Digital Marketing",
                  img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
                  desc: "SEO, Ads, branding strategies",
                },
              ]
          ).map((item, index) => (
            <motion.div
              key={index}
              className={cardClass}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.img} loading="lazy" className="w-full h-40 object-cover" />

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Programs;