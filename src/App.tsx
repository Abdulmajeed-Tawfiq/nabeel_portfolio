import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { component: Hero, name: "home", id: "home" },
    { component: About, name: "about", id: "about" },
    { component: Portfolio, name: "portfolio", id: "portfolio" },
    { component: Contact, name: "contact", id: "contact" },
    { component: Footer, name: "footer", id: "footer" },
  ];

  const scrollToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < sections.length && !isScrolling) {
        setIsScrolling(true);
        setCurrentSection(index);

        // Reset scrolling state after animation completes
        setTimeout(() => {
          setIsScrolling(false);
        }, 750); // Match this with your animation duration
      }
    },
    [sections.length, isScrolling],
  );

  const handleNavigateToNextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  }, [currentSection, sections.length, scrollToSection]);

  const handleNavigateToPrevSection = useCallback(() => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }, [currentSection, scrollToSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if scrolling inside Projects section
      const target = e.target as HTMLElement;
      const projectsSection = document.getElementById("portfolio");

      if (projectsSection && projectsSection.contains(target)) {
        // Let the Projects component handle its own scrolling
        return;
      }

      e.preventDefault();

      if (isScrolling) return;

      if (e.deltaY > 0) {
        // Scrolling down
        if (currentSection < sections.length - 1) {
          scrollToSection(currentSection + 1);
        }
      } else {
        // Scrolling up
        if (currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case "ArrowDown":
        case " ":
          e.preventDefault();
          if (currentSection < sections.length - 1) {
            scrollToSection(currentSection + 1);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (currentSection > 0) {
            scrollToSection(currentSection - 1);
          }
          break;
        case "Home":
          e.preventDefault();
          scrollToSection(0);
          break;
        case "End":
          e.preventDefault();
          scrollToSection(sections.length - 1);
          break;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        container.removeEventListener("wheel", handleWheel);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [currentSection, isScrolling, sections.length, scrollToSection]);

  // Handle touch events for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      setTouchEnd(e.targetTouches[0].clientY);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd || isScrolling) return;

      const distance = touchStart - touchEnd;
      const isUpSwipe = distance > 50;
      const isDownSwipe = distance < -50;

      if (isUpSwipe && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      }
      if (isDownSwipe && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);

      return () => {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [
    touchStart,
    touchEnd,
    currentSection,
    isScrolling,
    sections.length,
    scrollToSection,
  ]);

  return (
    <div className="bg-gray-900 overflow-hidden" ref={containerRef}>
      <Navbar
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            title={sections[index].name}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentSection + 1) / sections.length) * 100}%`,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </div>

      {/* Sections Container */}
      <div className="h-screen relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full h-full flex items-center justify-center">
              {(() => {
                const CurrentComponent = sections[currentSection].component;

                // Special handling for Projects component
                if (currentSection === 2) {
                  return (
                    <CurrentComponent
                      onNavigateToNextSection={handleNavigateToNextSection}
                      onNavigateToPrevSection={handleNavigateToPrevSection}
                    />
                  );
                }

                return <CurrentComponent />;
              })()}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Hint */}
      {currentSection === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.75 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-40"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-2 z-40">
        {currentSection > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(currentSection - 1)}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-300"
          >
            ↑
          </motion.button>
        )}
        {currentSection < sections.length - 1 && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(currentSection + 1)}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors duration-300"
          >
            ↓
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default App;
