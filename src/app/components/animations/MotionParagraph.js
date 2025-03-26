"use client";
import { motion } from "framer-motion";

const MotionParagraph = ({ children, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.p
            className="text-base lg:text-lg"
            initial={{ opacity: 0, x: isEven ? -150 : 150, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.1 }}>
            {children}
        </motion.p>
    );
};

export default MotionParagraph;
