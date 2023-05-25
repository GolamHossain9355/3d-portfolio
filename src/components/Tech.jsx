import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

const Tech = () => {
   return (
      <div className="flex flex-row flex-wrap justify-center gap-10">
         {technologies.map((tech, index) => (
            <motion.div key={tech.name}
               variants={fadeIn("right", "spring", 0.05 * index, 0.55)}
            >
               <div className="w-32 h-32 flex justify-center items-center max-w-sm bg-tertiary
               rounded-xl shadow-md shadow-primary border-y-4 border-x-2 border-purple-950 
               hover:scale-125 transition-all">
                  <img className="max-w-[85%]" src={tech.icon} alt={`tech-${tech.name}`} />
               </div>
            </motion.div>
         ))}
      </div>
   )
}

const WrapperTech = () => SectionWrapper(Tech, "skills")()

export default WrapperTech
