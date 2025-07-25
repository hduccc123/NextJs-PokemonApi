'use client';
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ChangeThemeToggle from "./ChangeThemeToggle";
import Image from "next/image";

const NavComponent = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed nav relative border-b-4 border-gray-200">
            {/* Logo */}
            <div>
                <h1 className="text-5xl font-signature ml-2">
                    <a
                        className="link-underline link-underline-black"
                        href="/home"
                        rel="noreferrer"
                    >
                        <Image
                            src="/images/logoapp.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </a>
                </h1>
            </div>

            {/* Menu chính (Desktop) */}
            <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 text-black">
                <li className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-gray-200 duration-200 text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                    <Link href="/home">home</Link>
                </li>
                <li className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-gray-200 duration-200 text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300)">
                    <Link href="/about">about</Link>
                </li>
                <li className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-gray-200 duration-200 text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                    <Link href="#languages">languages</Link>
                </li>
                <li className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-gray-200 duration-200 text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                    <ChangeThemeToggle />
                </li>
            </ul>


            <div className="border-b-4 border-gray-200"></div>

            {/* Nút mở menu mobile */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Menu Mobile */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <Link onClick={() => setNav(false)} href="#home">home</Link>
                    </li>
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <Link onClick={() => setNav(false)} href="/about">about</Link>
                    </li>
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <Link onClick={() => setNav(false)} href="#languages">languages</Link>
                    </li>
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <ChangeThemeToggle />
                    </li>
                </ul>
            )}


        </div>
    );
};

export default NavComponent;
