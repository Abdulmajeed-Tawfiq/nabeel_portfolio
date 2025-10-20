import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description:
      "A full-featured e-commerce mobile application built with Flutter. Features include user authentication, product catalog, shopping cart, payment integration, and order management.",
    icon: "📱",
    technologies: ["Flutter", "Dart", "Firebase", "Stripe", "REST API"],
    githubUrl: "https://github.com/nabeel/ecommerce-app",
    liveUrl: "https://play.google.com/store/apps",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description:
      "A responsive social media management dashboard with real-time analytics, post scheduling, and user engagement tracking. Built with modern web technologies.",
    icon: "📊",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/nabeel/social-dashboard",
    liveUrl: "https://social-dashboard.vercel.app",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information. Features smooth animations and intuitive design.",
    icon: "🌤️",
    technologies: [
      "Flutter",
      "OpenWeather API",
      "Location Services",
      "Animations",
    ],
    githubUrl: "https://github.com/nabeel/weather-app",
    liveUrl: "https://weather-app-demo.com",
    color: "from-green-500 to-teal-500",
  },
];

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="h-screen w-full flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-white mb-4">
            My <span className="text-mainColor">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in mobile
            development and creating innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[60vh] overflow-y-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div
                className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-white text-4xl font-bold opacity-20"
                  >
                    {project.id}
                  </motion.div>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-xl">{project.icon}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-mainColor hover:bg-opacity-80"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
