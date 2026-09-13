import React from 'react';

const About: React.FC = () => {
  return (
    <section id='about' className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='terminal-window'>
          <div className='terminal-header'>
            <span className='text-terminal-gray text-xs'>$ cat README.txt</span>
            <span className='text-terminal-gray text-xs'>[FILE_VIEWER]</span>
          </div>
          <div className='p-6 space-y-6'>
            <div className='space-y-2'>
              <h2 className='text-2xl md:text-3xl font-black text-terminal-green uppercase'>
                CPU SCHEDULER
              </h2>
              <div className='w-full h-1 bg-terminal-green'></div>
            </div>

            <div className='space-y-4 text-sm md:text-base leading-relaxed'>
              <p>
                A mobile CPU scheduling solver designed specifically for Operating Systems students.
                The application simplifies the complex process of calculating scheduling metrics,
                allowing users to input process information and get instant results.
              </p>
              <p>
                By automating the calculation of Waiting Time and Turnaround Time, students
                can focus on understanding the underlying theory of process scheduling rather
                than manual arithmetic.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>
              {[
                { label: 'PLATFORM', value: 'Android' },
                { label: 'MODE', value: 'Offline' },
                { label: 'CALCULATION', value: 'Automated' },
                { label: 'VISUALIZATION', value: 'Gantt Chart' },
              ].map((item) => (
                <div key={item.label} className='brutalist-border p-3 flex justify-between items-center'>
                  <span className='text-terminal-gray text-xs font-bold'>{item.label}</span>
                  <span className='text-terminal-cyan font-bold'>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
