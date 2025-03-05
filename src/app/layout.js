import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import { title } from "process";

export const metadata = {
    title: "Danny Ken - Software Engineer & Veteran",
    description:
        "Software Engineer and U.S. Air Force veteran specializing in MERN stack development, cloud computing, and technical leadership. Passionate about building scalable, high-performance applications.",
    openGraph: {
        title: "Danny Ken - Software Engineer & Veteran",
        description:
            "Experienced Software Engineer with a strong background in MERN stack development, cloud platforms (Azure, Google Cloud, AWS), and leadership. Explore my portfolio of innovative web applications and scalable solutions.",
        siteName: "Danny Ken Portfolio"
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <meta
                    name="description"
                    content="Software Engineer and U.S. Air Force veteran specializing in MERN stack development, cloud computing (Azure, Google Cloud, AWS), and technical leadership. Passionate about building scalable, high-performance applications."
                />
                <meta
                    name="keywords"
                    content="Software Engineer, MERN Stack, Full Stack Developer, Cloud Computing, Azure, Google Cloud, AWS, Leadership, Veteran, Technical Lead, Web Development"
                />
                <meta name="author" content="Danny Ken" />
                <meta property="og:title" content="Danny Ken - Software Engineer & Veteran" />
                <meta
                    property="og:description"
                    content="Experienced Software Engineer with a strong background in MERN stack development, cloud platforms (Azure, Google Cloud, AWS), and leadership. Explore my portfolio of innovative web applications and scalable solutions."
                />
            </head>
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
