import { motion } from "framer-motion";

const skills = [
  { name: "Java", color: "from-red-500 to-orange-500" },
  { name: "Android (XML)", color: "from-green-500 to-teal-600" },
  { name: "React Native", color: "from-blue-500 to-indigo-600" },
  { name: "Flutter", color: "from-purple-500 to-pink-500" },
  { name: "Gradle", color: "from-gray-700 to-gray-900" },
  { name: "REST APIs", color: "from-cyan-500 to-blue-500" },
  { name: "Git & GitHub", color: "from-black to-gray-700" },
  { name: "Postman", color: "from-orange-500 to-amber-500" },
  { name: "SQLite", color: "from-teal-600 to-green-600" },
  { name: "MVVM", color: "from-indigo-600 to-purple-700" }
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-700 mb-10"
        >
          My Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariant}
              whileHover={{
                scale: 1.08,
                rotate: 1,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)"
              }}
              className={`relative overflow-hidden bg-gradient-to-r ${skill.color}
                          text-white p-5 rounded-xl shadow-lg text-center 
                          font-semibold cursor-pointer transition-all`}
            >
              {/* Shine / glass effect */}
              <div className="absolute inset-0 bg-white opacity-10 blur-xl"></div>

              {/* Floating effect */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {skill.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
