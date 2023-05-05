/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ index, title, icon }) => {
   return (
      <Tilt className="xs:w-[250px] w-full">
         <motion.div
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
         >
            <div
               className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
               options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
               }}
            >
               <img
                  src={icon}
                  alt={title}
                  className="w-16 h-16 object-contain"
               />
               <h3 className="text-white text-[20px] font-bold text-center">
                  {title}
               </h3>
            </div>
         </motion.div>
      </Tilt>
   )
}

const About = () => {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
         </motion.div>
         <motion.p
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            variant={fadeIn("", "", 0.1, 1)}
         >
            I am a highly skilled and experienced Staff Frontend Engineer with
            expertise in modern frontend technologies, such as React
            (Typescript), and a keen eye for thoughtful design and end-user
            experience. I have a proven track record of designing, building, and
            shipping new products and features for large-scale modern web
            applications, as well as optimizing web vitals to improve
            performance. I am a collaborative and communicative team player who
            thrives in dynamic and challenging environments, and I am passionate
            about modernizing insurance through innovative software solutions.
         </motion.p>

         <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
               <ServiceCard key={service.title} index={index} {...service} />
            ))}
         </div>
      </>
   )
}

const WrappedAbout = () => SectionWrapper(About, "about")()

export default WrappedAbout
