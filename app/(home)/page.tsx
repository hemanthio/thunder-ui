'use client'

import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/docs');
  };

  return (
    <main className="flex flex-1 flex-col gap-3 justify-center items-center text-center">

      <h1 className='text-5xl max-sm:text-3xl font-semibold  tracking-[-0.7px] leading-[140%] '>The <span className='p-1  bg-purple-500  '>Ultimate-NextJS </span> <br /> Components Library </h1>

      <p className='font-light opacity-85'>build your website <span className='font-medium opacity-100'>user-interface </span>  in minutes like <span className='font-medium opacity-100'> thunder</span> ⚡</p>

      
      <ul className="list-none flex flex-col gap-1 max-sm:gap-2 mt-5 font-medium  items-start">
        <li className="flex items-center gap-2">
          <Check color="#AD46FF" />
          Collection of sections, pages and components 
        </li>
        <li className="flex items-center gap-2">
          <Check color="#AD46FF" />
          Easy integration and quick development
        </li>
        <li className="flex items-center gap-2">
          <Check color="#AD46FF" />
          Responsive across all devices
        </li>
      </ul>
      <button 
        onClick={handleButtonClick}
        className='font-medium mt-6 cursor-pointer rounded-sm text-base py-3 px-8 text-white bg-orange-400'>
        Explore documentation-<span className='text-sm opacity-75'>its free</span>
      </button>
    </main>
  );
}
