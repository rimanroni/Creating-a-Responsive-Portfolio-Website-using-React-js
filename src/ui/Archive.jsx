import React, { useEffect, useRef, useState } from 'react';
import ArchiveCard from './ArchiveCard';
import { motion } from 'framer-motion';

const Archive = () => {
    const [showMore , setShowmore ] = useState(false);
    const [data, setData ] = useState([]);
    const projectsContainerRef = useRef(null)
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const handleShow = () =>{
        
        setShowmore(!showMore)
        if(showMore==false){
            projectsContainerRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }
  const displayedData = showMore ? data : data.slice(0,6)
    return (
        <div className='py-20 max-w-6xl mx-auto '>
            <div className='text-center'>
            <h1 className='text-2xl font-bold'>Other Noteworthy Projects</h1>
            <p className='text-designColor'>view the archive</p>
            </div>

            <div ref={projectsContainerRef} className='grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-4'>
           
            
           
             {displayedData?.map((item, index)=>(
                <motion.div key={index} 
                initial={{ opacity:0}}
                animate={{ opacity:1}}
                exit={{opacity:0}}

                transition={{delay: index * 0.1}}
                >
                    <ArchiveCard item={item}/>
                 </motion.div>
                 
             ))}
            </div>
            <div className='flex mt-10 justify-center items-center'>
                <button
                className='border-designColor hover:bg-hoverColor duration-300 border rounded-lg px-3 py-2 text-designColor capitalize m-2'
                
                onClick={handleShow}>{showMore?'Show Less' : "Show More"}</button>
            </div>
           
        </div>
    );
};

export default Archive;