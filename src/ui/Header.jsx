import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
const Header = () => {
    const navItems = [
        {title:"Home" , link:"home" , delay:"" , value:""},
        {title:"About",link:"about",delay:"0.1", value:"01"},
        {title:"Exprience" , link:"experience" , delay:"0.2" , value:"02"},
        {title:"Project" , link:"project" , delay:"0.3", value:"03"},
        {title:"Contact" , link:"contact" , delay:"0.4",value:"04"}
        ]
        const [bar, setBar] = useState(false)
        const handleBar = () =>{
          setBar(!bar)
        }
        const navitemForSmall = [
          {icon: <FaGithub/> ,delay:.7},
          {icon: <FaYoutube/>, delay:.8},
          {icon: <FaLinkedin/>, delay:.9},
          {icon: <FaTwitter/> , delay:1.10},
          {icon: <FaFacebook/> , delay:1.11},
         ]
    return (

      
        <div className='h-20  sticky top-0 z-50 bg-primaryColor shadow-lg shadow-designColor/10   lg:px-0'>
          <div className='max-w-[1340px] flex justify-between items-center h-full mx-auto  '>
            <img src="/logo.png" className='w-14 opacity-75  hover:opacity-100 cursor-pointer' alt="logo" />
            <div className='hidden md:inline-flex px-8  items-center gap-7'>
                 <div
                 
                 className='flex  text-[13px] gap-7'>
                    {navItems.map((item, ind)=>(
                      <motion.p
                      key={ind}
                      initial={{y:-10, opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:.5,delay:item.delay}}
                      >
                       <Link
                       to={item?.link}
                       smooth={true}
                       offset={-80}
                       duration={500}
                       className='font-medium hover:text-designColor duration-300'
                       key={item.delay}>
                        <button>
                          <span className='text-designColor mr-1'>{item?.value}{item?.value&& "."}</span>
                            <span className='uppercase tracking-wide'>{item?.title}</span>
                        </button>
                       </Link>

                      </motion.p>
                    ))}
                 </div>
                 <motion.a
                 initial={{y:-10, opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:1,delay:.6}}
                 
                 className='px-4 py-2 rounded-lg font-medium text-designColor text-[13px] tracking-wide uppercase border border-designColor hover:bg-hoverColor duration-300' href="/rony.pdf">Resume</motion.a>
            </div>
            <div className='md:hidden relative px-4'>
               <button
               onClick={handleBar}
                className='text-2xl'
               >{ <RiMenu3Line />}</button>
              </div>
          </div>
          <div
          
          className={`w-[400px] z-10 h-screen bg-[#112240] right-0 absolute top-0 flex-col px-4 ${bar?'flex ':'hidden'}`}>
                 <div className='flex py-4 text-2xl justify-end items-center'>
                 <button onClick={handleBar}>
                  <AiOutlineClose className=' text-2xl text-designColor hover:text-red-600 font-bold duration-300'/>
                   </button>
                 </div>

                <div className=' flex justify-center items-center'>
                {bar?<div className='space-y-4' >
                      {navItems.map((item, ind)=>(
                      <motion.p
                      key={ind}
                      initial={{y:-10, opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:.5,delay:item.delay}}
                      >
                       <Link
                       to={item?.link}
                       smooth={true}
                       offset={-80}
                       duration={500}
                       className='font-medium hover:text-designColor duration-300'
                       key={item.delay}>
                        <button>
                          <span className='text-designColor mr-1'>{item?.value}{item?.value&& "."}</span>
                            <span className='uppercase tracking-wide'>{item?.title}</span>
                        </button>
                       </Link>

                      </motion.p>
                    ))}
                     <motion.a
                 initial={{y:-10, opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:1,delay:.6}}
                 
                 className='px-2 mt-3 flex justify-center items-center py-2 rounded-lg w-[100px] font-medium text-designColor text-[13px] tracking-wide uppercase border border-designColor hover:bg-hoverColor duration-300' href="/rony.pdf">Resume</motion.a>
                 <div className='flex gap-3 space-x-3 items-center'>
                  {navitemForSmall.map((icon, ind)=>(
                    <motion.p 
                    className='text-2xl hover:text-designColor hover:border-designColor duration-300 mt-4 p-2 rounded-full border  '
                    initial={{y:-10, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:.3, delay:icon.delay}}
                    key={ind}>
                      {icon?.icon}
                    </motion.p>
                  ))}
                 </div>
                  </div>:""}
                </div>
                 
                </div>
        </div>
              

     
    );
};

export default Header;