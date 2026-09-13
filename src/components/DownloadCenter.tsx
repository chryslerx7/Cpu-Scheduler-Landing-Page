import React from 'react';
import { CONFIG } from '../config';
import { Download } from 'lucide-react';

const DownloadCenter: React.FC = () => {
  return (
    <section id='download' className='py-20 px-4 bg-terminal-green/5'>
      <div className='max-w-3xl mx-auto'>
        <div className='terminal-window'>
          <div className='terminal-header bg-terminal-green text-black font-bold'>
            <span>DOWNLOAD_CENTER</span>
            <span>[v1.0.0]</span>
          </div>
          <div className='p-8 space-y-8 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl md:text-5xl font-black uppercase'>CPU SCHEDULER APK</h2>
              <p className='text-terminal-gray text-sm uppercase tracking-widest'>Package Ready for Distribution</p>
            </div>

            <div className='brutalist-border p-6 text-left space-y-3 inline-block w-full max-w-md mx-auto'>
              <div className='flex justify-between text-xs'>
                <span className='text-terminal-gray'>FILE:</span>
                <span className='text-terminal-cyan font-bold'>cpu-scheduler.apk</span>
              </div>
              <div className='flex justify-between text-xs'>
                <span className='text-terminal-gray'>PLATFORM:</span>
                <span className='text-terminal-white font-bold'>Android</span>
              </div>
              <div className='flex justify-between text-xs'>
                <span className='text-terminal-gray'>TYPE:</span>
                <span className='text-terminal-white font-bold'>APPLICATION PACKAGE</span>
              </div>
              <div className='flex justify-between text-xs'>
                <span className='text-terminal-gray'>STATUS:</span>
                <span className='text-terminal-green font-bold animate-pulse'>READY</span>
              </div>
            </div>

            <div className='pt-6'>
              <a
                href={CONFIG.APK_DOWNLOAD_URL}
                download
                className='brutalist-btn brutalist-btn-green text-2xl flex items-center justify-center gap-3 w-full max-w-md mx-auto'
              >
                <Download size={24} />
                DOWNLOAD APK
              </a>
              <p className='mt-6 text-xs text-terminal-gray uppercase tracking-tighter'>
                Instructions: Download the APK and install it on an Android device. 
                Allow installation from unknown sources if prompted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCenter;
