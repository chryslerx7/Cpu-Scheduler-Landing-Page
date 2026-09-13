import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='py-10 px-4 border-t-4 border-terminal-white'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'>
        <div className='space-y-2'>
          <div className='text-sm font-bold uppercase'>
            [SYSTEM STATUS: <span className='text-terminal-green'>ONLINE</span>]
          </div>
          <div className='text-xs text-terminal-gray'>
            CPU_SCHEDULER.exe &copy; 2026 | Operating Systems Project
          </div>
        </div>
        <div className='text-sm font-bold text-terminal-gray'>
          &gt; connection terminated_
        </div>
      </div>
    </footer>
  );
};

export default Footer;
