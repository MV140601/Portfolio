import React from 'react'

const Research = () => {
    const research = [
        {
            title: "The 3D-PC: a benchmark for visual perspective taking in humans and machines.",
            category: "Computer Vision, Autoencoder",
            date: "May 2024",
            details: [
                "This study aims to bridge the shape bias gap between computer vision models and humans by introducing a new training objective.",
                "Jointly trained Resnet50 for object classification and depth estimation. The hypothesis posits that joint training depth estimation will enhance the model’s ability to learn shape information."
            ],
            Link: "https://github.com/gaga1313/LOCNet"
        },
        {
            title: "Semi Autonomous Quadcopter Drone Video Processing, Motion Control, Object Detection",
            category: "",
            date: "December 2023",
            details: [
                "Built a semi-autonomous quadcopter drone maintaining a steady altitude in the real environment using a PID controller.",
                "Implemented Kalman filter for state estimation and FastSLAM for simultaneous Localization and Mapping."
            ],
            Link: ""
        },
        {
            title: "In-Context Learning of Decision-Pretrained Transformer In Non-Stationary Bandits",
            category: "Reinforcement Learning",
            date: "May 2024",
            details: [
                "Trained a decision-pretrained transformer for optimal action prediction in multi-arm nonstationary bandits environment.",
                "Fitted the online and offline data of the DPT into the Rescorla-Wagner model to evaluate the exploit-exploration behavior of the DPT in both circumstances."
            ],
            Link: "https://github.com/boranw-api/decision-pretrained-transformer"
        },
        {
            title: "Content based Scientific Paper Recommendation | Graph Neural Network, Content Filtering",
            category: "",
            date: "January 2023",
            details: [
                "Created a novel Concept-Citation Directed Graph utilizing Sci-Bert LLM (huggingface) embeddings of 30k research papers.",
                "Designed, trained, and optimized a supervised training pipeline for Graph Neural network achieving a test accuracy of 86%."
            ],
            Link: "https://github.com/gaga1313/Scientific-Paper-Recommendation"
        },
        {
            title: "Web App for Scientific Resources Lending | Smart India Hackathon Finalist | Full Stack Developer",
            category: "",
            date: "Sept 2022",
            details: [
                "Led a team of six to develop a resource-sharing platform for buying and renting scientific lab resources or instruments across technical institutions and organizations.",
                "Worked on System design and backend development of the application using Django, and SQLite database. Communicated with the frontend team for integrating backend modules with React and JavaScript."
            ],
            Link: "https://github.com/gaga1313/Re-Source"
        },
        {
            title: "Traffic Flow Analysis using Machine Learning | Data Visualization, Data Science, Python Scripting",
            category: "",
            date: "Oct 2021",
            details: [
                "Created an end-to-end data-driven traffic prediction application, mitigating traffic congestion within a designated area.",
                "Feature engineered critical structural features of roads. Identified causal relationships between structural features and traffic congestion, resulting in performance improvement by up to 14%."
            ],
            Link: "https://github.com/gaga1313/Traffic-Flow-Prediction"
        },
        {
            title: "Patient Centric Database System with Medical Report Analysis | Text Extraction, Regex, Django",
            category: "",
            date: "April 2021",
            details: [
                "Created an OCR-based document analysis algorithm for tabular information extraction from medical reports.",
                "Deployed OCR engine on the web application for a patient-centric database system using Python (Django). Worked on System Design, Backend Development, and SQL queries for low-latency information retrieval."
            ],
            Link: "https://github.com/gaga1313/Connect"
        },
        {
            title: "Bone Abnormality Detection using Radiographs | Computer Vision, Medical Imaging",
            category: "",
            date: "May 2020",
            details: [
                "Created an end-to-end system for detecting broken bones and minute fractures in radiographs using deep learning Tensorflow.",
                "Using a machine learning stack ensemble approach, achieved a 74% test accuracy, surpassing the previous models by 6%."
            ],
            Link: "https://github.com/gaga1313/Abnormality-Detection-in-Musculoskeletal-Radiographs"
        }
    ];

    return (
        <div className="bg-inherit px-10 py-8">
            <div className="max-w-5xl mx-auto text-start">
            <div className="text-white text-4xl text-start py-4 my-4">research</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {research.map((project, index) => (
                        <div key={index} className="bg-[#0c152f] border-l-2 border-b-2 border-amber-50 text-amber-50 rounded-lg hover:border-r-8 hover:border-b-8 duration-100  hover:-translate-x-2 hover:-translate-y-2 overflow-hidden shadow-lg">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-blue-50">{project.title}</h3>
                               
                                <p className="text-sm text-sky-100 text-end">{project.date}</p>
                                <hr className="my-3" />
                                <ul className="list-disc list-inside text-sm text-amber-100 target-wide">
                                    {project.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block mx-0 ">Github Link</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Research
