import React from 'react';
import { CONFIG } from '../config';

const AppPreview: React.FC = () => {
  return (
    <section id='preview' className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='terminal-window overflow-hidden'>
          <div className='terminal-header'>
            <div className='flex items-center gap-2'>
              <span className='text-terminal-gray text-xs font-bold'>APP_PREVIEW.png</span>
            </div>
            <div className='flex gap-1'>
              <div className='w-3 h-3 rounded-full bg-terminal-red cursor-pointer hover:opacity-80'></div>
            </div>
          </div>
          <div className='p-4 md:p-8 bg-terminal-bg flex justify-center items-center'>
            <div className='relative max-w-sm w-full'>
              <img 
                src={CONFIG.APP_PREVIEW_IMAGE} 
                alt='CPU Scheduler Application Preview'
                className='w-full h-auto brutalist-border'
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x800?text=App+Screenshot+Placeholder';
                }}
              />
              <div className='absolute -bottom-4 -right-4 bg-terminal-green text-black px-2 py-1 text-xs font-bold brutalist-border rotate-3'>
                PREVIEW_MODE
              </div>
            </div>
          </div>
          <div className='border-t-4 border-terminal-white p-2 bg-terminal-gray flex justify-between items-center'>
            <span className='text-[10px] text-terminal-white uppercase font-bold'>STATUS: APPLICATION PREVIEW</span>
            <span className='text-[10px] text-terminal-gray'>DIMENSIONS: AUTO_SCALE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
