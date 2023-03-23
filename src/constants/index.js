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
  tailwind,
  nodejs,
  mongodb,
  python,
  php,
  bootstrap,
  rao,
  r1,
  ionic,
  angular,
  carrent,
  happyplaces,
  gap,
  jobit,
  tripguide,
  dpharma,
  threejs,
  unnati,
  test1,
  test2,
  test3
} from "../assets";

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
    title: "Ionic Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Junior Web3 Developer",
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
    name: "Angular",
    icon: angular,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "ionic",
    icon: ionic,
  }
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Rao Information and Technology",
    icon: rao,
    iconBg: "#383E56",
    date: "July 2022 - Oct 2022",
    points: [
      "Developed and maintained responsive web applications using HTML, CSS, and JavaScript.",
      "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality web solutions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Angular.js Developer",
    company_name: "Rao Information and Technology",
    icon: r1,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using Angular.js and other related technologies for the company's products.",
      "Utilized RESTful APIs and AJAX to fetch data from back-end services and display it in the user interface.",
      "Implemented responsive web design principles to ensure optimal user experience across all devices and screen sizes",
      "Worked with version control systems like Git to manage code changes and collaborate with team members.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Rao Information and Technology",
    icon: rao,
    iconBg: "#383E56",
    date: "Dec 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Unnati Informatics",
    icon: unnati,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developed a project named Happy Places for the company by using Angular.js, Node.js, MongoDB, and Express",
      "Designed and developed a custom booking system, integrating with external APIs to enable real-time availability and pricing information for campsites and tours..",
      "Designed and implemented user-friendly interfaces and responsive layouts, optimizing for both desktop and mobile devices.",
      "Collaborated with project managers, designers, and fellow developers to establish project requirements, timelines, and deliverables.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was wonderful working with Mahmood in the hackathon as he took care of pretty much everything for the back-end part of our website.",
    name: "Divy Parekh",
    designation: "SDE Intern",
    company: "Sanghvi Infosoft",
    image: test1,
  },
  {
    testimonial:
      "I had the pleasure of working with Mahmood on a website development project, and I was impressed by his skills and dedication to the project.",
    name: "Himesh Suthar",
    designation: "Full Stack Engineer",
    company: "Rao Information and Technology",
    image: test2,
  },
  {
    testimonial:
      "Mahmood demonstrated a strong understanding of programming languages and web development frameworks.",
    name: "Poonam Dang",
    designation: "Senior Professor",
    company: "GLS University",
    image: test3,
  },
];

const projects = [
  {
    name: "Happy Places",
    description:
      "Web-based platform that allows users to search, book, and manage tours from various providers, providing a convenient and efficient solution for camping, trekking and traveling needs.",
    tags: [
      {
        name: "angular",
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
    image: happyplaces,
    source_code_link: "https://github.com/moodle12/happyPlaces_angular",
  },
  {
    name: "The Gap",
    description:
      "A Student Lifecycle Management System that links students to a unique student ID and  maintaining it throughout the life cycle of students which can be accessed by the concerned authorities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: gap,
    source_code_link: "https://github.com/moodle12/hackathon",
  },
  {
    name: "DPharma",
    description:
      "DPharma is a comprehensive medical website designed to provide users with a range of features to help manage their health and wellbeing with various features such as booking the appointment, etc.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dpharma,
    source_code_link: "https://github.com/moodle12/dpharma_angular",
  },
];

export { services, technologies, experiences, testimonials, projects };
