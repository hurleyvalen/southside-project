"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Ensures this code only runs on the client side
    setIsClient(true);
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
    // Add form submission logic here (e.g., send data to a server or email API)
  };

  if (!isClient) {
    // Optional: Add a loading spinner or fallback content here
    return <div>Loading...</div>;
  }

  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Have questions or need assistance? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center text-green-900">
              <FaPhoneAlt className="mr-4 text-xl" />
              <p className="text-lg">+(63) 927-012-5447</p>
            </div>
            <div className="flex items-center text-green-900">
              <FaEnvelope className="mr-4 text-xl" />
              <p className="text-lg">cafe.southsidebrews@gmail.com</p>
            </div>
            <div className="flex items-center text-green-900">
              <FaMapMarkerAlt className="mr-4 text-xl" />
              <p className="text-lg">
                National Highway, Barangay Timugan, Los Baños, Philippines
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-700">
                  Your message has been received. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    placeholder="Your Message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-900 text-white py-3 rounded-lg font-bold hover:bg-green-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
