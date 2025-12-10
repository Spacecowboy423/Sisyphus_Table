import React, { useState } from "react";
import Modal from "../components/Modal.js";
import contacts from "../data/contactData.js";
import "../App.css";
import "../styles/Contact.css";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Return to this later to implement the email feature full, I'll send the form data here to route it to an email to myself
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <div className="contactContainer">
        <h1>Keep In Touch</h1>
        <p className="contactIntro">
          Questions about the build process? Want to collaborate on a project?
          Feel free to reach out!
        </p>

        <div className="contactDisplay">
          {/* Contact Information */}
          <div className="contactInfoSection">
            <h2>Contact Information</h2>
            <div>
              <ul>
                {contacts.map((contact, index) => (
                  <li key={index} className="border-b border-gray-300 pb-3 last:border-b-0">
                    <p style={{ fontWeight: 'bold' }}>
                      {contact.division}
                    </p>
                    <p>
                      {contact.contact_name} - {contact.title}
                    </p>
                    <p>
                      {contact.contact_phone}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <img
              className="contactImage"
              src={process.env.PUBLIC_URL + "/images/Profile Pic.jpg"}
              alt="The Builder"
            />
          </div>

          {/* Contact Form from Tailwind styling */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal - Not implemented yet but it looks beatiful so I took this from tailwind too :) */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent!"
      >
        <p className="leading-relaxed text-gray-700 text-center text-xl font-semibold mb-4">
          Thank you for reaching out!
        </p>
        <p className="leading-relaxed text-gray-700 text-center">
          Your message has been received. I'll get back to you as soon as possible.
        </p>
      </Modal>
    </div>
  );
};

export default Contact;