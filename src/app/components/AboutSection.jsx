"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {/* Frontend Development */}
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Sass/SCSS</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Redux</li>

                {/* Backend Development */}
                <li>Java</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful API Design</li>

                {/* Databases */}
                <li>MySQL</li>
                <li>MongoDB</li>

                {/* Software Architecture & Development */}
                <li>Microservices</li>
                <li>Distributed Systems</li>
                <li>Domain-Driven Design</li>
                <li>Error Handling</li>
                <li>Test-Driven Development (TDD)</li>

                {/* Cloud & DevOps */}
                <li>AWS / Azure</li>

                {/* Version Control & Collaboration */}
                <li>Git</li>
                <li>GitHub</li>

                {/* Project Management */}
                <li>Agile Development</li>
                <li>Monday.com Management</li>
                <li>Jira Project Management</li>

                {/* Design & UI/UX */}
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Express</li>
                <li>Photoshop</li>
                <li>Logo Creation / Brand Identity</li>
                <li>Wix</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    <strong>Associate in Arts</strong>
                </li>
                <li>
                    <strong>Bachelor of Applied Science</strong> - Computing Technology and Software
                    Development
                </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>U.S. Air Force Organizational Leadership and Management Certificate</li>
                <li> Operations Support and Management Certificate</li>
                <li> CoITB Certified Javascript Professional</li>
                <li> CoITB Certified React Developer</li>
                <li> CoITB Certified MySQL</li>
                <li> CoITB Certified HTML & CSS</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="mb-8 md:mb-0">
                    <Image
                        src="/images/about-image.jpg"
                        alt="professional headshot image"
                        width={500}
                        height={500}
                        style={{ borderRadius: "15px" }}
                    />
                </div>

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Versatile Full Stack Developer and technology leader with a strong
                        foundation in software development and IT strategy. With experience spanning
                        hands-on development and leadership roles, I specialize in building scalable
                        web and mobile applications using the MERN stack, cloud architectures (AWS,
                        Azure, Google Cloud), and modern DevOps practices. Previously, at Era
                        Solutions LLC, I transitioned from a Full Stack Developer role to Director
                        of Software Development, leading a team from a small startup to 37
                        developers and overseeing cloud-based solutions for veteran-owned
                        businesses. Passionate about innovation, mentorship, and delivering
                        high-impact software solutions. Former U.S. Air Force veteran, bringing a
                        disciplined and mission-focused approach to problem-solving and team
                        leadership.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
