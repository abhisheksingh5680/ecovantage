export default function HeroSection() {
    return (
        <div className="container mx-auto">
            <div className="relative h-screen w-full">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover"
                >
                    <source src="/assests/ecovantage_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white px-6 sm:px-16 lg:px-32 gap-8">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
                        Australia’s Most Versatile <br />
                        Energy Certificate & <br /> Auditing Specialists.
                    </h1>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <button className="bg-[#9ebd2a] text-black px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-[#c3d343] transition duration-300">
                            Energy Certificate Creation &rarr;
                        </button>
                        <button className="bg-[#9ebd2a] text-black px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-[#c3d343] transition duration-300">
                            Energy Audits &rarr;
                        </button>
                        <button className="bg-[#9ebd2a] text-black px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-[#c3d343] transition duration-300">
                            Measurement & Verification &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
