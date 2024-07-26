import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Banner = () => {
 const typeWrite = ['I build things for the web. ' ,'World Developer ' , 'Mern Stack Developer']
    return (
        <div className='py-10 md:24  space-y-4 lg:gap-8 md:px-10 xl:px-4'>
            <motion.h3
             initial={{y:10, opacity: 0}}
             animate={{y:0,opacity:1}}
             transition={{duration:.5, delay:0.7}}
             className='text-lg font-semibold text-designColor tracking-wider'>Hi, my name is</motion.h3>
              <motion.h1
             initial={{x:10, opacity:0}}
             animate={{x:0, opacity:1}}
             transition={{duration:.5, delay:.9}}
             className='text-4xl lg:6xl font-bold text-lightText'>Noor Mohammad.
             <span className='text-darkText mt-2 lg:mt-4 font-semibold'>
                <Typewriter options={{
                    strings:typeWrite,
                    autoStart:true,
                    loop:true
                }}>
                 </Typewriter> </span>
             </motion.h1>
          <motion.p
          initial={{y:10, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:.5, delay:.9}}
          className='md:max-w-[650px] space-y-2 tracking-widest    text-darkText'
          >
          I am a web developer with 4+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem.  <br />
          <a className='text-designColor mt-4' target='_blank' href="https://noormohammad.reactbd.com/">
          <span className='text-designColor cursor-pointer h-7 overflow-x-hidden inline-flex relative group'>Read More
          <span className='w-full bg-designColor h-[1px] absolute bottom-0 left-0 -translate-x-[110%] group-hover:translate-x-0 duration-300 delay-100
           '></span>

          </span>
          </a>
          </motion.p>
          <motion.button
            initial={{y:4, opacity:0}}
           animate={{y:0, opacity:1}}
           transition={{duration:.1, delay:1.5}}
          className='px-8 py-2 rounded hover:bg-hoverColor border-designColor text-designColor  border font-semibold'>
            <a href="https://github.com/rimanroni?tab=repositories" target='_blank'>Check out my projects!</a>
          </motion.button>
        </div>
    );
};

export default Banner;