"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { contactFormSchema } from "@/lib/validation";

const serviceId = "service_3ilgy07";
const templateId = "template_fc0z60p";
const publicKey = "jSKmbut0xKLnV_e_0";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear field-specific error when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      const validatedData = await contactFormSchema.parseAsync(formData);

      // Send email if validation passes
      await emailjs.send(serviceId, templateId, validatedData, publicKey);

      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });

      setFormData({ name: "", email: "", message: "" }); // Reset form
      setSubmitted(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        for (const key in error.flatten().fieldErrors) {
          if (error.flatten().fieldErrors[key]) {
            fieldErrors[key] = error.flatten().fieldErrors[key]?.[0] || "";
          }
        }
        setErrors(fieldErrors);

        toast({
          title: "Validation Error",
          description: "Please check your inputs and try again.",
          variant: "destructive",
        });

        return;
      }

      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isClient) {
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
                {/* Name Field */}
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
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring ${
                      errors.name ? "border-red-500" : "focus:ring-green-300"
                    }`}
                    placeholder="Your Name"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
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
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring ${
                      errors.email ? "border-red-500" : "focus:ring-green-300"
                    }`}
                    placeholder="Your Email"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
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
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring ${
                      errors.message ? "border-red-500" : "focus:ring-green-300"
                    }`}
                    placeholder="Your Message"
                    rows={5}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
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
