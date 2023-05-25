import {
   mobile,
   backend,
   creator,
   web,
   javascript,
   typescript,
   bootstrap,
   // chai,
   // cyclic,
   // express,
   // firebase,
   // heroku,
   // knex,
   // mocha,
   // nodeScheduler,
   // paypal,
   // postman,
   // vercel,
   // restApi,
   // figma,
   // docker,
   postgresql,
   tanStackQuery,
   html,
   css,
   reactjs,
   redux,
   tailwind,
   nodejs,
   mongodb,
   git,
   thinkful,
   anthropy,
   flashCard,
   resReservation,
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
      icon: reactjs,
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
      name: "git",
      icon: git,
   },
   // {
   //    name: "figma",
   //    icon: figma,
   // },
   // {
   //    name: "docker",
   //    icon: docker,
   // },

   // {
   //    name: "Chai",
   //    icon: chai,
   // },
   // {
   //    name: "Firebase",
   //    icon: firebase,
   // },
   // {
   //    name: "Knex",
   //    icon: knex,
   // },
   // {
   //    name: "Paypal",
   //    icon: paypal,
   // },
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
      name: "Restaurant Reservation",
      description:
         "The purpose of this app is to streamline the process of managing reservations and help restaurants increase their revenue. This is a RESTful, client-server based, desktop application that updates all information in real time.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "postgreSQL",
            color: "green-text-gradient",
         },
         {
            name: "bootstrap",
            color: "pink-text-gradient",
         },
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
         "This app allows users to create decks of flashcards for various topics. The aim of this app is to encourage users to study by creating their own flashcards and quizzes.",
      tags: [
         {
            name: "react",
            color: "blue-text-gradient",
         },
         {
            name: "postgreSQL",
            color: "green-text-gradient",
         },
         {
            name: "bootstrap",
            color: "pink-text-gradient",
         },
      ],
      image: flashCard,
      source_code_link: "https://github.com/GolamHossain9355/Flashcard-App",
      demo_link: "https://flash-card-frontend.vercel.app/",
   },
]

const testimonials = [
   {
      testimonial:
         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
   },
]

export { services, technologies, experiences, testimonials, projects }
