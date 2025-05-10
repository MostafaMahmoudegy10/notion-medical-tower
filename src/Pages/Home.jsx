import Service from "../components/Service";
import cover from "../assets/Logo/cover-1.jpg";
import { FaClinicMedical, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={cover}
          alt="Medical facility background"
          className="absolute h-full w-full object-cover object-center"
        />
        
        <div className="inset-0 bg-black opacity-30 absolute"></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center mx-auto p-4 text-center text-white font-bold">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Notion Medical Tower
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
            Your premier destination for comprehensive healthcare services with cutting-edge technology and compassionate care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/clinics" 
              className="px-8 py-3 bg-white text-blue-900 hover:bg-blue-100 rounded-lg font-bold flex items-center justify-center gap-2 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <FaClinicMedical /> Our Clinics
            </Link>
            <a
              href="https://wa.me/01151133402" 
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-green-500 hover:border-green-500 hover:text-white rounded-lg font-bold flex items-center justify-center gap-2 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> 01151133402
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-white">
        <Service />
      </div>
    </div>
  );
};

export default Home;