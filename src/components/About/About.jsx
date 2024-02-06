import React from 'react'
import './about.scss'
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
    const sliderVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                // ease: "easeInOut",
                // repeat: Infinity,
                // repeatType: "mirror",
                delay: .4,
                staggerChilder: 0.04,
                duration: 1,
            },
        },
    };

    return (
        <>
            <div className='container'>
                <div className='about'>
                    <div className="aboutText">
                        <h1>About Me</h1>
                        <motion.p variants={sliderVariants}
                            initial="initial" whileInView={"animate"}>
                           I am Himanshu Kapoor, a passionate Computer Science student currently pursuing my B.Tech degree at Vellore Institute of Technology, Bhopal. I have a strong affinity for problem-solving, with a particular focus on coding challenges, and I'm an avid chess player. My academic pursuits and personal interests have also drawn me towards the exciting field of Augmented Reality/Virtual Reality (AR/VR) and Web Technologies.
                        </motion.p>
                    </div>
                </div>
                <div className='skills'>
                    <h1>Skills</h1>
                    <motion.div
                        variants={sliderVariants}
                        initial="initial"
                        whileInView={"animate"}
                        // animate="animate"
                        className='skill-item'>
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3"></i>
                        <i className="fa-brands fa-js"></i>
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-sass"></i>
                        {/* <i class="fa-brands fa-node"></i> */}
                        {/* <img src="/mysql.svg" alt="" /> */}
                        <img src="/MongoDB.svg" alt="" />
                        {/* <img src="/tailwind-logo.svg" alt="" /> */}
                        {/* <img src="/expressjs.svg" alt="" /> */}
                        <img src="/cpp.svg" alt="" />
                        {/* <i class="fa-brands fa-java"></i> */}
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About