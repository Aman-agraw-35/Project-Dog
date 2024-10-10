"use client";
import Image from 'next/image';
import { useState } from 'react';

const Merchendise = () => {
  const merchandiseItems = [
    { 
      image: '/assets/merch/p.png',
      background: '/assets/merch/pb.png'
    },
    { 
      image: '/assets/merch/c.png', 
      background: '/assets/merch/cb.png' 
    },
    { 
      image: '/assets/merch/b.png', 
      background: '/assets/merch/bb.png' 
    },
    { 
        image: '/assets/merch/y.png', 
        background: '/assets/merch/yb.png' 
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? merchandiseItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex === merchandiseItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center py-16">
      <h1 className="text-5xl font-bold text-yellow-500">MERCHANDISE</h1>

      <div 
        className="relative w-full md:w-[800px] h-[400px] rounded-lg mt-8 p-8 flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${merchandiseItems[currentIndex].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-[200px] h-[300px] relative">
          <Image
            src={merchandiseItems[currentIndex].image} 
            alt="Alabay Merchandise"
            width={200}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Text: Coming Soon */}
        <div className="absolute top-4 right-4 text-gray-700 text-xl font-semibold">
          Coming Soon...
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <button onClick={scrollLeft} className="p-2 bg-white rounded-full shadow-md">
            &#x25C0; 
          </button>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <button onClick={scrollRight} className="p-2 bg-white rounded-full shadow-md">
            &#x25B6; 
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Fresh new <span className="font-bold text-white">Alabay</span> approved merch for you!
          </p>
        </div>

        <button className="mt-4 px-6 py-2 bg-black text-white rounded-full font-semibold shadow-lg">
          Discover
        </button>
      </div>
    </div>
  );
};

export default Merchendise;
