import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-indigo-700 mb-10"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT — Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>

            <p className="mb-2">📍 <span className="opacity-90">New Delhi, India</span></p>
            <p className="mb-2">📞 <span className="opacity-90">7979705912</span></p>
            <p className="mb-4">📧 <span className="opacity-90">amankr97531@gmail.com</span></p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/aman-kumar-592a5a257/"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
              >
                🔗 LinkedIn
              </a>

              <a
                href="https://github.com/amankr97531"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
              >
                🐙 GitHub
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

            <input
              className="w-full border p-3 rounded mb-3"
              placeholder="Your Name"
            />

            <input
              className="w-full border p-3 rounded mb-3"
              placeholder="Your Email"
            />

            <textarea
              className="w-full border p-3 rounded mb-3"
              placeholder="Your Message"
              rows="4"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition">
              Send Message
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
