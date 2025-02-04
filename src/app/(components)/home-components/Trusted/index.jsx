import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="relative w-full h-[500px] sm:h-[600px]">
            <Image
                src="/assests/herobg.png"
                alt="Electric Car Charging"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
            />
            <div className="flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 sm:px-10 md:px-16 gap-8">

                <div className="max-w-2xl text-center md:text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed">
                        Our <span className="text-[#C3D400] font-semibold">trusted</span> industry{" "}
                        <br />
                        <span className="text-[#C3D400] font-semibold">Specialists</span> help you create <br />
                        certificates and generate <br /> incentives{" "}
                        <span className="text-[#C3D400] font-semibold">Australia-wide</span>.
                    </p>
                </div>

                <div className="w-full md:w-auto flex justify-center">
                    <Image
                        src="/assests/illustration.png"
                        alt="Illustration"
                        width={400}
                        height={250}
                        className="max-w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
