import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Landing from '@/components/Landing';
import PrizePool from '@/components/PrizePool';
import Sponsors from '@/components/Sponsors';
import Timing from '@/components/Timing';
import React from 'react';


function App() {
  return (
    <main className='snap-y h-screen w-screen overflow-y-scroll'>
      <Landing/>
      <Timing/>
      <About/>
      <PrizePool/>
      <Sponsors/>
      <Contact/>
      <Footer/>
      </main>
  );
}

export default App;