import React from 'react';

const algorithms = [
  { id: '01', name: 'FCFS', fullName: 'FIRST COME FIRST SERVE', color: 'text-terminal-green' },
  { id: '02', name: 'SJF', fullName: 'SHORTEST JOB FIRST', color: 'text-terminal-cyan' },
  { id: '03', name: 'SRTF', fullName: 'SHORTEST REMAINING TIME FIRST', color: 'text-terminal-yellow' },
  { id: '04', name: 'RR', fullName: 'ROUND ROBIN', color: 'text-terminal-orange' },
  { id: '05', name: 'PRIO_NP', fullName: 'PRIORITY (NON-PREEMPTIVE)', color: 'text-terminal-purple' },
  { id: '06', name: 'PRIO_P', fullName: 'PRIORITY (PREEMPTIVE)', color: 'text-terminal-red' },
];

const Algorithms: React.FC = () => {
  return (
    <section id='algorithms' className='py-20 px-4 bg-terminal-gray/10'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl md:text-5xl font-black uppercase italic'>
            Supported <span className='text-terminal-green'>Modules</span>
          </h2>
          <p className='text-terminal-gray mt-2'>Listing all available scheduling algorithms</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {algorithms.map((algo) => (
            <div key={algo.id} className='brutalist-card p-6 group relative overflow-hidden'>
              <div className='absolute top-0 right-0 p-2 text-[10px] text-terminal-gray font-bold uppercase'>
                MODULE_{algo.id}
              </div>
              <div className='space-y-4'>
                <div className="text-3xl font-black tracking-tighter">
                  {algo.name}
                </div>
                <div className='text-xs md:text-sm font-bold uppercase leading-tight opacity-80'>
                  {algo.fullName}
                </div>
                <div className='pt-4 border-t-2 border-terminal-gray/30 flex justify-between items-center'>
                  <span className='text-[10px] text-terminal-gray uppercase'>Status:</span>
                  <span className='text-[10px] text-terminal-green font-bold animate-pulse'>AVAILABLE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Algorithms;
