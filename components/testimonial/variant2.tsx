import React from 'react';

interface Testimonial {
  name: string;
  company: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    company: "Brightflow Tech",
    image: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    content: "The payment processing system transformed our online store operations. We handled $2500 in sales on day one without any technical issues. The dashboard analytics are incredibly insightful!"
  },
  {
    name: "James Rodriguez",
    company: "EcoMart Solutions",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    content: "Finally found a payment platform that just works! Processed over $1800 in my first week, and the integration was surprisingly simple. The customer support team is incredibly responsive."
  },
  {
    name: "Alex Thompson",
    company: "Digital Nomad Co",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    content: "As a new business owner, I was worried about payment processing. But this platform made everything seamless! Handled $3000 in transactions flawlessly. The mobile app is a game-changer."
  },
  {
    name: "Lisa Patel",
    company: "Wellness Collective",
    image: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    content: "The platform exceeded all expectations. Our first month brought in $5000, and the automatic deposit feature made managing cash flow effortless. Highly recommend for small businesses!"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white rounded-lg p-6 shadow-md mb-4">
    <div className="flex items-center mb-4">
      <img 
        src={testimonial.image} 
        alt={`${testimonial.name}'s profile`}
        className="w-[45px] h-[45px] object-cover rounded-full mr-3"
      />
      <div>
        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
        <p className="text-gray-600 text-sm">{testimonial.company}</p>
      </div>
    </div>
    <p className="text-black/90 font-medium tracking-[-0.5px] leading-[140%]">{testimonial.content}</p>
  </div>
);

const Variant2 = () => (
  <div className="max-w-4xl mx-auto p-4 grid gap-4 md:grid-cols-2">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} />
    ))}
  </div>
);

export default Variant2;