'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    content: "The platform transformed how we handle client projects. The workflow automation saved us countless hours and improved our delivery times significantly.",
    name: "Sarah Chen",
    company: "DesignFlow Studio",
    image: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    content: "Implementation was seamless and our team adapted quickly. Our productivity has increased by 40% since we started using the service.",
    name: "James Rodriguez",
    company: "TechForward Labs",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D"
  },
  {
    content: "Outstanding customer support and powerful features. This solution has become an integral part of our daily operations.",
    name: "Emily Watson",
    company: "Innovate AI",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D"
  }
];

const Variant1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-lg mx-auto p-6 rounded-lg ">
      <div className="flex flex-col justify-between h-full">
        <div className="overflow-hidden flex-1">
          <p className="text-lg font-medium tracking-tight leading-relaxed line-clamp-4 dark:text-white">
          &quot; {testimonials[currentIndex].content} &quot;
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold tracking-tight dark:text-gray-500">
                {testimonials[currentIndex].name}
              </h3>
              <p className="tracking-tight dark:text-gray-600">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={prev}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none  border border-gray-400 dark:hover:bg-gray-700 dark:border-gray-600"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-500" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-lg border border-gray-400 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variant1;