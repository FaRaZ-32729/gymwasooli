import React from "react";
import {
    FaDumbbell,
    FaRunning,
    FaSwimmer,
    FaSpa,
    FaWalking,
    FaBiking,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ChooseProgram = () => {
    const programs = [
        {
            title: "Basic Fitness",
            description:
                "Get started on your fitness journey with our basic fitness program tailored to beginners.",
            icon: <FaDumbbell className="text-6xl mb-4 text-[#ED563B]" />,
        },
        {
            title: "Advanced Muscle Course",
            description:
                "Take your fitness to the next level with our advanced muscle-building course.",
            icon: <FaRunning className="text-6xl mb-4 text-[#ED563B]" />,
        },
        {
            title: "New Gym Training",
            description:
                "Join our new gym training program and experience expert guidance to reach your goals faster.",
            icon: <FaSwimmer className="text-6xl mb-4 text-[#ED563B]" />,
        },
        {
            title: "Yoga Training",
            description:
                "Find inner peace and strength with our yoga training program designed for all levels.",
            icon: <FaSpa className="text-6xl mb-4 text-[#ED563B]" />,
        },
        {
            title: "Basic Muscle Course",
            description:
                "Build strength and muscle with our beginner-friendly muscle course.",
            icon: <FaWalking className="text-6xl mb-4 text-[#ED563B]" />,
        },
        {
            title: "Body Building Course",
            description:
                "Transform your body with our comprehensive body building course designed for serious athletes.",
            icon: <FaBiking className="text-6xl mb-4 text-[#ED563B]" />,
        },
    ];

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="relative w-full h-auto py-16 bg-gray-800 text-white px-6">
            {/* Heading */}
            <motion.h2
                className="text-4xl font-extrabold mb-6 text-center text-[#ED563B] z-10"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                Choose Your Program
            </motion.h2>

            {/* Paragraph */}
            <motion.p
                className="text-lg text-center max-w-lg mb-12 z-10 mx-auto text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                Explore our diverse range of fitness programs designed to cater to
                different fitness levels and interests. Find the one that suits you
                best and start your journey to a healthier lifestyle today!
            </motion.p>

            {/* Programs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{
                            scale: 1.08,
                            boxShadow: "0px 0px 15px #ED563B",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center bg-transparent p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        {program.icon}
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">
                            {program.title}
                        </h3>
                        <p className="text-center text-lg text-gray-400">
                            {program.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ChooseProgram;
