import React from "react";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div>
      <Navbar/>
      <div class="bg-[url('././landingimg.png')] bg-cover bg-center h-screen">
        <div class="flex justify-center ">
          <div class="text-white text-6xl font-semibold ">
            Welcome To Our Store
          </div>
          <a href="/products">
          <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Buy Products
            </button>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Home;
