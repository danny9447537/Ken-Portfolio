import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer border-t border-l border-r border-[#33353F] z-10 text-white">
            <div className="w-full max-w-screen-xl mx-auto p-6 md:p-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <span>
                    <Image
                        src="/images/dannykenlogo.png"
                        alt="Logo"
                        width={250}
                        height={50}
                        className="cursor-pointer"
                    />
                </span>
                <p className="text-slate-600 mt-4 md:mt-0 md:self-end">All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
