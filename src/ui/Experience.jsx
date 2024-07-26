import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import WorkCard from './WorkCard';

const Experience = () => {
    const [workreact, setWorkReact] = useState(true);
    const [workgoogle, setWorkGoogle] = useState(false);
    const [workapple, setWorkApple] = useState(false);
    const [workSplash, setWorkSplash] = useState(false);
    const [workAmazon, setWorkAmazon] = useState(false);
    
    const handleReact = () =>{
             setWorkReact(true);
             setWorkGoogle(false);
             setWorkApple(false);
             setWorkSplash(false);
             setWorkAmazon(false)
    }
    const handleGoogle = () =>{
        setWorkReact(false);
        setWorkGoogle( true);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(false)
    }
    const handleApple = () =>{
        setWorkReact(false);
        setWorkGoogle(false);
        setWorkApple(true);
        setWorkSplash(false);
        setWorkAmazon(false);
    }
    const handlesplash = () =>{
        setWorkReact(false);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(true);
        setWorkAmazon(false);
    }
    const handleamazon = () =>{
        setWorkReact(false);
        setWorkGoogle(false);
        setWorkApple(false);
        setWorkSplash(false);
        setWorkAmazon(true);
    }
    return (
        <div className='max-w-3xl mx-auto py-10 lg:py-12 '>
            <SectionTitle titleNo={'02'} title={'Where I have Worked'}/>
             <div className=' w-full mt-10 flex flex-col md:flex-row gap-16 pb-52'>
            {/* button setup */}
                <ul className='md:w-32 flex flex-col'>
                    <li onClick={handleReact} className={`${workreact?'border-l-designColor text-designColor':'border-l-hoverColor text-darkText'} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>ReactBD</li>
                    <li onClick={handleGoogle} className={`${workgoogle?'border-l-designColor text-designColor':'border-l-hoverColor text-darkText'} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>Google</li>
                    <li onClick={handleApple} className={`${workapple?'border-l-designColor text-designColor':'border-l-hoverColor text-darkText'} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>Apple</li>
                    <li onClick={handlesplash} className={`${workSplash?'border-l-designColor text-designColor':'border-l-hoverColor text-darkText'} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>Splash</li>
                    <li onClick={handleamazon} className={`${workAmazon?'border-l-designColor text-designColor':'border-l-hoverColor text-darkText'} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}>Amazon</li>
                </ul>
            {/* content setup */}
            {workreact&&<WorkCard title={'Engineer'} company={'@ReactBD'} position={'Jan 2023 - present'}  pera1={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi'} pera2={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?'}  pera3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed.'}/>}
            {workgoogle&&<WorkCard title={'Web Developer'} company={'@Google'} position={'Jan 2022 - Dec 2023'}  pera1={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi'} pera2={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?'}  pera3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed.'}/>}
            {workAmazon&&<WorkCard title={'MERN Stack Developer'} company={'@Apple'} position={'Jan 2021 - Dec 2021'}  pera1={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi'} pera2={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?'}  pera3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed.'}/>}
            {workapple&&<WorkCard title={'MERN Stack Developer'} company={'@Splash'} position={'Jan 2023 - present'}  pera1={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi'} pera2={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?'}  pera3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed.'}/>}
            {workSplash &&<WorkCard title={'web Design'} company={'@Amazon'} position={'Jan 2023 - present'}  pera1={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi'} pera2={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?'}  pera3={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed.'}/>}
             </div>
        </div>
    );
};

export default Experience;