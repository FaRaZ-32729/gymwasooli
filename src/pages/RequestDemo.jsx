import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import demoImg from "/assets/join.png";

const RequestDemo = () => {
    return (
        <section className="relative min-h-screen bg-[#1E2939] text-white py-24 px-6 overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>

            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#D94B2B] tracking-wide">
                    GymWasooli Membership Request
                </h2>
                <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
                    Get your fitness management system deployed — fast, efficient, and built for results.
                </p>
                <div className="w-32 h-1 bg-[#D94B2B] mx-auto mt-5 rounded-full"></div>
            </motion.div>

            {/* Main Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
            >
                {/* Left - Image */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                    <img
                        src={demoImg}
                        alt="Gym Demo"
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </motion.div>

                {/* Right - Form */}
                <div className="bg-[#1F2939] border border-[#D94B2B]/30 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">
                    <h3 className="text-2xl font-semibold text-[#D94B2B] mb-4">
                        Request GymWasooli
                    </h3>

                    {/* Sublocality */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Sublocality
                        </label>
                        <input
                            type="text"
                            placeholder="Enter sublocality"
                            className="w-full rounded-xl bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#D94B2B] focus:ring-1 focus:ring-[#D94B2B]"
                        />
                    </div>

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-xl bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#D94B2B] focus:ring-1 focus:ring-[#D94B2B]"
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Address
                        </label>
                        <textarea
                            rows="3"
                            placeholder="Enter full address"
                            className="w-full rounded-xl bg-transparent border border-gray-700 px-4 py-3 text-white resize-none focus:outline-none focus:border-[#D94B2B] focus:ring-1 focus:ring-[#D94B2B]"
                        ></textarea>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                Select Package
                            </label>
                            <select className="w-full rounded-xl bg-[#1F2939] border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#D94B2B] focus:ring-1 focus:ring-[#D94B2B]">
                                <option value="">Choose a package</option>
                                <option value="3000">Up to 3000 Members</option>
                                <option value="4000">Up to 4000 Members</option>
                                <option value="unlimited">Unlimited Members</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                Mobile
                            </label>
                            <input
                                type="text"
                                placeholder="Enter mobile number"
                                className="w-full rounded-xl bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#D94B2B] focus:ring-1 focus:ring-[#D94B2B]"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-6 pt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gray-800 text-gray-200 font-semibold shadow hover:bg-gray-700 transition-all"
                        >
                            <FaTimes /> Cancel
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#D94B2B] to-[#ff7b5e] text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                        >
                            <FaCheck /> Submit
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default RequestDemo;
