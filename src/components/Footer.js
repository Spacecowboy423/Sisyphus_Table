import React from "react";

const Footer = ({ FooterStyling, Disclaimer, LinkedIn, LinkedInColor, GitHub, GitHubColor }) => {
    return (
        <footer className={FooterStyling}>
            <p>&copy; {Disclaimer}</p>
            <p>
                Follow Michael on{" "}
                <a href={LinkedIn} className={LinkedInColor}>
                    LinkedIn
                </a>{" "}
                
                and{" "}
                
                <a href={GitHub} className={GitHubColor}>
                    GitHub
                </a>
            </p>
        </footer>
    );
}

export default Footer;