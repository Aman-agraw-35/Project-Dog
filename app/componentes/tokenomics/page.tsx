import Image from 'next/image';

const Tokenomics = () => {
  return (
    <div className="relative w-[100vw] h-[1000px] left-[-35px] z-40 flex flex-col  rotate-[-3.8deg] overflow-x-clip bg-custom-radial" >
    {/* Top Content */}
    <div className="absolute flex flex-col z-[50]  items-center rotate-[3.8deg]">
 

    {/* Tokenomics Component */}
    <div className="relative  font-black w-screen h-[500px] md:h-[600px] flex justify-center gap -0 items-center  p-8">
      {/* Left Section with text and boxes */}
      <div className="flex  flex-col justify-center space-y-6 text-white">
        <h1 className="text-[6rem]  text-white drop-shadow-lg">TOKENOMICS</h1>
        
        {/* Info Boxes */}
        <div className="space-y-4 w-[30rem] ">
          {/* Box 1 */}
          <div className="flex  font-black flex-col items-center bg-gray-900 px-4 py-4 rounded-lg shadow-lg">
            <p className="text-lg  text-white">LIQUIDITY</p>
            <span className="text-yellow-400  text-lg ml-2">LOCKED</span>
          </div>

          {/* Box 2 */}
          <div className="flex  font-black  flex-col items-center bg-gray-900 px-4 py-4 rounded-lg shadow-lg">
            <p className="text-lg text-white">CONTRACT</p>
            <span className="text-yellow-400  text-lg ml-2">RENOUNCED</span>
          </div>

          {/* Box 3 */}
          <div className="flex font-black  flex-col items-center bg-gray-900 px-4 py-4 rounded-lg shadow-lg">
            <p className="text-lg text-white">TAXES</p>
            <span className="text-yellow-400  text-lg ml-2">0%</span>
          </div>
        </div>
      </div>

      {/* Right Section with Dog Image */}
      <div className="relative w-[250px] md:w-[400px] mt-60 h-auto">
        <Image
          src="/assets/gg.png" 
          alt="Dog with money"
          width={900}
          height={900}
          className="object-contain"
        />
      </div>
      </div>
      </div>
      </div>
  );
};


export default Tokenomics;