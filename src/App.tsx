import React from 'react';
import TerminalHeader from './components/TerminalHeader';
import Hero from './components/Hero';
import About from './components/About';
import Algorithms from './components/Algorithms';
import AppPreview from './components/AppPreview';
import DownloadCenter from './components/DownloadCenter';
import ProjectInfo from './components/ProjectInfo';
import Footer from './components/Footer';
import BackgroundDecor from './components/BackgroundDecor';

const App: React.FC = () => {
  return (
    <div className='relative min-h-screen bg-terminal-bg text-terminal-white font-mono selection:bg-terminal-green selection:text-black'>
      <BackgroundDecor />
      
      <div className='relative z-10'>
        <TerminalHeader />
        
        <main className='flex flex-col gap-0'>
          <Hero />
          <About />
          <Algorithms />
          <AppPreview />
          <DownloadCenter />
          <ProjectInfo />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
