import React from 'react';
import SectionTitle from './SectionTitle';

import ProjectsLInk from './Projects LInk';

const Project = () => {
    return (
        <div>
          <SectionTitle title={'Some Things I have Built'} titleNo={'03'}/>
            {/* Project one */}
          <div className='mt-10'>
            <div className='flex flex-col lg:flex-row gap-6'>
              {/* images */}
              <a href="" className='w-full lg:w-1/2 h-auto group relative rounded-lg overflow-hidden'>
                <img src="/amazonImg-bgDKpEY2.png" className='w-full h-full object-cover group-hover:scale-110 duration-300' alt="amazonimg" />
                <div className='w-full h-full absolute bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300 ' />
              </a>
              {/* descripiton */}
              <div className=' text-right lg:-ml-16  space-y-8 z-10 w-full lg:w-1/2'>
                <div>
                  <p className='text-sm text-designColor tracking-wide'>Featured Project</p>
                  <h1 className='text-2xl font-bold'>Amazon clone 2.0</h1>
                 </div>
                 <div className='bg-[#112240]  z-10  px-4 py-6 rounded-lg w-full'>
                  <p>
                  An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with O-auth and then make the purchage using <span className='text-designColor'>stripe.</span>
                  </p>
                 </div>
                 
              <ProjectsLInk/>
                
              </div>
            </div>
          
          </div>
          {/* Project two */}
          <div className='flex flex-col lg:flex-row  gap-4   mt-16 '>
            <div className='w-full z-10  space-y-8 text-right lg:w-1/2'>
              <div className='space-y-2'>
                <p className='text-designColor text-sm '>Featured Project</p>
                <h1 className='text-2xl font-bold'>Cyber Security Blog</h1>
               </div>
               <div className='bg-[#112240] px-2 py-4 rounded-lg lg:-mr-16 z-10'>
                <p>
                A full functional Cyber Security Blog where you can view the latest post and <span className='text-designColor'>comments on</span> it by passing your ideas besides you can try to add your own <span className='text-designColor'> post</span> on it by logging on the portal.
                </p>
               </div>
               <div>
               <ProjectsLInk/>
               </div>
            </div>
            <a href="" className='w-full overflow-hidden h-auto lg:w-1/2 group relative '>
              <img src="/cyberBlog-Dxgk_wIZ.png" alt=""  className='object-cover group-hover:scale-110 duration-300 w-full h-full   rounded-lg'/>
              <div  className='bg-designColor/10 w-full h-full absolute top-0 left-0 rounded-lg group-hover:bg-transparent duration-300'/>
            </a>
          </div>
            {/* Project three */} 
            <div className='mt-16 flex flex-col lg:flex-row gap-4'>
              <a href="" className='w-full group overflow-hidden h-auto lg:w-1/2 relative '>
                <img src="noorShop-DyAt1a77.png" className='w-full h-full object-cover group-hover:scale-110 duration-300 ' alt="" />
                <div className='bg-designColor/10 absolute top-0 left-0 w-full h-full rounded-lg group-hover:bg-transparent duration-300'/>
              </a>
              <div className='w-full space-y-8 lg:-ml-16 z-10 text-right lg:w-1/2'>
               <div className='space-y-3'>
                 <p className='text-designColor text-sm '>Featured Project</p> 
                  <h1 className='text-2xl font-bold'>Amazon clone 2.0</h1>
               </div>
               <div className='px-2 py-4 bg-[#112240] rounded-lg'>
                <p>
                An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with O-auth and then make the purchage using <span className='text-designColor '>stripe.</span>
                </p>
               </div>
               <ProjectsLInk/>
              </div>
            </div>
        </div>
    );
};

export default Project;