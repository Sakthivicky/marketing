"use client"
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-opacit-90 text-white z-50">
            {/* Logo on the left */}
            <div className="flex items-center">

                <span className="ml-2 text-xl font-bold">Portfolio</span>
            </div>

            {/* Hamburger Menu Icon for mobile */}
            <div className="sm:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>
            </div>

            {/* Menu on the right */}
            <div className={`sm:flex space-x-4 ${isOpen ? "block" : "hidden"} sm:block`}>
                <a href="#home" className="block py-2  text-center sm:py-0  hover:text-gray-400">Home</a>
                <a href="#about" className="block py-2 sm:py-0 hover:text-gray-400">About</a>
                <a href="#contact" className="block py-2 sm:py-0 hover:text-gray-400">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
