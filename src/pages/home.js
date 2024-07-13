import React, { useEffect, useState } from 'react';
import Banner from '../components/banner';
import About from '../components/about';
import Services from '../components/service';
import Title from './Title/title';
import Contact from '../components/contact';
import OrbitingCircles from '../components/animation/animate';
import { FiChevronUp } from 'react-icons/fi';
import WorkingProcess from '../components/working_process';
import {ReactIconsExample} from '../components/animation/reveallinks'
import Example from '../components/animation/mobile';
import ShuffleHero from '../components/advertisement';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='w-full'>
        <div id="banner">
            <Banner />
        </div>
      <div className="max-w-7xl mx-auto px-4 pt-3 pb-6">
        <ShuffleHero/>
        <div id="about" className="max-w-screen-lg mx-auto px-4">
            <About />
        </div>

        <div id="workingprocess" className="max-w-screen-lg mx-auto px-4">
            <Title subTitle='Working Process' title='Our Working Process' />
            <WorkingProcess />
        </div>

        <Example/>

        <div id="tech-stack" className="max-w-screen-lg mx-auto px-4">
            <Title subTitle='Technologies' title='Our Tech Stack' />
            <OrbitingCircles />
        </div>

        <div id="services" className="max-w-screen-lg mx-auto px-4">
            <Title subTitle='Services' title='Our Services' />
            <Services />
        </div>


            <ReactIconsExample />


        <div id="contact" className="max-w-screen-lg mx-auto px-4">
            <Title subTitle='Contact' title='Contact Us' />
            <Contact />
        </div>

      {showScrollTop && (
        <button className="fixed bottom-10 right-10 bg-red-500 hover:bg-red-600 text-white text-lg p-3 rounded-full shadow-lg" onClick={scrollTop}>
          <FiChevronUp />
        </button>
      )}
      </div>
    </div>
  );
};

export default Home;
