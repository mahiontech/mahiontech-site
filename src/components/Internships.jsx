import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact, FaChartBar, FaFileDownload } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";

const Internships = () => {
  const brochureLink = "https://drive.google.com/file/d/1xDM2GOpxK11Dr7YHx6oqsNvNRRt5zE4o/view?usp=drive_link";

  const handleDomainClick = () => {
    window.open(brochureLink, "_blank");
  };

  const domains = [
    {
      title: "Java Full Stack",
      icon: <FaJava className="text-red-600 text-5xl" />,
      desc: "Master Java, Spring Boot, and React to build scalable enterprise applications.",
      color: "border-red-200 hover:shadow-red-100",
    },
    {
      title: "Python Full Stack",
      icon: <FaPython className="text-blue-500 text-5xl" />,
      desc: "Learn Python, Django, and modern frontend frameworks for robust web solutions.",
      color: "border-blue-200 hover:shadow-blue-100",
    },
    {
      title: "MERN Full Stack",
      icon: (
        <div className="flex gap-2">
          <SiMongodb className="text-green-500 text-4xl" />
          <SiExpress className="text-gray-800 text-4xl" />
          <FaReact className="text-cyan-400 text-4xl" />
          <SiNodedotjs className="text-green-600 text-4xl" />
        </div>
      ),
      desc: "Build dynamic web apps using MongoDB, Express, React, and Node.js.",
      color: "border-green-200 hover:shadow-green-100",
    },
    {
      title: "Power BI",
      icon: <FaChartBar className="text-yellow-500 text-5xl" />,
      desc: "Visualize data and create impactful business insights with Power BI.",
      color: "border-yellow-200 hover:shadow-yellow-100",
    },
  ];

  return (
    <section className="min-h-screen py-20 bg-white relative overflow-hidden" id="internships">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Internship Domains</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Bridge the gap between academics and industry with our intensive internship programs.
            Work on real-world projects and gain hands-on experience.
          </motion.p>
        </div>

        {/* Internship Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={handleDomainClick}
              className={`cursor-pointer bg-white p-8 rounded-3xl border ${domain.color} shadow-lg transition-all duration-300 group flex flex-col items-center text-center`}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {domain.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{domain.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {domain.desc}
              </p>

              <button
                className="flex items-center gap-2 text-blue-600 font-bold group-hover:underline"
              >
                <FaFileDownload />
                View Brochure
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Kickstart Your Career?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
              Download our comprehensive brochure to see detailed curriculum, outcomes, and certification details.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={brochureLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg"
              >
                <FaFileDownload />
                Download Brochure
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd5sl2QF1GQWqvP9NaaZa5AiSW5wN5QL6UlZKBc-dRvtrci8A/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all shadow-lg"
              >
                Apply for Internship
              </a>
            </div>
          </div>

          {/* Decorative shapes for CTA */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
