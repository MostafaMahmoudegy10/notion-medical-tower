import React from 'react';
import { FaUserMd, FaClinicMedical, FaAward, FaHeartbeat } from 'react-icons/fa';
import aboutImage from '../assets/Logo/home about.jpg';
import facilityImage from '../assets/Logo/Notion-Medical-Tower.jpg';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Notion Medical</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Providing exceptional healthcare with compassion and innovation since 2010.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                Meet Our Team
              </button>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Doctor with patient" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaHeartbeat className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Years of Experience</p>
                    <p className="text-2xl font-bold text-gray-900">12+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2010, Notion Medical began as a small clinic with a big vision: to transform healthcare delivery through innovative approaches and patient-centered care.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Today, we've grown into a leading medical facility serving thousands of patients annually, while maintaining our commitment to personalized, high-quality care.
              </p>
              <p className="text-gray-600 text-lg">
                Our journey has been guided by core values of integrity, excellence, and compassion - principles that continue to shape every aspect of our practice.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <FaUserMd className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">50+ Specialists</h3>
                <p className="text-gray-600">Board-certified physicians across specialties</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <FaClinicMedical className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">3 Locations</h3>
                <p className="text-gray-600">Serving communities across the region</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <FaAward className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">15 Awards</h3>
                <p className="text-gray-600">Recognized for excellence in care</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <FaHeartbeat className="text-blue-600 text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2">10K+ Patients</h3>
                <p className="text-gray-600">Trust us with their healthcare needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white text-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facility</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={facilityImage} 
                alt="Medical facility" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">State-of-the-Art Medical Center</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Modern examination rooms equipped with latest technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">On-site diagnostic imaging center</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Comfortable patient recovery areas</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Fully accredited surgical suites</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Child-friendly pediatric wing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Exceptional Care?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule your appointment today and join thousands of satisfied patients who trust Notion Medical.
          </p>
          <Link to={'/contact'}>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300">
            Contact us
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;