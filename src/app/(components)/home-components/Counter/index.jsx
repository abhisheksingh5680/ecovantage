"use client";

import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

const CarbonAbatement = () => {
    return (
        <div className="flex flex-col items-center bg-white py-10 sm:py-16 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-12 sm:mb-16 text-center">
                17 Years of Carbon Abatement
            </h2>

            {/* Responsive Layout for Counters */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-20">
                {/* Main Counter */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#c3d343] mb-6 sm:mb-8">
                        <strong>
                            <CountUp start={0} end={10724707} duration={3} separator="," />
                        </strong>
                    </h1>
                    <p className="text-lg sm:text-2xl font-semibold text-black mb-4 sm:mb-6">
                        tonnes of CO<sub>2</sub>e
                    </p>
                    <p className="text-gray-500 mb-8 sm:mb-10">equivalent to:</p>
                </div>

                {/* Counter: Cars */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <Image
                        src="/assests/counter1.png"
                        alt="Carbon Abatement"
                        width={80}
                        height={80}
                        className="w-16 sm:w-20 lg:w-24"
                    />
                    <div className="text-lg sm:text-xl font-semibold text-gray-600 mt-4 mb-4 sm:mb-8">
                        <CountUp start={0} end={2501594} duration={3} separator="," />
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base">petrol cars off the road</p>
                </div>

                {/* Counter: Trees */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <Image
                        src="/assests/counter2.png"
                        alt="Carbon Abatement"
                        width={85}
                        height={85}
                        className="w-16 sm:w-20 lg:w-24"
                    />
                    <div className="text-lg sm:text-xl font-semibold text-gray-600 mt-4 mb-4 sm:mb-8">
                        <CountUp start={0} end={177333952} duration={3} separator="," />
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base">trees planted</p>
                </div>

                {/* Counter: Flights */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <Image
                        src="/assests/counter3.png"
                        alt="Carbon Abatement"
                        width={80}
                        height={80}
                        className="w-16 sm:w-20 lg:w-24"
                    />
                    <div className="text-lg sm:text-xl font-semibold text-gray-600 mt-4 mb-4 sm:mb-8">
                        <CountUp start={0} end={6308651} duration={3} separator="," />
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base">flights abroad avoided</p>
                </div>
            </div>

            {/* Button */}
            <button className="mt-8 sm:mt-10 px-4 sm:px-6 py-2 sm:py-3 bg-[#9ebd2a] text-white rounded-sm shadow-lg hover:bg-[#c3d343] text-sm sm:text-base">
                Our Abatement
            </button>
        </div>
    );
};

export default CarbonAbatement;
