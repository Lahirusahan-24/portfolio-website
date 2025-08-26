const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 80, suffix: "%", label: "Client Retention Rate" },
];



const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  
];

const expCards = [
  {
    review: "I help startups and teams ship beautiful, blazing-fast web apps. From wireframe to production, I turn ideas into polished interfaces using React, Next.js, TypeScript, and Tailwind. Clear communication, thoughtful UX, and maintainable code are my priorities—so releases are on time, accessible, and easy to extend.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Proficiency with HTML, CSS, and JavaScript.",
      "Experience with modern frameworks like React.",
      "Understanding of responsive design."
    ],
  },
  {
    review: "I’m a backend developer who designs and builds reliable APIs, services, and data layers. I prioritize clean architecture, performance, and security, collaborate closely with frontend and product teams, and write well-tested, maintainable code that scales from prototype to production.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Knowledge of server frameworks like Node.js, Spring Boot.",
      "Database management: SQL(PostgreSQL, MySQL).",
      "Building RESTful APIs" 
    ],
  },
  {
    review: "I’m a version control enthusiast skilled in Git, GitHub, GitLab, and Bitbucket. I design clear branching strategies, keep histories readable, enforce code review, and automate releases with tags and semantic versioning to keep teams moving confidently.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Version control",
    date: "",
    responsibilities: [
      "Comfort with Git / GitHub(branching, merging, pull requests).",
      "Basic CI/ CD pipelines(GitHub Actions, GitLab CI).",
      "Deploying apps to cloud platforms(AWS)."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
