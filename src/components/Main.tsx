import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Main() {
    const router = useRouter();

    return (
        <div id="home" className=" w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className=" h-[400px] flex flex-col ">
                    <h1 className="py-4 text-gray-700 w-full">
                        Designation: D5470 − 17
                    </h1>
                    <p
                        onClick={() => router.push("/#page1")}
                        className="mt-[100px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointerhover:scale-105ease-in duration-75 cursor-pointer"
                    >
                        開始
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
