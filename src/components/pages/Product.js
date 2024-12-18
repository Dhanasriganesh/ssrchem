import React from "react";
import {Link} from "react-router-dom";
const products = [
  { name: "PET ETHER", image: "pet_ether.jpg", description: "High-purity PET Ether used in pharmaceutical and industrial applications." },
  { name: "ETHYL ACETATE", image: "ethyl_acetate.jpg", description: "A versatile solvent for printing, packaging, and coatings." },
  { name: "IPA", image: "ipa.jpg", description: "Isopropyl Alcohol (IPA) with excellent solvent properties for multiple industries." },
  { name: "MTBE", image: "mtbe.jpg", description: "Methyl Tertiary Butyl Ether (MTBE) for industrial and automotive use." },
  { name: "ACETONITRILE", image: "acetonitrile.jpg", description: "A critical solvent in pharmaceutical synthesis and HPLC analysis." },
  { name: "THF", image: "thf.jpg", description: "Tetrahydrofuran (THF), widely used in polymer and pharmaceutical industries." },
  { name: "ACETONE", image: "acetone.jpg", description: "A reliable solvent for coatings, plastics, and chemical industries." },
  { name: "DOP", image: "dop.jpg", description: "Dioctyl Phthalate (DOP), a high-performance plasticizer for polymers." },
  { name: "TOLUENE", image: "toluene.jpg", description: "A powerful solvent for paints, coatings, and adhesives." },
  { name: "HEXANE", image: "hexane.jpg", description: "A versatile solvent used in extraction and industrial applications." },
  { name: "ACETIC ACID", image: "acetic_acid.jpg", description: "A high-quality chemical for pharmaceutical and industrial use." },
  { name: "XYLENE", image: "xylene.jpg", description: "A solvent for paints and coatings with excellent performance." },
  { name: "ORTHO XYLENE", image: "ortho_xylene.jpg", description: "A chemical intermediate used in various industrial processes." },
  { name: "MIX XYLENE", image: "mix_xylene.jpg", description: "A versatile mix of xylenes for coating and chemical applications." },
  { name: "MDC", image: "mdc.jpg", description: "Methylene Dichloride (MDC), a reliable solvent for pharmaceuticals." },
  { name: "DMF", image: "dmf.jpg", description: "Dimethylformamide (DMF) for high-performance industrial applications." },
  { name: "CHLOROFORM", image: "chloroform.jpg", description: "A key solvent for chemical and pharmaceutical industries." },
  { name: "FORMALDEHYDE", image: "formaldehyde.jpg", description: "A critical raw material for resins, adhesives, and coatings." },
];

function Product() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      {/* Company Information */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to SSR Chem</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our company specializes in the supply of chemicals for various industries, including pharmaceuticals, printing, formulation, plastics, packaging, and coatings. 
          We are committed to meeting your expectations and delivering quality products on time.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link to="/contact">
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-gray-600">
          We also provide other chemicals as per your requirements at the best price. It would be our pleasure to work with your company and deliver quality products.
        </p>
      </div>
    </div>
  );
}

export default Product;
