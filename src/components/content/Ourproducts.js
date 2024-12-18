import React from "react";
import { FaFlask, FaCheckCircle } from "react-icons/fa";

function Ourproducts() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaFlask className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Chemical Purity</h3>
            <p className="mb-4">Our chemicals are formulated with the highest purity for optimal results.</p>
            <button className="text-orange-500 hover:text-orange-600 font-bold">Learn More</button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-yellow-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="mb-4">Guaranteed quality through rigorous testing and standards.</p>
            <button className="text-orange-500 hover:text-orange-600 font-bold">Learn More</button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaFlask className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product Versatility</h3>
            <p className="mb-4">Trusted by industries and labs for versatile applications.</p>
            <button className="text-orange-500 hover:text-orange-600 font-bold">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourproducts;
