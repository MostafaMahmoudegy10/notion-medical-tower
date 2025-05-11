import React from 'react';
import location from '../assets/markting/location.jpg';
import { FaMapMarkerAlt, FaPhone, FaClock, FaDirections } from 'react-icons/fa';

const Location = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Location</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Visit us at our state-of-the-art medical facility in the heart of the city
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-[450px]">
          <img
            src={location}
            alt="Notion Medical Tower exterior view"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Notion Medical Tower</h3>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-300" />
                <span>123 Medical District, Cairo, Egypt</span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl shadow-2xl overflow-hidden h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.409412989029!2d31.209091899999997!3d30.0537969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841a7b925efab%3A0x6db8bc520091588a!2sNotion%20Medical%20Tower!5e0!3m2!1sen!2seg!4v1746929597752!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Notion Medical Tower Map"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaClock className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg">Working Hours</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg">Contact</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-blue-500" />
                  <a href="tel:+20123456789" className="hover:text-blue-600 transition-colors">
                   +20 100 740 2670
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaDirections className="text-blue-500" />
                  <a 
                    href="https://maps.google.com?q=Notion+Medical+Tower" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Get Directions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;