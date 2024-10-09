"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const BelowMainPage = () => {
  const photos = ['/assets/a.png', '/assets/f.png', '/assets/c.png'];
  const videos = ['/assets/d.png', '/assets/e.png'];
  const [activeTab, setActiveTab] = useState('all'); // To track the active tab (ALL/PHOTOS/VIDEOS)
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current set of items being displayed
  const carouselRef = useRef<HTMLDivElement>(null); // Ref to track the carousel

  // Combine all the data based on the selected tab
  const getVisibleItems = () => {
    if (activeTab === 'photos') return photos;
    if (activeTab === 'videos') return videos;
    return [...photos, ...videos]; // When 'all' is selected
  };

  const visibleItems = getVisibleItems();

  // Function to move to the next set of items
  const handleNext = () => {
    if (currentIndex + 3 < visibleItems.length) {
      setCurrentIndex(currentIndex + 3); // Move forward by 3 items
    } else {
      setCurrentIndex(0); // Reset to the first set if at the end
    }
  };

  // Function to move to the previous set of items
  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3); // Move backward by 3 items
    } else {
      setCurrentIndex(visibleItems.length - (visibleItems.length % 3 || 3)); // Go to the last set if at the beginning
    }
  };

  // Handle mouse wheel scrolling for the carousel
  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      // Scroll up (left)
      handlePrev();
    } else if (event.deltaY > 0) {
      // Scroll down (right)
      handleNext();
    }
  };

  // Add event listener for wheel scroll on mount and clean it up on unmount
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('wheel', handleScroll);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('wheel', handleScroll);
      }
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[504.95px] top-[-100px] z-[1] left-[-25px] flex flex-col bg-white rotate-[3.8deg] overflow-hidden overflow-x-clip">
      {/* Inner Content Wrapper */}
      <div className="absolute inset-0 flex flex-col items-center pt-24  rotate-[-3.8deg] px-16">
        
        {/* Tab Section */}
        <div className="w-full flex justify-center z-[4] overflow-hidden">
          <div className="flex space-x-4">
            <button
              className={`text-lg font-black ${activeTab === 'all' ? 'text-yellow-400' : 'text-black-500'}`}
              onClick={() => setActiveTab('all')}
            >
              ALL
            </button>
            <button
              className={`text-lg font-black ${activeTab === 'photos' ? 'text-yellow-400' : 'text-black-500'}`}
              onClick={() => { setActiveTab('photos'); setCurrentIndex(0); }}
            >
              PHOTOS
            </button>
            <button
              className={`text-lg font-black ${activeTab === 'videos' ? 'text-yellow-400' : 'text-black-500'}`}
              onClick={() => { setActiveTab('videos'); setCurrentIndex(0); }}
            >
              VIDEOS
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="flex justify-center items-center gap-6">
          {/* Previous Button */}
          <button
            className="bg-gray-800 w-[50px] h-[50px] rounded-xl flex justify-center items-center text-white hover:bg-gray-700"
            onClick={handlePrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div ref={carouselRef} className="flex space-x-8 pt-4">
            {visibleItems.slice(currentIndex, currentIndex + 3).map((item, index) => (
              <div key={index} className="w-[300px] h-[150px] overflow-hidden bg-gray-300 rounded-lg flex justify-center items-center">
                <Image src={item} alt={`Item ${index}`} width={300} height={150} />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            className="bg-gray-800 w-[50px] h-[50px] rounded-xl flex justify-center items-center text-white hover:bg-gray-700"
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="text-center  mt-16 items-center justify-center flex  ">
        <h1 className="text-[80px] text-center font-black  text-yellow-400 ">PROJECT VISION</h1>
      </div>
      </div>

      </div>


  );
};

export default BelowMainPage;
