import { motion } from 'framer-motion';
import React from 'react';
import { IoArrowRedoSharp } from 'react-icons/io5';

const WorkCard = ({title, pera1,pera2,pera3 , position , company}) => {
    return (
        <motion.div 
        className=''
        initial={{y:-20, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:.5, delay:.5}}
        
        > 
           <p className='text-2xl mb-4'>{title} <span className='text-designColor'>{company}</span> </p>
           <p className='mb-4'>{position}</p>
       <div className='space-y-4'>
       <p className='  flex gap-x-3  text-justify'><span className='text-designColor'><IoArrowRedoSharp className='inline'/></span>{pera1}  </p> 
          <p className='  flex gap-x-3  text-justify'><span className='text-designColor'><IoArrowRedoSharp className='inline'/> </span> {pera2}</p> 
          <p className='  flex gap-x-3  text-justify'><span className='text-designColor'><IoArrowRedoSharp className='inline'/> </span> {pera3}</p>
        </div> 
        </motion.div>
    );
};

export default WorkCard;