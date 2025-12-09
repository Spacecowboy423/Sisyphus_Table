import React, { useState } from "react";
import finishedTablePhotos from "../data/carouselData.js";
import Carousel from "../components/Carousel.js";
import Modal from "../components/Modal.js";
import "../App.css";
import "../styles/Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Introduction Section */}
      <div className="homeIntro">
        <h1>Building My Sisyphus Table</h1>
        <p>
          A journey through programming, electronics, woodworking, and kinetic art.
          Follow along as I document the process of building my first kinetic art sand table.
        </p>
        <button
          // Tailwind CSS styling for button
          className="text-white bg-indigo-600 border border-transparent hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 shadow-sm font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition"
          onClick={() => setIsModalOpen(true)}
        >
          Learn More About Sisyphus Tables
        </button>
      </div>

      {/* Carousel */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">The Finished Product</h2>
        <Carousel items={finishedTablePhotos} />
      </div>

      {/* Cool Styling Import From Tailwind for Project Overview Section */}
      <div className="bg-gray-100 py-12 px-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">8+</h3>
              <p className="text-gray-600">Weeks of Building</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">∞</h3>
              <p className="text-gray-600">Unique Patterns</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">1</h3>
              <p className="text-gray-600">Amazing Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="What is a Sisyphus Table?"
      >
        <p className="leading-relaxed text-gray-700">
          A Sisyphus table is a mesmerizing kinetic sculpture that uses a magnet hidden beneath
          a layer of sand to create an endlessly changing patterns. Named after the Greek myth
          of Sisyphus, the table embodies endless, repetitive motion.
        </p>
        <p className="leading-relaxed text-gray-700">
          The table works by magnetically pulling a steel ball through sand using a robot (coined "Sisbot").
          The tracks the ball leaves in the sand create captivating, intricate, and endlessly
          changing patterns under a tempered glass table top.
        </p>
        <p className="leading-relaxed text-gray-700 font-semibold">
          This project bundles programming, electronics, and woodworking skills into
          one beautiful piece of functional art.
        </p>
      </Modal>
    </div>
  );
};

export default Home;