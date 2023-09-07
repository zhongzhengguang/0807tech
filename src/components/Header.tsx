import React from "react";
import Link from "next/link";
import mockHeader from "@/src/mock/Header.json";
import { useHeader } from "@/src/hook/useHeader";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/public/logo.jpeg";

const Header = () => {
    const { showList, setShowList } = useHeader();
    const router = useRouter();

    return (
        <div
            onMouseLeave={() => setShowList("")}
            className={"fixed w-full h-20 shadow-xl z-[100] bg-white"}
        >
            <div className="flex justify-between items-center w-[1280px] h-full px-20 mx-auto">
                <Link href="/" className="flex items-center space-x-3">
                    <Image src={logo} width={100} height={100} alt="logo" />
                    <h1 className="hover:border-b text-[30px]">精志科技</h1>
                </Link>
                <div>
                    <ul className="flex">
                        {mockHeader.map((item) => (
                            <div
                                onMouseEnter={() => setShowList(item.title)}
                                key={item.id}
                                className="ml-10 text-sm relative uppercase hover:border-b hover:cursor-pointer border-black"
                            >
                                {item.title}
                                {showList === item.title && (
                                    <div
                                        className={`absolute bg-white px-5 py-2 w-[200px] flex flex-col space-y-5 mt-5`}
                                    >
                                        {item.list.map((listItem) => (
                                            <div
                                                onClick={() =>
                                                    router.push(listItem.link)
                                                }
                                                key={listItem.id}
                                                className={`hover:border-b`}
                                            >
                                                {listItem.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="flex space-x-2">
                    <p className="cursor-pointer hover:border-b hover:border-black">
                        中文
                    </p>
                    <p>|</p>
                    <p className="cursor-pointer hover:border-b hover:border-black">
                        EN
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Header;
