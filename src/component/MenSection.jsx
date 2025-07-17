import React from 'react';

const MenSection = () => {
  const data = [
    {
      src: "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTCM2_bRKf-LaZdvQGzpOxG95TDtXM0xN4KW7EsTLhM=",
      alt: "Black blank t-shirt",
      price: "1000"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fHww",
      alt: "Premium t-shirt",
      price: "1000"
    },
    {
      src: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
      alt: "Folded t-shirt",
      price: "1000"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1687850859102-222de19e8192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByaW50ZWQlMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      alt: "T-shirt hanging",
      price: "1000"
    },
  
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white to-black mt-5">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Men's Collection</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition">
            <div className="flex flex-col items-center p-4">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="h-52 sm:h-56 md:h-64 object-cover rounded-lg mb-3 w-full transition-transform duration-200 hover:scale-105"
              />
              <p className="text-base sm:text-lg font-medium text-gray-800">Price: ₹{item.price}</p>
              <button 
                className="mt-3 bg-black text-white px-5 py-2 text-sm sm:text-base rounded-full hover:bg-gray-800 transition cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenSection;
