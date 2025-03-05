"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Era Solutions, LLC",
        description: "Project for small veteran owned business.",
        image: "/images/projects/era-logo-site.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://www.erasolutions.us/"
    },
    {
        id: 2,
        title: "Coalition of Information Technology Businesses",
        description: "Non profit website a small veteran owned business.",
        image: "/images/projects/coitblogo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://coitb.org/"
    },
    {
        id: 3,
        title: "MyMapPlan",
        description:
            "An interactive employment networking tool for job seekers and employers with a safe place to connectd without the need to build relationships.",
        image: "/images/projects/mmplogo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://mymapplan.com/"
    },
    {
        id: 4,
        title: "Vets4L",
        description:
            "Veterans Solutions 4 Life provides personalized, high-quality virtual training and support for service members and their families, ensuring no one is left behind. ",
        image: "/images/projects/vets4llogo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://vets4l.com/"
    },
    {
        id: 5,
        title: "The Lucky Fallis Foundation",
        description: "Honoring Heroes, Empowering Growth, Creating Change.",
        image: "/images/projects/lfflogo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://luckyfallis.org/"
    },
    {
        id: 6,
        title: "Turn-Key Services 360",
        description: "Learning Management System for Employees",
        image: "/images/projects/tks360-logo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://www.tks360.com/"
    },
    {
        id: 7,
        title: "Veterans Cybersecurity Group",
        description:
            "Providing Cybersecurity services and training to Federal Agencies and contractors.",
        image: "/images/projects/vcsg-logo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://veteranscybersecurity.com/"
    },

    {
        id: 8,
        title: "Military Solution",
        description: "Veteran Talent Integration Agency",
        image: "/images/projects/ms-logo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://militarysolution.net/"
    },

    {
        id: 9,
        title: "Tea 2 Go",
        description: "Healthy Tea 4 Healthy Living",
        image: "/images/projects/tea2go-logo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://tea2go.us/"
    },
    {
        id: 10,
        title: "Urban Oasis",
        description: "React Native Project",
        image: "/images/projects/urban-oasis-logo.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/dken-9447/Urban-Oasis",
        previewUrl: "https://github.com/dken-9447/Urban-Oasis"
    },
    {
        id: 11,
        title: "Lubbock ISD",
        description:
            "Lubbock ISD is committed to providing safe, modern, and high-quality learning environments for our students.",
        image: "/images/projects/lubbock-isd-logo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://www.lubbockisd.org/"
    },
    {
        id: 12,
        title: "iFresh Country",
        description:
            "Fresh Country Fund Raising offers schools and organizations the opportunity to raise money through its professionally developed Fund Raising Programs.",
        image: "/images/projects/ifresh-logo.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://freshcountry.com/"
    },
    {
        id: 13,
        title: "Madras County Figma Design",
        description: "Figma Design for Potential Client in Madras County, Oregon",
        image: "/images/projects/nature.png",
        tag: ["All", "Figma"],
        gitUrl: "/",
        previewUrl:
            "https://www.figma.com/design/QXPzr3kICK9LMtfQBLQJvT/town-center-travel-idea-2?node-id=0-1&p=f"
    }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Figma" isSelected={tag === "Figma"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}>
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
