import React, { useState } from "react";
import testway from "@/public/testway.png";
import Image from "next/image";
import mockPage4 from "@/src/mock/Page4.json";
import { useRouter } from "next/router";
function Page4() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    return (
        <div className="h-screen w-full px-20 flex justify-between pt-10">
            <div className="flex">
                <div>
                    <h2>材料類型</h2>
                    <ul
                        onClick={() => setShow(!show)}
                        className=" space-y-[40px] flex flex-col h-[100px] pt-10"
                    >
                        {mockPage4.map((item, index) => (
                            <li id={item.id.toString()}>
                                <p className="text-[20px]">
                                    {index + 1}. {item.title}
                                </p>
                                <p className="text-[18px]">
                                    {item.description}
                                </p>
                                {show && (
                                    <div className="mt-2">
                                        <p className=" text-[16px] text-red-400">
                                            {item.method}
                                        </p>
                                        <p className=" text-[16px] text-red-500">
                                            {item.produce}
                                        </p>
                                    </div>
                                )}
                            </li>
                        ))}

                        <div
                            className={`mt-[100px] text-[20px] text-red-400 ${
                                show ? "flex" : "hidden"
                            }`}
                        >
                            <p>通過在表面塗抹導熱脂或矽油，可以減少接觸熱阻</p>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <button
                    onClick={() => router.push("/#page5")}
                    className="mb-[100px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75"
                >
                    next Page <span className="pl-2">⏎</span>
                </button>
            </div>
        </div>
    );
}

export default Page4;
