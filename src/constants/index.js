import {
   nextJS,
   heroku,
   mocha,
   express,
   postman,
   reactJS,
   restApi,
   threeJS,
   vercel,
   mobile,
   backend,
   creator,
   web,
   javascript,
   typescript,
   bootstrap,
   nodeScheduler,
   postgresql,
   tanStackQuery,
   html,
   css,
   redux,
   tailwind,
   nodejs,
   mongodb,
   git,
   thinkful,
   anthropy,
   figma,
   docker,
   chai,
   firebase,
   knex,
   paypal,
   cyclic,
   nextAuth,
   restaurantLanding,
   amazona,
   socketIo,
   ticTacToe,
   gogolDocs,
   gogolDrive,
} from "../assets"

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
      id: "skills",
      title: "Skills",
   },
   {
      id: "projects",
      title: "Projects",
   },
   {
      id: "testimonials",
      title: "Testimonials",
   },
   {
      id: "contact",
      title: "Contact",
   },
]

const services = [
   {
      title: "Web Developer",
      icon: web,
   },
   {
      title: "Backend Developer",
      icon: backend,
   },
   {
      title: "Frontend Developer",
      icon: creator,
   },
   {
      title: "Full Stack Developer",
      icon: mobile,
   },
]

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
      icon: reactJS,
   },
   {
      name: "nextJS",
      icon: nextJS,
   },
   {
      name: "nextAuth.JS",
      icon: nextAuth,
   },
   {
      name: "TanStack Query",
      icon: tanStackQuery,
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
      name: "Bootstrap",
      icon: bootstrap,
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
      name: "PostgreSQL",
      icon: postgresql,
   },
   {
      name: "Git",
      icon: git,
   },
   {
      name: "figma",
      icon: figma,
   },
   {
      name: "Docker",
      icon: docker,
   },
   {
      name: "Chai",
      icon: chai,
   },
   {
      name: "Socket.Io",
      icon: socketIo,
   },
   {
      name: "Firebase",
      icon: firebase,
   },
   {
      name: "Knex",
      icon: knex,
   },
   {
      name: "Paypal",
      icon: paypal,
   },
   {
      name: "cyclic",
      icon: cyclic,
   },
   {
      name: "express",
      icon: express,
   },
   {
      name: "heroku",
      icon: heroku,
   },
   {
      name: "vercel",
      icon: vercel,
   },
   {
      name: "mocha",
      icon: mocha,
   },
   {
      name: "postman",
      icon: postman,
   },
   {
      name: "rest api",
      icon: restApi,
   },
   {
      name: "threeJS",
      icon: threeJS,
   },
   {
      name: "node scheduler",
      icon: nodeScheduler,
   },
]

const experiences = [
   {
      title: "Software Engineering Training (Bootcamp)",
      company_name: "Thinkful",
      icon: thinkful,
      iconBg: "black",
      date: "Feb 2020 - June 2020",
      points: [
         "Developing and maintaining web applications using React.js and other related technologies.",
         "Learned industry best practices and software development standards focusing on HTML5, CSS3, JavaScript, jQuery, Node.js, and React.",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "Participating in code reviews and providing constructive feedback to other developers.",
         "Created and deployed mobile-first applications while learning new languages and frameworks,",
         "Spent several hours every week with a senior developer to work on developing a solid foundation to succeed in this industry.",
      ],
   },
   {
      title: "Full Stack Developer",
      company_name: "Anthropy",
      icon: anthropy,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Present",
      points: [
         "Rewrote HTML to meet industry standards for SEO and Accessibility.",
         "Tested, debugged, and shipped 10s of 1000s of lines of code to the development team.",
         "Developed and maintained client-side web applications using JavaScript and React.",
         "Worked closely with back-end developers to ensure seamless integration of front-end and back-end components.",
         "Created accessible, responsive, and functional user interfaces to allow visitors on any device to have the same perfect user experience.",
         "Created the user experience that fetched parsed and formatted analytic data and relayed it into React components.",
         "Designed an integrated database using MongoDB that leveraged the React architecture to yield on-demand, detailed feedback.",
         "Defined, designed, and shipped 20+ features for this application.",
         "Conducted code reviews, debugging, and troubleshooting to ensure optimal performance and user experience.",
         "Helped evolve frontend and backend stack.",
         "Worked closely with the UI/UX team to create visually appealing interfaces.",
         "Utilized Git for version control and Agile methodologies for project management.",
         "Collaborated with cross-functional teams to identify and solve complex software problems.",
         "Worked with development teams and product managers to ideate software solutions.",
         "Designed and develop databases, web servers, and APIs.",
      ],
   },
]

const projects = [
   {
      name: "gogol docs",
      description:
         "Dive into collaborative document editing with the Google Docs Clone, merging React, Firebase, and Socket.io to deliver real-time teamwork. Witness seamless text editing, simultaneous contributions, and secure data persistence for an engaging and productive experience.",
      tags: [
         "react.js",
         "typescript",
         "tailwind",
         "nodeJS",
         "firebase-auth",
         "firebase-firestore",
         "vercel",
         "socket.io",
         "react-quill",
      ],
      image: gogolDocs,
      source_code_link: "https://github.com/GolamHossain9355/gogol-docs.git",
      demo_link: "https://gogol-docs.vercel.app",
   },
   {
      name: "gogol drive",
      description:
         "Experience a dynamic file management system with the Google Drive Clone project, showcasing seamless integration of React and Firebase technologies. Explore a versatile interface for organized folder structures, nested arrangements, and efficient file sharing capabilities.",
      tags: [
         "react.js",
         "typescript",
         "bootstrap",
         "nodeJS",
         "firebase-auth",
         "firebase-firestore",
         "firebase-storage",
         "vercel",
      ],
      image: gogolDrive,
      source_code_link: "https://github.com/GolamHossain9355/gogol-drive.git",
      demo_link: "https://gogol-drive.vercel.app",
   },
   {
      name: "amazona",
      description:
         "Embark on a shopping journey with Amazona, a dynamic e-commerce platform powered by React and Node.js. Explore a vast selection of products, intuitive shopping carts, and secure checkout processes. Elevate your online shopping experience with Amazona's responsive design and user-friendly features.",
      tags: [
         "nextJS",
         "nextAuth.JS",
         "javascript",
         "HTML",
         "tailwind",
         "nodeJS",
         "mongoDB",
         "paypal",
         "vercel",
      ],
      image: amazona,
      source_code_link: "https://github.com/GolamHossain9355/amazona.git",
      demo_link: "https://amazona-amber.vercel.app/",
   },
   {
      name: "Tic Tac Toe",
      description:
         "An engaging multiplayer Tic-Tac-Toe experience with dynamic animations, competitive gameplay, and a user-friendly interface, enhancing the classic game with a touch of excitement.",
      tags: [
         "react",
         "typescript",
         "socket.io",
         "HTML",
         "styled-components",
         "node.JS",
         "express",
         "vercel",
      ],
      image: ticTacToe,
      source_code_link: "https://github.com/GolamHossain9355/tic_tac_toe.git",
      demo_link: "https://tic-tac-toe-three-kohl.vercel.app",
   },
   {
      name: "restaurant landing",
      description:
         "'Restaurant Landing' exemplifies expertly crafted CSS styling, delivering a visually captivating restaurant landing page. Through meticulous design, engaging animations, and thoughtfully organized sections, the project showcases a high level of proficiency in CSS techniques, elevating the art of web aesthetics.",
      tags: ["react", "javascript", "HTML", "CSS", "vercel"],
      image: restaurantLanding,
      source_code_link:
         "https://github.com/GolamHossain9355/restaurant_landing.git",
      demo_link: "https://restaurant-landing-azure.vercel.app/",
   },
]

const testimonials = [
   {
      testimonial:
         "Golam's(Rabby's) code is simply amazing. He has a knack for creating stunning landing pages and designing user interfaces that feel intuitive. His attention to detail and commitment to excellence shine through in every project. If you're looking for a genuine and skilled developer, Golam is the one you want. He's the real deal!",
      name: "Shawn Yang",
      designation: "CEO",
      company: "Anthropy",
      image: "https://ca.slack-edge.com/T01D6803K7T-U01M3CWU2S1-0feffafc0302-512",
   },
   {
      testimonial:
         "Golam's out-of-the-box thinking and attention to detail are next level. Always one step ahead, anticipating issues and creating killer roadmaps. When it comes to frontend development, Golam's skills are off the charts. Seriously, he's the kind of person you want on your team",
      name: "Aaron Rabara",
      designation: "Backend Developer",
      company: "Anthropy",
      image: "https://ca.slack-edge.com/T01D6803K7T-U039DQPHY2K-4e55db3ae9ed-512",
   },
]

export { services, technologies, experiences, testimonials, projects }
