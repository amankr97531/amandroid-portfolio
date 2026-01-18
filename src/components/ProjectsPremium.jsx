import { motion } from "framer-motion";
import parkLogo from "../assets/app-logos/dda-park.png";
import vacantLogo from "../assets/app-logos/vacant-land.png";
import facilityLogo from "../assets/app-logos/facility-tracking.png";

const appCards = [
  {
    title: "DDA Employee Attendance System",
    desc: "Mobile app to view and interact with Delhi Development Authority (DDA) parks, with attendance features and location data.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.dda_park&hl=en",
    color: "from-blue-500 to-indigo-600",
    icon: parkLogo,
  },
  {
    title: "DDA Vacant Land Photo Upload",
    desc: "This DDA app lets officials upload images of vacant land for monitoring and management via mobile devices.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.dda.vacantlanddda&hl=en",
    color: "from-green-500 to-teal-600",
    icon: vacantLogo,
  },
  {
    title: "DDA-Online Booking Pic Upload",
    desc: "Facility tracking solution for DDA operations with location, status, and real-time updates.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.dda.facilitytracking&hl=en",
    color: "from-red-500 to-pink-600",
    icon: facilityLogo,
  },
];

const webProjects = [
  {
    title: "Shri Balaji Enterprises Website",
    desc: "Professional React-based web presence built for a local electronics store with clean design and responsive layout.",
    link: "https://shri-balaji-enterprises.netlify.app/",
    color: "from-yellow-400 to-orange-500",
    icon: "🌐",
  },
];

export default function ProjectsPremium() {
  return (
    <section className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          Featured Apps & Projects
        </h1>

        {/* DDA Apps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {appCards.map((app) => (
            <motion.div
              key={app.title}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${app.color} text-white rounded-xl shadow-xl p-6`}
            >
              {app.icon && (
                <div className="flex justify-center mb-4">
                  <img
                    src={app.icon}
                    alt={`${app.title} icon`}
                    className="w-20 h-20 rounded-2xl object-cover bg-white p-1 shadow-md"
                  />
                </div>
              )}

              <h2 className="text-2xl font-semibold mb-2">{app.title}</h2>
              <p className="text-sm mb-4">{app.desc}</p>

              <a
                href={app.playStore}
                target="_blank"
                className="inline-block bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition" rel="noreferrer"
              >
                📥 View on Play Store
              </a>
            </motion.div>
          ))}
        </div>

        {/* Web Projects */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Web Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {webProjects.map((wp) => (
            <motion.div
              key={wp.title}
              whileHover={{ scale: 1.04 }}
              className={`bg-gradient-to-br ${wp.color} text-white rounded-xl shadow-lg p-6`}
            >
              <div className="flex justify-center text-4xl mb-3">{wp.icon}</div>
              <h3 className="text-2xl font-semibold">{wp.title}</h3>
              <p className="text-sm mt-2 mb-3">{wp.desc}</p>

              <a
                href={wp.link}
                target="_blank"
                className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition" rel="noreferrer"
              >
                🔗 Visit Website
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
