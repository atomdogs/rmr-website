"use client";

import Link from "next/link";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    bestTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simple validation: require bestTime when subject is general or quote
    const mustProvideBestTime = formData.subject === "general" || formData.subject === "quote";
    if (mustProvideBestTime && !formData.bestTime) {
      setSubmitMessage("Please select your best time to call back.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to Netlify Forms
      const formBody = new URLSearchParams({
        "form-name": "contact-page",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        bestTime: formData.bestTime || "Anytime",
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitMessage("Thank you for contacting us! We'll be in touch within 24 hours.");
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "", bestTime: "" });
        setSubmitMessage("");
      }, 3000);
    } catch (error) {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again or email us directly at info@rmrfacades.co.uk");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1c1c1b] to-[#2a2a2a] text-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Get in touch with our team to discuss your construction project. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#bc1019] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us during business hours</p>
              <a href="tel:01603622595" className="text-[#bc1019] hover:underline font-medium">
                01603 622595
              </a>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#bc1019] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a href="mailto:info@rmrfacades.co.uk" className="text-[#bc1019] hover:underline">
                info@rmrfacades.co.uk
              </a>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#bc1019] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Head Office<br />Norwich<br />NR1 1PG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-[#fbfbfb]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitMessage ? (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
                  {submitMessage}
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  name="contact-page"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact-page" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bc1019] focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                      name="email"
                      required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bc1019] focus:border-transparent outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                      name="phone"
                      value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bc1019] focus:border-transparent outline-none transition-all"
                        placeholder="01603 622595"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bc1019] focus:border-transparent outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                       id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bc1019] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
<option value="New contact from RSD Website - AirSpace">AirSpace</option>
<option value="New contact from RSD Website - Fire Remediation">Fire Remediation</option>
<option value="New contact from RSD Website - Rainscreen Cladding">Rainscreen Cladding</option>
<option value="New contact from RSD Website - Composite Roofing">Composite Roofing</option>
<option value="New contact from RSD Website - Windows & Curtain Walling">Windows & Curtain Walling</option>
<option value="New contact from RSD Website - Metal Roofing">Metal Roofing</option>
<option value="New contact from RSD Website - Standing Seam Roofing">Standing Seam Roofing</option>
<option value="New contact from RSD Website - Flat Roofing">Flat Roofing</option>
<option value="New contact from RSD Website - General Enquiry">General Enquiry</option>
<option value="New contact from RSD Website - Request a Quote">Request a Quote</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Best time to call back{(formData.subject === "general" || formData.subject === "quote") ? " *" : ""}
                    </label>
                    <select
                     id="bestTime"
                      name="bestTime"
                      value={formData.bestTime}
                      onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                      aria-required={formData.subject === "general" || formData.subject === "quote"}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bc1019] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Anytime</option>
                      <option value="morning">Morning (9am–12pm)</option>
                      <option value="afternoon">Afternoon (12pm–3pm)</option>
                      <option value="late-afternoon">Late afternoon (3pm–6pm)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#bc1019] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#bc1019] hover:bg-[#a00e15] text-white px-8 py-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Office Info */}
            <div>
              <h2 className="text-3xl font-light mb-6">Our Location</h2>

              {/* Map removed as requested */}

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4 text-lg">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-4 text-lg">Service Areas</h3>
                <p className="text-gray-700 mb-2">
                  We proudly serve clients across:
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• East Anglia</li>
                  <li>• London</li>
                  <li>• Bristol</li>
                  <li>• Glasgow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-white/50">
            <p>© 2025 RMR Construction Group Limited - All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
