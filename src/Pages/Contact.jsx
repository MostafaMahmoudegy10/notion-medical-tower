import React, { useState } from 'react';
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import contactImage from '../assets/Logo/cover-1.jpg';
import clinicVideo from '../assets/Shots/internal.mp4';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
      >
        <span className="flex text-lg font-semibold text-black">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-blue-600">Notion Medical</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and provide the care you need.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white text-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+20123456789"
                    className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                  >
                    +20 123 456 789
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:info@notionmedical.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                  >
                    info@notionmedical.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-600 text-lg">123 Medical District, Cairo, Egypt</p>
                  <a
                    href="https://maps.google.com?q=Notion+Medical+Tower"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-1 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                  <div className="text-gray-600">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 10:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <div className="flex space-x-2">
                    <FaFacebook className="text-blue-600 text-xl" />
                    <FaInstagram className="text-blue-600 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/notionmedical"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaFacebook className="text-2xl" />
                    </a>
                    <a
                      href="https://instagram.com/notionmedical"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <video controls className="w-full h-auto" poster={contactImage}>
              <source src={clinicVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-2">Tour Our Facility</h3>
              <p className="text-gray-600">
                Watch our video tour to see our state-of-the-art medical facilities and meet some
                of our staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Explore Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <FAQItem
              question="How can I get started?"
              answer="Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup."
            />
            <FAQItem
              question="What is the pricing structure?"
              answer="Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget."
            />
            <FAQItem
              question="What kind of support do you provide?"
              answer="We offer comprehensive customer support. You can reach out to our support team through email, chat, and a knowledge base."
            />
            <FAQItem
              question="Can I cancel my subscription anytime?"
              answer="Yes, you can cancel your subscription at any time without any hidden fees."
            />
          </div>

          <p className="text-center text-gray-600 text-base mt-9">
            Still have questions?{' '}
            <span className="cursor-pointer font-medium text-blue-600 hover:underline">
              Contact our support
            </span>
          </p>
        </div>
      </section>

      <section className="bg-white m-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.409412989029!2d31.209091899999997!3d30.0537969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841a7b925efab%3A0x6db8bc520091588a!2sNotion%20Medical%20Tower!5e0!3m2!1sen!2seg!4v1746929597752!5m2!1sen!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Notion Medical Tower Map"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
