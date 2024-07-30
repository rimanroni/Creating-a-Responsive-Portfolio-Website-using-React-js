import React from 'react';
import { CiShare1 } from 'react-icons/ci';
import { FaRegFolder } from 'react-icons/fa';
import { motion } from 'framer-motion';
const ArchiveCard = ({item}) => {
const {title, link , description ,listItem} = item;
 
    return (
        <a
         href={link} className='  '>

        <div className='bg-[#112240] h-[350px] object-cover space-y-4  group p-8 rounded'>
            <div className='  flex justify-between items-center'>
            <FaRegFolder className='text-4xl duration-300 text-designColor  font-bold'/>
            <a href={link}>
            <CiShare1 className='text-2xl'  />
            </a>
            </div>
            <div className='space-y-4'>
            <h1 className='group-hover:text-designColor tracking-wide text-2xl font-bold'>{title}</h1>
            <p className='text-sm'>{description}</p>

            </div>
            <ul className='flex justify-between items-center'>
                {listItem?.map((skill, ind)=>(
                    <li key={ind}>{skill}</li>
                ))}
            </ul>
        </div>
        </a>
    );
};

export default ArchiveCard;