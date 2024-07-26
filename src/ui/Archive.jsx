import React, { useEffect, useState } from 'react';
import ArchiveCard from './ArchiveCard';

const Archive = () => {
    const [showMore , setShowmore ] = useState(false)
    const [data, setData ] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const handleShow = () =>{
        setShowmore(!showMore)
    }
  const displayedData = showMore ? data : data.slice(0,6)
    return (
        <div className='py-20 max-w-6xl mx-auto '>
            <div className='text-center'>
            <h1 className='text-2xl font-bold'>Other Noteworthy Projects</h1>
            <p className='text-designColor'>view the archive</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-4'>
             {displayedData?.map((item, index)=>(
                      <ArchiveCard key={index} item={item}/>
                 
             ))}
            </div>
            <div className='flex justify-center items-center'>
                <button
                className='border-designColor border rounded-lg px-3 py-2 text-designColor capitalize m-2'
                
                onClick={handleShow}>{showMore?'show less' : "show more"}</button>
            </div>
        </div>
    );
};

export default Archive;