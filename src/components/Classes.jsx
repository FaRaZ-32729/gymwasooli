import React, { useState } from "react";
import firstImg from "/assets/time.jpg";
import secondImg from "/assets/time.jpg";
import thirdImg from "/assets/time.jpg";
import fourthImg from "/assets/time.jpg";

const Classes = () => {
    const [selectedClass, setSelectedClass] = useState("First Training Class");

    const classData = {
        "First Training Class": {
            image: firstImg,
            description:
                "Kickstart your fitness journey with our First Training Class. Learn the fundamentals of movement, stretching, and endurance to build a solid foundation for your future workouts.",
        },
        "Second Training Class": {
            image: secondImg,
            description:
                "Advance your strength and stamina in our Second Training Class. This session focuses on proper form, muscle development, and controlled breathing for optimal performance.",
        },
        "Third Training Class": {
            image: thirdImg,
            description:
                "Take your progress further in the Third Training Class. Here, we combine strength, flexibility, and conditioning to enhance your overall fitness and agility.",
        },
        "Fourth Training Class": {
            image: fourthImg,
            description:
                "Push your limits in our Fourth Training Class — an advanced session designed to challenge your endurance, boost muscle growth, and achieve your ultimate fitness goals.",
        },
    };

    const classes = Object.keys(classData);

    return (
        <section className="py-16 bg-[#1E2939]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Main Heading */}
                <h2 className="text-4xl font-bold text-center text-[#ED563B] mb-12">
                    Our Classes
                </h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image & Description */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <img
                            src={classData[selectedClass].image}
                            alt={selectedClass}
                            className="rounded-lg shadow-lg w-full h-[350px] object-cover mb-6"
                        />
                        <p className="text-white text-lg">
                            {classData[selectedClass].description}
                        </p>
                    </div>

                    {/* Right Side - Class Selector */}
                    <div className="flex flex-col gap-4">
                        {classes.map((className) => (
                            <button
                                key={className}
                                onClick={() => setSelectedClass(className)}
                                className={`text-left py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md ${selectedClass === className
                                    ? "bg-[#ED563B] text-white"
                                    : "bg-white text-gray-700 hover:bg-[#ED563B] hover:text-white"
                                    }`}
                            >
                                {className}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Classes;
