import React from "react";
import mockPage1 from "@/src/mock/Page1.json";
import { useRouter } from "next/router";
function Page1() {
    const router = useRouter();

    return (
        <div className="h-screen w-full px-20">
            <h2 className="pt-10">國際標準範圍及單位</h2>
            {mockPage1.map((item, index) => (
                <ul
                    id={item.id.toString()}
                    className="space-y-[20px] flex flex-col h-[100px] pt-10"
                >
                    <li>
                        <p className="text-[20px]">
                            {index + 1}. {item.description}
                        </p>
                    </li>
                </ul>
            ))}
            <div className="flex justify-end">
                <button
                    onClick={() => router.push("/#page2")}
                    className="mt-[100px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75"
                >
                    next Page <span className="pl-2">⏎</span>
                </button>
            </div>
        </div>
    );
}

export default Page1;
