/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
   index,
   name,
   description,
   tags,
   image,
   source_code_link,
   demo_link,
}) => {
   const colors = ['blue-text-gradient', 'green-text-gradient', 'pink-text-gradient', 'orange-text-gradient'];
   const pattern = Array.from(
      { length: tags.length },
      (_, index) => colors[index % colors.length]
   );

   return (
      <motion.div
         className="bg-tertiary p-5 rounded-2xl sm:max-w-[360px] w-full flex-grow"
         variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
         <div className="relative w-full h-[230px]">
            <div
               className="w-full h-full cursor-pointer"
               onClick={() => window.open(demo_link, "_blank")}
            >
               <img
                  className="w-full h-full object-cover rounded-2xl z-50"
                  src={image}
                  alt={name}
               />
            </div>

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
               <div
                  className="black-gradient w-10 h-10 rounded-full flex 
                     justify-center items-center cursor-pointer"
                  onClick={() => window.open(source_code_link, "_blank")}
               >
                  <img
                     className="w-1/2 h-1/2 object-contain"
                     src={github}
                     alt="github"
                  />
               </div>
            </div>
         </div>

         <div className="mt-5 flex flex-col">
            <h3 className="text-white font-bold text-[24px] text-center capitalize">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
         </div>

         <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
               <p className={`text-[14px] capitalize ${pattern[index % pattern.length]}`} key={tag}>
                  #{tag}
               </p>
            ))}
            <div
               onClick={() => window.open(demo_link, "_blank")}
               className="bg-tertiary py-3 px-8 outline-none cursor-pointer w-full mt-2 
                   text-purple-300 font-gold shadow-md shadow-primary rounded-xl text-center border-x-2
                    border-y-2 border-y-tertiary border-purple-950 hover:border-y-purple-950"
            >
               Live Demo
            </div>
         </div>

      </motion.div>

   )
}

const Works = () => {
   return (
      <>
         <motion.div variants={() => textVariant()}>
            <p className={styles.sectionSubText}>My Work</p>
            <h2 className={styles.sectionHeadText}>Projects.</h2>
         </motion.div>

         <div className="w-full flex ">
            <motion.p
               className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
               variants={fadeIn("", "", 0.1, 1)}
            >
               Here are some of my projects. I am always learning new things and
               trying to improve my skills. I am also open to new opportunities
               and challenges.
            </motion.p>
         </div>

         <div className="mt-20 flex flex-wrap gap-7 justify-center items-stretch lg:justify-start">
            {projects.map((project, index) => (
               <ProjectCard
                  key={`project-${index}`}
                  {...project}
                  index={index}
               />
            ))}
         </div>
      </>
   )
}

const WrappedWorks = () => SectionWrapper(Works, "projects")()

export default WrappedWorks
