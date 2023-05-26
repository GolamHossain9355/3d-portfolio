import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

const Tech = () => {
   return (
      <div className="container flex flex-row flex-wrap justify-center gap-10">
         {technologies.map((tech, index) => (
            <motion.div key={tech.name}
               variants={fadeIn("right", "spring", 0.05 * index, 0.55)}
            >
               <div className="w-32 h-32 flex justify-center items-center relative bg-tertiary
               rounded-xl shadow-md shadow-primary border-y-4 border-x-2 border-purple-950 
               hover:scale-125 transition-all">
                  <img className="max-w-[85%] max-h-[85%]" src={tech.icon} alt={`tech-${tech.name}`} />
                  <div className="absolute flex justify-center items-center opacity-0 bg-tertiary z-20 w-32 h-32 hover:opacity-80 
                  rounded-xl shadow-md shadow-primary border-y-4 border-x-2 border-purple-950 
                  transition-opacity" ><span className="text-slate-50 opacity-100 text-center font-bold capitalize cursor-default">{tech.name}</span></div>
               </div>
            </motion.div>
         ))}
      </div>
   )
}

const WrapperTech = () => SectionWrapper(Tech, "skills")()

export default WrapperTech
