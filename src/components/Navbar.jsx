import React from 'react';
import { motion } from 'framer-motion';
const Navbar = () => {
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'workexp' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'contact' },
    ];

    return (
        <motion.div className="bg-[#030f20] flex justify-between items-center w-full mx-auto h-20 px-10 text-white bg-inherit fixed z-10 mr-10 ml-15">
        <motion.div
         initial={{x:(-100)}}
         animate={{x:0}}
         transition={{ type: 'spring', delay: 0.1,stiffness: 80 }}
        >
            <h1 className="text-5xl font-name font-bold text-white ">Gaurav</h1>
        </motion.div>

        <ul className="flex flex-row ml-8 text-lg">
            {/* Use {} to wrap JSX content within map */}
            {links.map(({ id, link }) => (
                <motion.li
                key={id} className="px-4 mx-2 cursor-pointer  capitalize font-medium text-xl text-white hover:scale-105 font-name duration-100  hover:-translate-x-2 hover:-translate-y-2"
                initial={{y:(id)*(-1000)}}
                animate={{y:0}}
                transition={{ type: 'spring', delay: id*0.2,stiffness:30,duration:2 }}
                >
                    {link}
                </motion.li>
            ))}
        </ul>
    </motion.div>
    );
};

export default Navbar;
