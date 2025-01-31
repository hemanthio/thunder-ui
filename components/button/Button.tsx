

import { MoveRight } from 'lucide-react';



const Button = () => {


  return (
    <div 
    
      className='flex gap-2 cursor-pointer text-white items-center py-2 pr-2 pl-4 bg-[#F15024] rounded-full' >
      <h1 className='text-base font-medium'>Register Now</h1>
      <div className='p-2 rounded-full bg-white '>
      
       <div>
          <MoveRight color='#F15024' />
          </div>
      
      </div>
    </div>
  );
};

export default Button;