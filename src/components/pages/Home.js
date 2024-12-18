import React from "react";
import Abtcomp from "../content/Abtcomp";
import Ourproducts from "../content/Ourproducts";
import Strive from "../content/Strive";
import Discover from "../content/Discover";
function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen text-white flex items-center"
        style={{ backgroundImage: "url('https://algolprod.blob.core.windows.net/image-container/images/librariesprovider3/palvelut/ac_bulk_breaking_1700x890.tmb-post.jpg?sfvrsn=bb125939_27')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Discover the <span className="text-red-600">Power</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your one-stop solution for sustainable, efficient, and high-quality chemicals tailored for labs and industries.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition">
            Shop Chemicals
          </button>
        </div>
      </div>
      <div><Abtcomp/></div>
      <div><Ourproducts/></div>
      <div><Strive/></div>
      <div><Discover/></div>
    </div>
  );
}

export default Home;
