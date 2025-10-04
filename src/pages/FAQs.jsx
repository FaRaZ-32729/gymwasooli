import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaQuestionCircle } from "react-icons/fa";

const faqs = [
    {
        question: "What is GYMWasooli?",
        answer:
            "GYMWasooli is an all-in-one gym management platform that helps fitness centers manage memberships, track attendance, schedule classes, and handle payments — all from one place.",
    },
    {
        question: "Can I book classes through GYMWasooli?",
        answer:
            "Yes! Members can easily view available classes, book their favorite sessions, and get instant confirmations directly through the GYMWasooli app or website.",
    },
    {
        question: "How can trainers use GYMWasooli?",
        answer:
            "Trainers can manage client schedules, track workout progress, update fitness plans, and communicate directly with members to improve engagement and results.",
    },
    {
        question: "Does GYMWasooli offer member analytics?",
        answer:
            "Absolutely. GYMWasooli provides detailed analytics for gym owners — including member attendance, revenue reports, trainer performance, and class popularity trends.",
    },
    {
        question: "Can GYMWasooli handle online payments?",
        answer:
            "Yes, GYMWasooli supports secure online payments, recurring billing, and automated payment reminders for a smooth, hassle-free experience.",
    },
    {
        question: "Is GYMWasooli mobile-friendly?",
        answer:
            "Definitely! Our responsive web app and mobile interface ensure that members, trainers, and owners can access everything conveniently from any device.",
    },
    {
        question: "Is my data safe on GYMWasooli?",
        answer:
            "Data security is our top priority. GYMWasooli uses encryption, secure authentication, and role-based access control to keep all user information safe and private.",
    },
];

const FAQs = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="relative min-h-screen bg-[#1E2939] text-white py-24 px-6 overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D94B2B]/10 to-transparent"></div>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D94B2B]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#D94B2B]/10 rounded-full blur-[120px]"></div>

            {/* Header Section */}
            <div className="relative text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-extrabold text-[#D94B2B] drop-shadow-[0_0_10px_rgba(217,75,43,0.6)]"
                >
                    Frequently Asked Questions
                </motion.h1>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
                    Got questions? We’ve got the answers. Explore below to learn more about
                    <span className="text-[#D94B2B] font-semibold"> GYMWasooli</span>.
                </p>
            </div>

            {/* FAQ Cards */}
            <div className="relative max-w-5xl mx-auto space-y-6 z-10">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`rounded-2xl shadow-lg border border-gray-700 bg-[#243447]/60 backdrop-blur-md overflow-hidden transition-all duration-500 ${active === index ? "border-[#D94B2B]" : "hover:border-[#D94B2B]/50"
                            }`}
                    >
                        <button
                            className="w-full flex items-center justify-between px-6 py-5 text-left"
                            onClick={() => setActive(active === index ? null : index)}
                        >
                            <div className="flex items-center gap-3">
                                <FaQuestionCircle
                                    className={`text-xl transition-all ${active === index ? "text-[#D94B2B]" : "text-gray-400"
                                        }`}
                                />
                                <span
                                    className={`font-semibold text-lg transition ${active === index ? "text-[#D94B2B]" : "text-white"
                                        }`}
                                >
                                    {faq.question}
                                </span>
                            </div>
                            <FaChevronRight
                                className={`transition-transform duration-300 ${active === index
                                    ? "rotate-90 text-[#D94B2B]"
                                    : "text-gray-400"
                                    }`}
                            />
                        </button>

                        <AnimatePresence>
                            {active === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="px-6 pb-5 text-gray-300 leading-relaxed text-base border-t border-gray-700/60"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Footer Accent Line */}
            <div className="relative mt-24 h-[3px] bg-gradient-to-r from-transparent via-[#D94B2B] to-transparent opacity-70"></div>
        </section>
    );
};

export default FAQs;
