import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#F1F1F7] py-8 ">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="flex flex-col items-center md:items-start mt-4">
                        <img
                            src="/assests/ecovantage.svg"
                            alt="Ecovantage Logo"
                            className="mb-4 w-32 sm:w-40"
                        />
                        <img
                            src="/assests/carbon.png"
                            alt="Carbon Neutral"
                            className="mb-4 w-28 sm:w-32"
                        />
                        <div className="flex space-x-4">
                            <span className="inline-flex justify-center gap-2">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="0" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-[#464C4B] mb-4">Energy Schemes</h3>
                        <ul className="space-y-2 font-medium text-[#65767A] text-sm sm:text-base">
                            <li>How Energy Schemes Work</li>
                            <li>What is an ACP</li>
                            <li>RET</li>
                            <li>REGO</li>
                            <li>ESS</li>
                            <li>VEU</li>
                            <li>REPS</li>
                            <li>PRCs</li>
                            <li>PDRS</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-[#464C4B] mb-4">Help Centre</h3>
                        <ul className="space-y-2 text-[#65767A] text-sm sm:text-base">
                            <li>Glossary</li>
                            <li>FAQs</li>
                            <li>How to Geotag Photos</li>
                            <li>Troubleshooting & Warranty</li>
                            <li>Dispute Resolution</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-[#464C4B] mb-4">About</h3>
                        <ul className="space-y-2 text-[#65767A] text-sm sm:text-base">
                            <li>Contact</li>
                            <li>Organisation We Support</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-[#464C4B] mb-4">Acknowledgement</h3>
                        <p className="text-[#65767A] text-sm sm:text-base">
                            Ecovantage acknowledges the Traditional Owners of the land on which we live and
                            work. We honour and respect their ongoing cultural and spiritual connection to
                            the Country. We pay our respects to Elders past, present and emerging.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-400 border  mt-10"></div>
                <div className="mt-5 text-center text-gray-500 text-xs sm:text-sm">
                    © 2025 Ecovantage Pty Ltd
                </div>
            </div>
        </footer>
    );
};

export default Footer;
