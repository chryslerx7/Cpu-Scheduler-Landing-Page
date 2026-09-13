import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';

const TypingTitle = () => {
  const text = 'CPU SCHEDULER';
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    if (loop > 3) return;

    const handleTyping = () => {
      const currentText = displayText;
      if (!isDeleting && currentText === '') {
        setTypeSpeed(150);
        setDisplayText(text.charAt(0));
      } else if (!isDeleting && currentText !== text) {
        setTypeSpeed(150);
        setDisplayText(text.slice(0, currentText.length + 1));
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoop(loop + 1);
        setTypeSpeed(500);
      } else if (isDeleting && currentText !== '') {
        setTypeSpeed(100);
        setDisplayText(text.slice(0, currentText.length - 1));
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loop, typeSpeed]);

  useEffect(() => {
    if (!isDeleting && displayText === text) {
      setTimeout(() => setIsDeleting(true), 2000);
    }
  }, [displayText, isDeleting, text]);

  return (
    <div className='text-4xl md:text-7xl font-black tracking-tighter'>
      <span className='text-terminal-green'>{displayText}</span>
      <span className='animate-pulse text-terminal-green'>_</span>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id='hero' className='min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-10 relative'>
      <div className='max-w-4xl w-full space-y-8 text-center'>
        <div className='inline-block text-left space-y-1 text-xs md:text-sm font-mono text-terminal-gray uppercase tracking-widest'>
          <div>SYSTEM://CPU_SCHEDULER</div>
          <div>STATUS: <span className='text-terminal-green'>ONLINE</span></div>
          <div>MODE: PROCESS_SCHEDULING</div>
          <div>VERSION: 1.0.1</div>
          <div className='text-terminal-white'>&gt; ./cpu-scheduler</div>
          <div className='text-terminal-green'>[SYSTEM READY]</div>
        </div>

        <div className='py-10'>
          <TypingTitle />
          <p className='mt-6 text-sm md:text-lg text-terminal-gray max-w-2xl mx-auto leading-relaxed'>
            A simple Android application for solving CPU process scheduling problems and visualizing scheduling results.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
          <a
            href='#download'
            className='brutalist-btn brutalist-btn-green text-xl w-full sm:w-auto'
          >
            &gt; DOWNLOAD APK
          </a>
          <a
            href='#about'
            className='brutalist-btn text-xl w-full sm:w-auto'
          >
            &gt; VIEW PROJECT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
