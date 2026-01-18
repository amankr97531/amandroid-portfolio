import { motion } from "framer-motion";
import amanPhoto from "../assets/images/aman.png";
import { Link } from "react-router-dom";


const texts = [
  "Android Developer",
  "React Native Developer",
  "Flutter Enthusiast",
  "Freelancer",
  "Founder - AmanDroid"
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center text-center md:text-left">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Aman Kumar
            </span>
          </h1>

          <div className="h-12 md:h-14 overflow-hidden mb-4">
            <motion.div
              animate={{ y: [0, -48, -96, -144, -192] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              {texts.map((t, i) => (
                <p
                  key={i}
                  className="text-xl md:text-3xl font-semibold h-12 md:h-14 
                             bg-gradient-to-r from-cyan-300 to-pink-300 
                             bg-clip-text text-transparent drop-shadow-md"
                >
                  {t}
                </p>
              ))}
            </motion.div>
          </div>

          <p className="text-base md:text-lg mb-6 opacity-90 leading-relaxed max-w-xl mx-auto md:mx-0">
            I build high-performance mobile applications for government and
            private clients, managing large-scale DDA projects using Java,
            React Native, Flutter, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
  to="/contact"
  className="bg-gradient-to-r from-yellow-400 to-pink-500 
             text-black px-6 py-3 rounded-lg font-semibold 
             hover:scale-105 transition shadow-lg text-center"
>
  Hire Me
</Link>

<Link
  to="/projects"
  className="bg-white text-indigo-700 px-6 py-3 
             rounded-lg font-semibold hover:scale-105 transition text-center"
>
  View Projects
</Link>

          </div>
        </motion.div>

        {/* RIGHT IMAGE - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-1 md:order-2"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* GLOW RING */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 blur-xl opacity-60 rounded-full"></div>

            {/* IMAGE CONTAINER */}
            <div className="relative bg-white p-2 rounded-full shadow-2xl">
              <img
                src={amanPhoto}
                alt="Aman Kumar"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover 
                           border-4 border-yellow-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
