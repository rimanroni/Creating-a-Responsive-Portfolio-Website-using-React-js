import React from 'react';
import Header from './ui/Header';
import Banner from './ui/Banner';
import Container from './ui/Container';
import About from './ui/About';
import Experience from './ui/Experience';
import Project from './ui/Project';
import Contact from './ui/Contact';
import Archive from './ui/Archive';
 

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
      <Container id={'contact'} className={'bg-purple-500'}>
        <Contact/>
      </Container>
      {/* leftbar */}
      {/* right bar */}
      {/* scroll bar */}
    </main>
  );
};

export default App;