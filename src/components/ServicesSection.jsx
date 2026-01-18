import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Android Application Development",
    desc: "Building scalable, secure, and high-performance Android applications using modern architecture and best practices.",
    color: "from-blue-600 to-indigo-700",
    icon: "📱"
  },
  {
    title: "Cross-Platform Development",
    desc: "Reliable React Native apps with smooth performance, clean UI, and scalable structure.",
    color: "from-purple-500 to-pink-600",
    icon: "⚛️"
  },
  {
    title: "App Maintenance & Support",
    desc: "Bug fixing, performance optimization, library updates, and Play Store compliance handling.",
    color: "from-green-500 to-teal-600",
    icon: "🛠️"
  }
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-700 mb-10"
        >
          Professional Expertise
        </motion.h2>

        {/* Cards Grid with stagger animation */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                rotateX: 2,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.2)"
              }}
              className={`relative overflow-hidden bg-gradient-to-br ${s.color} text-white p-6 rounded-xl shadow-xl`}
            >

              {/* Subtle glow layer */}
              <div className="absolute inset-0 bg-white opacity-10 blur-xl"></div>

              {/* Floating icon animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-5xl mb-3"
              >
                {s.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm opacity-90">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
          >
            View All Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
