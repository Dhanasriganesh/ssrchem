import React from "react";

function Discover() {
  return (
    <div className="bg-white">
      {/* Section: Discover Our Expertise */}
      <section className="py-16 px-4 md:px-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Our Expertise
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Our chemical experts possess extensive industry knowledge and are
          committed to delivering exceptional service and support.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <img
              src="https://stevethedoc.wordpress.com/wp-content/uploads/2020/02/1942483.jpg" // Replace with the actual image path
              alt="Unparalleled Quality"
              className="flex w-20 mb-4 justify-center items-center"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Unparalleled Quality
            </h3>
            <p className="text-gray-500 mb-4">
              Quality is the foundation of our operations.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <img
              src="https://cdn.prod.website-files.com/6545c0fff4c18235e4edfc4f/66b02469c503ce0825b5fa09_test-tube-glasses.webp" // Replace with the actual image path
              alt="Commitment to Transparency"
              className="w-20 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Commitment to Transparency
            </h3>
            <p className="text-gray-500 mb-4">
              We are committed to maintaining a transparent and reliable process.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>

          {/* Card 3 */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <img
              src="https://www.wbcsd.org/wp-content/uploads/2023/08/Chemicals-Group_Action-jpeg.webp" // Replace with the actual image path
              alt="Adaptability and Agility"
              className="w-20 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Adaptability and Agility
            </h3>
            <p className="text-gray-500 mb-4">
              In the ever-evolving chemical industry, we customize solutions.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>

        <a
          href="tel:+919666884325"
          className="text-blue-500 hover:text-blue-700 font-semibold mt-8 inline-block"
        >
          Contact Us
        </a>
      </section>

      {/* Section: Reach Out Today */}
    
    </div>
  );
}

export default Discover;
