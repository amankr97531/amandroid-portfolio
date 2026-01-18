import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/amandroid.png"; // tumhara logo

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Expertise", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 
      bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 
      backdrop-blur-md shadow-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO + NAME */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <motion.img
            src={logo}
            alt="AmanDroid Logo"
            className="w-12 h-10 object-contain drop-shadow-lg"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          <motion.h1
            className="text-2xl md:text-3xl font-extrabold tracking-wider
              bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400
              bg-clip-text text-transparent drop-shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            AmanDroid
          </motion.h1>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          <div className="flex items-center gap-7">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-white font-semibold text-lg tracking-wide 
                           transition-all hover:text-yellow-300 group"
              >
                {item.name}

                {/* Animated underline */}
                <span
                  className="absolute left-0 bottom-[-4px] w-0 h-[2px] 
                             bg-gradient-to-r from-yellow-300 to-pink-400 
                             transition-all duration-300 group-hover:w-full"
                ></span>
              </Link>
            ))}
          </div>

          {/* Hire Me Button */}
          {/* Hire Me Button - FIXED */}
<Link to="/contact">
  <motion.div
    whileHover={{ scale: 1.08 }}
    className="relative overflow-hidden
      bg-gradient-to-r from-yellow-400 to-pink-500
      text-black font-bold px-7 py-2 rounded-full
      shadow-lg cursor-pointer"
  >
    <span className="relative z-10">Hire Me</span>
    <span className="absolute inset-0 bg-white/20 blur-xl"></span>
  </motion.div>
</Link>

        </div>

        {/* MOBILE HAMBURGER */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-br from-blue-700 to-purple-700
                     text-white px-6 py-4 flex flex-col gap-4 shadow-xl"
        >
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold hover:text-yellow-300 transition"
            >
              {item.name}
            </Link>
          ))}

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-yellow-400 to-pink-500 
                       text-black font-bold text-center px-5 py-2 rounded-full"
          >
            Hire Me
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
