import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "../data/navigation";

interface NavbarProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const Navbar = ({ currentSection, scrollToSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (index: number) => {
    scrollToSection(index);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.375 }}
      className="p-4 fixed w-full z-50 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-white text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavClick(0)}
        >
          Nabeel
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.index}
              onClick={() => handleNavClick(item.index)}
              className={`text-lg transition-all duration-300 relative ${
                currentSection === item.index
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
              {currentSection === item.index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                  transition={{ duration: 0.225 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick(2)}
          className="hidden md:block text-white text-lg font-bold border-2 border-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 bg-transparent"
        >
          Projects
        </motion.button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none w-8 h-8 flex flex-col justify-center items-center"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white transition-all origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white mt-1 transition-all"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white mt-1 transition-all origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.225 }}
        className="md:hidden overflow-hidden"
      >
        <div className="pt-4 pb-2 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.index}
              onClick={() => handleNavClick(item.index)}
              className={`block w-full text-left px-4 py-3 transition-all duration-300 rounded-lg ${
                currentSection === item.index
                  ? "text-blue-400 bg-blue-500/10"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick(2)}
            className="block w-full text-left px-4 py-3 text-blue-400 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 mt-4"
          >
            View Projects
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
