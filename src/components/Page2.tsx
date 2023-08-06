import React from "react";
import mockPage2 from "@/src/mock/Page2.json";
import { useRouter } from "next/router";
function Page2() {
    const router = useRouter();

    return (
        <div className="h-screen w-full px-20 flex justify-between">
            <div>
                <h2 className="pt-10">術語定義</h2>
                {mockPage2.map((item, index) => (
                    <ul
                        id={item.id.toString()}
                        className="space-y-[20px] flex flex-col h-[100px] pt-10"
                    >
                        <li>
                            <p className="text-[20px]">
                                {index + 1}. {item.title} {item.unit}
                            </p>
                        </li>
                    </ul>
                ))}
            </div>
            <div className="flex flex-col justify-end">
                <button
                    onClick={() => router.push("/#page3")}
                    className="mb-[200px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75"
                >
                    next Page <span className="pl-2">⏎</span>
                </button>
            </div>
        </div>
    );
}

export default Page2;
