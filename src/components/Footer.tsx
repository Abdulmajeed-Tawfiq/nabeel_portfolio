import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <div
      id="footer"
      className="h-screen w-full flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.h2
            className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Thank You for <span className="text-mainColor">Visiting</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology and innovation.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/nabeel-gefary-955020207",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:nabgef@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+963967122753", label: "Phone" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-mainColor rounded-full flex items-center justify-center transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.375, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-gray-700 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-400 text-sm">
              © 2024 Nabeel Al Gefary. Built with React, TypeScript & Framer
              Motion.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-gray-500 text-xs">
              Made by{" "}
              <a
                href="https://abdulmajeed10.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abdulmajeed Tawfik"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Abdulmajeed Tawfik
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
