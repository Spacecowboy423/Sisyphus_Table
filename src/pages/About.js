import React, { useState } from "react";
import Accordion from "../components/Accordion.js";
import accordionData from "../data/accordianData.js";
import "../App.css";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <h1>About This Project</h1>
        <p>
          Building a Sisyphus Table was a journey of learning, problem-solving, 
          and creating something truly wonderful and unique.
        </p>

        <div className="aboutDisplay">
          {/* Accordion */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
            {accordionData.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>

          {/* Image div with Tailwind styling for video */}
          <div className="md:w-1/2">
            <video
              className="mt-6 w-full h-auto rounded-lg shadow-lg"
              style={{ height: '400px', objectFit: 'cover' }}
              src={process.env.PUBLIC_URL + "/images/DisplayLightsFinished.mp4"}
              poster={process.env.PUBLIC_URL + "/images/Finish Top Lights.jpg"}
              type="video/mp4"
              controls
              loop
              muted
              alt="All Light Patterns"
            />

            {/* Specifications */}
            {/* <div className="mt-6 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Project Specifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li> 
                    <strong>Size:</strong> Custom coffee table dimensions
                </li>
                <li> 
                    <strong>Motors:</strong> Stepper motors with pulley system for precise control of magnet movement
                </li>
                <li> 
                    <strong>Controller:</strong> Arduino/Raspberry Pi based control for pattern and light generation
                </li>
                <li> 
                    <strong>Sand:</strong> Fine silica kinetic sand for smooth patterns
                </li>
                <li> 
                    <strong>Glass:</strong> Tempered glass top for durability and transparency
                </li>
                <li> 
                    <strong>Wood:</strong> Hand-finished hardwood frame for sturdy construction
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;