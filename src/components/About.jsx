import React, { useEffect, useState } from 'react';
import Skills from '../data/skills';
import { motion } from 'framer-motion';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('about-section');
            if (element) {
                const { top } = element.getBoundingClientRect();
                setIsVisible(top < window.innerHeight);
            }
        };

        // Event listener for scroll
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div id="about-section" className="bg-gradient-to-b from-[#011b40] to-[#010e21] px-10 py-8 flex flex-col justify-center items-center md:pb-40">
            <motion.div className="md:max-w-5xl max-w-[100vw] md:mx-auto ml-0 text-center md:flex md:flex-row justify-around p-4 w-full">
                <motion.div
                    className="w-full md:w-2/3 text-center md:text-start"
                 
                >
                    <motion.div className="text-5xl text-[#BDAB6E] font-bold font-name mb-4"    initial={isVisible ? { opacity: 0 } : { opacity: 1 }}
                       animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 30,delay:0.5, duration: 4 }}>About me</motion.div>
                    <motion.div className="text-[#F6FCFC] text-base md:text-xl p-0 md:pr-8 tracking-wide"
                       initial={isVisible ? { opacity: 0 } : { opacity: 1 }}
                       animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                       transition={{ type: 'spring', stiffness: 30,delay:1.2, duration: 4 }}>
                        Hi there! Thanks for visiting my portfolio! I’m a Master in CS student{' '}
                        <span className="font-extrabold text-2xl text-white">@ Brown University</span> & an
                        enthusiastic Computer Vision researcher immersed in the world of Autonomous System Perception and
                        Planning.<br /> My area of interest lies in Few-shot object detection and tracking, Behaviour
                        estimation, and Path Planning. I have solid fundamentals in probability, statistics, and linear
                        algebra.<br /> With a rich background in advanced classification networks and attention models,
                        I'm eagerly seeking opportunities to contribute as a Perception and Motion Planning Engineer
                        intern within the industry. I am always open to collaborative research opportunities.<br /><br />
                        Please feel free to reach out on LinkedIn or at{' '}
                        <span className="font-extrabold text-lg md:text-2xl text-white">
                            ggaonkar.work@gmail.com.
                        </span>
                    </motion.div>
                </motion.div>
                <motion.div className="w-full md:w-1/3 text-white text-center md:text-left ml-2 mt-10 md:mt-0">
                    <div className="md:text-lg text-2xl font-bold md:font-semibold text-amber-100 mb-4 text-start">
                        Here are a few technologies I’ve been working with recently:
                    </div>
                    <div className="text-base md:text-lg">
                        <div className="grid grid-cols-2 gap-3">
                            {Skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="border-l-2 border-b-2 text-center border-[#BDAB6E] text-white rounded-xl align-middle hover:border-r-8 hover:border-b-8 duration-100 hover:-translate-x-2 hover:-translate-y-2"
                                    initial={isVisible ? { opacity: 0 } : { opacity: 1 }}
                                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ type: 'spring', stiffness: 30, duration: 2, delay: index * 0.1 }}
                                >
                                    {skill.name}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;
