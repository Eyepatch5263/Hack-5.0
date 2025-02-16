import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
import PrizePool from '@/components/PrizePool';
import Sponsors from '@/components/Sponsors';
import Success from '@/components/Success';
import Timeline from '@/components/Timeline';
import Timing from '@/components/Timing';
import React from 'react';
import FAQs from './faq/page';


function App() {
  return (
    <main className='snap-y h-screen w-screen overflow-y-scroll'>
      <Landing/>
      <Timing/>
      <About/>
      <Timeline/>
      <PrizePool/>
      <Sponsors/>
      <Success/>
      <FAQs/>
      
      <Contact/>
      <Footer/>
      </main>
  );
}

export default App;