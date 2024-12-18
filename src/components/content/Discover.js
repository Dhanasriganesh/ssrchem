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
              src="https://via.placeholder.com/100" // Replace with the actual image path
              alt="Unparalleled Quality"
              className="mx-auto mb-4"
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
              src="https://via.placeholder.com/100" // Replace with the actual image path
              alt="Commitment to Transparency"
              className="mx-auto mb-4"
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
              src="https://via.placeholder.com/100" // Replace with the actual image path
              alt="Adaptability and Agility"
              className="mx-auto mb-4"
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
          href="#"
          className="text-blue-500 hover:text-blue-700 font-semibold mt-8 inline-block"
        >
          Contact Us
        </a>
      </section>

      {/* Section: Reach Out Today */}
      <section className="py-16 px-4 md:px-16 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Reach Out Today
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          We welcome the opportunity to discuss your chemical requirements and
          provide personalized solutions to support your business objectives.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <img
              src="https://via.placeholder.com/100" // Replace with actual image path
              alt="Experts Are Ready"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Our Experts Are Ready
            </h3>
            <p className="text-gray-500">
              Our knowledgeable team is here to assist you with your
              chemical-related needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <img
              src="https://via.placeholder.com/100" // Replace with actual image path
              alt="Latest Updates"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Follow Our Latest Updates
            </h3>
            <p className="text-gray-500">
              Stay up-to-date with the latest industry news and connect with us.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-lg shadow-md p-6 text-center">
            <img
              src="https://via.placeholder.com/100" // Replace with actual image path
              alt="Comprehensive Support"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Comprehensive Support
            </h3>
            <p className="text-gray-500">
              Our dedicated customer service team is committed to providing
              solutions tailored to you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discover;
