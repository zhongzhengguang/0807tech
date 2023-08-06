import React, { useState } from "react";
import testway from "@/public/testway.png";
import Image from "next/image";
import mockPage5 from "@/src/mock/Page5.json";
import { useRouter } from "next/router";
function Page5() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    return (
        <div className="h-screen w-full px-20 flex justify-between pt-10">
            <div className="flex">
                <div>
                    <h2>測試規範</h2>
                    {mockPage5.map((item, index) => (
                        <ul
                            onClick={() => setShow(!show)}
                            id={item.id.toString()}
                            className="space-y-[20px] flex flex-col h-[100px] pt-10"
                        >
                            <li>
                                <p className="text-[20px]">
                                    {index + 1}. {item.title}
                                </p>

                                {show && (
                                    <p className=" text-[20px] text-red-400">
                                        {item.description}
                                    </p>
                                )}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <button
                    onClick={() => router.push("/Calculation")}
                    className="mb-[100px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75"
                >
                    next Page <span className="pl-2">⏎</span>
                </button>
            </div>
        </div>
    );
}

export default Page5;
