export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  technologies: string[];
  appleUrl?: string | null;
  googleUrl?: string | null;
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
    icon: "logo.webp",
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
    images: [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "5.webp",
      "6.webp",
      "7.webp",
      "8.webp",
    ],
  },
  {
    id: 2,
    title: "Swess Home",
    description:
      "Real estate app covering properties in Damascus and its countryside.",
    longDescription:
      "A real estate app covering properties in Damascus and its countryside. Features agent listings and extensive property coverage.",
    icon: "logo.webp",
    technologies: ["Flutter", "Dart", "Real Estate", "Agent Listings"],
    appleUrl: "https://apps.apple.com/us/app/swess-home/id1591728350",
    demoUrl: null,
    color: "from-blue-500 to-teal-500",
    images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"],
  },
  {
    id: 3,
    title: "Eavando App",
    description:
      "Online store for selling clothes and fashion with electronic payment features.",
    longDescription:
      "Online store for selling clothes and fashion with electronic payment features.",
    icon: "logo.webp",
    technologies: ["Flutter", "Dart", "E-commerce", "Electronic Payment"],
    appleUrl: null,
    googleUrl: "https://apkpure.com/eavando/com.axtrosoft.eavando2",
    demoUrl: null,
    color: "from-green-500 to-lime-500",
    images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"],
  },
  {
    id: 4,
    title: "7RM APP",
    description: "Online booking services for quality horse events in the UAE.",
    longDescription:
      "Online booking services for quality horse events in the UAE.",
    icon: "logo.webp",
    technologies: ["Flutter", "Dart", "Booking System", "Events"],
    appleUrl: "https://apps.apple.com/ae/app/sevenrm/id6475645542",
    demoUrl: null,
    color: "from-red-500 to-yellow-500",
    images: [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "5.webp",
      "6.webp",
      "7.webp",
      "8.webp",
      "9.webp",
    ],
  },
  {
    id: 5,
    title: "Mazad Alnokhba",
    description:
      "E-commerce app with multi-stores for animal-related products.",
    longDescription:
      "E-commerce app with multi-stores for animal-related products.",
    icon: "logo.webp",
    technologies: ["Flutter", "Dart", "E-commerce", "Multi-store"],
    appleUrl: "https://apps.apple.com/in/app/mazad-alnokhba/id1597116939",
    demoUrl: null,
    color: "from-green-500 to-lime-500",
    images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"],
  },
  {
    id: 6,
    title: "Ryan Customer",
    description: "Driver taxi app allowing customers to book taxi cars.",
    longDescription:
      "Driver taxi app allowing customers to book taxi cars. Includes separate apps for the driver and the customer.",
    icon: "logo.webp",
    technologies: [
      "Flutter",
      "Dart",
      "Booking System",
      "Taxi App",
      "Google Maps",
    ],
    appleUrl: "https://apps.apple.com/kw/app/rayan-customer/id1621499233",
    demoUrl: null,
    color: "from-green-500 to-lime-500",
    images: ["1.webp", "2.webp", "3.webp"],
  },
  {
    id: 7,
    title: "WeSafe",
    description:
      "Trips Management App helps employees to manage your tasks and trips.",
    longDescription:
      "Trips Management App helps employees to manage your tasks and trips and organizes it. in addition to monitors their works efficiency.",
    icon: "logo.webp",
    technologies: ["Flutter", "Dart", "Task Management", "Trip Management"],
    appleUrl: "https://apps.apple.com/us/app/we-safe/id6736458367",
    demoUrl:
      "https://drive.google.com/file/d/1UsWwYEAuthb1-p19PBD5kqW9DAnle276/view?usp=sharing",
    color: "from-lime-500 to-green-500",
    images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"],
  },
  {
    id: 8,
    title: "Gas Express",
    description:
      "Ecommerce for Gas products with admin dashboard and delivery App.",
    longDescription:
      "Ecommerce for Gas products with admin dashboard and delivery App.",
    icon: "logo.webp",
    technologies: [
      "Flutter",
      "Dart",
      "E-commerce",
      "Admin Dashboard",
      "Delivery App",
    ],
    appleUrl: "https://apps.apple.com/us/app/gazxpress/id6752856616",
    googleUrl:
      "https://play.google.com/store/apps/details?id=com.gazxpress24.app",
    demoUrl:
      "https://drive.google.com/file/d/1bCLh5_75CG99BtW0ODuLG5WOZ2EM8TdH/view?usp=sharing",
    color: "from-orange-500 to-yellow-500",
    images: [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "5.webp",
      "6.webp",
      "7.webp",
      "8.webp",
    ],
  },
];
