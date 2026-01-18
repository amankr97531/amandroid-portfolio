import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  const phone = "7979705912";

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-blue-100"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-4">
              Let’s Connect
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I am open to professional opportunities, collaborations, and meaningful discussions around mobile technologies. Feel free to connect — I will be happy to engage and explore how I can add value.
            </p>

            <div className="space-y-3 text-gray-700 mb-6">
              <p>📍 <span className="font-medium">New Delhi, India</span></p>
              <p>
                📞{" "}
                <a
                  href={`tel:${phone}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {phone}
                </a>
              </p>
              <p>
                📧{" "}
                <a
                  href="mailto:amankr97531@gmail.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  amankr97531@gmail.com
                </a>
              </p>
            </div>

            {/* CALL & WHATSAPP BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href={`tel:${phone}`}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition"
              >
                📞 Call Me
              </a>

              <a
                href={`https://wa.me/91${phone}`}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition"
              >
                💬 WhatsApp Me
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">
              Connect with me
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/aman-kumar-592a5a257/"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg shadow hover:scale-105 transition font-medium"
              >
                🔗 LinkedIn
              </a>

              <a
                href="https://github.com/amankr97531"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg shadow hover:scale-105 transition font-medium"
              >
                🐱 GitHub
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-purple-100"
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
              Send a Message
            </h3>

            <input
              className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />

            <input
              className="w-full border border-gray-300 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
            />

            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              rows={4}
            />

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg">
              Send Message
            </button>

            <p className="text-sm text-gray-500 text-center mt-3">
              I usually respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
