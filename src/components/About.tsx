import Lottie from "lottie-react";
import { motion } from "framer-motion";
import abputAnimation from "../../public/lotiFiles/developer-animation.json";

function About() {
  return (
    <div
      id="about"
      className="h-screen w-full flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between max-lg:flex-col-reverse max-lg:text-center">
          <motion.div
            className="flex-[45%] flex justify-center items-center max-lg:mt-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full max-w-md">
              <Lottie
                animationData={abputAnimation}
                loop={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-[55%] flex flex-col gap-10 max-lg:text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="text-6xl max-lg:text-4xl max-md:text-3xl text-mainColor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2>About Me</h2>
            </motion.div>

            <motion.p
              className="text-xl max-lg:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Mobile App Developer with over 2 years of experience in building
              production-level mobile applications using Flutter and Dart.
              Proficient in Firebase, RESTful APIs, real-time communication, and
              state management. Experienced in app deployment across various
              platforms with a focus on optimizing app performance and user
              experience.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 max-lg:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                "Flutter",
                "Dart",
                "Firebase",
                "REST APIs",
                "State Management",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-mainColor bg-opacity-20 border border-mainColor rounded-full text-mainColor text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.375, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
