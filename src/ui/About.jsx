import React from 'react';
import SectionTitle from './SectionTitle';
import { FaCode } from 'react-icons/fa';

const About = () => {
    const textArray = [
        {title:'JavaScript (ES6+)' , link:"https://reactbd.com"},
        {title:'Next JS' , link:"https://reactbd.com"},
        {title:'React JS' , link:"https://reactbd.com"},
        {title:'Node JS' , link:"https://reactbd.com"},
        {title:'TypeScript' , link:"https://reactbd.com"},
        {title:'Express JS' , link:"https://reactbd.com"},
        {title:'MongDB' , link:"https://reactbd.com"},
        {title:'TailwindCss' , link:"https://reactbd.com"}
    ]
    return (
        <div className='py-10 lg:py-24  space-y-8'>
            <SectionTitle titleNo={'01'} title={'About me'}/>
            <div className='grid grid-cols-1 space-y-3 md:grid-cols-2 gap-4'>
                <div className='space-y-4  text-lightText'>
                    <p>
                    Hello! My name is Noor Mohammad and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p>
                    Fast-forward to today, and I had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem accusantium fugiat veritatis, quidem repellat ab natus possimus? Sint, accusamus!
                    </p>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse recusandae.
                    </p>
                    <p>
                    Here are a few technologies I have been working with recently:
                    </p>
                    <div className='max-w-[400px] grid grid-cols-2 gap-2 mt-6'>
                        {textArray.map((item)=>(
                            <a  className='hover:text-white/80' key={item.title} href={item?.link}>
                            <FaCode className='inline mr-1 text-designColor' />    {item?.title}
                                </a>
                        ))}
                    </div>
                </div>
                <div className='relative   '>
                    
                    <div>
                    <img src="/profile-B3sztNpI.png" className='mx-auto' alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;