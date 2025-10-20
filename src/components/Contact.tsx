import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <div
      id="contact"
      className="h-screen w-full flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              className="text-5xl max-lg:text-4xl max-md:text-3xl mb-6 text-mainColor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let's Connect
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have a project in mind? Let's discuss how we can bring your ideas
              to life. I'm always excited to work on new challenges and
              innovative solutions.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Mail className="w-5 h-5 text-mainColor" />
                <span className="text-gray-300">nabeel@example.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-5 h-5 text-mainColor" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin className="w-5 h-5 text-mainColor" />
                <span className="text-gray-300">Your City, Country</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md mx-auto"
          >
            <form className="space-y-6">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 text-white w-full p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-mainColor transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 }}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white w-full p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-mainColor transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 }}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                placeholder="Your Message"
                rows={5}
                className="bg-gray-800 text-white w-full p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-mainColor transition-all duration-300 resize-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.6 }}
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="bg-mainColor text-white w-full py-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 font-medium text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
