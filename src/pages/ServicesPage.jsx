import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "Android Application Development",
    desc: "Building scalable, secure, and high-performance Android applications using industry-standard architecture patterns and best coding practices.",
    tech: ["Java", "XML", "MVVM", "Gradle"],
    color: "from-blue-600 to-indigo-700",
    icon: "📱"
  },
  {
    title: "Cross-Platform Development",
    desc: "Developing reliable cross-platform mobile applications with smooth performance and maintainable code architecture.",
    tech: ["React Native", "REST APIs"],
    color: "from-purple-500 to-pink-600",
    icon: "⚛️"
  },
  {
    title: "Application Maintenance",
    desc: "Debugging production issues, optimizing performance, and ensuring app stability across Android versions and devices.",
    tech: ["Debugging", "Performance", "Play Console"],
    color: "from-green-500 to-teal-600",
    icon: "🛠️"
  },
  {
    title: "Play Store Management",
    desc: "Managing app releases, versioning, signing, and compliance with Google Play Store guidelines.",
    tech: ["Play Console", "AAB", "Release Mgmt"],
    color: "from-yellow-400 to-orange-500",
    icon: "🚀"
  },
  {
    title: "API Integration",
    desc: "Integrating secure REST APIs, handling responses, errors, and efficient data flow in mobile applications.",
    tech: ["REST", "Postman", "JSON"],
    color: "from-cyan-500 to-blue-500",
    icon: "🔗"
  },
  {
    title: "Frontend Web Development",
    desc: "Creating responsive and performance-optimized web interfaces using React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Netlify"],
    color: "from-gray-800 to-gray-900",
    icon: "🌐"
  }
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const ServicesPage = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center 
                       bg-gradient-to-r from-blue-600 to-purple-700 
                       bg-clip-text text-transparent mb-6"
          >
            Professional Expertise
          </motion.h1>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            I specialize in developing reliable mobile and web applications with
            clean architecture, efficient performance, and maintainable code,
            focusing on real-world enterprise and government projects.
          </p>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={cardVariant}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.15)"
                }}
                className={`relative overflow-hidden bg-gradient-to-br ${s.color} 
                            text-white p-6 rounded-xl shadow-xl`}
              >
                <div className="absolute inset-0 bg-white opacity-10 blur-xl"></div>

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-4xl mb-3"
                >
                  {s.icon}
                </motion.div>

                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm opacity-90 mb-3">{s.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-white text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ServicesPage;
