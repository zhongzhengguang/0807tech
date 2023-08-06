import React, { useState } from "react";
import testway from "@/public/testway.png";
import Image from "next/image";
import mockPage3 from "@/src/mock/Page3.json";
import { useRouter } from "next/router";
function Page3() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    return (
        <div className="h-screen w-full px-20 flex justify-between pt-10">
            <div className="flex">
                <div>
                    <h2>測試方法</h2>
                    <Image
                        src={testway}
                        alt="testway"
                        width={600}
                        height={600}
                    />
                </div>
                <div
                    onClick={() => setShow(!show)}
                    className={` w-[400px] pt-20 pl-10 cursor-pointer ${
                        show ? "hidden" : "flex"
                    }`}
                >
                    本標準基於理想化的熱傳導，介於兩個平行、等溫的表面之間，這兩個表面由均勻厚度的測試材料分開。由於兩個接觸表面之間的溫度差導致在試樣中產生熱梯度，進而產生熱流。該熱流垂直於測試表面，且在表面上無橫向的熱傳導。
                </div>
                <div
                    onClick={() => setShow(!show)}
                    className={`pt-20 pl-10 ${
                        show ? "flex flex-col" : "hidden"
                    }`}
                >
                    {mockPage3.map((item, index) => (
                        <ul
                            id={item.id.toString()}
                            className="space-y-[20px] flex flex-col h-[100px] pt-10"
                        >
                            <li>
                                <p className="text-[20px]">
                                    {index + 1}. {item.title}
                                </p>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <button
                    onClick={() => router.push("/#page4")}
                    className="mb-[100px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75"
                >
                    next Page <span className="pl-2">⏎</span>
                </button>
            </div>
        </div>
    );
}

export default Page3;
