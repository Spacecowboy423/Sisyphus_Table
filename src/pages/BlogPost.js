import React, { useState } from "react";
import ImageModal from "../components/ImageModal.js";
import sisyphusSteps from "../data/sisyphusData";
import "../styles/BlogPost.css";
import "../App.css";

const BlogPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", image: "", description: "", details: "" });

  // Function to open modal with specific content
  const openModal = (step) => {
    setModalContent({
      title: step.title,
      image: step.image,
      description: step.description,
      details: step.details,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="blogPost">
      <div className="blogPostContainer blogPostHeader">
        {/* Header */}
        <h1>The Build Process</h1>
        <p className="blogPostIntro">
          Follow along as I document each step of building my Sisyphus Table,
          from building the table to the finished product.
        </p>

        {/* Intro */}
        <div className="introBox">
          <h2>Introduction to the Build</h2>
          <p>
            This project represents months of research, planning, and hands-on building.
            A Sisyphus table combines precision mechanics, electronics, programming, and
            woodworking into one mesmerizing piece of art.
          </p>
          <p>
            Below, you'll find detailed documentation of each major phase of the build.
            Click on any step to expand the details and see in-depth information in a modal window.
          </p>
        </div>

        {/* Gallery */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sisyphusSteps.map((step) => (
              <div
                key={step.id}
                className="cursor-pointer hover:opacity-80 transition"
                onClick={() => openModal(step)}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover rounded-lg shadow"
                />
                <p className="text-center mt-2 text-sm text-gray-600">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary of Skills Learned */}
        <div className="learningsContainer">
          <h2>Key Learnings & Challenges</h2>
          <div className="learningsGrid">
            <div className="learningColumn">
              <h3>Technical Skills</h3>
              <ul>
                <li>
                  Stepper motor control and timing
                </li>
                <li>
                  Programming pattern generation algorithms for sand and light patterns
                </li>
                <li>
                  Precision woodworking and finishing
                </li>
                <li>
                  Electronics assembly and troubleshooting
                </li>
                <li>
                  Soldering my own components and integrating mechanical, electronic, and software systems
                </li>
              </ul>
            </div>
            <div className="learningColumn">
              <h3>Major Challenges</h3>
              <ul>
                <li>
                  Achieving perfectly smooth motion and precise control with pulleys
                </li>
                <li>
                  Calibrating motor acceleration curves for the extra large print space
                </li>
                <li>
                  Calibrating magnet strength and positioning through base tray for sand for the perfect motion control
                </li>
                <li>
                  Debugging pattern generation code
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        image={modalContent.image}
        description={modalContent.description}
        details={modalContent.details}
      >
      </ImageModal>
    </div>
  );
};

export default BlogPost;