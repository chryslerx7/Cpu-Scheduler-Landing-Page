import React from 'react';

const BackgroundDecor: React.FC = () => {
  const decorations = [
    { text: 'CPU_01', top: '10%', left: '5%' },
    { text: 'PROCESS_QUEUE', top: '20%', left: '85%' },
    { text: 'P1', top: '30%', left: '10%' },
    { text: 'P2', top: '35%', left: '90%' },
    { text: 'P3', top: '45%', left: '15%' },
    { text: 'P4', top: '50%', left: '80%' },
    { text: 'FCFS', top: '60%', left: '5%' },
    { text: 'SJF', top: '65%', left: '95%' },
    { text: 'SRTF', top: '75%', left: '10%' },
    { text: 'RR', top: '80%', left: '85%' },
    { text: 'PRIORITY', top: '90%', left: '15%' },
    { text: 'IDLE', top: '95%', left: '80%' },
    { text: 'READY', top: '15%', left: '40%' },
    { text: 'WAIT', top: '40%', left: '30%' },
    { text: 'EXECUTE', top: '70%', left: '60%' },
    { text: '01001001', top: '5%', left: '30%' },
    { text: '10110100', top: '55%', left: '50%' },
    { text: '11001010', top: '85%', left: '40%' },
    { text: 'SYSTEM_READY', top: '25%', left: '60%' },
    { text: '>_', top: '80%', left: '20%' },
    { text: '', top: '10%', left: '70%' },
    { text: './run', top: '60%', left: '40%' },
    { text: '[OK]', top: '30%', left: '80%' },
    { text: '[WAIT]', top: '45%', left: '10%' },
    { text: '[EXEC]', top: '15%', left: '15%' },
  ];

  return (
    <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10 text-terminal-gray font-mono text-xs md:text-sm leading-none select-none'>
      {decorations.map((dec, idx) => (
        <div
          key={idx}
          className='absolute whitespace-nowrap'
          style={{ top: dec.top, left: dec.left }}
        >
          {dec.text}
        </div>
      ))}
    </div>
  );
};

export default BackgroundDecor;
