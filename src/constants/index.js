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
   flashCard,
   resReservation,
   figma,
   docker,
   chai,
   firebase,
   knex,
   paypal,
   cyclic,
   nextAuth,
   gpt3,
   restaurantLanding,
   amazona,
   socketIo,
   ticTacToe,
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
      date: "Nov 2021 - April 2022",
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
      date: "June 2022 - Present",
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
      name: "amazona",
      description:
         "The e-commerce app Amazona showcases the power of Next.js, NextAuth, and MongoDB to deliver a seamless shopping experience. With features like authentication, secure routing, multistep forms, and efficient storage of profile and order information, Amazona enables businesses to streamline their operations and provide a secure platform for customers. Additionally, the integration of PayPal checkout ensures a secure and reliable purchase system, further enhancing the trust and convenience for users. Its use of session storage for cart information, requirement of authentication headers, and comprehensive error handling contribute to its overall efficiency and reliability.",
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
         "Experience the thrill of the Tic Tac Toe game developed with TypeScript and Socket.IO, a testament to advanced frontend development skills. Leveraging TypeScript's strong typing capabilities, this game ensures code reliability and scalability. The integration of Socket.IO enables real-time multiplayer functionality, fostering seamless competition among players. With its user-friendly interface, smooth gameplay mechanics, and responsive design, the game guarantees an immersive experience on various devices. Through meticulous attention to detail, comprehensive error handling, and robust data synchronization, this Tic Tac Toe game delivers a polished and professional gaming experience.",
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
      demo_link: "https://tic-tac-3r7zji7j0-golamhossain9355.vercel.app",
   },
   {
      name: "restaurant landing",
      description:
         "The Restaurant Landing website exhibits advanced CSS skills and frontend development expertise. With its visually stunning and fully responsive design, it leaves a lasting impression on visitors. The integration of components like an image carousel and video enhances the user experience, benefiting businesses seeking an impressive online presence.",
      tags: ["react", "javascript", "HTML", "CSS", "vercel"],
      image: restaurantLanding,
      source_code_link:
         "https://github.com/GolamHossain9355/restaurant_landing.git",
      demo_link: "https://restaurant-landing-azure.vercel.app/",
   },
   {
      name: "GPT3",
      description:
         "I developed the GPT3 app as a showcase of my exceptional CSS skills and proficiency in frontend development. With a focus on creating visually stunning and responsive website pages, the app demonstrates my ability to craft captivating user interfaces with a wide range of components. By seamlessly integrating beautiful designs and seamless interactions, the app highlights my talent for creating engaging and immersive user experiences. Through meticulous attention to detail and a deep understanding of CSS, I have established myself as a frontend developer capable of delivering visually impressive and highly functional websites.",
      tags: ["react", "javascript", "HTML", "CSS", "vercel"],
      image: gpt3,
      source_code_link: "https://github.com/GolamHossain9355/gpt3_hossain.git",
      demo_link: "https://gpt3-hossain.vercel.app/",
   },
   {
      name: "Restaurant Reservation",
      description:
         "I developed a restaurant reservation app that significantly improves efficiency and enhances the overall restaurant experience. With real-time functionality and intuitive features, the app simplifies the reservation process, allowing restaurants to effortlessly manage bookings and seat reservations. By streamlining operations, the app saves valuable time and effort, enabling staff to focus on delivering exceptional service. This results in a smoother and more efficient workflow, ultimately enhancing the restaurant's productivity and customer satisfaction.",
      tags: [
         "react",
         "javascript",
         "HTML",
         "CSS",
         "bootstrap",
         "node.JS",
         "postgreSQL",
         "express",
         "knex",
         "mocha",
         "chai",
         "vercel",
      ],
      image: resReservation,
      source_code_link:
         "https://github.com/GolamHossain9355/restaurant-reservation",
      demo_link:
         "https://restaurant-reservations-front-end-two.vercel.app/dashboard",
   },
   {
      name: "Flashcard",
      description:
         "My flashcard app is designed to significantly enhance the student studying process. With its intuitive user interface and advanced functionality, students can create, customize, and adapt their decks to suit their learning objectives. By utilizing the app's efficient studying features, students can effectively prepare for tests and lessons, resulting in improved academic performance and a deeper understanding of the subject matter.",
      tags: [
         "react",
         "javascript",
         "HTML",
         "CSS",
         "bootstrap",
         "node.JS",
         "postgreSQL",
         "express",
         "knex",
         "mocha",
         "chai",
         "vercel",
      ],
      image: flashCard,
      source_code_link: "https://github.com/GolamHossain9355/Flashcard-App",
      demo_link: "https://flash-card-frontend.vercel.app/",
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
