"use client"
import React, { useEffect, useState } from 'react'

const DigiClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {////////
      setTime(new Date());                   //
    }, 1000);                                //setInterval va de la mano de clearInterval
    return () => clearInterval(timer);//////
  }, []);
  return (
    <div className=" text-white min-h-screen w-full flex items-center justify-center">
      <div className="text-center bg-black border-[4px] border-gray-500 shadow-xl  rounded-lg p-4">
        <h1 className="text-3xl mb-8 font-extrabold ">Digital Clock</h1>
        <div className="border-8 border-[#75f94d] rounded-3xl p-4 sm:p-8 w-full sm:w-[300px] md:w-[400px] h-[150px] sm:h-[175px] flex items-center justify-center">
          <div className="text-[#75f94d] text-4xl sm:text-5xl md:text-6xl font-mono">
            <span>{time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigiClock