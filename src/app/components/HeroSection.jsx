"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-700">
                            Hello, I&apos;m
                        </span>
                        <br></br>
                        <span className="text-2xl sm:text-3xl lg:text-7xl">
                            <TypeAnimation
                                sequence={[
                                    "Danny Ken",
                                    2000,
                                    "A Software Engineer",
                                    2000,
                                    "An Air Force Veteran",
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-inherit"
                            />
                        </span>
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Director of Software Development | Delivering results through leadership and
                        execution
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 to-secondary-700 hover:bg-slate-200 text-white">
                            Contact Me
                        </Link>
                        <Link
                            href="/Danny Ken Resume- SW Developer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400 to-secondary-700 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Resume
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-3">
                    <div className="rounded-full w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] lg:w-[800px] lg:h-[800px] relative overflow-hidden">
                        <Image
                            src="/images/hero-image2.png"
                            alt="hero image"
                            className="object-cover"
                            fill
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
