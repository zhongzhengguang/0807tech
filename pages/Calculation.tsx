import Image from "next/image";
import React, { useState } from "react";

function Calculation() {
    const [show, setShow] = useState(false);
    return (
        <div className="pt-20 w-[1280px] mx-auto">
            <div className="flex justify-center mt-[100px] space-x-[100px]">
                <div onClick={() => setShow(!show)} className=" cursor-pointer">
                    {/* <Image src={K} alt="K" width={500} height={500} /> */}
                </div>
                {show && (
                    <div className="flex flex-col">
                        {/* <Image src={TH} alt="K" width={500} height={500} />
                        <Image src={TC} alt="K" width={500} height={500} /> */}
                    </div>
                )}
            </div>
            {show && (
                <div className="flex justify-center mt-[100px] space-x-[100px]">
                    {/* <Image src={Q} alt="q" width={500} height={500} />
                    <Image src={Q1234} alt="q1234" width={500} height={500} /> */}
                </div>
            )}
        </div>
    );
}

export default Calculation;
