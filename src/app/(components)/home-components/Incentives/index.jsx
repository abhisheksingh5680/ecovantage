import Image from "next/image";

const HeroSection = () => {
    return (

        <div className="relative w-full h-[450px] sm:h-[550px] flex items-center">
            <div className="container mx-auto">
                <Image
                    src="/assests/image1.webp"
                    alt="Electric Car Charging"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full"
                />
                <div className="relative max-w-xl sm:max-w-2xl px-4 sm:px-6 md:px-12 lg:px-20 text-white">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                        Incentives Calculator, Battery Eligibility, and all of your Questions, Answered.
                    </h1>
                    <p className="mt-4 text-base sm:text-lg">
                        Everything you need to know about the NSW PDRS battery incentives, in one place.
                    </p>
                    <button className="mt-6 bg-white text-black font-medium px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                        NSW Battery Incentives &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
