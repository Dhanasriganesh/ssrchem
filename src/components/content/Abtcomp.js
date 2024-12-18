import React from "react";
import { FaLeaf, FaBalanceScale, FaHandshake } from "react-icons/fa";

function Abtcomp() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">About Our Company</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="text-center bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <FaLeaf className="text-green-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>Deliver sustainable chemical solutions with a focus on safety, quality, and efficiency.</p>
          </div>

          {/* Card 2 */}
          <div className="text-center bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <FaBalanceScale className="text-orange-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p>Integrity and innovation guide us to deliver chemicals that exceed your expectations.</p>
          </div>

          {/* Card 3 */}
          <div className="text-center bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <FaHandshake className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Our Partnerships</h3>
            <p>We collaborate with top labs and industries for long-term, trusted partnerships.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abtcomp;
