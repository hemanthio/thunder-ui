import React from 'react';

const Variant2 = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-3 w-3 rounded-full object-cover md:h-full md:w-48" src="path_to_profile_image" alt="Profile Picture" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Perplexity ai</div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black">Michael Scofield</div>
          <p className="mt-2 text-gray-500">
            Dodo Payments made my first online sale a breeze! I processed $1000 without a hitch, and their intuitive platform has me excited about scaling my business. Thank you, Dodo team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Variant2;