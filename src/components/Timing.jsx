import React, { useState } from "react";
import image from "/assets/time.jpg";

const Timing = () => {
    const [selectedDay, setSelectedDay] = useState("Monday");

    const schedule = {
        Monday: {
            "Fitness Class": "6:00 AM - 7:00 AM",
            "Muscle Training": "7:30 AM - 8:30 AM",
            "Body Building": "5:00 PM - 6:00 PM",
            "Yoga Training Class": "6:30 PM - 7:30 PM",
            "Advanced Training": "8:00 PM - 9:00 PM",
        },
        Tuesday: {
            "Fitness Class": "6:30 AM - 7:30 AM",
            "Muscle Training": "8:00 AM - 9:00 AM",
            "Body Building": "5:30 PM - 6:30 PM",
            "Yoga Training Class": "7:00 PM - 8:00 PM",
            "Advanced Training": "8:30 PM - 9:30 PM",
        },
        Wednesday: {
            "Fitness Class": "6:00 AM - 7:00 AM",
            "Muscle Training": "7:30 AM - 8:30 AM",
            "Body Building": "5:00 PM - 6:00 PM",
            "Yoga Training Class": "6:30 PM - 7:30 PM",
            "Advanced Training": "8:00 PM - 9:00 PM",
        },
        Thursday: {
            "Fitness Class": "6:15 AM - 7:15 AM",
            "Muscle Training": "8:00 AM - 9:00 AM",
            "Body Building": "5:15 PM - 6:15 PM",
            "Yoga Training Class": "6:45 PM - 7:45 PM",
            "Advanced Training": "8:15 PM - 9:15 PM",
        },
        Friday: {
            "Fitness Class": "6:00 AM - 7:00 AM",
            "Muscle Training": "7:30 AM - 8:30 AM",
            "Body Building": "5:00 PM - 6:00 PM",
            "Yoga Training Class": "6:30 PM - 7:30 PM",
            "Advanced Training": "8:00 PM - 9:00 PM",
        },
    };

    const days = Object.keys(schedule);

    return (
        <section
            className="relative py-16 bg-cover  bg-center bg-no-repeat text-white"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Lighter Overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

            <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
                <h2 className="text-4xl font-bold mb-8 text-[#ED563B] drop-shadow-lg">
                    Weekly Training Schedule
                </h2>

                {/* Day Selector */}
                <div className="flex justify-center gap-4 mb-10 flex-wrap">
                    {days.map((day) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                selectedDay === day
                                    ? "bg-[#ED563B] text-white shadow-lg"
                                    : "bg-white text-gray-700 hover:bg-[#ED563B] hover:text-white"
                            }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Schedule Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white/10 backdrop-blur-md shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-[#ED563B] text-white">
                                <th className="py-3 px-6 text-left">Training Type</th>
                                <th className="py-3 px-6 text-left">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(schedule[selectedDay]).map(([type, time]) => (
                                <tr
                                    key={type}
                                    className="border-b border-white/20 hover:bg-white/10 transition"
                                >
                                    <td className="py-3 px-6 font-semibold text-white text-left">
                                        {type}
                                    </td>
                                    <td className="py-3 px-6 text-gray-200 text-left">
                                        {time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Timing;
