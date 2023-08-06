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
                    <ul className="flex">
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
                </div>
            </div>
        </div>
    );
};
export default Header;
