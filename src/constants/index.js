

// ...existing code...
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  elearning,
  tripguide,
  employee
  // threejs,  <-- REMOVE THIS LINE
} from "../assets";
// ...existing code...
// ...existing code...

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "E- Learning Website",
    iconBg: "#383E56",
    date: "March 2025 - July 2025",
    points: [
      "Developing and maintaining web applications using MERN STACK other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "School Management System",
    
    iconBg: "#E6DEDD",
    date: "Jan 2024 - August 2024",
    points: [
      "Developing and maintaining web applications MERN STACK and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "E-Commerce App",
    iconBg: "#383E56",
    date: "October 2024 - December 2024",
    points: [
      "E-commerce mobile application using Flutter and Firebase, allowing users to buy and sell products.",
      "The app includes user authentication, product management, a shopping cart, and order tracking.",
      "It ensures aseamless shopping experience with Firebase as the backend for real-time data storage and retrieval.",
    ],
  },
  {
    title: "CiviConnect App",
    
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using Flutter and Node Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "E-Learning",
    description:
      "Full-stack eLearning platform with React frontend, Node.js backend, and MongoDB. Features course management, video streaming, progress tracking, admin dashboard, payment integration, and user authentication. Built with modern tech stack including Redux, Tailwind CSS, and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: elearning,
    source_code_link: "https://github.com/Mithilesh-thakur/E-Learning",
  },
  {
    name: "Shoping App",
    description:
      " Built a cross-platform E-commerce mobile app using Flutter with Firebase backend. Implemented user authentication, product listing, cart, and order tracking.  Enabled real-time database interaction using Cloud Firestore.  Delivered seamless shopping experience with clean UI/UX on both Android and iOS platforms. ",
    tags: [
      {
        name: "dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Mithilesh-thakur/shoping_client",
  },
  {
    name: "Employee Management System",
    description:
      "Employee Management System built using the MERN stack to manage employee records, roles, and performance. Features include CRUD operations, authentication, responsive UI, and real-time updates, ensuring efficient employee tracking and administrative control across the organization",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: employee,
    source_code_link: "https://github.com/Mithilesh-thakur/employee_management_system",
  },
];

export { services, technologies, experiences, projects };
