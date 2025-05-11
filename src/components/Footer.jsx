import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Notion Medical</h3>
            <p className="text-gray-400">
              Providing exceptional healthcare services with state-of-the-art facilities and compassionate care.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/share/162ixp7tny/?mibextid=wwXIfr" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/notiontower?igsh=dG1lY2h3Mm9ueHA0" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Doctors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Appointments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>123 Medical District, Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+20123456789" className="hover:text-white transition-colors">+20 123 456 789</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:info@notionmedical.com" className="hover:text-white transition-colors">info@notionmedical.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Notion Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;