import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
const LeftSide = () => {
    return (
        <motion.div 
        
        initial={{x:-50, opacity:0}}
        animate={{x:0 , opacity:1}}
        transition={{delay:2}}
        className='w-full h-full items-center justify-end flex flex-col'  >
           <div className='flex flex-col gap-4 text-xl pb-4'>
            <button className='bg-hoverColor p-2 duration-500 hover:border-designColor hover:text-designColor border-[.5px] rounded-full'>
            <FiGithub />
             </button>
            <button className='bg-hoverColor p-2 duration-500 hover:border-designColor hover:text-designColor border-[.5px] rounded-full'>
              <FaFacebook/>
              </button>
              <button className='bg-hoverColor p-2 duration-500 hover:border-designColor hover:text-designColor border-[.5px] rounded-full'>
              <FaTwitter/>
              </button>
              <button className='bg-hoverColor p-2 duration-500 hover:border-designColor hover:text-designColor border-[.5px] rounded-full'>
              <FaLinkedin/>
              </button>

           </div>
            <div className="w-[1px] h-32 bg-slate-300"></div>
        </motion.div>
    );
};

export default LeftSide;