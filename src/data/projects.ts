export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  technologies: string[];
  appleUrl?: string | null;
  demoUrl?: string | null;
  color: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Moovo App",
    description:
      "A user-friendly ecommerce app for browsing products, adding to cart, and secure payments.",
    longDescription:
      "Developed a user-friendly ecommerce app enabling customers to browse products, add items to cart, and complete secure payments. Integrated features like product search, and push notifications to enhance user experience.",
    icon: "🛍️",
    technologies: [
      "Flutter",
      "Dart",
      "E-commerce",
      "Secure Payments",
      "Push Notifications",
    ],
    appleUrl: null,
    demoUrl:
      "https://drive.google.com/file/d/1JrD1yKTLEUGqSPHTOuJi5SAr6LTSjRTK/view?usp=sharing",
    color: "from-purple-500 to-pink-500",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
  {
    id: 2,
    title: "Swess Home",
    description:
      "Real estate app covering properties in Damascus and its countryside.",
    longDescription:
      "A real estate app covering properties in Damascus and its countryside. Features agent listings and extensive property coverage.",
    icon: "🏠",
    technologies: ["Flutter", "Dart", "Real Estate", "Agent Listings"],
    appleUrl: "https://apps.apple.com/us/app/swess-home/id1591728350",
    demoUrl: null,
    color: "from-blue-500 to-teal-500",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
  {
    id: 3,
    title: "Eavando App",
    description:
      "Online store for selling clothes and fashion with electronic payment features.",
    longDescription:
      "Online store for selling clothes and fashion with electronic payment features.",
    icon: "🛒",
    technologies: ["Flutter", "Dart", "E-commerce", "Electronic Payment"],
    appleUrl: "https://apps.apple.com/be/app/eavando/id6448908064",
    demoUrl: null,
    color: "from-green-500 to-lime-500",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
  {
    id: 4,
    title: "7RM APP",
    description: "Online booking services for quality horse events in the UAE.",
    longDescription:
      "Online booking services for quality horse events in the UAE.",
    icon: "🐎",
    technologies: ["Flutter", "Dart", "Booking System", "Events"],
    appleUrl: "https://apps.apple.com/ae/app/sevenrm/id6475645542",
    demoUrl: null,
    color: "from-red-500 to-yellow-500",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
  {
    id: 5,
    title: "Mazad Alnokhba",
    description:
      "E-commerce app with multi-stores for animal-related products.",
    longDescription:
      "E-commerce app with multi-stores for animal-related products.",
    icon: "🛍️",
    technologies: ["Flutter", "Dart", "E-commerce", "Multi-store"],
    appleUrl: "https://apps.apple.com/in/app/mazad-alnokhba/id1597116939",
    demoUrl: null,
    color: "from-indigo-500 to-cyan-500",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
  {
    id: 6,
    title: "Ryan Customer - Captain",
    description: "Driver taxi app allowing customers to book taxi cars.",
    longDescription:
      "Driver taxi app allowing customers to book taxi cars. Includes separate apps for the driver and the customer.",
    icon: "🚕",
    technologies: [
      "Flutter",
      "Dart",
      "Booking System",
      "Taxi App",
      "Google Maps",
    ],
    appleUrl: "https://apps.apple.com/kw/app/rayan-customer/id1621499233",
    demoUrl: null,
    color: "from-orange-500 to-amber-500",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
  {
    id: 7,
    title: "WeSafe",
    description:
      "Trips Management App helps employees to manage your tasks and trips.",
    longDescription:
      "Trips Management App helps employees to manage your tasks and trips and organizes it. in addition to monitors their works efficiency.",
    icon: "📋",
    technologies: ["Flutter", "Dart", "Task Management", "Trip Management"],
    appleUrl: "https://apps.apple.com/us/app/we-safe/id6736458367",
    demoUrl: null,
    color: "from-rose-500 to-red-600",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
  {
    id: 8,
    title: "Clinics Assistant (Graduation Project)",
    description: "Application for managing clinic reservations.",
    longDescription:
      "Application for managing clinic reservations. (My Graduation Project)",
    icon: "🩺",
    technologies: ["Flutter", "Dart", "Booking System", "Clinic Management"],
    appleUrl: null,
    demoUrl:
      "https://drive.google.com/file/d/1R-HCnBfB9VvwfB7UiM0vj4ldASvIM3Bx/view?usp=sharing",
    color: "from-sky-500 to-violet-500",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
  {
    id: 9,
    title: "Gas Express",
    description:
      "Ecommerce for Gas products with admin dashboard and delivery App.",
    longDescription:
      "Ecommerce for Gas products with admin dashboard and delivery App.",
    icon: "⛽",
    technologies: [
      "Flutter",
      "Dart",
      "E-commerce",
      "Admin Dashboard",
      "Delivery App",
    ],
    appleUrl: null,
    demoUrl:
      "https://drive.google.com/file/d/1bCLh575CG99BtW0ODULG5WOZ2EM8TdH/view?usp=sharing",
    color: "from-purple-500 to-pink-500",
    images: ["/images/phone.svg", "/images/phone.svg", "/images/phone.svg"],
  },
];
