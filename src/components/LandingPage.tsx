import React from "react";
import Navbar from "./Navbar";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center w-screen h-screen p-12 gap-16">
        <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[400px] gap-4">
          <div className="text-5xl font-bold">
            🪂
          </div>
          <div className="text-5xl font-bold">
            when2meet
          </div>
          <div className="text-6xl font-bold text-orange-elevated mt-[-4px]">
            Elevated
          </div>
          <div className="text-gray-500 mt-2">
            Open-source, easy-to-use, free forever
          </div>
        </div>
        <div className="w-full sm:max-w-[350px] h-[250px] bg-colorful rounded-[8px] p-[2px] drop-shadow-pink">
          <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-[6px] p-8 gap-4">
            <div className="text-sm text-gray-500 mb-2">
              Try Parachute right now
            </div>
            <button className="bg-black text-white text-center font-semibold rounded-lg w-full p-3">
              Sign in with Google
            </button>
            <button className="border text-center font-semibold rounded-lg w-full p-3">
              Sign in with OAuth
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;
