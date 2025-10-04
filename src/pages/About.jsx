import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaRunning, FaUsers, FaTrophy } from "react-icons/fa";
import aboutImg from "/assets/time.jpg";
import missionImg from "/assets/time.jpg";
import trainer1 from "/assets/time.jpg";
import trainer2 from "/assets/time.jpg";
import trainer3 from "/assets/time.jpg";

const About = () => {
    const stats = [
        { number: "250+", label: "Active Members" },
        { number: "30+", label: "Professional Trainers" },
        { number: "10+", label: "Years of Excellence" },
        { number: "100%", label: "Client Satisfaction" },
    ];

    const approaches = [
        {
            icon: FaDumbbell,
            title: "Strength & Endurance",
            desc: "We focus on building real, functional strength through personalized training programs.",
        },
        {
            icon: FaRunning,
            title: "Cardio & Conditioning",
            desc: "Boost stamina, burn fat, and feel unstoppable with our cardio and HIIT sessions.",
        },
        {
            icon: FaHeartbeat,
            title: "Mind-Body Wellness",
            desc: "Balance body and mind through yoga, mobility, and recovery training.",
        },
        {
            icon: FaTrophy,
            title: "Performance Goals",
            desc: "We help you set, track, and crush your personal bests with confidence.",
        },
    ];

    const trainers = [
        { name: "Sarah Khan", role: "Yoga Instructor", img: trainer1 },
        { name: "Ali Raza", role: "Strength Coach", img: trainer2 },
        { name: "Mina Iqbal", role: "Cardio Specialist", img: trainer3 },
    ];

    return (
        <section className="bg-[#0f141a] text-white overflow-hidden">
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center py-32 px-6"
                style={{ backgroundImage: `url(${aboutImg})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-extrabold mb-6 text-[#D94B2B]"
                    >
                        About <span className="text-white">GYMWasooli</span>
                    </motion.h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        We’re more than just a gym — we’re a movement. GYMWasooli is where discipline
                        meets transformation. Every rep, every drop of sweat brings you closer to the best version of yourself.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center bg-[#151b23]">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <h2 className="text-5xl font-extrabold text-[#D94B2B]">{s.number}</h2>
                        <p className="text-gray-400 mt-2 font-semibold">{s.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Training Philosophy */}
            <div className="py-20 px-6 bg-[#1E2939] text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-10"
                >
                    Our <span className="text-[#D94B2B]">Training Philosophy</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {approaches.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-[#243447] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
                        >
                            <item.icon className="text-5xl text-[#D94B2B] mb-4 mx-auto" />
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid md:grid-cols-2 gap-0">
                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-cover bg-center text-white p-12 flex flex-col justify-center"
                    style={{ backgroundImage: `url(${missionImg})` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-[#D94B2B] mb-4">Our Mission</h3>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            To inspire and transform lives by empowering individuals to achieve their fitness goals
                            through expert guidance, cutting-edge equipment, and a motivating community.
                        </p>
                    </div>
                </motion.div>

                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#151b23] text-white p-12 flex flex-col justify-center"
                >
                    <h3 className="text-3xl font-bold text-[#D94B2B] mb-4">Our Vision</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        To be Pakistan’s leading fitness brand where strength, wellness, and innovation meet.
                        We aim to build a healthier nation — one member, one rep at a time.
                    </p>
                </motion.div>
            </div>

            {/* Trainers Section */}
            <div className="py-20 px-6 bg-[#1E2939]">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-14"
                >
                    Meet Our <span className="text-[#D94B2B]">Expert Trainers</span>
                </motion.h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {trainers.map((trainer, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-[#243447] rounded-3xl overflow-hidden shadow-xl group"
                        >
                            <img
                                src={trainer.img}
                                alt={trainer.name}
                                className="w-full h-72 object-cover group-hover:opacity-80 transition"
                            />
                            <div className="absolute bottom-0 bg-black/70 w-full p-4 text-center">
                                <h3 className="font-bold text-lg text-[#D94B2B]">{trainer.name}</h3>
                                <p className="text-gray-300 text-sm">{trainer.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
