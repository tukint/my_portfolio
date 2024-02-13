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
  docker,
  allcloudlogo,
  bbd,
  carrent,
  jobit,
  tripguide,
  threejs,
  migdal,
  ideo
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Salesforce Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "FullStack Salesforce Developer",
    company_name: "AllCloud",
    icon: allcloudlogo,
    iconBg: "#ffffff ",
    date: "Jul 2021 - Jan 2024",
    points: [
      "Crafting responsive, interactive frontend components with JavaScript, CSS, and React.",
      "Working on backend development with Java (Apex), enhancing server-side operations and database interactions for scalable web applications.",
      "Proficient in API integrations, ensuring seamless frontend-backend data flow.",
      "Working together with engineers, designers, and project managers to satisfy clients and complete projects.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Bay Bridge Digital",
    icon: bbd,
    iconBg: "#ffffff",
    date: "Feb 2021 - Jul 2021",
    points: [
      "Developing and maintaining e-commerce websites using JavaScript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "R&D Project Manager",
    company_name: "Bay Bridge Digital",
    icon: bbd,
    iconBg: "#ffffff",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Leading the development of e-Commerce websites on the SF Commerce Cloud platform.",
      "Conducting analysis, design, testing, and implementation of Salesforce systems across functional areas.",
      "Leading systems analysis and business requirements gathering to develop detailed functional requirements",
      "Writing clear, and complete functional specifications & requirements documents",
      "Management of development teams in Israel, Ukraine, Bulgaria, Romania, and France."
    ],
  },
  {
    title: "R&D Project Manager",
    company_name: "MIGDAL INSURANCE",
    icon: migdal,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - Dec 2020",
    points: [
      "Lead and supervise the new website development project.",
      "Handles the role of defining various requirements, systems analysis, writing specifications, and documenting requirements.",
      "Integrate with all of the relevant interfaces: product managers, project managers, internal customers, R&D, QA teams and with external development vendors.",
    ],
  },
  {
    title: "R&D Project Manager",
    company_name: "IDEO DIGITAL - UTEAM",
    icon: ideo,
    iconBg: "#ffffff",
    date: "Feb 2015 - Aug 2018",
    points: [
      "Leading the development of new websites.",
      "Analyze customer requirements, systems analysis and design the implementation technical plan and schedule.",
      "Lead the process to develop and prioritize monthly and quarterly plans with the team lead",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto Wallet",
    description:
      "The React-based project offers a visually dynamic dashboard, providing comprehensive insights into the user's crypto wallet activities and statistics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "ant design",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://crypto-app-steel-theta.vercel.app/",
  },
  {
    name: "Marvel Portal",
    description:
      "The portal immerses users into the captivating universe of Marvels, offering a comprehensive database of characters and comics.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://marvel-app-blond.vercel.app/",
  },
  {
    name: "Credit application",
    description:
      "The projects integrate seamlessly with Salesforce on AMPA Capital's website, simplifying loan request processing with a user-friendly interface.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "salesforce",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ampacapital.my.site.com/BusinessRequests/s/newbusinessrequest",
  },
];

export { services, technologies, experiences, testimonials, projects };
