import React from "react";
import { BiChevronRight } from "react-icons/bi";
export function Footer() {
    return (
        <div className=" w-full bg-[#666] h-full mt-[10px] text-white px-20 py-20 flex justify-between items-center">
            <div className="bg-pink-200 w-[500px] h-[500px]">
                <div className=" flex items-center bg-blue-200 text-[20px]">
                    <h1>這裡是標題</h1>
                    <BiChevronRight />
                </div>
                <ul>
                    <li>這裡是內文這裡是內文這裡是內文這裡是內文</li>
                    <li>這裡是內文這裡是內文這裡是內文這裡是內文</li>
                    <li>這裡是內文這裡是內文這裡是內文這裡是內文</li>
                </ul>
            </div>
            <div className="bg-pink-300 w-[500px] h-[500px]"></div>
            <div className="bg-pink-400 w-[500px] h-[500px]"></div>
        </div>
    );
}
