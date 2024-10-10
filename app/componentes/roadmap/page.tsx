import Image from 'next/image';
import "./roadmap.css" ;
const Roadmap = () => {
  return (
    <div className="relative w-screen h-[1004.95px] top-[-150px] mb-40 z-40 left-[-80px] flex flex-col bg-white rotate-[8deg]  overflow-x-clip">
            <div className="absolute inset-0 flex z-40 flex-col items-center pt-24  rotate-[-8deg] px-16">
       <div className=" flex flex-row px-8 z-50 min-h-min ">
      <div className="text-center  ">
        <p className="text-lg font-semibold text-gray-700">
          Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
        </p>
        <p className="text-xl font-bold text-yellow-500 mt-2">
          Join us as we grow and achieve new heights.
        </p>
      </div>
      <div className="relative w-full flex justify-center    top-[-300px]">
        <Image
          src="/assets/c.png" 
          alt="Dog holding a map"
          width={600} // Adjust width as needed
          height={600} // Adjust height as needed
          className="object-contain  "
        />
      </div>

      </div>

      {/* Roadmap Items */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1  px-4 max-w-6xl  relative-card  ]">
        {/* Roadmap Item 1 */}
        <div className="bg-yellow-300 flex flex-col-reverse items-center pt-6 object-contain rounded-l-lg  ">
          <Image
            src="/assets/b.png" 
            alt="Community Building"
            width={276} // Adjust as needed
            height={150} // Adjust as needed
            className="object-contain"
          />
          <p className="text-center px-4 text-xl font-bold text-white ">
            Community Building and Initial Launch
          </p>
        </div>

        {/* Roadmap Item 2 */}
        <div className="bg-blue-300 flex flex-col-reverse items-center pt-6 object-contain  ">
          <Image
            src="/assets/d.png" 
            alt="Merchandise Store Launch"
            width={276} // Adjust as needed
            height={150} // Adjust as needed
            className="object-contain"
          />
          <p className="text-center px-4 text-xl font-bold text-white ">
            Merchandise Store Launch
          </p>
        </div>

        {/* Roadmap Item 3 */}
        <div className="bg-purple-300 flex flex-col-reverse items-center object-contain pt-6   ">
          <Image
            src="/assets/e.png" 
            alt="Community Events"
            width={276} // Adjust as needed
            height={150} // Adjust as needed
            className="object-contain"
          />
          <p className="text-center px-4 text-xl font-bold text-white">
            Community Events and Contests
          </p>
        </div>

        {/* Roadmap Item 4 */}
        <div className="bg-red-300 flex flex-col-reverse items-center object-contain pt-6 rounded-r-lg  ">
          <Image
            src="/assets/cc.png" 
            alt="Expansion and New Features"
            width={276} // Adjust as needed
            height={150} 
            className="object-contain"
          />
          <p className="text-center px-4 text-xl font-bold text-white ">
            Expansion and New Features
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Roadmap;
