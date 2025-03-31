// components/CustomProjectCard.jsx
import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const CustomProjectCard = () => {
  // Creating an array of paragraph items
  const features = [
    { id: 1, text: "Dedicated designer and direct Slack access" },
    { id: 2, text: "Custom development or no-code" },
    { id: 3, text: "Milestone-based delivery and clear deliverables" },
    { id: 4, text: "Brand & storytelling strategy" }
  ];

  return (
    <div className="bg-gray-50 pt-6 px-4 pb-2 sm:p-8 md:px-6 rounded-3xl mx-4 sm:mx-8   shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="space-y-6 md:space-y-8">
        <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-medium tracking-tighter font-[inter] text-gray-900">Custom Project</h2>
        
        <div className="space-y-3 sm:space-y-4">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-2 sm:gap-3">
              <div className="bg-gray-200 rounded-full p-1 mt-1">
                <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
              </div>
              <p className="text-base sm:text-lg md:text-[20px] font-medium tracking-tighter font-inter bg-gradient-to-r from-[#585858] to-[#BEBEBE] bg-clip-text text-transparent">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex  sm:flex-row justify-between items-center sm:items-center pt-6 sm:pt-8 gap-6 sm:gap-0">
          <div>
            <p className="text-2xl sm:text-[28px] md:text-[32px] font-medium tracking-tighter font-inter bg-gradient-to-r from-[#585858] to-[#BEBEBE] bg-clip-text text-transparent">
              Starting at
              <br />
              <span className="font-bold">$2000</span>
            </p>
          </div>
          
          <a 
            href="#" 
            style={{
              boxShadow: "0px 0px 8px 2px #8B7D7D inset"
            }}
            className="group bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-[20px] font-medium font-inter inline-flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            Get Started 
            <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomProjectCard;