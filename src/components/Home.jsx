import React from 'react'
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <motion.div className="w-full h-full px-2  py-8 flex items-center justify-center"  initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ type: 'spring', delay: 2.5,duration:4  }}>
          <motion.div className="max-w-5xl mx-auto  text-center md:text-start">
            <motion.div className="text-white text-xl mb-6" >Hi, my name is</motion.div>
            <motion.div className="text-white text-7xl font-bold mb-12 font-name  "
            initial={{x:(-1000)}}
            animate={{x:0}}
            transition={{ type: 'spring', delay: 2.7,stiffness:30,duration:6} }
            > Gaurav Gaonkar</motion.div>
            <motion.div className="text-white text-xl mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.            </motion.div>
            <motion.button className="bg-transparent border-2 border-amber-50  text-amber-200  text-2xl px-8 py-3 hover:border-r-8 hover:border-b-8 duration-100  hover:-translate-x-2 hover:-translate-y-2"
           initial={{y:(1000)}}
           animate={{y:0}}
           transition={{ type: 'spring', delay: 2.7,stiffness:30,duration:2} }
            >
              Resume
            </motion.button>
          </motion.div>
        </motion.div>
      );
}

export default Home
