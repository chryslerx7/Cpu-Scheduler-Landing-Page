import React from 'react';

const ProjectInfo: React.FC = () => {
  return (
    <section id='info' className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='terminal-window'>
          <div className='terminal-header'>
            <span className='text-terminal-gray text-xs'>$ system-info</span>
            <span className='text-terminal-gray text-xs'>[SYS_PROPS]</span>
          </div>
          <div className='p-6 overflow-x-auto'>
            <table className='w-full text-left text-sm md:text-base border-collapse'>
              <tbody>
                {[
                  { label: 'APPLICATION', value: 'CPU SCHEDULER' },
                  { label: 'PLATFORM', value: 'Android' },
                  { label: 'PROJECT TYPE', value: 'Operating Systems / Academic Project' },
                  { label: 'FRONTEND', value: 'Android Java / XML' },
                  { label: 'WEBSITE', value: 'React + Tailwind CSS' },
                  { label: 'ALGORITHMS', value: 'FCFS, SJF, SRTF, RR, Priority' },
                ].map((row, idx) => (
                  <tr key={idx} className='border-b-2 border-terminal-gray/30'>
                    <td className='py-3 pr-4 font-bold text-terminal-gray uppercase w-1/3'>
                      {row.label}
                    </td>
                    <td className='py-3 text-terminal-white font-bold'>
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
