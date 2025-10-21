import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroAnimation from "../../public/lotiFiles/mobile-animation-3.json";

function Hero() {
  return (
    <div
      id="home"
      className="h-screen w-full flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between max-lg:flex-col max-lg:text-center">
          <motion.div
            className="flex-[55%] flex flex-col gap-10 max-lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="text-5xl max-lg:text-4xl max-md:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1>NABEEL AL GEFARY</h1>
              <h2 className="text-2xl mt-4 text-mainColor max-lg:text-xl">
                Flutter Developer 📱
              </h2>
            </motion.div>

            <motion.p
              className="text-xl max-lg:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A passionate Mobile Developer specializing in Flutter and creating
              seamless, user-friendly apps for iOS and Android. With a strong
              background in building efficient and scalable mobile solutions, I
              thrive on solving challenges and delivering innovative digital
              experiences. 🚀
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-mainColor rounded-xl text-xl py-6 px-8 hover:bg-opacity-80 transition-all duration-300">
                Check My CV <span>📄</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-[45%] flex justify-center items-center max-lg:order-1 max-lg:mb-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-full max-w-md">
              <Lottie
                animationData={heroAnimation}
                loop={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
