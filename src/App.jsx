import React from 'react';
import Header from './ui/Header';
import Banner from './ui/Banner';
import Container from './ui/Container';
import About from './ui/About';
import Experience from './ui/Experience';
import Project from './ui/Project';
import Contact from './ui/Contact';
import Archive from './ui/Archive';
import ScrollBTN from './ui/ScrollBTN';
import RightSide from './ui/RightSide';
import LeftSide from './ui/LeftSide';
 
import { motion } from 'framer-motion';
const App = () => {
  return (
    <main className='font-bodyFont min-h-screen  bg-primaryColor text-lightText'>
    
      {/* Header */}
      <Header/>
      {/* banner  */}
        <Container id={'home'} className={' '}>
        <Banner />
         </Container>
       {/* ABOUT */}
      <Container id={'about'}  >
        <About/>
      </Container>
      {/* EXPERIENCE  */}
      <Container id={'experience'} >
        <Experience/>
      </Container>
      {/* PROJECT */}
      <Container id={'project'}  className={'py-24'}> 
        <Project/>
      </Container>
      {/*archiv*/}
      <Container>
        <Archive/>
      </Container>

      {/* Contact */}
      <Container id={'contact'} >
        <Contact/>
      </Container>
      {/* leftbar */}
      <motion.div
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:.6}}
           className='hidden lg:inline-flex w-32 h-full -left-8 fixed  bottom-0'
        >  
        <LeftSide/>
           
        </motion.div>
      {/* right bar */}
      <motion.div
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:.6}}
           className='hidden lg:inline-flex   w-32 h-full fixed  right-0 bottom-0'
        >  
       <RightSide/> 
         </motion.div>
      {/* scroll bar */}
      <ScrollBTN/>
    </main>
  );
};

export default App;