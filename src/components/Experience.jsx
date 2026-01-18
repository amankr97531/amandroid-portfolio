import { motion } from "framer-motion";

const experiences = [
  {
    company: "Akiko Sherman Infotech Pvt Ltd",
    role: "Software Engineer",
    period: "Oct 2025 – Present",
    color: "from-blue-500 to-indigo-700",
    points: [
      "Currently handling multiple mission-critical DDA mobile applications.",
      "Working on Java, React Native, Flutter, and Gradle-based projects.",
      "Actively involved in bug fixing, performance tuning, and feature delivery.",
      "Collaborating with stakeholders to integrate REST APIs and improve UX.",
      "Ensuring app stability across multiple Android versions and devices."
    ]
  },
  {
    company: "VedangSoft Private Limited, New Delhi",
    role: "Android Developer",
    period: "Jan 2024 – Present",
    color: "from-green-500 to-teal-600",
    points: [
      "Independently managed and maintained 12+ Android applications for DDA.",
      "Led the complete Play Store lifecycle — signing, versioning, publishing, and updates.",
      "Improved app performance by up to 20% through optimization and refactoring.",
      "Resolved critical production issues across multiple live apps.",
      "Integrated REST APIs and delivered responsive UI/UX across devices."
    ]
  }
];

const Experience = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-indigo-700 mb-10"
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l-4 border-indigo-400 pl-8 space-y-10">

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${exp.color} text-white p-6 rounded-xl shadow-xl`}
            >
              <h3 className="text-2xl font-semibold">
                {exp.role} — {exp.company}
              </h3>

              <p className="text-sm opacity-90 mb-3">{exp.period}</p>

              <ul className="list-disc list-inside space-y-2 text-sm">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
