import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Apple, Globe } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { projects } from "../data/projects";

interface PortfolioProps {
  onNavigateToNextSection?: () => void;
  onNavigateToPrevSection?: () => void;
}

function Portfolio({
  onNavigateToNextSection,
  onNavigateToPrevSection,
}: PortfolioProps = {}) {
  const [currentProject, setCurrentProject] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToProject = useCallback(
    (index: number) => {
      if (index >= 0 && index < projects.length && !isScrolling) {
        setIsScrolling(true);
        setCurrentProject(index);
        setCurrentImageIndex(0);

        // Add a smooth visual transition when changing projects
        const projectElement = document.getElementById("project-content");
        if (projectElement) {
          projectElement.style.opacity = "0";
          setTimeout(() => {
            projectElement.style.opacity = "1";
          }, 300);
        }

        setTimeout(() => {
          setIsScrolling(false);
        }, 750);
      }
    },
    [isScrolling],
  );

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (
        containerRef.current &&
        containerRef.current.contains(e.target as Node)
      ) {
        e.preventDefault();

        if (isScrolling) return;

        if (e.deltaY > 0) {
          // Scrolling down
          if (currentProject < projects.length - 1) {
            scrollToProject(currentProject + 1);
          } else if (onNavigateToNextSection && !isScrolling) {
            // At last project, navigate to next section with delay
            setIsScrolling(true);
            setTimeout(() => {
              onNavigateToNextSection();
              setIsScrolling(false);
            }, 300);
          }
        } else {
          // Scrolling up
          if (currentProject > 0) {
            scrollToProject(currentProject - 1);
          } else if (onNavigateToPrevSection) {
            // At first project, navigate to previous section
            onNavigateToPrevSection();
          }
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [
    currentProject,
    isScrolling,
    scrollToProject,
    onNavigateToNextSection,
    onNavigateToPrevSection,
  ]);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % projects[currentProject].images.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentProject]);

  const project = projects[currentProject];

  return (
    <div
      id="portfolio"
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-gray-900 text-white overflow-hidden relative"
    >
      {/* Project Counter */}
      <div className="absolute top-24 left-8 z-20 max-md:top-20 max-md:left-4 hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-gray-400"
        >
          <span className="text-4xl font-bold text-mainColor">
            {String(currentProject + 1).padStart(2, "0")}
          </span>
          <span className="text-2xl text-gray-600">
            /{String(projects.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Projects List - Vertical */}
      <div
        className="fixed z-99 left-4 top-[55%] transform -translate-y-1/2 z-99 max-lg:left-4 hidden lg:block max-h-[90vh]"
        onMouseEnter={(e) => (e.currentTarget.style.width = "14%")}
        onMouseLeave={(e) => (e.currentTarget.style.width = "fit-content")}
        onTouchMoveCapture={(e) =>
          (e.currentTarget.style.width = "fit-content")
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center gap-3.5 max-h-[90vh] overflow-y-auto ps-2 no-scrollbar"
        >
          {projects.map((proj, index) => (
            <motion.button
              key={proj.id}
              onClick={() => scrollToProject(index)}
              className={`text-sm transition-all duration-300 group relative w-12 h-12 flex items-center justify-center`}
              initial={{ opacity: 0, scale: 0.9, x: -10 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: currentProject === index ? 0 : -5,
              }}
              whileHover={{ scale: 1.1 }}
              // transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <img
                src={`/images/${proj.title}/${proj.icon}`}
                className="text-xl w-10 h-10 rounded-full"
              />
              <span className="absolute left-14  z-99 bg-gray-800 px-2 py-1.5 text-[12px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg pointer-events-none text-white">
                {proj.title}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center mt-6 max-md:ml-0 ml-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center max-lg:gap-8"
            id="project-content"
          >
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 max-lg:text-center"
            >
              {/* Icon */}
              {/*<motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg max-lg:mx-auto`}
              >
                {project.icon}
              </motion.div>*/}

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-4xl font-bold text-white max-lg:text-4xl max-md:text-3xl flex items-center justify-start gap-4"
              >
                <img
                  src={`/images/${project.title}/${project.icon}`}
                  alt={project.title}
                  className="w-10 h-10 rounded-full"
                />
                <span>{project.title}</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-300 leading-relaxed max-lg:text-base"
              >
                {project.longDescription}
              </motion.p>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-2 max-lg:justify-center"
              >
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-mainColor hover:text-mainColor transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4 pt-4 max-lg:justify-center max-md:flex-col"
              >
                {project.appleUrl && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-mainColor hover:text-mainColor px-8 py-6 text-lg rounded-xl transition-all duration-300"
                    onClick={() => window.open(project.appleUrl!, "_blank")}
                  >
                    <Apple className="w-5 h-5 mr-2" />
                    App Store
                  </Button>
                )}
                {project.googleUrl && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-mainColor hover:text-mainColor px-8 py-6 text-lg rounded-xl transition-all duration-300"
                    onClick={() => window.open(project.googleUrl!, "_blank")}
                  >
                    <img
                      src="/android-white.svg"
                      alt="Google Play"
                      className="w-6 h-6 mr-2"
                    />
                    Android
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    size="lg"
                    className="bg-mainColor hover:bg-opacity-80 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
                    onClick={() => window.open(project.demoUrl!, "_blank")}
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Demo
                  </Button>
                )}
              </motion.div>
            </motion.div>

            {/* Right Column - Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-[500px] max-lg:h-[400px] max-md:h-[300px]"
            >
              {/* Main image container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-3xl blur-3xl`}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentProject}-${currentImageIndex}`}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Image placeholder */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <div
                        className={`w-[90%] h-[90%] flex items-center justify-center relative overflow-hidden rounded-xl`}
                      >
                        <img
                          src={`/images/${project.title}/${project.images[currentImageIndex]}`}
                          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                          className="absolute inset-0 w-fit m-auto h-full object-contain rounded-2xl"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Image indicators */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImageIndex === index
                          ? "bg-mainColor w-8 shadow-md shadow-mainColor/20"
                          : "bg-gray-500/60 hover:bg-gray-400"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* Decorative elements */}{" "}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-2xl`}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-2xl`}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll hint */}
      {currentProject === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.75 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm flex flex-col items-center max-md:bottom-20"
        >
          <span className="mb-2">Scroll to view more projects</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Portfolio;
