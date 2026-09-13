import React from 'react';

const TerminalHeader: React.FC = () => {
  const navItems = [
    { name: 'ABOUT', path: '#about' },
    { name: 'ALGORITHMS', path: '#algorithms' },
    { name: 'PREVIEW', path: '#preview' },
    { name: 'DOWNLOAD', path: '#download' },
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-50 p-2'>
      <div className='max-w-6xl mx-auto terminal-window overflow-hidden py-1'>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 py-1 gap-2'>
          <div className='flex items-center gap-3'>
            <div className='flex gap-1'>
              <div className='w-2 h-2 rounded-full bg-terminal-red'></div>
              <div className='w-2 h-2 rounded-full bg-terminal-yellow'></div>
              <div className='w-2 h-2 rounded-full bg-terminal-green'></div>
            </div>
            <span className='text-terminal-green font-bold text-xs md:text-sm tracking-tighter'>
              CPU_SCHEDULER.exe
            </span>
          </div>
          
          <nav className='flex items-center gap-4'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className='text-[10px] md:text-xs font-bold text-terminal-white hover:text-terminal-green transition-colors uppercase'
              >
                <span className='text-terminal-gray opacity-70'>/</span>
                {item.name.toLowerCase()}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TerminalHeader;
