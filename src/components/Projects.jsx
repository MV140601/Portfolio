import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('project-section');
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
    const projects = [
        {
            title: "LOCNET: Does Depth Density Estimation Helps Learn Shape Bias in CNNs?",
            category: "Computer Vision, Autoencoder",
            date: "May 2024",
            details: [
                "This study aims to bridge the shape bias gap between computer vision models and humans by introducing a new training objective.",
                "Jointly trained Resnet50 for object classification and depth estimation. The hypothesis posits that joint training depth estimation will enhance the model’s ability to learn shape information."
            ],
            githubLink: "https://github.com/gaga1313/LOCNet"
        },
        {
            title: "Semi Autonomous Quadcopter Drone Video Processing, Motion Control, Object Detection",
            category: "",
            date: "December 2023",
            details: [
                "Built a semi-autonomous quadcopter drone maintaining a steady altitude in the real environment using a PID controller.",
                "Implemented Kalman filter for state estimation and FastSLAM for simultaneous Localization and Mapping."
            ],
            githubLink: ""
        },
        {
            title: "In-Context Learning of Decision-Pretrained Transformer In Non-Stationary Bandits",
            category: "Reinforcement Learning",
            date: "May 2024",
            details: [
                "Trained a decision-pretrained transformer for optimal action prediction in multi-arm nonstationary bandits environment.",
                "Fitted the online and offline data of the DPT into the Rescorla-Wagner model to evaluate the exploit-exploration behavior of the DPT in both circumstances."
            ],
            githubLink: "https://github.com/boranw-api/decision-pretrained-transformer"
        },
        {
            title: "Content based Scientific Paper Recommendation | Graph Neural Network, Content Filtering",
            category: "",
            date: "January 2023",
            details: [
                "Created a novel Concept-Citation Directed Graph utilizing Sci-Bert LLM (huggingface) embeddings of 30k research papers.",
                "Designed, trained, and optimized a supervised training pipeline for Graph Neural network achieving a test accuracy of 86%."
            ],
            githubLink: "https://github.com/gaga1313/Scientific-Paper-Recommendation"
        },
        {
            title: "Web App for Scientific Resources Lending | Smart India Hackathon Finalist | Full Stack Developer",
            category: "",
            date: "Sept 2022",
            details: [
                "Led a team of six to develop a resource-sharing platform for buying and renting scientific lab resources or instruments across technical institutions and organizations.",
                "Worked on System design and backend development of the application using Django, and SQLite database. Communicated with the frontend team for integrating backend modules with React and JavaScript."
            ],
            githubLink: "https://github.com/gaga1313/Re-Source"
        },
        {
            title: "Traffic Flow Analysis using Machine Learning | Data Visualization, Data Science, Python Scripting",
            category: "",
            date: "Oct 2021",
            details: [
                "Created an end-to-end data-driven traffic prediction application, mitigating traffic congestion within a designated area.",
                "Feature engineered critical structural features of roads. Identified causal relationships between structural features and traffic congestion, resulting in performance improvement by up to 14%."
            ],
            githubLink: "https://github.com/gaga1313/Traffic-Flow-Prediction"
        },
        {
            title: "Patient Centric Database System with Medical Report Analysis | Text Extraction, Regex, Django",
            category: "",
            date: "April 2021",
            details: [
                "Created an OCR-based document analysis algorithm for tabular information extraction from medical reports.",
                "Deployed OCR engine on the web application for a patient-centric database system using Python (Django). Worked on System Design, Backend Development, and SQL queries for low-latency information retrieval."
            ],
            githubLink: "https://github.com/gaga1313/Connect"
        },
        {
            title: "Bone Abnormality Detection using Radiographs | Computer Vision, Medical Imaging",
            category: "",
            date: "May 2020",
            details: [
                "Created an end-to-end system for detecting broken bones and minute fractures in radiographs using deep learning Tensorflow.",
                "Using a machine learning stack ensemble approach, achieved a 74% test accuracy, surpassing the previous models by 6%."
            ],
            githubLink: "https://github.com/gaga1313/Abnormality-Detection-in-Musculoskeletal-Radiographs"
        }
    ];

    return (
        <motion.div className="bg-gradient-to-b from-[#011b40] to-[#010e21] px-10 py-8" id='project-section'>
            <motion.div className="max-w-5xl mx-auto my-10 text-start"
            initial={isVisible ? { opacity: 0 } : { opacity: 1 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ type: 'spring', delay:0.3,stiffness:30,duration:6} }>
            <motion.div className="text-[#BDAB6E] font-bold font-name text-5xl text-start py-4 my-10">Projects</motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div key={index} className="bg-[#0c152f] border-l-2 border-b-2 border-sky-100 text-amber-50 rounded-lg hover:border-r-8 hover:border-b-8 duration-100  hover:-translate-x-2 hover:-translate-y-2 overflow-hidden shadow-lg"
                        initial={isVisible ? { x:0 } : { x:-(index*2000) }}
                        animate={isVisible ? { x:0 } : {x:-(index*2000)  }}
                        transition={{ type: 'spring', delay: index*0.3,stiffness:60,duration:6} }
                        >
                            <motion.div className="p-4">
                                <h3 className="text-lg font-semibold text-amber-100">{project.title}</h3>
                               
                                <p className="text-sm text-sky-100 text-end">{project.date}</p>
                                <hr className="my-3" />
                                <ul className="list-disc list-inside text-sm text-sky-100 target-wider">
                                    {project.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block mx-0 ">Github Link</a>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Projects;
