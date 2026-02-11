import  {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  payloadmaster,
  mhft,
  sketcher,
  CompileVortex,
    petShop,
    admin,

    food,
    weather,
    social,
    expence,
    cart,
    book
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

export const services = [
    { title: "Java", icon: java },
    { title: "Rect JS", icon: reactjs },
    { title: "Node JS", icon: nodejs },
    { title: "JavaScript", icon: javascript },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  // { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Evolt (Australia)",
    icon: "/gayal-portfolio/evolt2.png",
    iconBg: "#161329",
    date: "April 2025 - Present",
    points: [
"Worked on AWS Cloud infrastructure, deploying and managing cloud-based applications.",
            "Developed and optimized solutions using modern software engineering practices",

            "Gained experience in Machine Learning, analyzing data and building models.",

            "Improved system performance and contributed to delivering reliable, scalable application"
    ],
  },
    {
        title: "Software Engineer",
        company_name: "ShinyMount Software Sri lanka",
        icon: "/gayal-portfolio/shiny.png",
        iconBg: "#161329",
        date: " Present",
        points: [
            "Deputed on Evolt",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Avonet Technologies (Australia)",
        icon: "/gayal-portfolio/avonet.webp",
        iconBg: "#161329",
        date: "Sep 2024 - Mar 2025 · 7 mos",
        points: [
            "Maintained and enhanced a scalable railway ticket booking system, ensuring a seamless ticket purchasing and reservation experience." ,
            "Worked within an Agile development environment to continuously improve system performance and reliability. " ,
            "Additionally, led the integration of a new API for a U.S. client, streamlining distribution processes and expanding service capabilities."
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Wso2 (Sri Lanka)",
        icon: "/gayal-portfolio/wso2new.png",
        iconBg: "#161329",
        date: "Jan 2024 - Aug 2024 · 8 mos",
        points: [
           " Learned IAM concepts such as SSO, MFA, Federation, Access Control, and standards related to IAM, including OAuth2, OIDC, and SAML.",
           "Assisted with developer support operations for the WSO2 Identity Server product.",
           "Analyzed and resolved concerns related to WSO2 Identity Server, ensuring timely and accurate solutions.",
           "" +
           "Developed a custom extension for WSO2.",
           "Wrote a Medium blog on integrating New Relic with WSO2 IS."
        ],
    },
];

export const projects = [
  {
    name: "Pet Care App",
    description:
      "Final-year group project: Developed a fully functional pet buying, selling, and boarding platform.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
        { name: "nodeJS", color: "green-text-gradient" },
        { name: "MYSQL", color: "green-text-gradient" },


        { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
    ],
    image: petShop,
    source_code_link: "https://github.com/gayya20",
  },
  {
    name: "Admin Panel",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: admin,
    source_code_link: "https://github.com/gayya20",
  },
  {
    name: "Book Management System",
    description:
      "User Friendly Book Management System using Spring Boot, Hibernate, MySQL, ReactJS.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: book,
    source_code_link:
      "https://github.com/gayya20",
  },
  {
    name: "Online Gas Ordering System",
    description:
      "3rd Year Project: Developed a fully functional gas ordering system using PHP, MySQL, HTML, CSS.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
        { name: "HTML", color: "blue-text-gradient" },
        { name: "CSS", color: "blue-text-gradient" },
        { name: "MYSQL", color: "blue-text-gradient" },


    ],
    image: social,
    source_code_link: "https://github.com/gayya20",
  },
  {
    name: "Add to Cart Frontend",
    description:
      "User-friendly add-to-cart frontend",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: cart,
    source_code_link: "https://github.com/gayya20",
  },
  {
    name: "Expense Tracking App",
    description:
      "Expense Tracking and Management App",
    tags: [
      { name: "nextJS", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "MYSQL", color: "pink-text-gradient" },
    ],

    image: expence,
    source_code_link: "https://github.com/gayya20",
  },
];
