import { motion } from "framer-motion";

const projects = [
  {
    title: "DDA Employee Attendance System",
    tech: ["React Native", "JavaScript", "Face Recognition", "GPS", "API"],
    desc: "A secure face-recognition and geofencing-based attendance system used by DDA employees for daily check-in and check-out.",
    color: "from-blue-500 to-indigo-700",
    icon: "📱"
  },
  {
    title: "DDA Citizen Centric",
    tech: ["Flutter", "Dart", "GPS", "Rest APIs"],
    desc: "A secure mobile application developed for DDA’s Lease and License operations.",
    color: "from-cyan-600 to-blue-900",
    icon: "🏢"
  },
  {
    title: "Vacant Land Photo Upload",
    tech: ["Java", "MVVM", "GPS", "Camera"],
    desc: "Mobile solution that allows officials to capture and upload land images with real-time latitude and longitude.",
    color: "from-green-500 to-teal-600",
    icon: "🌍"
  },
  {
    title: "Online Booking Pic Upload",
    tech: ["Java", "XML", "APIs"],
    desc: "A modern image-upload workflow with validation, compression, and preview features.",
    color: "from-purple-500 to-pink-600",
    icon: "🖼️"
  },
  {
    title: "Shri Balaji Enterprises Website",
    tech: ["React", "Tailwind", "Netlify"],
    desc: "Professional responsive website built for a local electronics business with clean UI and fast performance.",
    link: "https://shri-balaji-enterprises.netlify.app/",
    color: "from-yellow-400 to-orange-500",
    icon: "🌐"
  }
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-700 mb-10"
        >
          My Key Projects
        </motion.h2>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                rotateX: 2,
                rotateY: 2,
                boxShadow: "0px 15px 35px rgba(0,0,0,0.25)"
              }}
              className={`relative overflow-hidden bg-gradient-to-br ${p.color} 
                          text-white p-6 rounded-xl shadow-xl`}
            >
              {/* Shine / glass overlay */}
              <div className="absolute inset-0 bg-white opacity-10 blur-2xl"></div>

              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-4xl mb-3"
              >
                {p.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold mb-1">{p.title}</h3>

              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm opacity-90 mb-4">{p.desc}</p>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-white text-gray-900 px-4 py-2 
                             rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  🔗 Visit Website
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
