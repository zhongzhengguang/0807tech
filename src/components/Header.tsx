import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);
    return (
        <div
            className={
                shadow
                    ? "fixed w-full h-20 shadow-xl z-[100] bg-white"
                    : "fixed w-full h-20 z-[100] "
            }
        >
            <div className="flex justify-between items-center w-[1280px] h-full px-20 mx-auto">
                <Link href="/">
                    <h1 className="hover:border-b text-[30px]">0807 - tech</h1>
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Home
                            </li>
                        </Link>
                        <Link href="/Calculation">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Calculation
                            </li>
                        </Link>
                    </ul>
                    <div className="md:hidden" onClick={handleNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? "  md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
                onClick={handleNav}
            >
                <div
                    className={
                        nav
                            ? " md:hidden fixed left-0 top-0 w-[60%] sm:[75%] md:[45%] h-screen bg-white p-10 ease-in duration-500"
                            : " fixed left-[-100%] top-0 ease-in duration-500"
                    }
                >
                    <div className=" flex w-full items-center justify-between ">
                        <h1>Logo</h1>
                        <div
                            className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            onClick={handleNav}
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className=" border-b border-gray-300 my-4   pr-0">
                        <p>來搞點事</p>
                    </div>
                    <div className="pr-0">
                        <ul className="pl-0 py-4">
                            <Link href="/">
                                <li className=" py-4 text-sm">Home</li>
                            </Link>
                            <Link href="#about">
                                <li className=" py-4 text-sm ">About</li>
                            </Link>
                            <Link href="#skills">
                                <li className=" py-4 text-sm ">Skills</li>
                            </Link>
                            <Link href="#project">
                                <li className=" py-4 text-sm ">Projects</li>
                            </Link>
                            {/* <Link href="#contact">
                <li className=" py-4 text-sm ">Contact</li>
              </Link> */}
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5] ">
                                聯絡我
                            </p>
                            <div className="flex items-center justify-between my-4 sm:w-[80%]">
                                <div
                                    className="
                rounded-full
                shadow-lg
                shadow-gray-400
                p-3 cursor-pointer
                hover:scale-105
                ease-in
                duration-75"
                                >
                                    <FaLinkedinIn />
                                </div>
                                <div
                                    className="
                rounded-full
                shadow-lg
                shadow-gray-400
                p-3 cursor-pointer
                hover:scale-105
                ease-in
                duration-75"
                                >
                                    <FaGithub />
                                </div>
                                <div
                                    className="
                rounded-full
                shadow-lg
                shadow-gray-400
                p-3 cursor-pointer
                hover:scale-105
                ease-in
                duration-75"
                                >
                                    <AiOutlineMail />
                                </div>
                                <div
                                    className="
                rounded-full
                shadow-lg
                shadow-gray-400
                p-3 cursor-pointer
                hover:scale-105
                ease-in
                duration-75"
                                >
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
