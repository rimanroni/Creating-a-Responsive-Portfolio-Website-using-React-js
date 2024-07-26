import React from 'react';

const SectionTitle = ({titleNo, title}) => {
    return (
        <div>
             <h1 className='text-2xl   md:inline-flex  font-semibold  items-center'>
            <span className='text-base md:text-lg  text-designColor mr-2'>{titleNo}.</span> 
              {title}
             <span className='md:w-60 lg:w-72 h-[.5px] bg-lightText ml-6'></span>
             </h1>
        </div>
    );
};

export default SectionTitle;