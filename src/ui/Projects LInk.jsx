import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
const ProjectsLInk = () => {
    return (
        <div className='space-y-2'>
               <div className='space-x-4'>
                  <span>Nextjs</span>
                  <span>Typescript</span>
                  <span>Next-auth</span>
                  <span>Stripe</span>
                  <span>Vercel Deployment</span>
                </div>
                <div className='text-right space-x-3 text-xl font-bold'>
                  <span className='cursor-pointer hover:text-designColor'><FiGithub className='inline' /></span>
                  <span className='cursor-pointer hover:text-designColor'><AiOutlineYoutube className='inline' /></span>
                  <span className='cursor-pointer hover:text-designColor'><RiLinkedinFill className='inline' /></span>
                </div>
        </div>
    );
};

export default ProjectsLInk ;