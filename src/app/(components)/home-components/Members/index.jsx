

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MemberScroller = () => {
    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40">
                <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">
                    Members of
                </h2>
                <div className="relative">
                    <div className="bg-white flex items-center">
                        <button className="absolute left-0 sm:-left-4 md:-left-6 lg:-left-8 top-1/2 transform -translate-y-1/2 p-2 rounded-full swiper-button-prev z-10">
                            <FaChevronLeft className="text-gray-500 text-lg" />
                        </button>

                        <Swiper
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1, spaceBetween: 10 },
                                768: { slidesPerView: 2, spaceBetween: 15 },
                                1024: { slidesPerView: 4, spaceBetween: 20 },
                            }}
                            spaceBetween={20}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            modules={[Navigation]}
                            className="w-full"
                        >
                            {[
                                "member1.png",
                                "member2.png",
                                "member3.png",
                                "member4.jpg",
                                "member5.svg",
                                "member6.png",
                                "member7.png",
                                "member8.png",
                                "member9.svg",
                            ].map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        src={`/assests/${image}`}
                                        width={250}
                                        height={0}
                                        alt={`Member ${index + 1}`}
                                        className="mx-auto filter grayscale hover:filter-none transition duration-300"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="absolute right-0 sm:-right-4 md:-right-6 lg:-right-8 top-1/2 transform -translate-y-1/2 p-2 rounded-full swiper-button-next z-10">
                            <FaChevronRight className="text-gray-500 text-lg" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-lime-300 border-2 w-full"></div>
        </section>
    );
};

export default MemberScroller;
