import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import amanPhoto from "../assets/images/aman.png";
import akikoImg from "../assets/images/akiko.png";
import vedangImg from "../assets/images/vedang.png";
import cuImg from "../assets/images/cu.png";
import brabuImg from "../assets/images/brabu.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">

          {/* HEADER CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="bg-[#eef3ff] rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-blue-100"
          >
            <h1
              className="text-3xl md:text-4xl font-bold text-center 
                       bg-gradient-to-r from-blue-600 to-purple-700 
                       bg-clip-text text-transparent mb-3"
            >
              About Aman Kumar
            </h1>

            <p className="text-center text-gray-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              I am a passionate Android & Mobile App Developer with 2 years of
              professional experience building scalable, secure, and
              high-performance applications for government and private clients.
              I currently work as a Software Engineer at{" "}
              <span className="font-semibold text-indigo-700">
                Akiko Sherman Infotech Pvt Ltd
              </span>{" "}
              and lead development for multiple mission-critical DDA mobile
              applications.
            </p>
          </motion.div>

          {/* PROFILE PHOTO CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#eef3ff] rounded-2xl shadow-lg p-6 mb-8 border border-purple-100"
          >
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 blur-xl opacity-40 rounded-full"
                ></motion.div>

                <motion.img
                  src={amanPhoto}
                  alt="Aman Kumar"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="relative w-52 h-52 md:w-64 md:h-64 rounded-full 
                           object-cover border-4 border-yellow-400 shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* JOURNEY TITLE */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-6">
            My Journey
          </h2>

          <div className="space-y-8">

            {/* AKIKO CARD */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#eef3ff] rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6 items-center border border-blue-100"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={akikoImg}
                alt="Akiko Sherman Infotech"
                className="w-full max-w-xs mx-auto rounded-xl shadow"
              />

              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">
                  Akiko Sherman Infotech Pvt Ltd
                </h3>
                <p className="text-gray-600 mb-1 text-sm">
                  Software Engineer — Oct 2025 – Present
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Leading mobile development for multiple DDA applications,
                  focusing on reliability, security, performance optimization,
                  modern UI/UX, and streamlined Play Store release workflows.
                </p>
              </div>
            </motion.div>

            {/* VEDANG CARD */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#eef3ff] rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6 items-center border border-green-100"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">
                  VedangSoft Pvt Ltd
                </h3>
                <p className="text-gray-600 mb-1 text-sm">
                  Android Developer — Jan 2024 – Oct 2025
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Independently managed 12+ live DDA Android applications,
                  handled end-to-end Play Store deployment, improved performance
                  by up to 20%, and automated manual processes.
                </p>
              </div>

              <motion.img
                whileHover={{ scale: 1.03 }}
                src={vedangImg}
                alt="VedangSoft"
                className="w-full max-w-xs mx-auto rounded-xl shadow order-1 md:order-2"
              />
            </motion.div>

            {/* CHANDIGARH UNIVERSITY CARD */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#eef3ff] rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6 items-center border border-purple-100"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={cuImg}
                alt="Chandigarh University"
                className="w-full max-w-xs mx-auto rounded-xl shadow"
              />

              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">
                  Chandigarh University
                </h3>
                <p className="text-gray-600 mb-1 text-sm">
                  MCA (Cloud Computing & DevOps) — 2022–2024
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Specialized in cloud technologies, DevOps practices,
                  containerization, CI/CD pipelines, and scalable application
                  architecture.
                </p>
              </div>
            </motion.div>

            {/* BRABU CARD */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#eef3ff] rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6 items-center border border-pink-100"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">
                  BRABU University
                </h3>
                <p className="text-gray-600 mb-1 text-sm">
                  Bachelor of Computer Applications (BCA) — Completed 2022
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Built strong foundations in programming, data structures,
                  databases, and software development concepts.
                </p>
              </div>

              <motion.img
                whileHover={{ scale: 1.03 }}
                src={brabuImg}
                alt="BRABU University"
                className="w-full max-w-xs mx-auto rounded-xl shadow order-1 md:order-2"
              />
            </motion.div>

          </div>

          {/* BOTTOM 3 CARDS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-10"
          >

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-700 
                         text-white p-5 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-1">Professional</h3>
              <p className="text-sm">
                Worked on 12+ live DDA applications using Java, XML, React Native,
                and Flutter with strong focus on performance and UX.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gradient-to-br from-green-500 to-teal-600 
                         text-white p-5 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-1">Technical</h3>
              <p className="text-sm">
                Skilled in REST APIs, MVVM, Gradle, SQLite, Git, Postman, and
                Play Store release lifecycle.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gradient-to-br from-purple-500 to-pink-600 
                         text-white p-5 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-1">Vision</h3>
              <p className="text-sm">
                Building my own tech brand “AmanDroid” while continuing my
                full-time career in mobile development.
              </p>
            </motion.div>

          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;
