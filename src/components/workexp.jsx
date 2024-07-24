import React from 'react'
import { GoDotFill } from "react-icons/go";
import {motion} from "framer-motion"
import { useState,useEffect } from 'react';
const Workexp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('work-section');
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

    const [activeTab, setActiveTab] = useState(0); // State to manage active tab

    const tabs = [
        { id: 0,
            title: 'Aarki Inc.',
            content: (
                <motion.div className="flex flex-col gap-4">
                    <motion.div className="flex flex-col justify-between " >
                    <motion.p className="text-xl font-semibold text-amber-100"> Aarki Inc. San Francisco, CA, USA | Machine Learning Engineer Intern </motion.p>

                    <motion.p className="text-amber-50"> May. 2024 – Present</motion.p>
                    </motion.div>
                    
                    <ul className="text-start flex flex-col gap-2 text-blue-100 ">
                        <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Working on Generative AI pipeline, training diffusion model for generating new creatives/advertisements optimized for high retention/click-through rates for mobile applications.</li>
                        <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Investigating transformers-based Click-through rate prediction models, optimizing bid prizes for maximizing the return on ad investments (ROAS) with a minimum budget.</li>
                    </ul>
                </motion.div>
            ),
         },
         { id: 1,
            title: 'Serre Lab',
            content: (
                <motion.div className="flex flex-col gap-4">
                    <motion.div className="flex flex-col justify-between " >
                    <motion.p className="text-xl font-semibold text-amber-100"> Serre Lab, Brown University, USA | Graduate Research Assistant</motion.p>

                    <motion.p className="text-amber-50">Sept. 2023 – Present</motion.p>
                    </motion.div>
                    
                    <ul className="text-start flex flex-col gap-2 text-blue-100 ">
                    <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Evaluated computer vision models for 3D properties, such as depth and surface norms. The study includes prominent models such as
                        Dinov2, CLIP, Vision Transformer, GANs, and Stable Diffusion models.</li>
                        <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Investigated texture and shape level bias of 20+ single and multi-modal computer vision networks. Analyzed their performance on
                        out-of-distribution datasets generated using 17 parametric noise filters and cue-conflict filters.</li>
                    </ul>
                </motion.div>
            ),
         },
         { id: 2,
            title: 'RagaAI.',
            content: (
                <motion.div className="flex flex-col gap-4">
                    <motion.div className="flex flex-col justify-between " >
                    <motion.p className="text-xl font-semibold text-amber-100"> RagaAI, Bengaluru, India | Computer Vision Engineer Intern   </motion.p>

                    <motion.p className="text-amber-50"> Jan. 2022 – April 2022</motion.p>
                    </motion.div>
                    
                    <ul className="text-start flex flex-col gap-2 text-blue-100 ">
                    <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Developed a generative approach for image and video drift detection, revealing aberrant changes in the predictions of large-scale vision
                        models with an accuracy of 85%.</li>
                        <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Presented a new prototype software for Root Cause Analysis of object detection and instance segmentation models to the Stakeholders.</li>
                    </ul>
                </motion.div>
            ),
         },
         { id: 3,
            title: 'Ola Electric Mobility.',
            content: (
                <motion.div className="flex flex-col gap-4">
                    <motion.div className="flex flex-col justify-between " >
                    <motion.p className="text-xl font-semibold text-amber-100"> Ola Electric Mobility, Bengaluru, India | Research Engineer Intern   </motion.p>

                    <motion.p className="text-amber-50"> Jul. 2021 – Dec. 2021</motion.p>
                    </motion.div>
                    
                    <ul className="text-start flex flex-col gap-2 text-blue-100 pl-2">
                    <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Formulated the use case for Vehicle Tire Damage Detection and worked on data curation, model training, and calibration.</li>
                    <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Designed a classical computer vision approach to work with limited training samples, achieving a test accuracy of 82%.</li>
                    <li className="flex flex-row gap-2"><span className="text-2xl" ><GoDotFill/></span>Deployed fine-tuned model on large-scale production application in OLA vehicle maintenance motion.division, saving expense by 60%.</li>

                    </ul>
                </motion.div>
            ),
         },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <motion.div id="work-section" className="bg-gradient-to-b from-[#010e21] to-[#011b40] w-[100vw] px-10 py-8 flex flex-row justify-center items-center md:pb-32 "
    
        >
            <motion.div className="md:max-w-5xl sm:max-w-full  mx-auto text-center md:flex md:flex-col justify-around p-4 w-full " 
                initial={isVisible ? { opacity: 0 } : { opacity: 1 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ type: 'spring', delay:0.3,stiffness:30,duration:6} }>
                <motion.div className="text-[#BDAB6E]  text-5xl text-start py-4  font-name font-bold my-10" 
              
                >Work Experience</motion.div>
                <motion.div className="flex flex-col sm:gap-2 md:gap-0 justify-around md:flex-row">

                    <motion.div className="flex flex-row md:w-[15%] sm:w-full md:flex-col  ">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`w-full md:w-full px-4 py-2 my-2  ${activeTab === tab.id
                                        ? 'text-amber-100  border-amber-50 bg-[#1a1c38] md:border-b-0 md:border-l-2 border-b-2'
                                        : 'text-gray-500'
                                    }`}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </motion.div>
                    <motion.div className="md:p-4 p-0 text-white md:w-[85%] w-[100%] bg-[#1a1c38]">
                    {tabs.map((tab) =>
                        activeTab === tab.id ? (
                            <motion.div key={tab.id} >
                                {tab.content}
                            </motion.div>
                        ) : null
                    )}
                </motion.div>
                </motion.div>

                
            </motion.div>
        </motion.div>
    );

}

export default Workexp
