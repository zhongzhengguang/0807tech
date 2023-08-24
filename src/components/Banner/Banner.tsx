import Image from "next/image";
import React from "react";
import Banner1 from "@/public/Banner1.png";
export function Banner() {
  return (
    <div className="w-full bg-pink-200 h-[520px]">
      <Image src={Banner1} alt="/" className=" bg-cover w-full h-full" />
    </div>
  );
}
