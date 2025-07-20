'use client';
// components/Footer.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#a69494] text-black py-10">
            {/* Top Line */}
            <div className="border-t-4 border-gray-200"></div>

            {/* Footer Content */}
            <div className="container mx-auto px-5 grid 
            grid-cols-1 md:grid-cols-4 gap-8 py-10">
                {/* Logo and description */}
                <div>
                    {/* Adding logo from URL */}
                    <Image
                        src="/images/logoapp.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <h2 className="text-2xl font-bold mb-4">Demo app using Nextjs</h2>
                    <p className="text-gray-600">
                        Vu Huy Duc from Ha Long University
                    </p>
                    <p className="text-gray-600">
                        Contact me: <a href="mailto:example@example.com" className="hover:text-black">vuduc130103@gmail.com</a>
                    </p>
                    <div className="flex mt-4 space-x-4">
                        {/* Social Media Icons */}
                        <a href="#" className="text-gray-600 hover:text-black">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-black">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>

                {/* Explore Column */}
                <div>
                    <h3 className="font-bold mb-4">Explore</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-black">
                            Leetcode</a></li>
                        <li><a href="#" className="hover:text-black">
                            My Github Link</a></li>
                    </ul>
                </div>

                {/* Languages Column */}
                <div>
                    <h3 className="font-bold mb-4">Languages</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-black">
                            Python</a></li>
                        <li><a href="#" className="hover:text-black">
                            Java</a></li>
                        <li><a href="#" className="hover:text-black">
                            C#</a></li>
                        <li><a href="#" className="hover:text-black">
                            JavaScript</a></li>
                        <li><a href="#" className="hover:text-black">
                            SQL</a></li>
                    </ul>
                </div>



                <div>
                    <h3 className="font-bold mb-4">Social Network</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-black">
                            Facebook</a></li>
                        <li><a href="#" className="hover:text-black">
                            Discord</a></li>
                        <li><a href="#" className="hover:text-black">
                            LinkedIn</a></li>
                        <li><a href="#" className="hover:text-black">
                            GitHub</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 mt-10">
                @GeeksforGeeks, Sanchhaya Education Private Limited,
                All rights reserved
            </div>
        </footer>
    );
};

export default Footer;