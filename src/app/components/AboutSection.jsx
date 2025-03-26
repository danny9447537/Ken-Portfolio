"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import MotionParagraph from "../components/animations/MotionParagraph";

const paragraphs = [
    "👋 Hi, I’m Danny — a U.S. Air Force veteran turned Full Stack Developer and Software Development Leader with a passion for building scalable, cloud-native applications that make an impact.",
    "I specialize in the MERN stack (MongoDB, Express, React, Node.js), React Native for mobile development, and modern cloud architectures using AWS, Azure, and Google Cloud. Over the past few years, I’ve grown from a hands-on developer into a director-level leader, building and guiding high-performing teams, mentoring junior engineers, and aligning technology with business strategy.",
    "At ERA Solutions, I led the expansion of our development team from startup size to a full department of 37 engineers — implementing DevOps practices, architecting enterprise-grade solutions, and delivering custom platforms for veteran-owned businesses. I’ve also had the honor of creating a Registered Apprenticeship Program to help aspiring developers grow into their careers. My 8 years of military service shaped my leadership style — mission-driven, adaptable, and focused on outcomes. I bring that same discipline and mindset into every line of code, sprint, and system I help design.",
    "🎯 Whether it’s launching a new product, scaling a dev team, or optimizing a deployment pipeline, I thrive at the intersection of strategy, execution, and mentorship."
];

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
                    <div className="space-y-4">
                        {paragraphs.map((text, index) => (
                            <MotionParagraph key={index} index={index}>
                                {text}
                            </MotionParagraph>
                        ))}
                    </div>
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
