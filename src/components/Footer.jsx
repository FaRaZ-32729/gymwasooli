import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "/assets/logo.png"; // replace with your actual logo path

const Footer = () => {
    return (
        <footer className="bg-[#1E2939] text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo + Heading Section */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3 mb-3">
                        <img
                            src={logo}
                            alt="GymWasooli Logo"
                            className="w-12 h-12 object-contain"
                        />
                        <h2 className="text-2xl font-bold text-white tracking-wide">
                            Gym<span className="text-[#ED563B]">Wasooli</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your fitness journey starts here. Join GymWasooli today and unlock
                        your potential with professional trainers, modern equipment, and
                        motivational workouts.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-[#ED563B] transition-colors">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#ED563B] transition-colors">
                                Classes
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#ED563B] transition-colors">
                                Schedule
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#ED563B] transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Follow Us
                    </h3>
                    <div className="flex gap-4 text-xl">
                        <a
                            href="#"
                            className="hover:text-[#ED563B] transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ED563B] transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ED563B] transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ED563B] transition-colors"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} GymWasooli. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
