"use client";

import React from "react";
import SlotCounter from "react-slot-counter";

const achievementsList = [
    { metric: "Projects", value: "45" },
    { metric: "Designs", value: "58" },
    { metric: "Certifications", value: "6" },
    { metric: "Years", value: "4" }
];

const AchievementsSection = () => {
    return (
        <div className="py-16 px-4 xl:gap-16 sm:py-20 xl:px-16">
            <div
                className="border border-gray-700 
                            rounded-2xl shadow-lg py-8 px-16 
                            flex flex-col sm:flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                        <h2 className="text-white text-4xl font-bold flex flex-row">
                            <SlotCounter
                                value={achievement.value}
                                duration={1.5}
                                animateUnchanged={false}
                                className="text-white text-4xl font-bold"
                            />
                        </h2>
                        <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
