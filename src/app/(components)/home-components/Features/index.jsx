import Image from "next/image";

const marketUpdates = [
    {
        id: 1,
        title: "Market Update",
        date: "31 January 2025",
        author: "Katie Tebbatt",
        image: "/assests/market1.webp",
    },
    {
        id: 2,
        title: "Market Update",
        date: "24 January 2025",
        author: "Benjamin Lumley",
        image: "/assests/market2.webp",
    },
    {
        id: 3,
        title: "Market Update",
        date: "17 January 2025",
        author: "Nancy Sanjoto",
        image: "/assests/market3.webp",
    },
];

const MarketUpdates = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-44">
            <div className="flex justify-center mb-20">
                <h2 className="text-2xl font-semibold text-center text-[#3a4042]">Latest Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {marketUpdates.map((update) => (
                    <div key={update.id} className="bg-white shadow-lg overflow-hidden">
                        <div className="relative w-full h-72">
                            <Image
                                src={update.image}
                                alt={update.title}
                                layout="fill"
                                objectFit="cover"
                            />

                        </div>
                        <div className="p-4 text-center text-lg font-semibold">
                            {update.title} | {update.date}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-20">
                <button className="bg-[#9ebd2a] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#c3d343] transition">
                    Read more →
                </button>
            </div>
        </div>
    );
};

export default MarketUpdates;
