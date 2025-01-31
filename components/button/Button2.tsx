'use client'
import { useState } from 'react';

const Button = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className='relative flex items-center justify-center'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div 
        className={`relative z-10 flex cursor-pointer text-black dark:text-white bg-white dark:bg-black items-center py-3 px-4 rounded-full ${hover ? 'translate-y-[-7px]' : ''} transition-transform duration-300`}
      >
        <h1 className='text-base font-medium'>Book Demo</h1>
      </div>
      
      {hover && (
        <div 
          className='absolute inset-0 bg-black dark:bg-white rounded-full top-2 opacity-100 transition-all duration-300'
        ></div>
      )}
    </div>
  );
};

export default Button;