import Image from 'next/image';

const DogWithMap = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center py-16">
      <div className="relative w-full flex justify-center">
        <Image
          src="/path-to-your-dog-image.png" // Replace with the actual path to your dog with map image
          alt="Dog holding a map"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          className="object-contain"
        />
      </div>

      {/* Roadmap Text */}
      <div className="text-center mt-6">
        <p className="text-lg font-semibold text-gray-700">
          Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
        </p>
        <p className="text-xl font-bold text-yellow-500 mt-2">
          Join us as we grow and achieve new heights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 px-4 max-w-6xl">
        <div className="bg-yellow-300 flex flex-col items-center p-6 rounded-lg shadow-md">
          <Image
            src="/path-to-community-image.png" // Replace with the actual image path
            alt="Community Building"
            width={150} // Adjust as needed
            height={150} // Adjust as needed
            className="object-contain"
          />
          <p className="text-center text-lg font-bold text-white mt-4">
            Community Building and Initial Launch
          </p>
        </div>

        {/* Roadmap Item 2 */}
        <div className="bg-blue-300 flex flex-col items-center p-6 rounded-lg shadow-md">
          <Image
            src="/path-to-merchandise-image.png" // Replace with the actual image path
            alt="Merchandise Store Launch"
            width={150} // Adjust as needed
            height={150} // Adjust as needed
            className="object-contain"
          />
          <p className="text-center text-lg font-bold text-white mt-4">
            Merchandise Store Launch
          </p>
        </div>

        {/* Roadmap Item 3 */}
        <div className="bg-purple-300 flex flex-col items-center p-6 rounded-lg shadow-md">
          <Image
            src="/path-to-events-image.png" // Replace with the actual image path
            alt="Community Events"
            width={150} // Adjust as needed
            height={150} // Adjust as needed
            className="object-contain"
          />
          <p className="text-center text-lg font-bold text-white mt-4">
            Community Events and Contests
          </p>
        </div>

        {/* Roadmap Item 4 */}
        <div className="bg-red-300 flex flex-col items-center p-6 rounded-lg shadow-md">
          <Image
            src="/path-to-expansion-image.png" // Replace with the actual image path
            alt="Expansion and New Features"
            width={150} // Adjust as needed
            height={150} // Adjust as needed
            className="object-contain"
          />
          <p className="text-center text-lg font-bold text-white mt-4">
            Expansion and New Features
          </p>
        </div>
      </div>
    </div>
  );
};

export default DogWithMap;
