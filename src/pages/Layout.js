import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "../App.css";
import "../index.css";
import "../styles/Layout.css"; // Specific CSS file for styling
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header
                backgroundPic="SIS-Background.png"
                fontFamily="'Great Vibes', cursive"
            />
            <nav className={isOpen ? "isOpen" : ""}>
                <button onClick={() => setIsOpen(!isOpen)}>&#8801;</button>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/About"> About </Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact </Link>
                    </li>
                    <li>
                        <Link to="/BlogPost"> Blog Post </Link>
                    </li>
                </ul>
            </nav>

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer
                FooterStyling="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white p-4 text-center"
                Disclaimer="2025 Krause Construction. All rights reserved."
                LinkedIn="https://www.linkedin.com/in/krause423/"
                LinkedInColor="text-blue-400"
                GitHub="https://github.com/Spacecowboy423?tab=repositories"
                GitHubColor="text-pink-400"
            />
        </div>
    );
};


export default Layout;