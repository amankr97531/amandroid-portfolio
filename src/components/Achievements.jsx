import { motion } from "framer-motion";

const achievements = [
  {
    title: "Google Android Developer Program",
    desc: "Successfully joined the Google Android Developer Program, gaining access to official Android resources, best practices, and advanced development tools.",
    color: "from-blue-500 to-indigo-700",
    icon: "🤖"
  },
  {
    title: "12+ Live DDA Apps",
    desc: "Independently managed and maintained more than 12 production-grade Android applications for Delhi Development Authority.",
    color: "from-green-500 to-teal-600",
    icon: "📱"
  },
  {
    title: "Play Store Expertise",
    desc: "Handled complete Play Store lifecycle including app signing, versioning, publishing, and post-release updates.",
    color: "from-purple-500 to-pink-600",
    icon: "🚀"
  },
  {
    title: "Performance Optimization",
    desc: "Improved overall app performance by ~20% through code refactoring, memory optimization, and efficient API handling.",
    color: "from-yellow-400 to-orange-500",
    icon: "⚡"
  },
  {
    title: "Automation Impact",
    desc: "Reduced manual effort by nearly 70% by introducing automation in data validation, logging, and debugging workflows.",
    color: "from-red-500 to-pink-500",
    icon: "⚙️"
  },
  {
    title: "Enterprise Collaboration",
    desc: "Worked closely with cross-functional teams including designers, backend developers, and QA to deliver stable releases.",
    color: "from-cyan-500 to-blue-500",
    icon: "🤝"
  }
];

const Achievements = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-indigo-700 mb-10"
        >
          Achievements & Milestones
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((a, index) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${a.color} text-white p-6 rounded-xl shadow-xl`}
            >
              <div className="text-4xl mb-3">{a.icon}</div>

              <h3 className="text-2xl font-semibold mb-2">{a.title}</h3>
              <p className="text-sm opacity-90">{a.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
