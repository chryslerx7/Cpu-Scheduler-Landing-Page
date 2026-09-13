import React from 'react';

const TerminalHeader: React.FC = () => {
  const navItems = [
    { name: 'ABOUT', path: '#about' },
    { name: 'ALGORITHMS', path: '#algorithms' },
    { name: 'PREVIEW', path: '#preview' },
    { name: 'DOWNLOAD', path: '#download' },
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-50 p-2 md:p-4'>
      <div className='max-w-6xl mx-auto terminal-window'>
        <div className='terminal-header'>
          <div className='flex items-center gap-2'>
            <span className='text-terminal-green font-bold'>CPU_SCHEDULER.exe</span>
            <span className='hidden md:inline text-xs text-terminal-gray'>- v1.0.0 (STABLE)</span>
          </div>
          <div className='flex gap-1'>
            <div className='w-3 h-3 rounded-full bg-terminal-red'></div>
            <div className='w-3 h-3 rounded-full bg-terminal-yellow'></div>
            <div className='w-3 h-3 rounded-full bg-terminal-green'></div>
          </div>
        </div>
        <nav className='p-3 flex flex-wrap gap-4 justify-center md:justify-start'>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className='text-sm font-bold hover:text-terminal-green transition-colors'
            >
              <span className='text-terminal-gray'>&gt; cd /</span>
              {item.name.toLowerCase()}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default TerminalHeader;
