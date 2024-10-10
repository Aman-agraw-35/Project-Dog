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
    <div className="relative w-screen h-[254.95px] top-[-150px] mb-40 z-40 left-[-80px] flex flex-col bg-white rotate-[3.8deg]  overflow-x-clip">
            <div className="absolute inset-0 flex z-40 flex-col items-center pt-24  rotate-[-3.8deg] px-16">
      <h1 className="text-[5rem] font-black text-yellow-500  ">MERCHANDISE</h1>

      <div 
        className="relative w-full md:w-[1000px]  z-[60] rounded-lg mt-8 px-8 flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${merchandiseItems[currentIndex].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className=" relative">
          <Image
            src={merchandiseItems[currentIndex].image} 
            alt="Alabay Merchandise"
            width={700}
            height={1000}
            className="object-cover"
          />
        </div>

        <div className="absolute top-16 right-24 text-black text-xl font-extrabold">
          Coming Soon...
        </div>

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



        </div>
      </div>
    </div>
  );
};

export default Merchendise;
