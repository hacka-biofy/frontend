import React from 'react';
import Photo from './Photo';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full flex items-center justify-center px-4 lg:px-6 py-2.5 text-center'>
      <div className='flex flex-wrap border-2 rounded-full bg-[#2A6041] justify-between items-center mx-auto max-w-screen-xl border border-black' style={{ borderWidth: '4px', padding: '10px' }}>
        <p>
          <Photo />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
