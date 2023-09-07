import Image from "next/image";
import React from "react";
import Banner1 from "@/public/Banner1.png";
import Banner2 from "@/public/Banner2.png";
import Banner3 from "@/public/Banner3.png";
import Banner4 from "@/public/Banner4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const BannerImages = [
    {
        id: 1,
        img: Banner1,
    },
    {
        id: 2,
        img: Banner2,
    },
    {
        id: 3,
        img: Banner3,
    },
    {
        id: 4,
        img: Banner4,
    },
];

export function Banner() {
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    return (
        <div className=" relative bg-pink-200 w-full ">
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                allowTouchMove
                loop
                autoplay={{
                    delay: 3000,
                }}
                observer
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return (
                            '<span class="' +
                            className +
                            '"style="background-color: rgba(255, 255, 255, 0.8);"></span>'
                        );
                    },
                }}
            >
                {BannerImages.map((BannerImage) => (
                    <SwiperSlide key={BannerImage.id}>
                        <div className="absolute inset-0 bg-black opacity-20" />
                        <Image
                            src={BannerImage.img.src}
                            alt="/"
                            className="z-[-1] bg-cover w-full bg-center"
                            width={500}
                            height={500}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="fontIkea absolute top-[83px] left-[100px] z-50 text-white ">
                <h1 className="leading-48 text-[33px] font-bold  tracking-wider">
                    這裡是內文
                </h1>
                <div className=" my-[11px] h-[2px] w-[254px] bg-white" />
                <h2 className=" text-[18px] font-bold tracking-wider">
                    這裡是內文
                </h2>
                <button
                    // onClick={handleClick}
                    className=" fontIkea mt-[53px] flex h-[39px] w-[170px] items-center rounded-full bg-[#FBD914] pl-[20px] text-[12px] font-bold text-[#0058A3]"
                >
                    聯繫IKEA租賃團隊
                    <img
                        className="ml-[16px]"
                        // src={Left.src}
                        alt="headerIcon"
                        width={11}
                        height={11}
                    />
                </button>
            </div>
        </div>
    );
}
